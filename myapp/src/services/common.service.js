const {
	queryAllRecords,
	getRecordsById
} = require("../databases/mysql.operations");



async function getAll(resource) {
	const devices =  await queryAllRecords(resource);
	return devices;
}

async function getResourceById(resource, id) {
	const device =  await getRecordsById(resource, id);
	return device;
}

module.exports = {
	getAll,
	getResourceById
};