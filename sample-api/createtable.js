var mysql = require('mysql');
var connection = require('./connection')

console.log(connection);

connection.con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  connection.con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
