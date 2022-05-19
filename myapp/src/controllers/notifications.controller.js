const { getNotificationsByDeviceId, getNotificationsByAuth } = require("../services/notifications.service");
const { getResourceNameFromPath } = require("../utils");
const { findAndReturnResource } = require("./common.controller");
const { updateResource } = require("../services/common.service");

const getByAuth = async (req, res) => {
	const auth = req.params.auth;
	const found = await getNotificationsByAuth(auth);

	if(found) {
		return res.status(200).json(found);
	}
	return res.status(404).send("Not found");
};

const getByDeviceId = async (req, res) => {
	const deviceId = req.params.deviceId;
	const found = await getNotificationsByDeviceId(deviceId);

	if(found) {
		return res.status(200).json(found);
	}
	return res.status(404).send("Not found");
};

const updateNotificationResource = async (req,res) => {
	const resource = getResourceNameFromPath(req.baseUrl);
	const notificationsObj = {...req.body, config: JSON.stringify(req.body.config)};
	await updateResource(resource, notificationsObj, req.params.id);
	const found = await findAndReturnResource(resource, req.params.id);
	
	if(found) {
		return res.json(found);
	}
	return res.status(500).send(`Error updating ${resource} with id: ${found.id}`);
};

module.exports = {
	getByAuth,
	getByDeviceId,
	updateNotificationResource
};