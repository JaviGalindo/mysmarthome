const {
	queryAllRecords,
	getRecordsById
} = require("../databases/mysql.operations");

const TABLE_NAME = "devices";

async function getAllDevices() {
	const devices =  await queryAllRecords(TABLE_NAME);
	return devices;
}

async function getDeviceById(id) {
	const device =  await getRecordsById(TABLE_NAME, id);
	return device;
}

module.exports = {
	getAllDevices,
	getDeviceById
};