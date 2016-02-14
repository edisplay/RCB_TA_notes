#Week of 14 Homework Node Express Handlebars

### Introduction

* You will create a "single page" Node Express App.
			* it will look and act like a single page app, but it won't be a single page app

* You will use Handlebars to generate HTML.

* You will use Node to connect MySQL database and Express to handle routing.

* see demonstration of how it works * 

### User story

* Eat-Da-Burger! is a fun single page app, that lets the user input the name of a burger they want to eat and submit; once submited it's displayed in text on the left side of the page where it's waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. Once clicked the burger text will move it to the right side of the page. Everything entered will be stored into a MySQL database.

### Remember

You will be fully capable of doing this homework by the end of Saturday's class.

### Steps

Database setup:

	1. Create the `burgers_db` in MySQL

	2. Create the tables and columns inside `burgers_db` like below
	
	3. The table should have 
		* `id` as primary key auto incrementing
		* `burger_name` as a string
		* `devoured` as a boolean

App setup:

	1. Create an App Dir called 'burger'

	2. Make a package.json file `npm init`

	3. Install Express npm package `npm install express --save`

	4. Create the 'server.js' file

	5. Install Handlebars npm package `npm install express-handlebars --save`

	6. Install Method-override npm package `npm install method-override --save`

	7. Install Body-Parser npm package `npm install body-parser --save`

	8. Install MySQL npm package `npm install mysql --save`

	10. Setup the following npm packages inside of `server.js` file
		* express
		* method-override
		* body-parser

DB Setup:

	1. Inside your `burger` Dir create a Dir named `db`

	2. Create the `schema.sql` file

	3. Put the SQL that you used to create your database

	4. Create a `seeds.sql` file

	5. Put insert sql queries inside of the `seeds.sql` file to populate your tables with data

	4. Launch MySQL, create the database and table

Config Setup:

	1. Inside your `burger` Dir create a Dir named `config`

	2. Create the `connection.js` file inside `config` Dir

	3. Inside the `connection.js` setup the code to connect Node to MySQL

	4. Export connection

	5. Create the `orm.js` file inside `config` Dir

	6. Import `connection.js` into `orm.js`

	7. Inside the `orm.js` file create the code that will execute MySQL commands

	8. Export orm

Model setup:

	1. Inside your `burger` Dir create a Dir named `models`

	2. Create the `burger.js` file.

	3. Import `orm.js` into `burger.js`

	4. Inside `burger.js` create the code that will call the orm functions using burger specific input for the orm

	5. Export burger

Controller setup:

	1. Inside your `burger` Dir create a Dir named `controllers`

	2. Create the `burgers_controller.js` file

	3. Inside `burgers_controller.js` file import
		* express
		* router
		* burger

	4. Create the routes for the app.

View setup:

	1. Inside your `burger` Dir create a Dir named `views`
	
	2. Create the `index.handlebars` file inside `views` Dir

	3. Create the `layouts` Dir inside `views` Dir

	4. Create the `main.handlebars` file inside `layouts` Dir
	
	5. Setup the `main.handlebars` file so it's able to be used by Handlebars

	6. Setup the `index.handlebars` to have the template that Handlebars can render onto

	6. Create a button in `index.handlebars` that will submit the user input into the database


# BONUS

	Create nice CSS for this app.

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.