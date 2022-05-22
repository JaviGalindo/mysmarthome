/* eslint-disable no-undef */
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	"serverPort": process.env.CAMERA_API_PORT,
	"VAPID": {
		"publicVAPIDKey": process.env.PUBLIC_VAPID_KEY,
		"privateVAPIDKey": process.env.PRIVATE_VAPID_KEY,
		"webPushContact": process.env.WEB_PUSH_CONTACT
	},
	"email": {
		"APIKey":process.env.SENDGRID_API_KEY,
		"from":process.env.from,
	},
	"cameraServer": {
		"api": process.env.CAMERA_API,
		"port": process.env.CAMERA_API_PORT
	},
	"APPServer": {
		"api": process.env.APP_API,
		"port": process.env.APP_PORT
	}
};