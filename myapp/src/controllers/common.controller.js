const commonService = require("../services/common.service");
const {getResourceNameFromPath} = require("../utils");

const findAndReturnResource = async (resource, id) =>{
	const resources = await commonService.getResourceById(resource, id);
	if(resources.length) {
		return resources[0];
	}
	return undefined;
};

const getAll = async (req, res) => {
	const resource = getResourceNameFromPath(req.baseUrl);

	const resources = await commonService.getAll(resource);
	res.set("Content-Range", `${resource} 0-24/${resources.length}`);
	return res.json(resources);
};

const getById = async (req, res) => {
	const resource = getResourceNameFromPath(req.baseUrl);
	const id = req.params.id;
	const found = await findAndReturnResource(resource, id);

	if(found) {
		return res.json(found);
	}
	return res.status(404).send("Not found");
};

const insertResource = async (req, res) => {
	const resource = getResourceNameFromPath(req.baseUrl);
	const newResourceId =await commonService.insertResource(resource, req.body);

	const found = await findAndReturnResource(resource, newResourceId);

	if(found) {
		return res.json(found);
	}
	return res.status(500).send(`Error creating ${resource} with id: ${found.id}`);
};

const updateResource = async (req, res) => {
	const resource = getResourceNameFromPath(req.baseUrl);
	await commonService.updateResource(resource, req.body, req.params.id);
	const found = await findAndReturnResource(resource, req.params.id);

	if(found) {
		return res.json(found);
	}
	return res.status(500).send(`Error updating ${resource} with id: ${found.id}`);
};

const deleteResource = async (req, res) => {
	const resource = getResourceNameFromPath(req.baseUrl);
	const id = req.params.id;
	const isDeleted = await commonService.deleteResource(resource, id);
	if(isDeleted) {
		return res.status(200).json({"id": id});
	}
	return res.status(500).send(`Error deleting ${resource} with id: ${id}`);
};
module.exports = {
	getById,
	getAll,
	insertResource,
	updateResource,
	deleteResource
};
