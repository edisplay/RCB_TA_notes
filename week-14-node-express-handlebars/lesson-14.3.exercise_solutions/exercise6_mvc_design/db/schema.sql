/*
Here is where you create the schema for your app's database.
*/

### Schema
/*

CREATE DATABASE demo_db;
USE demo_db;

CREATE TABLE things_table
(
id int NOT NULL AUTO_INCREMENT,
thing_name varchar(255) NOT NULL,
thing_state BOOL,
PRIMARY KEY (id)
);

SHOW COLUMNS from things_table;

INSERT INTO things_table (thing_name, thing_state) VALUES ('Pencil',1) ;
INSERT INTO things_table (thing_name, thing_state) VALUES ('Chair',1) ;
INSERT INTO things_table (thing_name, thing_state) VALUES ('Apple',0) ;

SELECT * FROM things_table;

--DROP DATABASE demo_db;

*/