# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Expertly navigate the file system and terminal basics
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Implement complex logical conditions to meet an objective.
* Write SQL commands to perform Create, Read, Update and Delete commands

# INSTRUCTOR MUST COVER!!!
```
1 - 11
```
or they will be seriously behind

# Theme
Intro to MySQL

### 1. Students do 15 minutes

* *slack out the following exercise to students*

PART ONE:
---------

Test whether MySQL works or not on your computer. 

For Mac:
type: ```mysql```

For Windows:
ask your instructor

If it doesn't, call over a TA/Instructor

PART TWO:
---------

Open up google sheet name it rutgers_presidents

Columns: id, full_name, years_in_office, career_highlights

Fill it in with 20 rows.

reference: https://en.wikipedia.org/wiki/List_of_Rutgers_University_presidents

Bonus: 
Right a formula in Google Sheets to list all the Presidents with a name that starts with a vowel.

### 2. Instructor do 15 minutes

* talk about what a database is (it's just a bunch of google sheets. And you can use a programming language called SQL to query that data)

* talk about MySQL, and other databases in the landscape (PostgreSQL, ...)

1. make a mysql db

2. create a table of pets with two columns: name, type, age

3. insert 3 pets

4. select all of them 

5. Demonstrate how to clear the screen in the mysql console for a mac:

```
ctrl + l 
```

- slack out the next exercise + 
- commit your sql queries and push up to the repo where you save all your in class code (do not make a new repo)

### 3. Student do 15 minutes

1. make a mysql db

2. create a table of candies with two columns: name, rating

3. insert 3 candies in

4. select all of them 

### 4. Instructor do 15 minutes

find all the dogs in the database with a select where

find all the pets with an age of over 3 in the database with a select where

- slack out the next exercise + 
- commit your sql queries and push up to the repo where you save all your in class code (do not make a new repo)

### 5. Student do 15 minutes

find all the candies that have a rating of 5 or greater in the database with a select where

### 6. Instructor do 15 minutes

demonstrate count

demonstrate delete a record

demonstrate limit 

- slack out the next exercise + 
- commit your sql queries and push up to the repo where you save all your in class code (do not make a new repo)

### 7. Student do 15 minutes

1. use a SQL query to count the total # of candies in your candies table.

2. delete one candy that you like the least.

3. select all the candies but use limit to limit the output to 2 candies.

### 8. Instructor do 15 minutes

demonstrate update on the pets table

- slack out the next exercise + 
- commit your sql queries and push up to the repo where you save all your in class code (do not make a new repo)

### 9. Students do 15 minutes

Update every candy so that the name has updated at the beginning of it.

### 10. Insructor do 5 minutes

Drop the animals table

- slack out the next exercise + 
- commit your sql queries and push up to the repo where you save all your in class code (do not make a new repo)

### 11. Students do 5 minutes

Students drop the candies table

# If time left over 

* we will do these exercises again first thing next lesson for a reivew 
		* so if you don't cover these, it'll be fine

### 12. Instructor do 

Make two tables 

CREATE TABLE tournaments (
id int AUTO_INCREMENT,
name varchar(30) NOT NULL,
skill_level varchar(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE players (
id int AUTO_INCREMENT,
tournament_id int NOT NULL,
name varchar(30) NOT NULL,
age int NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(tournament_id) REFERENCES tournaments(id)
); 

- add in data for players and for tournaments - be sure that the players' foreign tournament_id's exist

- left join them to show data from both tables in one query.

- left join them and add a where in to show that you can combine everything in one query.

- slack out the next exercise + 
- commit your sql queries and push up to the repo where you save all your in class code (do not make a new repo)

### 13. Students do 

- create the tables like the instructor did (get the sql from him/her from slack)
- insert data into both tables. 
- use a left join to show all the data from both tables
- use a left join + where to show all the data for players who are older than 15

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.