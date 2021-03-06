const { detect } = require("./faceService");
const saveUserNotification = require("./saveUserNotification");
const sendEmail = require("./sendEmail");
const sendPushNotification = require("./sendPushNotification");


const executeNotificationProcess = async (notificationId, userId, deviceId, pictureTaken, detection, timeRange, type, email, imagePath="../public/still-image.jpg") => {
	try{
		if (pictureTaken) {
			let title = "Motion Detected";
			let body = "Your security camera has detected movement";
			let sendNotification = false;
			if(detection === "All" || detection === "Humans") {
				const humanDetected = await detect(imagePath);
				if(humanDetected.length) {
					sendNotification= true;
					console.log("Human detected");
					title = "Human Detected";
				}
			}
			if(sendNotification) {
				if((type === "All" || type === "Push")) {
					console.log("Sending Push Notification!");
					await sendPushNotification(title, body, imagePath);	
				}
			
				if((type === "All" || type === "Email")) {
					console.log("Sending Email");
					await sendEmail({title, body, imagePath, "emailTo": email});	
				}
	
				await saveUserNotification({notificationId, userId, deviceId, title, imagePath, type});
				return;
			} 
			console.info("No notification has been sent because not matching user config");
			
		}
	}catch(error) {
		console.error("Error happened managing notification", error);
		throw error;
	}
};


module.exports = executeNotificationProcess;