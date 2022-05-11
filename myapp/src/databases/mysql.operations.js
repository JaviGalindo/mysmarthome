const mysqlConnection = require("./mysql");
const {returnInsertSintaxFromObj, returnUpdateSintaxFromObj} = require("../utils");

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

async function insert(table, data) {
	const connection = await mysqlConnection();

	const insertQ = returnInsertSintaxFromObj(table, data);
	const [results] =  await connection.execute(insertQ, [...Object.values(data)]);
	if(results.affectedRows === 1 && results.insertId) {
		return results.insertId;
	}
	throw new Error(`Error inserting new ${table}`);
}

async function update(table, data, id) {
	const connection = await mysqlConnection();

	const updateQ = returnUpdateSintaxFromObj(table, data);
	const [results] =  await connection.execute(updateQ, [...Object.values(data), id]);
	if(results.changedRows === 1 && results.changedRows) {
		return true;
	}
	throw new Error(`Error updationg ${table} with Id: ${id}`);
}

async function remove(table, id) {
	const connection = await mysqlConnection();
	const [deleted] = await connection.execute(`DELETE FROM ${table} WHERE id = ?`, [id]);
	return deleted.affectedRows>0;
}

module.exports = {
	queryAllRecords,
	getRecordsById,
	insert,
	update,
	remove
};