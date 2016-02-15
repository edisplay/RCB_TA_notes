### Schema
/*

CREATE DATABASE quick_notes_db;
USE quick_notes_db;

CREATE TABLE quick_notes
(
id int NOT NULL AUTO_INCREMENT,
note varchar(255) NOT NULL,
date TIMESTAMP,
PRIMARY KEY (id)
);

SHOW COLUMNS from quick_notes;

INSERT INTO quick_notes (note) VALUES ('Today I saw a dog, it was a good day.');

SELECT * FROM quick_notes;

DROP DATABASE quick_notes_db;

*/