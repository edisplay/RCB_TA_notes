# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

### Master Objectives (Internal Use - do not share with students - because it's a waste of time)
* Expertly navigate the file system and terminal basics
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Implement complex logical conditions to meet an objective.
* Write SQL commands to perform Create, Read, Update and Delete commands
* Write clean code with proper variable names, indentation according to industry best practices

### Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

1. slack out the objectives to the students, and call on random students to read them outloud. *Make a comment about the objective after each person reads them.*

1. in class repo for your sectio, make a new folder for this week and day.

1. open them up that folder in Sublime Text

1. make an objectives.txt file in that folder

1. copy these objectives into that objectives.txt file and save it, commit it, push it up.

1. keep the file open while the students are reading the objectives 

Students will be able to:

	* Create database structures relationally and use JOIN on them
	* Start a Node server running mySQL npm connect to locatl mySQL db
	* Perform C.R.U.D using Node on mySQL db

# Theme: mySQL & Node
--------- --------- ---------

PART ONE:
---------

Starter(Review): ~25 mins
#### 1. Instructor do ( 2 mins )
(reivew mySQl basics): Have student efine what each of the letter in C.R.U.D stand for

	* C - POST - INSERT INTO
	* R - GET - SELECT something FROM somewhere WHERE a condition is true
	* U - PUT - UPDATE WHERE
	* D - DELETE - DELETE WHERE

#### 2. Partners do ( 2 mins)
Have student turn to each other and talk about how to do this exerices before starting

#### 3. Student do ( 14 mins )
Introduce the reivew exerise and explain what student need to do + bonus 

12.2.1 exericse 1: (simple mySQL db)
Create a db in mySQL with the following data, code out in your code editor the mySQL statement that can

* Insert the following data
* Update the last row in the table to year 2015
* Delete the first row of the table
* Find out how many total movies are in this table

| Movie  | Character  | year |
|------------| ------ |-------|
|Jackie Brown|Ordell Robbie|1997|
|Shaft|John Shaft|2000|
|Snakes on a Plane|Neville Flynn|2006 |
|Star Wars: The Clone Wars| Mace Windu |2008| 
|Captain America: The First Avenger | Nick Fury|2011 |
|Fury| Foley| 2012 |
|The Avengers | Nick Fury| 2012 |
|Django Unchained | Stephen| 2012 |
|Avengers: Age of Ultron| Nick Fury | 1015 |

Bonus: Using a sql statement
Find all the movie names where the year is equal to 2012 that doesn't have the character Nick Fury 

(Partners do): duration(medium):
Have student partner-up to work on this exerise together.

Have the student code out the mySQL commmand in an `move.sql` file before testing it on their local mySQL db

#### 4. Cold call ( 5 mins )
Ask for the code via slack, and student to explain sql code

#### 5. Instructor do ( 2 mins )
go over last exericse: explain/demo any missing from the code or point of emphasis

New Materials Intro: ~55 mins

#### 6. Instructor demo: ( 2 mins ) 
Create a demo database with demo tables 
12.2.2 demo 1: (Country and counties)
Demo issue that database can have with mulitple tables, ask student to help

country table:

|CountryID|Country|
|---------|-------|
|1|U.S.A|
|2|U.K|
|3|FRANCE|

county table:

|CountyID|County|Hipister_Count|CountryID|
|--------|----|--------------|---------|
|1|PR|85,000|3|
|2|SF|290,000|1|
|3|LD|150,000|2|
|4|NY|370,000|1|

Question is...in one sql statement how do get back the hipister count from all US countys in order?

`
SELECT * FROM country LEFT JOIN 
county ON country.CountryID=county.CountyID 
WHERE country.CountyID = 1
ORDER BY county.Hipister_Count;
`

#### 7. Instructor do: New concepts "block quotes": ( 12 mins ) 
Talk about the other joins:

Relational db JOINs (INNER, LEFT, RIGHT, FULL)

![JOINS](./mySQL_JOIN.jpg)

#### 8. Partners: ( 5 mins )
Ask student telk to eachother and explain what how to use JOIN and why it's used

#### 9. Partners do: ( 10 mins ) 
12.2.3 exericse 2: (teams and cities)
Intrucduce exerices: duration(medium short): 
Student are to create a database with 2 tables with reference given to them creating a JOIN

#### 10. Instructor do: ( 5 mins )
Demo and go over the exerices and ask student/partner to explain

#### 11. Student do: ( 15 mins )
12.2.4 exericse 3: (price of drinks)
Indivduial Exercies: duration (medium long)
Student create a database with mulitple tables and create data from reference given
Student create JOIN and different types

Create 2 tables:
A bar table:

* Bar table with ID, bar_name
* Bar table must have at least 3 different bars
* Create a 4th bar with the name of 'MooMilk'
* 4 total bars

A Drinks table:

* A drinks table with ID, FK, drink_name, drink_price
* Create 3 different drinks three times each time with a different price for each of the different bars in bars table that is not 'MooMilk'
* Create 1 drink once only in the bar 'MooMilk'
* Create 1 drink that is not in any of the bars that you created

Write the SQL statments in text editor using all of the possible SQL JOINS
LEFT, RIGHT, INNER, FULL

#### 12. Student present: ( 4 mins )
Slacked code from student, student explain code

#### 13. Instructor do: ( 2 mins )
Demo and go over the exerices

BREAK: (15 mins)
---------

PART TWO:
---------

New Materials Intro:  ~85 mins

#### 14. Student do: ( 5 mins )
Create a new Node App 
Install npm packages 

#### 15. Instructor do: New concepts "block quotes": ( 5 mins )
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

#### 16. Partners do: ( 8 mins )
Connecting Node to mySQL via npm package, do a simple SELECT from a db

#### 17. Partners Demo: ( 2 mins )
Slacked code from student have have student partners explain what they did

#### 18. Instructor do ( 2 mins )
12.2.5 exerise 4: (climbing gym members)
Introduce the reivew exerise and explain what student need to do + bonus 

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

#### 19. Partners do ( 3 mins )
Have student turn to eachother and talk about how to do this exerices before starting

#### 20. Student do: ( 18 mins )
Work on exersice alone

#### 21. Instructor do: ( 10 mins )
Teacher demo go over solution 

#### 22. Partners do: ( 5 mins )
Student talk to each other, explain to each other the code

#### 23. Instructor do: ( 5 mins ) 
12.2.6 exerise 5: (2 degrees of Kevin Bacon)
Teacher intro 1 JOIN mySQL


#### 24. Partner do: ( 15 mins )
Work on exersice different JOIN in mySQL

#### 25. Partners present: ( 3 mins )
Student explain demo

#### 26. Instructor do: ( 4 mins )
Teacher demo go over solution 

(Instructor do): Review all topics

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.