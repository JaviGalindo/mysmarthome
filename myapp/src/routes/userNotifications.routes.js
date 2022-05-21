const router = require("express").Router();
const {getAll, insertResource} = require("../controllers/common.controller");

  
router.get("/", getAll);
router.post("/", insertResource);


module.exports = router;