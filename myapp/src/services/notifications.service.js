const {
	getByField
} = require("../databases/mysql.operations");

const TABLE_NAME = "notifications";

async function getNotificationsByAuth(auth) {
	const results = await getByField(TABLE_NAME, auth, "subscriptionAuth");
	if(results && results.length === 1) {
		return results[0];
	}
	return undefined;
}

async function getNotificationsByDeviceId(deviceId) {
	const results = await getByField(TABLE_NAME, deviceId, "deviceId");
	if(results && results.length === 1) {
		return results[0];
	}
	return undefined;
}

module.exports = {
	getNotificationsByAuth,
	getNotificationsByDeviceId
};