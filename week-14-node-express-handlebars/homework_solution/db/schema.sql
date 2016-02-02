### Schema
/*
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOL,
date TIMESTAMP,
PRIMARY KEY (id)
);

SHOW COLUMNS from burgers;

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese', False) ;

SELECT * FROM burgers;

DROP DATABASE burgers_db;

*/