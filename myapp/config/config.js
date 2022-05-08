/* eslint-disable no-undef */
module.exports = {
	"APPPort": process.env.SERVER_PORT,
	"mysql" : {
		"host": process.env.MYSQLDB_HOST,
		"user": process.env.MYSQLDB_USER,
		"password": process.env.MYSQLDB_ROOT_PASSWORD,
		"database": process.env.MYSQLDB_DATABASE,
		"port": process.env.MYSQLDB_LOCAL_PORT
	}
};
  