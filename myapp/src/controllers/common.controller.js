const commonService = require("../services/common.service");
const {getResourceNameFromPath} = require("../utils");

const getAll = async (req, res) => {
	const resource = getResourceNameFromPath(req.baseUrl);

	const devices = await commonService.getAll(resource);
	return res.json(devices);
};

const getById = async (req, res) => {
	const resource = getResourceNameFromPath(req.baseUrl);
	const devices = await commonService.getResourceById(resource, req.params.id);
	return res.json(devices);
};

const insertResource = async (req, res) => {
	const resource = getResourceNameFromPath(req.baseUrl);
	await commonService.insertResource(resource, req.body);

	return res.status(200).send("ok");
};

const updateResource = async (req, res) => {
	const resource = getResourceNameFromPath(req.baseUrl);
	await commonService.updateResource(resource, req.body, req.params.id);

	return res.status(200).send("ok");
};

const deleteResource = async (req, res) => {
	const resource = getResourceNameFromPath(req.baseUrl);
	await commonService.deleteResource(resource, req.params.id);

	return res.status(200).send("ok");
};
module.exports = {
	getById,
	getAll,
	insertResource,
	updateResource,
	deleteResource
};
