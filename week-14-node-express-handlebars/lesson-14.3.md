# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)


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
Node Express Handlebars M.V.C

--------- --------- ---------

# INSTRUCTOR MUST COVER ALL!!!

```
ALL or they won't be able to do the homework.
```

### 1. Students do (15 minutes)
Review Exercise: feel_state
* *Instructor demos. Look in lesson-14.3.exercise_solutions folder.*

* *Slack this out and commit this in your in class repo*

* Create a Node Express MySQL Handlebars App.
	* The app will render all the data from the database to the HTML.
	* The app will have 3 buttons 'too hot', 'too cold', 'just right' 
	* When the any of the button is clicked, it will save the state of the room temp in the MySQL database with a timestamp. 

### 2. Everyone do (10 minutes)
* *Call on a weaker student to go over the previous exercise*

### 3. Instructor do (20 minutes)
* *Do the following in in front of students*
* *Setup the MySQL with data from exercise_solutions folder*

* *Instructor demos. Look in lesson-14.3.exercise_solutions folder.*

* No Express, just MySQL and Node Instructor demo ORM just using Node console app, show how to use this with mulitple tables.
	* The O.R.M functions once run when Node serer is lanuched will use MySQL commands with the user inputs
		* Find all animals by name order by price
		* Find an animal by the name of the buyer
		* Find the buyer with the most animal

* Explain why writting O.R.M are helpful, calling a function with inputs as opppose to written out each statement.

### 4. Partners do (5 minutes)
* *Have student talk to each other about pros of O.R.M* 

### 4. Students do (15 minutes)
Student Exercise: holiday party ORM
* *Instructor demo the app. Look in lesson-14.3.exercise_solutions folder.*

* *Slack this out and commit this in your in class repo*

Create a holiday party planner app. Many different kinds of holidays are celebrated around the world, we want to help create parties for our clients and also keep track of all the events we host. In MySQL create a database called 'holiday_party_db' create two tables structured like the tables below.

|id|client|
|--|------|
|1|Jonny|

|id|party name|holiday name|party cost|client id|
|--|----------|------------|----------|---------|
|1|Jonny's Party|New Years|500|1|

Create an Node MySQL app with an O.R.M functions that executes once the server is launched, no Express, no prompt.
	* Make an O.R.M that will
	* Create an entry in the database by inputing prompts, which saves to the MySQL database and their correct tables
		* Insert an entry of a party with client info
		* Find all active parties still being planned
		* Find parties in cost from most expensive 

### 5. Everyone Do (10 minutes)
* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*

###### 75 minutes have passed

### 6. Instructor do (5 minutes)
* * Talk about M.V.C *

MVC is a framework for building web applications using a MVC (Model View Controller) design:
	* The Model represents the application core (for instance a list of database records).
	* The View displays the data (the database records).
	* The Controller handles the input (to the database records).

### 7. Partners do ( 5 mins ) 
* *Have student talk to each other about What is M.V.C* 

### 9. Instructor do (15 minutes)
* *Open the mvc_design app in front of students and talk about each part*
* *Look in lesson-14.3.exercise_solutions folder.*

### 10. Partners do ( 5 mins ) 
* *Have student talk to each other about what just happened* 

### 12. Everyone Do (10 minutes)
* *Call on one unique student per each part of the previous demo to explain it*

###### 120 minutes have passed

### 12. BREAK ( 40 minutes )
--------- --------- ---------


### 13. Instructor do: ( 10 minutes ) 
* *Review callbacks*

### 14. Partners do (5 minutes)
* *Have student talk to each other about what just happened* 

### 15. Everyone Do (5 minutes)
* *Call on one unique student per each part of the previous demo to explain it*

### 16. Instructor do: ( 10 minutes ) 
* Node async *


### 17. Partners do (5 minutes)
* *Have student talk to each other about why Node async happenes* 

### 18. Instructor do: ( 15 minutes ) 
* Demo M.V.C structure with orm - then give students this for next part.
* static public dir for assets
* Handlebars `#if`

### 19. Students do: ( 20 minutes ) 
* *Slack the followin instructions to student for them to do this exercise*
* Create an App using M.V.C structure using callbacks to access the ORM.

### 20. Instructor do: ( 10 minutes )
* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.