/*
	no need to run this since you're importing the database
*/

CREATE TABLE caretakers (
id int AUTO_INCREMENT,
name varchar(30) NOT NULL,
city varchar(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE animals(
id int AUTO_INCREMENT,
caretaker_id int NOT NULL,
name varchar(30) NOT NULL,
type varchar(30) NOT NULL,
age int NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(caretaker_id) REFERENCES caretakers(id),
INDEX (type)
); 