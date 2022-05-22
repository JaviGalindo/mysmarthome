const axios = require("axios");
const { api, port } = require("../config/config").APPServer;
const saveUserNotification = async ({ notificationId, userId, deviceId, title, imagePath, type }) => {
	const date = new Date();
	return axios.post(`${api}:${port}/userNotifications`, {
		title,
		type,
		picture: imagePath.replace("./public/", ""),
		notificationId,
		userId,
		deviceId,
		date: date.toISOString()
	});
};


module.exports = saveUserNotification;