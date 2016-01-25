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

# Theme
Intro to MySQL

### 1. Students do 20 minutes

* *slack out the following exercise to students*

Part 1:

Test whether MySQL works or not on your computer. If it doesn't, call over a TA/Instructor

Part 2:

Open up google sheet name it rutgers_presidents

Columns: id, full_name, years_in_office, career_highlights

Fill it in with 20 rows.

reference: https://en.wikipedia.org/wiki/List_of_Rutgers_University_presidents

Bonus: 
Right a formula in Google Sheets to list all the Presidents with a name that starts with a vowel.

### 2. Instructor do 15 minutes

* talk about what a database is (it's just a bunch of google sheets. And you can use a programming language called SQL to query that data)

1. make a mysql db

2. create a table of pets with two columns: name, type, age

3. add 3 pets

4. select all of them 

### 3. Student do 15 minutes

1. make a mysql db

2. create a table of candies with two columns: name, rating

3. add 3 candies in

4. select all of them 

### 4. Instructor do 15 minutes


### 5. Student do 15 minutes



###
mysql> CREATE DATABASE animals;
ERROR 1044 (42000): Access denied for user ''@'localhost' to database 'animals'
mysql> 


in terminal, give yourself permission:

```
mysql -u root -p
```

for the password
press enter

create database rutgers_presidents;

show databases;
use rutgers_presidents;
drop database rutgers_presidents;

show tables;

clears the screen:
on mac: ctrl + l 

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.