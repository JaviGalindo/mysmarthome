const devicesService = require("../services/devices.service");
const getDevices = async (req, res) => {
	const devices = await devicesService.getAllDevices();
	return res.json(devices);
};

const getDeviceById = async (req, res) => {
	const devices = await devicesService.getDeviceById(req.params.id);
	return res.json(devices);
};


module.exports = {
	getDeviceById,
	getDevices
};
