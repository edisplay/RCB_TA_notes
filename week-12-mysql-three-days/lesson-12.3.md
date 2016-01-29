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
* Write clean code with proper variable names, indentation according to industry best practices

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

1. slack out the objectives to the students, and call on random students to read them outloud. *Make a comment about each objective after a person reads it.*

1. in class repo for your section, make a new folder for this week and day.

1. open up that folder in Sublime Text

1. make an objectives.txt file in that folder

1. copy these objectives into that objectives.txt file and save it, commit it, push it up.

1. keep the file open while the students are reading the objectives 

* Students will create a MySQL relational database, and create tables inside of it
* Students will use the JOIN clause in SQL to combine data from different tables
* Students will make a Node.js script connecting to their MySQL Database.
* Students will write code inside of a Node.js script to perform C.R.U.D on a MySQL database

# Theme: 
Prompt + MySQL + Node

--------- --------- ---------

# INSTRUCTOR MUST COVER!!!

```
ALL or they won't be able to do the homework.
```

### 1. Students do (15 minutes)

1. Create a `bears_db` database, make a `happy_bears` table with a primary integer auto incrementing key of id, a name varchar(30) not null, a favorite_food varchar(30) not null, a personality varchar(30) not null.

2. Insert a happy bear named Nom Nom whose favorite food is tacos and is mean.

3. Make a node file that uses the mysql npm package, connects to the bears_db database and selects all the bears and returns them to the terminal through a console log. 

4. Run the node file.


### 2. Everyone do (10 minutes)

* *Call on a weaker student to go over the previous exercise*

* *Slack out your solution and commit this in your in class repo*


### 3. Instructor do (20 minutes)

* *do the following in mysql in front of students*

```
CREATE DATABASE sports_db;
USE sports_db;

CREATE TABLE sports (
id int AUTO_INCREMENT,
sport_name varchar(30) NOT NULL,
intensity int NOT NULL,
PRIMARY KEY(id)
); 

SELECT * FROM sports; /* show that it's empty */
```

* *make a node script that will select, insert, update, delete from the sports_db* 
* ***TO SAVE TIME: please copy and paste the following code in batches instead of coding this from scratch. Obviously go over each part as you copy and paste it.***

* *** Don't run all the functions all at once. Run them one at a time and make sure you get the class talking to each other about what's happening on the screen. Not one person. The entire class should be talking to each other. ***

```
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sports_db'
});

var showSports = function() {
  connection.query('SELECT * FROM sports', function(err, res) {
      console.log("Sports we have ", res);
  });
}

//showSports();
```

> Explain what just happened to your partners

```
var addFourSports = function() {
  connection.query('INSERT INTO sports (sport_name, intensity) VALUES (?,?)', ['extreme ping pong', 10], function(err, result) {
    if (err) throw err;

    console.log("insert finished~!")

  });

  connection.query('INSERT INTO sports (sport_name, intensity) VALUES (?,?)', ['tag', 7], function(err, result) {
    if (err) throw err;

    console.log("insert finished~!")

  });

  connection.query('INSERT INTO sports (sport_name, intensity) VALUES (?,?)', ['man hunt', 9], function(err, result) {
    if (err) throw err;

    console.log("insert finished~!")

  });

  connection.query('INSERT INTO sports (sport_name, intensity) VALUES (?,?)', ['ninja warrior', 10], function(err, result) {
    if (err) throw err;

    console.log("insert finished~!")

  });
};

//addFourSports();
```

> Explain what just happened to your partners

```
var updateThirdSport = function() {
  connection.query('UPDATE sports SET sport_name = ? WHERE id = 3', ['knife fighting'], function(err, result) {
    if (err) throw err;

    console.log("update finished~!");
  }); 
  
};

//updateThirdSport();
```

> Explain what just happened to your partners

```
var deleteFirstSport = function() {
  connection.query('DELETE FROM sports WHERE id=?', [1], function(err, result) {
    if (err) throw err;

    console.log("delete finished~!");
  }); 
  
};

//deleteFirstSport();
```

> Explain what just happened to your partners

### 4. Partners do (20 minutes)

1. In your previous happy_bears node script that you made, make an addBears funtion that loops over the below bearData array of objects and inserts the appropriate bear with the appropriate information into the happy_bears table.

2. Make an updateBear function that will update the third bear's favorite food to bamboo.

3. Make a deleteBear function that will delete the first bear in the happy_bears table.

4. call your functions at the end one at a time in the order that you made them. 

```
var bearData = [
  {name: 'Grizzly', favorite_food: 'Pizza', personality: 'Out going' },
  {name: 'Panda', favorite_food: 'Hot Dog', personality: 'Shy' },
  {name: 'Ice Bear', favorite_food: 'Fish', personality: 'Chill' }
];
```

### 4. Everyone Do (10 minutes)

* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*

###### 75 minutes have passed

*** ZHEN and Pavan need to update objectives at the top and the INSTRUCTOR MUST COVER!!! section when finished ***
*** ZHEN And PAVAN approve of above ***



### 5. Instructor do ( 15 minutes ) 

* *Create a database called countries*

12.2.2 demo 1: (Country and cities)
Demo issue that database can have with mulitple tables, ask student to help

```
Zhen put code in to make tables and make inserts into the below table. 
```

table: countries

|id|country|
|---------|-------|
|1|U.S.A|
|2|U.K|
|3|FRANCE|

table: cities

|id|city|hipsters|country_id|
|--------|----|--------------|---------|
|1|'paris'|85,000|3|
|2|'san francisco'|290,000|1|
|3|'london'|150,000|2|
|4|'new york city'|370,000|1|

Question is...in one sql statement how do get back the hipister count from all US citys in order?

`
SELECT * 
FROM countries 
LEFT JOIN cities 
ON countries.id=cities.country_id 
WHERE countries.id = 1
ORDER BY cities.hipsters;
`

### 7. Instructor do ( 15 mins ) 

* *Slack this out, put it on the screen and talk about each one. Save this to your in class code, commit and push.*

```
Relational database JOINs (INNER, LEFT, RIGHT, FULL):

INNER JOIN: Returns all rows when there is at least one match in BOTH tables

LEFT JOIN: Return all rows from the left table, and the matched rows from the right table

RIGHT JOIN: Return all rows from the right table, and the matched rows from the left table

FULL JOIN: Return all rows when there is a match in ONE of the tables
```

```
ZHEN chop off outer joins from this picture
```

* *Show this to students. Save this to your in class code, commit and push.*
![JOINS](./mySQL_JOIN.jpg)

### 8. Partners do ( 5 minutes )

> Explain to the people around you what each of these joins do and why they're used. I'll call on random people. If you're wrong, i'm going to call out the people next to you for not explaining it to you well.

### 9. Partners do ( 20 mins ) 

Objectives: 
* Students will run basic queries to make a database, tables, and populate those tables.
* Students will use join SQL clauses

1. Run all your commands in MySQL but also put all of them in chronological order inside of a fun_time.sql file
2. Create a database called fun_time
3. Inside fun_time, create a bars table with id, bar_name
4. bars table must have at least 3 different bars (3 rows with different names)
5. Create a 4th bar with the name of 'Moo Milk Bar' 
6. Inside fun_time, create a drinks table with id, bar_id, drink_name, drink_price
7. Create 3 different drinks in the drinks table (3 rows with different drink names, prices and bar_ids)
8. Create another drink in the drinks table with a bar_id of the 'Moo Milk Bar'
9. Create 1 drink that has no bar_id (because it's not available in any of the bars in your bars table)
10. Use the following SQL JOINS: 

LEFT join bars to drinks

RIGHT join bars to drinks 

Select all the drinks

INNER JOIN drinks to bars

FULL JOIN drinks to bars

11. Explain to your partners what each query above did and the importance of it.

Bonus: 

* check out the Moo Milk Bar website http://www.moomilkbar.ca/#the-bakery

### 10. Everyone do ( 40 minutes )

go over the previous exercise with the class

##### x minutes passed by - break time for 15 minutes

### 14. Student do: ( 5 mins )
Create a new Node App 
Install npm packages 

### 15. Instructor do: New concepts "block quotes": ( 5 mins )
12.2.5 demo 2: (basic mysql node app)
MySQL inside of Node
Connecting Node to mySQL via npm package, do a simple SELECT  from a db
```
App setup:
1.create App Dir
2.npm init
4.setup 'index.js' file

Database setup:
1.npm install mysql
2.mysql config
```
Basic setup: establishing connections
```
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
```

Connect to a db and do a simple selection
```
connection.query('SELECT * FROM someTable', function(err, res) {
  if (err) throw err;

  console.log(res);
});
```
* Notice that mySQL npm commands are a bit different compared to normal mySQL commands

### 16. Partners do: ( 8 mins )
Connecting Node to mySQL via npm package, do a simple SELECT from a db

### 17. Partners Demo: ( 2 mins )
Slacked code from student have have student partners explain what they did

### 18. Instructor do ( 2 mins )
12.2.5 exercise 4: (climbing gym members)
Introduce the reivew exercise and explain what student need to do + bonus 

Student Exercies: duration (long)
Connecting Node to mySQL via npm package
Create the functions of C.R.U.D in Node using a mySQL db

You are creating an App for a climbing gym, in this gym new members comes in with a sign up of 30 session.
Each time a member comes to visit the gym adds 1 to the session_used count which starts at 0, and record the current date.

Create a new db in mySQL:

* Create a table with PK(id), name, total session, session used, last session date.
* Create a new memeber with any name, 30 total sessions, 0 session used, and last session date set to false.
* Create a function that finds the number of session used by checking the name.
* Create a function that add 1 to the session used and update the last session date to current date.

Bonus: Create a function that checks total session against session used if it's both 30, delete the memeber

### 19. Partners do ( 3 mins )
Have student turn to eachother and talk about how to do this exerices before starting

### 20. Student do: ( 18 mins )
Work on exersice alone

### 21. Instructor do: ( 10 mins )
Teacher demo go over solution 

### 22. Partners do: ( 5 mins )
Student talk to each other, explain to each other the code

### 23. Instructor do: ( 5 mins ) 
12.2.6 exercise 5: (6 degrees of Kevin Bacon)
Teacher intro 1 JOIN mySQL

### 24. Partner do: ( 15 mins )
Work on exersice different JOIN in mySQL

### 25. Partners present: ( 3 mins )
Student explain demo

### 26. Instructor do: ( 4 mins )
Teacher demo go over solution 

(Instructor do): Review all topics

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.