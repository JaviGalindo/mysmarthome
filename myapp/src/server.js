const { APPPort } = require("../config/config");
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const mysqlConnection = require("./databases/mysql");

const {devices, rooms, routines, providers, notifications, users } = require("./routes");
const app = express();
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Expose-Headers", "Content-Range");
	res.header("Access-Control-Allow-Methods", "*");
	next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
	"/api-docs",
	swaggerUi.serve, 
	swaggerUi.setup(swaggerDocument)
);

app.use("/devices", devices);
app.use("/rooms", rooms);
app.use("/routines", routines);
app.use("/providers", providers);
app.use("/notifications", notifications);
app.use("/users", users);


app.listen(APPPort, async() => {
	console.log(`Example app listening on port ${APPPort}!`);
	await mysqlConnection();
}
);

module.exports = app;