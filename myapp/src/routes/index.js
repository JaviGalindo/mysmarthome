const devices = require("./devices.routes");
const rooms = require("./rooms.routes");
const routines = require("./routines.routes");
const providers = require("./providers.routes");
const notifications = require("./notifications.routes");
const userNotifications = require("./userNotifications.routes");
const users = require("./users.routes");


module.exports = {
	devices,
	rooms,
	routines,
	providers,
	notifications,
	userNotifications,
	users
};
