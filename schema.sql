DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;
USE bamazon;
CREATE TABLE products
(
  item_id INT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(5,2) NULL,
  stock_qty INT NULL,
  PRIMARY KEY (item_id)
);
SELECT *
FROM products;