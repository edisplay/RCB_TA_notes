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
* *Demo the demo infront of students*
* *Setup the MySQL with data from exercise_solutions folder*

* *Instructor demos. Look in lesson-14.3.exercise_solutions folder.*

* No Express, just MySQL and Node Instructor demo ORM just using Node console app, show how to use this with mulitple tables.
	* The O.R.M functions once run when Node serer is lanuched will use MySQL commands with the user inputs
		* Find all animals by name order by price
		* Find an animal by the name of the animal
		* Find the buyer with the most animal

* Explain why writting O.R.M are helpful, calling a function with inputs as opppose to written out each statement.

### 4. Partners do (5 minutes)
* *Have student talk to each other about the pros of O.R.M* 

### 4. Students do (15 minutes)
Student Exercise: holiday party ORM
* *Instructor demo the app. Look in lesson-14.3.exercise_solutions folder.*

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

Create an Node MySQL app with an O.R.M functions that executes once the server is launched, no Express, no prompt.
	* Create a MySQL database with the tables and data given to you
	* Create a Node app that connects to MySQL with a 'config' dir with a 'connection.js' file inside of it
	* Create a 'orm.js' and make an O.R.M. that will
		* Find all parties order by party cost
		* Find parties by the party name
		* Find the client with the most parties
		* Bonus create a function in the O.R.M that will let the user add more clients and parties. 

### 5. Everyone Do (10 minutes)
* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*

###### 75 minutes have passed

### 6. Instructor do (5 minutes)
* * Talk about M.V.C *

* MVC is a framework for building web applications using a MVC (Model View Controller) design:
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
* *Demo Node app that is asynchronous *
* *Instructor demo the app. Look in lesson-14.3.exercise_solutions folder.*
Talk about why Node asynchronicity is an issue.

### 14. Partners do (5 minutes)
* *Have student talk to each other about why Node async happened and is an issue* 

### 15. Instructor do: ( 10 minutes ) 
* *Review callbacks*
* *Instructor demo the functions. Look in lesson-14.3.exercise_solutions folder.*

Explain what each of the functions is doing

### 16. Partners do (5 minutes)
* *Have student talk to each other about what just happened, and why callbacks can help with asynchronicity* 

### 17. Everyone Do (5 minutes)
* *Call on one unique student per each part of the previous demo to explain what happened*

### 18. Instructor do: ( 15 minutes ) 
* Demo M.V.C structure with orm - then give students this exercise.
* static public dir for assets
* Handlebars `#if`

### 19. Students do: ( 20 minutes ) 
* *Slack the followin instructions to student for them to do this exercise*

You are tasked to create a new App for a new gym that just opened up, the "Super Clubs Gym". In order to keep tracks of it's members you are to create a web based App that will do the following. Even before you finished the app other gyms got word of how awesome it is and they want you provid the same service for them as well.

* Create an App using M.V.C structure using callbacks to access the O.R.M.
	* Node Express Handlebars App uses MySQL database
	* Renders an HTML that let's the user fillout a form to add new members
	* Renders all the current users in the database
	* Let's the user hit a button to update the visit_count of a member
	* Let's the user delete a member from the database
	* To make the code you created on as reuseable as possible create a Model file for each gym.
	
- super clubs gym table
|id|member name|active|visit_count|
|--|------|-|-|
|1|Lenny|1|6|
|2|Wendy|1|17|


- sports gym table
|id|member name|active|visit_count|
|--|------|-|-|
|1|Mike|0|4|
|2|Ryan|1|153|

### 20. Instructor do: ( 10 minutes )
* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.