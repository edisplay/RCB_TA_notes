App setup:

1.create App Dir
2.npm init
3.npm install mysql --save
4.mysql config
5.npm install prompt --save
5.create index.js
6.npm install --save animals
7.npm install sillyname --save


mySQL setup:
launch: MySQL 5.7 Command Line Client
enter password

CREATE DATABASE myTestDB;
USE myTestDB;

CREATE TABLE Tasks
(
ID int NOT NULL AUTO_INCREMENT,
Todo varchar(255) NOT NULL,
Done BOOL,
Date TIMESTAMP,
PRIMARY KEY (ID)
);

SHOW COLUMNS from Tasks;

INSERT INTO Tasks (Todo, Done) VALUES ('Dishes', False) ;

SELECT * FROM Tasks;

DROP DATABASE myTestDB;


CREATE TABLE department (id NOT NULL);
CREATE TABLE employee (id NOT NULL, dept_id NOT NULL, FOREIGN KEY (dept_id) REFERENCES department(id));

CREATE TABLE student(
stud_id int AUTO_INCREMENT,
name varchar(30) NOT NULL,
age int NOT NULL,
PRIMARY KEY (stud_id)
);

CREATE TABLE enrol(
rol_no int NOT NULL AUOT_INCREMENT,
stud_id int NOT NULL,
PRIMARY KEY(rol_no),
FOREIGN KEY(stud_id) REFERENCES student(stud_id)
);