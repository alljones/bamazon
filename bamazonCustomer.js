// = = = = = = = = = = = = = = = = =
// Dependencies
// = = = = = = = = = = = = = = = = =
const mysql = require("mysql");
const inquirer = require("inquirer");
const Table = require("easy-table");

// = = = = = = = = = = = = = = = = =
// DB Connection
// = = = = = = = = = = = = = = = = =

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "", //Enter PW
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("~ ~ ~ ~ ~ WELCOME TO BAMAZON  ~ ~ ~ ~ ~ ");
  displayItems();
});

function displayItems() {
  // Display Table of Products in CLI
  var query = "SELECT * FROM products";
  connection.query(query, function(err, res) {
    let data = res;
    let t = new Table();

    data.forEach(function(product) {
      t.cell("Product Id", product.item_id);
      t.cell("Product Name", product.product_name);
      t.cell("Price, USD", product.price, Table.number(2));
      t.newRow();
    });
    console.log(t.toString());
  });
}

askId();
// Ask Customer Product ID
function askId() {
  inquirer
    .prompt({
      name: "productId",
      type: "input",
      message: "What is the ID of the product you'd like to buy?"
    })
    .then(function(answer) {
      var query = "SELECT * FROM products WHERE ?";
      connection.query(query, { item_id: answer.item_id }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(
            "Item ID: " +
              res[0].item_id +
              " || Product Name: " +
              res[0].product_name +
              " || Price: " +
              res[0].price
          );
        }
      });
    });
}
