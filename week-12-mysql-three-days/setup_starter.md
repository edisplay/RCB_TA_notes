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
CREATE DATABASE myTestDB CHARACTER SET utf8 COLLATE utf8_general_ci;

USE myTestDB;

CREATE TABLE careTaker (
careTaker_id int AUTO_INCREMENT,
city varchar(30) NOT NULL,
name varchar(30) NOT NULL,
PRIMARY KEY (careTaker_id)
);

CREATE TABLE animal(
animal_id int AUTO_INCREMENT,
careTaker_id int NOT NULL,
name varchar(30) NOT NULL,
type varchar(30) NOT NULL,
age int NOT NULL,
PRIMARY KEY(animal_id),
FOREIGN KEY(careTaker_id) REFERENCES careTaker(careTaker_id),
INDEX (type)
); 


INSERT INTO careTaker (city, name) VALUES ('NY', 'John') ;
INSERT INTO animal (careTaker_id, name, type, age) VALUES (1, 'Bobo', 'Bear', 3) ;


SELECT * FROM careTaker;
SELECT * FROM animal;

SELECT name FROM animal WHERE type = "Bear";
SELECT COUNT(*) FROM animal;
SELECT COUNT(*) FROM animal WHERE type = 'snake';

DROP DATABASE myTestDB;



C:/xampp/mysql/bin/mysqldump -u root -p myTestDB > C:/zhenDB.sql

open zhenDB.sql file in text editor save as UTF-8 file
C:/xampp/mysql/bin/mysql –u root -p myTestDB < C:/zhenDB.sql

zooDB
<!-- 
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

CREATE TABLE department (id NOT NULL);
CREATE TABLE employee (id NOT NULL, dept_id NOT NULL, FOREIGN KEY (dept_id) REFERENCES department(id));
CREATE INDEX name_index ON Employee (Employee_Name);

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

-->

<!-- 
 -->