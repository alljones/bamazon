// = = = = = = = = = = = = = = = = =
// Dependencies
// = = = = = = = = = = = = = = = = =
const mysql = require("mysql");
const inquirer = require("inquirer");

// = = = = = = = = = = = = = = = = =
// DB Connection
// = = = = = = = = = = = = = = = = =

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Babetoba0916!",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  displayItems();
});
