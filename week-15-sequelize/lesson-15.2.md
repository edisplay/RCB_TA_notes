# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

1. slack out the objectives to the students, and call on random students to read them outloud. *Make a comment about each objective after a person reads it.*

1. in class repo for your section, make a new folder for this week and day.

1. open up that folder in Sublime Text

1. make an objectives.txt file in that folder

1. copy these objectives into that objectives.txt file and save it, commit it, push it up.

* keep the file open while the students are reading the objectives


# Theme: Sequelize
	* Model Valiations
	* Bcrypt
	* Hooks

--------- --------- ---------

### 1. Instructor Explain (15 minutes)
Demo: 15.2.1_demo Valiations

* *Demo how vailation works*
* *Explain what each line of the code is doing*

### 2. Partners Do (5 minutes)

* *Have students talk to each other about what just happened. MAKE SURE THE CODE IS UP ON THE SCREEN!*

### 3. Student Do (30 minutes)

Student Exercises: Safe Entry

* Create a new DB
* Create an `express` / `handlebars` / `node.js` / `mysql` app 
  * Entry: The page will allow users to input an entry into the database with their name/phone number/message
  * Valiate the name so it's only strings
  * Valiate the phone number so it's only numbers
  * Valiate the message so it's min of 5 characters in length and 500 character at max
  * If all the input checks out save it to the database
  * Else render to a fail page to tell the user what they entered didn't work

### 4. Everyone Do (10 minutes)

* *Call on a student to go over the previous exercise*

### 5. Instructor Do (30 minutes)
Demo: 15.2.2_bcrypt

* *Demo how bcrypt works*
* *Explain what each line of the code is doing*

-- 15 minute break -- (total including break: 105 minutes)

### 5. Student Do (25 minutes)

* Create a new DB
* Create an  `node.js`& `mysql` app 
  * No Express, no handlebars
  * Use prompt to add user and password into the databse 
  * You must use hash to store the password

### 6. Instructor Do (20 minutes)

> Hooks (also known as callbacks or lifecycle events), are functions which are called before and after calls in sequelize are executed. For example, if you want to always set a value on a model before saving it, you can add a beforeUpdate hook.

* *DEMO 15.2.3* 

* *Demo how bcrypt works with hooks*
* *Explain what each line of the code is doing*

### 7. Student Do (25 minutes)

* Create a new DB
* Create an `express` / `handlebars` / `node.js` / `mysql` app 
  * Make a page that will allow users create a user name and password
  * Make a page that will allow users to login
  * Valiate the name so it's only strings, and password that it has at least 8 characters
  * Setup the model with hooks and save password into the database as hash
  * Check the password against the hash before login

### 8. Everyone Do ( 10 minutes )

* *Call on a student to go over the previous exercise*

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.