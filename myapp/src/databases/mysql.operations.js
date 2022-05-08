const mysqlConnection = require("./mysql");

async function queryAllRecords(table, fields = "*") {
	const connection = await mysqlConnection();
	const [results] =  await connection.execute(`SELECT ${fields} FROM ${table}`);
	return results;
}

async function getRecordsById(table, id, fields = "*") {
	const connection = await mysqlConnection();
	const [results] =  await connection.execute(`SELECT ${fields} FROM ${table} WHERE id = ?`, [id]);
	return results;
}
module.exports = {
	queryAllRecords,
	getRecordsById
};