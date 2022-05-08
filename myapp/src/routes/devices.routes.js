const router = require("express").Router();
const {getDeviceById, getDevices} = require("../controllers/devices.controller");

  
router.get("/", getDevices);

router.get("/:id", getDeviceById);
  
router.post("/", (req, res) => {
	return res.send("Received a POST HTTP method");
});
  
router.put("/", (req, res) => {
	return res.send("Received a PUT HTTP method");
});
  
router.delete("/", (req, res) => {
	return res.send("Received a DELETE HTTP method");
});

module.exports = router;