### Schema
/*

CREATE DATABASE pet_shops_db;
USE pet_shops_db;

CREATE TABLE dogs_shop
(
id int NOT NULL AUTO_INCREMENT,
breed varchar(255) NOT NULL,
price int NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE catss_shop
(
id int NOT NULL AUTO_INCREMENT,
breed varchar(255) NOT NULL,
price int NOT NULL,
PRIMARY KEY (id)
);

SHOW COLUMNS from dogs_shop;
SHOW COLUMNS from catss_shop;

INSERT INTO dogs_shop (breed, price) VALUES ('Wolf', 10);
INSERT INTO catss_shop (breed, price) VALUES ('Panther', 8);

SELECT * FROM feel_states;

DROP DATABASE pet_shops_db;

*/