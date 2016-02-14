### Schema
/*

CREATE DATABASE current_mood_db;
USE current_mood_db;

CREATE TABLE current_mood
(
id int NOT NULL AUTO_INCREMENT,
mood varchar(255) NOT NULL,
PRIMARY KEY (id)
);

SHOW COLUMNS from current_mood;

INSERT INTO current_mood (mood) VALUES ('Happy') ;

SELECT * FROM current_mood;

DROP DATABASE current_mood_db;

*/