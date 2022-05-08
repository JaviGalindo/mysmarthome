const { APPPort } = require("../config/config");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const mysqlConnection = require("./databases/mysql");

const {devices, rooms } = require("./routes");
const app = express();
app.use(
	"/api-docs",
	swaggerUi.serve, 
	swaggerUi.setup(swaggerDocument)
);

app.use("/devices", devices);
app.use("/rooms", rooms);

app.listen(APPPort, async() => {
	console.log(`Example app listening on port ${APPPort}!`);
	await mysqlConnection();
}
);