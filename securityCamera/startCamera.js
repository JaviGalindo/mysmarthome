// just used for raspberry pi
const raspi = require("raspi-io").RaspiIO;
const five = require("johnny-five");

const takePicture = require("./utils/takePicture");
const executeNotificationProcess = require("./utils/executeNotificationProcess");
const getUserNotificationData = require("./utils/getUserNotificationData");

const board = new five.Board({io: new raspi()});

board.on("ready", async function() {
	const motion = new five.Motion("P1-7");
	console.info("Sensor calibrated and ready to detect");
	motion.on("motionstart", async function() {
		console.log("Intruder alert", new Date());
		const {type, active, detection, timeRange, email, deviceId, notificationId, userId} = await getUserNotificationData();
		if(active) {
			const pictureTaken = await takePicture();
			console.log("picture taken", pictureTaken);
			await executeNotificationProcess(notificationId, userId, deviceId, pictureTaken, detection, timeRange, type, email);
		}
	});
	motion.on("motionend", function() {
		console.log("motionend", new Date());
	});
});