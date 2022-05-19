const router = require("express").Router();
const {getAll, getById, deleteResource, insertResource} = require("../controllers/common.controller");
const { getByAuth, getByDeviceId, updateNotificationResource } = require("../controllers/notifications.controller");


  
router.get("/", getAll);

router.get("/:id", getById);

router.get("/auth/:auth", getByAuth);
router.get("/devices/:deviceId", getByDeviceId);

router.post("/", insertResource);
  
router.put("/:id", updateNotificationResource);
  
router.delete("/:id", deleteResource);

module.exports = router;