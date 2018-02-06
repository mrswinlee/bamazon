DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (

  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(20) NOT NULL,
  price DECIMAL(10,2) NOT NULL, 
  stock_quantity INT(100) NOT NULL,
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("baby bandanas", "Baby Products", 19.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
        ("DW watch", "Jewelry", 200.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
        ("Dr. Seuss Collection", "Books", 9.95, 20);
 INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES        
        ("Google Home", "Electronics", 90.95, 5);
 INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  
        ("Legos", "Toys & Kids", 25.95, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES        
        ("Basketball", "Sports & Outdoors", 19.95, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  
        ("Dried Mangoes", "Food & Grocery", 5.95, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  
        ("Cars", "Toys & Kids", 6.75, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  
        ("Baking mats", "Home", 19.95, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  
        ("Matcha Green Tea Powder", "Food & Grocery", 30.00, 10);


SELECT * FROM products;


