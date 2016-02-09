# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)
	* Develop your vision for a website -- and then build it!
	* Expertly navigate the file system and terminal basics
	* Work independently or in a group on complex projects throughout the entire development lifecycle
	* Communicate the basics of serving a webpage and how the browser renders code
	* Implement complex logical conditions to meet an objective.
	* Write SQL commands to perform Create, Read, Update and Delete commands
	* Utilize an ORM to manage a database schema and connection from a server
	* Create and consume RESTful API’s utilizing JSON as a data format
	* Write clean code with proper variable names, indentation according to industry best practices

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

1. slack out the objectives to the students, and call on random students to read them outloud. *Make a comment about each objective after a person reads it.*

1. in class repo for your section, make a new folder for this week and day.

1. open up that folder in Sublime Text

1. make an objectives.txt file in that folder

1. copy these objectives into that objectives.txt file and save it, commit it, push it up.

1. keep the file open while the students are reading the objectives 

	* Students will create a Node App with M.V.C similar to Rails
	* Students will create a simple O.R.M for MySQL database
	* Students will create a Node Express App with Handlebars and CSS assets

# Theme: 
Node Express Handlebars M.V.C.

--------- --------- ---------

# INSTRUCTOR MUST COVER ALL!!!

```
ALL or they won't be able to do the homework.
```

### 1. Students do (15 minutes)
Review Exercise: `feel state`

* *Instructor demos. Look in lesson-14.3.exercise_solutions folder.*
* *Slack this out and commit this in your in class repo*

* Create a Node Express MySQL Handlebars App.
	* The app will render all the data from the database to the HTML using handlebars.
	* The app will have 3 buttons 'too hot', 'too cold', and 'just right' 
	* When the any of the button is clicked, it will save the state of the room temp in the MySQL database with a timestamp and display on the page. 

### 2. Everyone do (10 minutes)
* *Call on a weaker student to go over the previous exercise*

### 3. Instructor do (20 minutes)
* *Demo the app infront of students*
* *Setup the MySQL database with data schema file from exercise_solutions folder*

* *Instructor demos. Look in lesson-14.3.exercise_solutions folder.*

* No Express, No handlebars, only MySQL and Node Instructor demo ORM just using Node console app, show how to use this with mulitple tables.
	* The O.R.M functions once run when Node serer is lanuched will use MySQL commands with the user inputs
		* Find all animals by name order by price
		* Find an animal by the name of the animal
		* Find the buyer with the most animal

* Explain why writting O.R.M are helpful, calling a function with inputs as opppose to written out each statement.

### 4. Partners do (5 minutes)
* *Have student talk to each other about the pros of O.R.M* 

### 5. Students do (15 minutes)
Student Exercise: holiday party ORM

* *Look in lesson-14.3.exercise_solutions folder for solutions.*

* *Slack this out and commit this in your in class repo*

Create a holiday party planner app. Many different kinds of holidays are celebrated around the world, we want to help create parties for our clients and also keep track of all the events we host. In MySQL create a database called 'holiday_party_db' create two tables structured like the tables below.

- clients table
|id|client name|
|--|------|
|1|Jonny|
|2|Bobby|

- parties table
|id|party name|party type|party cost|client id|
|--|----------|------------|----------|---------|
|1|Jonnys New Years Party|New Years|600|1|
|2|Jonnys Chinese New Years Party|New Years|500|1|
|3|Bobbys Baby Shower Party|Baby Shower|200|2|
|4|Bobbys Cousin Birthday Party|Birthday Party|300|2|
|5|Bobbys Superbowl Party|Superbowl Party|250|2|

Create an Node MySQL app with an O.R.M functions that executes once the server is launched.
* No Express, No handlebars, display with console log

	* Create a MySQL database with the tables and data given to you
	* Create a Node app and connect it to MySQL with a 'config' dir and with a 'connection.js' file inside of that dir
	* Create a 'orm.js' file and make an O.R.M. that will
		* Find all parties order by party cost
		* Find parties by the party name
		* Find the client with the most parties
		* Bonus create a function in the O.R.M that will let the user add more clients and parties. 

### 6. Everyone Do (10 minutes)
* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*

###### 75 minutes have passed

### 7. Instructor do: ( 10 minutes ) 
* *Instructor demo the app. Look in lesson-14.3.exercise_solutions folder.*
* *Demo the app infront of students*
Talk about why Node asynchronicity is an issue.

### 8. Partners do (5 minutes)
* *Have student talk to each other about why Node async happened and is an issue, and how to fix it* 

### 9. Everyone do (5 minutes)
* *Call on unique students to help fix the asyn issue*

### 10. Instructor do: ( 15 minutes ) 
* *Review callbacks*
* *Instructor demo the functions. Look in lesson-14.3.exercise_solutions folder.*

Explain what each of the functions in the exercise is doing.

### 11. Partners do (5 minutes)
* *Have student talk to each other about what just happened, and why callbacks can help with asynchronicity* 

### 12. Everyone Do (5 minutes)
* *Call on one unique student per each part of the previous demo to explain what happened*

###### 125 minutes have passed

### 13. BREAK ( 40 minutes )
--------- --------- ---------

### 14. Instructor do (5 minutes)
* * Talk about M.V.C *

* MVC is a framework for building web applications using a MVC (Model View Controller) design:
	* The Model represents the application core (for instance a list of database records).
	* The View displays the data (the database records).
	* The Controller handles the input (to the database records).

### 15. Partners do ( 5 mins ) 
* *Have student talk to each other about What is M.V.C* 

### 16. Instructor do (15 minutes)
M.V.C app.

* *Setup the MySQL database with data schema file from exercise_solutions folder*
* *Open the mvc_design app in front of students and talk about each part*

* *Look in lesson-14.3.exercise_solutions folder.*
* *Demo the app infront of students*

Explain the use of {{#if}} in handlebars.

### 17. Partners do ( 5 mins ) 
* *Have student talk to each other about what just happened* 

### 18. Everyone Do (10 minutes)
* *Call on one unique student per each part of the previous demo to explain it*

### 19. Students do: ( 20 minutes ) 
Student Exercise: Super Clubs Gym.

* *Demo the app infront of students*
* *Look in lesson-14.3.exercise_solutions folder.*

* *Slack the followin instructions to student for them to do this exercise*

You are tasked to create a new App for a new gym that has just opened up, the "Super Clubs Gym". In order to keep tracks of it's members you are to create a web based App that will do the following.

* Create an App using M.V.C structure using callbacks to access the O.R.M.
	* Use Node Express Handlebars App and MySQL database 
	* Create a database name 'gyms_db' with tables structure like below
	* Renders an HTML that let's the user enter a name to add new members
	* Renders all the current users in the database that are active members
	* User can hit a button to update the visit_count of an active member
	* Bonus user can hit a button to delete a member from the database and change it's status so he/she no longer displayed on screen

- super clubs table
|id|member name|active|visit_count|
|--|------|-|-|
|1|Lenny|1|6|
|2|Wendy|1|17|
|3|Mike|0|4|
|4|Ryan|1|153|

### 20. Instructor do: ( 15 minutes )
* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.