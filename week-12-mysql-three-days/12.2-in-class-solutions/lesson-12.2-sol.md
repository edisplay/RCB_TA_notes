12.2.1 exercise 1: (simple MySQL db)
```
CREATE DATABASE movies;
USE movies;

CREATE TABLE samuel_l_jackson_movies(
id int AUTO_INCREMENT,
movie varchar(30) NOT NULL,
chara varchar(30) NOT NULL,
year int NOT NULL,
PRIMARY KEY(id)
); 

INSERT INTO samuel_l_jackson_movies (movie, chara, year)
VALUES ('Jackie Brown','Ordell Robbie', 1997);

INSERT INTO samuel_l_jackson_movies (movie, chara, year)
VALUES ('Avengers: Age of Ultron','Nick Fury', 1015);

UPDATE samuel_l_jackson_movies
SET year=2015
WHERE movie='Avengers: Age of Ultron';


DELETE FROM samuel_l_jackson_movies 
WHERE id = 1;

SELECT COUNT(*) FROM samuel_l_jackson_movies;
```

12.2.2 demo 1: (Country and cities)
```
CREATE DATABASE hispsters;
USE hispsters;

CREATE TABLE countries(
id int AUTO_INCREMENT,
country varchar(30) NOT NULL,
PRIMARY KEY(id)
); 

CREATE TABLE cities(
id int AUTO_INCREMENT,
city varchar(30) NOT NULL,
hipsters int NOT NULL,
country_id int NOT NULL,
FOREIGN KEY(id) REFERENCES countries(id),
PRIMARY KEY(id)
); 

INSERT INTO countries (country) VALUES ('U.S.A');
INSERT INTO countries (country) VALUES ('U.K');
INSERT INTO countries (country) VALUES ('FRANCE');

INSERT INTO cities (city, hipsters, country_id) VALUES ('paris', 85000 ,3);
INSERT INTO cities (city, hipsters, country_id) VALUES ('san francisco', 290000 ,1);
INSERT INTO cities (city, hipsters, country_id) VALUES ('new york city', 370000 ,1);

SELECT * 
FROM countries 
LEFT JOIN cities 
ON countries.id = cities.country_id 
WHERE countries.id = 1
ORDER BY cities.hipsters;
```

12.2.3 exercise 3: (bar and drinks)
4. bars table must have at least 3 different bars (3 rows with different names)

5. Create a 4th bar with the name of 'Moo Milk Bar' 
6. Inside fun_time, create a drinks table with id, bar_id, drink_name, drink_price
7. Create 3 different drinks in the drinks table (3 rows with different drink names, prices and bar_ids)
8. Create another drink in the drinks table with a bar_id of the 'Moo Milk Bar'
9. Create 1 drink that has no bar_id (because it's not available in any of the bars in your bars table)
10. Use the following SQL JOINS: LEFT, RIGHT, INNER, FULL
```
CREATE DATABASE fun_time;
USE fun_time;

CREATE TABLE bars(
id int AUTO_INCREMENT,
bar_name varchar(30) NOT NULL,
PRIMARY KEY(id)
); 

INSERT INTO bars (bar_name) VALUES ('Dive Bar');
INSERT INTO bars (bar_name) VALUES ('City Bar');
INSERT INTO bars (bar_name) VALUES ('NYC Bar');
INSERT INTO bars (bar_name) VALUES ('Moo Milk Bar');





```



