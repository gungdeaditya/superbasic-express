var mysql = require('mysql');

function con () {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "masukaja",
    database: "mydb"
  });
}

module.exports = con
