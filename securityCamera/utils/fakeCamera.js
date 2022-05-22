
const executeNotificationProcess = require("./executeNotificationProcess");
const getUserNotificationData = require("./getUserNotificationData");
const arrImages = [
	"./public/humans.jpg",
	"./public/gardenImage.jpg"
];
const imagePath = arrImages[Math.floor((Math.random() * arrImages.length))];

const simulateMotion = async () => {
	try {
		console.log("Simulate Motion - Motion detected -->", new Date());
		const {type, active, detection, timeRange, email, deviceId, notificationId, userId} = await getUserNotificationData();
		if(active){	
			const pictureTaken = true;
			console.log("Simulate Motion - picture taken", pictureTaken);
			console.log("Simulate Motion - picture taken of", imagePath.replace("./public/", ""));
			await executeNotificationProcess(notificationId, userId, deviceId, pictureTaken, detection, timeRange, type, email, imagePath);
			return;
		}
		console.error("Simulate Motion - No actived notifications");
	} catch (error) {
		console.error(error);		
	}
};

module.exports = {
	simulateMotion
};