const webpush = require("web-push");
const { VAPID, cameraServer } = require("../config/config");
const { getSubscription } = require("./subscriptionData");
const {api, port} = cameraServer;

webpush.setVapidDetails(VAPID.webPushContact, VAPID.publicVAPIDKey, VAPID.privateVAPIDKey);

const sendPushNotification = async (title, body, imagePath) => {
	try {
		const subscription = getSubscription();
		if (subscription) {
			const payload = JSON.stringify({
				title,
				body,
				image: `${api}:${port}/${imagePath.replace("./public", "")}`,
				icon: `${api}:${port}/${imagePath.replace("./public", "")}`
			})
			console.log("Sending push notification with payload", payload)
			const result = await webpush.sendNotification(subscription, payload);
			console.log(result)
		};
		return true;
	} catch (error) {
		console.log(error)
	}
}

module.exports = sendPushNotification;