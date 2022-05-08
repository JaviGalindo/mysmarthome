const commonService = require("../services/common.service");
const {getResourceNameFromPath} = require("../utils");

const getAll = async (req, res) => {
	const resource = getResourceNameFromPath(req.baseUrl);

	const devices = await commonService.getAllDevices(resource);
	return res.json(devices);
};

const getById = async (req, res) => {
	const resource = getResourceNameFromPath(req.baseUrl);
	const devices = await commonService.getResourceById(resource, req.params.id);
	return res.json(devices);
};


module.exports = {
	getById,
	getAll
};
