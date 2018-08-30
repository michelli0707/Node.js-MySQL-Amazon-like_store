CREATE DATABASE bamazon_db;
USE bamazon_db;

-- Create a table called 'products' with store inventory --
CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Gamsol Oil', 'Arts and Crafts', 20.00, 50),
		('POSH Glass Palette', 'Arts and Crafts', 30.00, 60),
		('US Art Wood Desk', 'Arts and Crafts', 17.96, 30),
		('Ols Holland Sable Brush', 'Arts and Crafts', 10.99, 40),
		('Gamblin Oil Colors Set', 'Arts and Crafts', 60.05, 80),
		('Seventh Generation Baby Wipes', 'Baby Products', 7.00, 100),
		('Haven Bath Pillow', 'Bathroom', 28.95, 25),
		('WeeSprouts Reusable Pouch', 'Baby Products', 16.99, 200),
		('LEGO Family House', 'Kids Toys', 31.99, 30),
		('USA Soccer Jersey', 'Toddler Clothes', 39.99, 10),
		('Champion toddler trainer', 'Toddler Clothes', 19.99, 20),
		('Royal comfort mat', 'Kitchen', 31.97, 35);