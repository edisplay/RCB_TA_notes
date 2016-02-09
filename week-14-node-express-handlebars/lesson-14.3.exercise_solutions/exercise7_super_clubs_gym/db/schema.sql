### Schema
/*

CREATE DATABASE gyms_db;
USE gyms_db;

CREATE TABLE super_clubs
(
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
active BOOL,
visit_count INT,
PRIMARY KEY (id)
);

SHOW COLUMNS from super_clubs;

INSERT INTO super_clubs (name, active, visit_count) VALUES ('Lenny',1,6) ;
INSERT INTO super_clubs (name, active, visit_count) VALUES ('Wendy',1,17) ;

SELECT * FROM super_clubs;

--DROP DATABASE gyms_db;

*/