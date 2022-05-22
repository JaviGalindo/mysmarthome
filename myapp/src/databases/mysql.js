const mysql = require("mysql2/promise");
const {
	mysql: mysqlOptions
} = require("../../config/config");

let connection;

async function main() {
    
	if(!connection) {
		console.info("Creating new connection");
		connection = await mysql.createConnection({...mysqlOptions});
	}
	
	return connection;
}

module.exports = main;