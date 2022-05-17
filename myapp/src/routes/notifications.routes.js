const router = require("express").Router();
const {getAll, getById, deleteResource, updateResource, insertResource} = require("../controllers/common.controller");
const {getByAuth} = require("../controllers/common.controller");

  
router.get("/", getAll);

router.get("/:id", getById);

router.get("/:auth", getByAuth);

router.post("/", insertResource);
  
router.put("/:id", updateResource);
  
router.delete("/:id", deleteResource);

module.exports = router;