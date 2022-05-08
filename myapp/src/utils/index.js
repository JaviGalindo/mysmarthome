const getResourceNameFromPath = (path) => path.replace("/", "");

const returnInsertSintaxFromObj = (table, JSONObject) => {
	let values = "";
	const columns = Object.keys(JSONObject);
	columns.forEach(() => values += "?,");
	values = `(${values.slice(0,-1)})`; //remove last comma
	const insertTxt = `INSERT INTO ${table} (${columns.join(",")}) VALUES ${values}`;
	return insertTxt;
};

const returnUpdateSintaxFromObj = (table, JSONObject) => {
	return `UPDATE ${table} SET ${Object.keys(JSONObject).join("=?,")}=? WHERE id=?`;
};

module.exports = {
	getResourceNameFromPath,
	returnInsertSintaxFromObj,
	returnUpdateSintaxFromObj
};