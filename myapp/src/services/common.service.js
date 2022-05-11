const {
	queryAllRecords,
	getRecordsById,
	insert,
	update,
	remove
} = require("../databases/mysql.operations");



async function getAll(resource) {
	const devices =  await queryAllRecords(resource);
	return devices;
}

async function getResourceById(resource, id) {
	const device =  await getRecordsById(resource, id);
	return device;
}

async function insertResource(resource, data) {	
	return insert(resource, data);
}

async function updateResource(resource, data, id) {
	await update(resource, data, id);
}

async function deleteResource(resource, id) {
	return remove(resource, id);
}

module.exports = {
	getAll,
	getResourceById,
	insertResource,
	updateResource,
	deleteResource
};