### Schema
/*

CREATE DATABASE pets_shop_db;
USE pets_shop_db;

CREATE TABLE pet_buyers
(
id int NOT NULL AUTO_INCREMENT,
buyer_name varchar(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE pets
(
id int NOT NULL AUTO_INCREMENT,
animal_breed varchar(255) NOT NULL,
animal_name varchar(255) NOT NULL,
price int NOT NULL,
buyer_id int NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (buyer_id) REFERENCES pet_buyers(id)
);

INSERT INTO pet_buyers (buyer_name) VALUES ('Kevon');
INSERT INTO pet_buyers (buyer_name) VALUES ('Jane');

INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('Wolf', 'Red13', 100, 1);
INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('Bear', 'Grizze', 200, 1);

INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('Giraffe', 'Raffy', 400, 2);

SELECT * FROM pet_buyers;
SELECT * FROM pets;

-- DROP DATABASE pets_shop_db;

*/
