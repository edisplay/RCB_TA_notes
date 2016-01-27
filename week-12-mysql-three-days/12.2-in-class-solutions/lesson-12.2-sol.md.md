### 3. Student do (20 minutes)
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
VALUES ('Shaft','John Shaft', 2000);

INSERT INTO samuel_l_jackson_movies (movie, chara, year)
VALUES ('Snakes on a Plane','Neville Flynn', 2006);

INSERT INTO samuel_l_jackson_movies (movie, chara, year)
VALUES ('Star Wars: The Clone Wars','Mace Windu', 2008);

INSERT INTO samuel_l_jackson_movies (movie, chara, year)
VALUES ('Captain America: The First Avenger','Nick Fury', 1997);

INSERT INTO samuel_l_jackson_movies (movie, chara, year)
VALUES ('Fury','Foley', 2012);

INSERT INTO samuel_l_jackson_movies (movie, chara, year)
VALUES ('The Avengers','Foley', 2012);

INSERT INTO samuel_l_jackson_movies (movie, chara, year)
VALUES ('Django Unchained','Foley', 2012);

INSERT INTO samuel_l_jackson_movies (movie, chara, year)
VALUES ('Avengers: Age of Ultron','Nick Fury', 1015);

UPDATE samuel_l_jackson_movies
SET year=2015
WHERE movie='Avengers: Age of Ultron';

DELETE FROM samuel_l_jackson_movies 
WHERE id = 1;

SELECT COUNT(*) FROM samuel_l_jackson_movies;
```

### 5. Instructor do ( 15 minutes ) 
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

### 9. Partners do ( 20 mins ) 

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

CREATE TABLE drinks (
id int AUTO_INCREMENT,
bar_id int,
drink_name varchar(60) NOT NULL,
drink_price float NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(bar_id) REFERENCES bars(id)
); 

INSERT INTO drinks (bar_id, drink_name, drink_price) VALUES (1, 'apple pie milkshake', 5);
INSERT INTO drinks (bar_id, drink_name, drink_price) VALUES (2, 'chocolate milk', 2);
INSERT INTO drinks (bar_id, drink_name, drink_price) VALUES (3, 'beer', 3.5);

/* moo milk bar drink */
INSERT INTO drinks (bar_id, drink_name, drink_price) VALUES (4, 'wine', 8);

/* Create 1 drink that has no bar_id  */
INSERT INTO drinks (drink_name, drink_price) VALUES ('wine and chocolate milk', 10);

/* joins */

SELECT * 
FROM bars
LEFT JOIN drinks
ON drinks.bar_id = bars.id;

SELECT * 
FROM bars
RIGHT JOIN drinks
ON drinks.bar_id = bars.id;

SELECT *
FROM drinks;

SELECT * 
FROM drinks
INNER JOIN bars
ON drinks.bar_id = bars.id;

/* if you need to find data that you don't know where it is - just join everything */
SELECT * 
FROM drinks
FULL JOIN bars
```




