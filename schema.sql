DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;
USE bamazon;
CREATE TABLE products
(
  item_id INT NOT NULL
  AUTO_INCREMENT,
  product_name VARCHAR
  (100) NULL,
  department_name VARCHAR
  (100) NULL,
  price DECIMAL
  (5,2) NULL,
  stock_qty INT NULL,
  PRIMARY KEY
  (item_id)
);
  INSERT INTO products
    (product_name, department_name, price, stock_qty)
  VALUES
    ('Atari Graphic Tee', 'Men', 12.99, 25),
    ('Floral Print Short Sleeve Dress', 'Women', 24.99, 37),
    ('LEGO Marvel Iron Man', 'Toy', 9.99, 5),
    ('DJI Mavic Pro Dron', 'Electronics', 999.99, 3),
    ('Elite Cushion Crew - Socks', 'Men', 16, 55),
    ('Huffy Cruiser Bike', 'Outdoors', 129.75, 20),
    ('Strappy Maxi Dress', 'Women', 29.99, 14),
    ('Bob Marley Short Sleeve Tee', 'Men', 12.99, 8),
    ('Cassandra Modern Fabric Queen-Bed', 'Home', 193.59, 3),
    ('Holmes Visipure Tower Air Purifier', 'Home', 69.99, 27);
  
  SELECT *
  FROM products;