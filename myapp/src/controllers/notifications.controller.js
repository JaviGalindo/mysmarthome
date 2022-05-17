const { getNotificationsByAuth } = require("../services/notifications.service");

const getByAuth = async (req, res) => {
	const auth = req.params.auth;
	const found = await getNotificationsByAuth(auth);

	if(found) {
		return res.status(200).json(found);
	}
	return res.status(404).send("Not found");
};

module.exports = {
	getByAuth
};