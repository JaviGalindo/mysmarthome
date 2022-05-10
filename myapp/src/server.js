const { APPPort } = require("../config/config");
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const mysqlConnection = require("./databases/mysql");

const {devices, rooms, routines, providers } = require("./routes");
const app = express();

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


app.listen(APPPort, async() => {
	console.log(`Example app listening on port ${APPPort}!`);
	await mysqlConnection();
}
);

module.exports = app;