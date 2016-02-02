#Week of 14 Homework Node Express Handlebars

### Introduction

* You will create a single page Node Express App.

* You will use Handlebars to generate HTML.

* You will use Node to connect MySQL database and Express to handle routing.

* see demonstration of how it works * 

### User story

* Eat-Da-Burger! is a fun simple page app, that let's the user input the name of a burger they want to eat and submit it, once submited it's displayed in text in the left side of the page  waiting area where it's waiting to be Devoured, each burger in the waiting area also has a `Devoure it!` button, once clicked will move it to the right side of the page.

### Steps

Database setup:

	1. Create the `burgers_db` in MySQL

	2. Create the tables and columns inside `burgers_db` like the table below
	
	3. The table should have 
		* `id` as primary key auto increment
		* `burger_name` as a string
		* `devoured` as a boolean
		* `date` as currentime

App setup:

	1. Create an App Dir called 'burger'

	2. Install Node `npm init`

	3. Install npm package Express `npm install express --save`

	4. Create the 'server.js' file

	5. Install npm package Handlebars `npm install express-handlebars --save`

	6. Install npm package Method-override `npm install method-override --save`

	7. Install npm package Body-Parser `install body-parser --save`

	8. Install npm package MySQL `npm install mysql --save`

	9. Create a `app_config.js` file 

	10. Create the configuration needed for all npm packages and import it into `server.js`

Model setup:

	1. Inside your `burger` Dir create a Dir named `model`

	2. Create the `database.js` file.

	3. Setup the configuration to MySQL and export it.

	4. Import `database.js` into `server.js`

View setup:

	1. Inside your `burger` Dir create a Dir named `views`
	
	2. Create the `index.handlebars` file inside `views` Dir

	3. Create the `layouts` Dir inside `views` Dir

	4. Create the `main.handlebars` file inside `layouts` Dir
	
	5. Setup the `main.handlebars` file so it's able to be used by Handlebars

	6. Setup the `index.handlebars` to have the template that Handlebars can render onto

	6. Create a button in `index.handlebars` that will submit the user input into the database

Controller setup:

	1. Inside your `burger` Dir create a Dir named `controller`

	2. Create the `routes.js` file

	3. Setup the routes(`GET`, `POST`, `UPDATE`) functions

	4. Import `routes.js` into `server.js`

	5. Inside `server.js` setup Express to use the imported routes.

# BONUS

	

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.