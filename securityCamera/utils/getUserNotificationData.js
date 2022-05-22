const { getSubscription } = require("./subscriptionData");
const axios = require("axios");
const {api, port} = require("../config/config").APPServer;

const getNotificationConfigBySubscription = async (auth) => axios.get(`${api}:${port}/notifications/auth/${auth}`);
const getUserData = async (id) => axios.get(`${api}:${port}/users/${id}`);

async function getUserNotificationData() {
	try {
		const subscription = getSubscription();
		if (!subscription) {
			console.warn("No subscription provided");
			throw Error("No subscription provided");
		}

		const response = await getNotificationConfigBySubscription(subscription.keys.auth);
		if(response.status === 200 && response.data && response.data.config) {
			const userData = await getUserData(response.data.userId);
			if(userData.status === 200 && userData.data){
				const ret = {
					...response.data.config,
					"email": userData.data.email,
					"userId": userData.data.id,
					"notificationId": response.data.id,
					"deviceId": response.data.deviceId
				};
				
				return ret;
			}
		}
	} catch (error) {
		console.error("Error getting notification config for user", error);
		return undefined;
	}
}

module.exports = getUserNotificationData;