// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "i5x1cqhq5xbqtv00.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "wwb9wjgdix1k96hq",
  password: "yntgnligql95s62e",
  database: "o0nanr8dkyy03siw"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;