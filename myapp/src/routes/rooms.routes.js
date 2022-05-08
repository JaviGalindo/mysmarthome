const router = require("express").Router();
const {getAll, getById} = require("../controllers/common.controller");

  
router.get("/", getAll);

router.get("/:id", getById);
  
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