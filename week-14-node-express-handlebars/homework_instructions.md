#Week of 14 Homework Node Express Handlebars

### Introduction

* You will create a "single page" Node Express App.
			* it will look and act like a single page app, but it won't be a single page app

* You will use Handlebars to generate HTML.

* You will use Node to connect MySQL database and Express to handle routing.

* see demonstration of how it works * 

### User story

* Eat-Da-Burger! is a fun single page app, that lets the user input the name of a burger they want to eat and submit; once submited it's displayed in text on the left side of the page where it's waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. Once clicked the burger text will move it to the right side of the page. Everything entered will be stored into a MySQL database.

### Steps

Database setup:

	1. Create the `burgers_db` in MySQL

	2. Create the tables and columns inside `burgers_db` like below
	
	3. The table should have 
		* `id` as primary key auto incrementing
		* `burger_name` as a string
		* `devoured` as a boolean
		* `date` as currentime

App setup:

	1. Create an App Dir called 'burger'

	2. Make a package.json file `npm init`

	3. Install Express npm package `npm install express --save`

	4. Create the 'server.js' file

	5. Install Handlebars npm package `npm install express-handlebars --save`

	6. Install Method-override npm package `npm install method-override --save`

	7. Install Body-Parser npm package `npm install body-parser --save`

	8. Install MySQL npm package `npm install mysql --save`

	10. Setup all npm packages inside of `server.js` file

Model setup:

	1. Inside your `burger` Dir create a Dir named `models`

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

	1. Inside your `burger` Dir create a Dir named `controllers`

	2. Create the `routes.js` file

	3. Setup the routes(`GET`, `POST`, `UPDATE`) functions

	4. Import `routes.js` into `server.js`

	5. Inside `server.js` setup Express to use the imported routes.

# BONUS

	

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.