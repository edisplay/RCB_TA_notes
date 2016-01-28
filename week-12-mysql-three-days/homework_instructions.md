#Week of 12 HW: Node.js & MySQL

### Introduction

* You will be creating a Zoo app.

* You will organize your code into a JavaScript object.

* You will use MySQL and the MySQL NPM Package.

* You will make a command line node app that will take in prompted text as input.

* You will become a PRO at SCOPING and Closures in JavaScript

* *See demo of how this App works*

### Summary 

Skills/Technologies you'll need: C-R-U-D, Node.js, MySQL NPM Package, Prompt NPM Package

This homwork will exercise your ability to:

1. see all the records 
2. delete a single record based off of the primary key 
3. update a single record based off of the primary key 
4. delete a record based off of the primary key 
5. return a certain amount of records based off a where clause on a certain column 
6. using a join

##### Database structure (what your database might look like)

* Don't replicate this. You will be importing the database with the instructions below.
* This is just to show you what the structure of the tables looks like.

Table: caretakers

| id | zoo | name  | 
|----|-----|-------|
|  1 |  NY |   John|
|  2 |  NY |   Mary|
|  3 |  SF |   Sara|

Table: animals

| id | care_taker_id |  name | type  | age |
|----|--------------|-------|-------|-----|
|  1 |      1       |  Bobo |  Bear |  4  |
|  2 |      1       |  Link |  Lion |  3  |
|  3 |      2       |  CiCi |  Cat  |  1  |


### Part 0: Setup

1. Make sure to download or aquire the following file:

	```
	zooDB.sql
	```

	* download here
			* https://drive.google.com/file/d/0Bz0Wzew04n0ub2NDSmxsZ201dkk/view

2. Initialize your package.json file

3. Install npm packages

	```
	npm install prompt --save
	npm install mysql --save
	```

4. If you haven't already start your MySQL server

	* Make sure you are an admin when you start the MySQL server

	* If you're on Windows, make sure you are on the correct instance name (typically it's `mysql`)

5. Now create and import the database

	```
	CREATE DATABASE zoo_db;
	```


You can't do this in the MySQL console, you have to do this in the terminal (for mac), git bash (for windows)

on windows the commmand might look like this:
```
C:/xampp/mysql/bin/mysql –u root -p zoo_db < C:/zooDB.sql
```

on mac the command might look like this:
```
/usr/local/var/mysql/ -u root -p zoo_db < /Users/pavankatepalli/Downloads/zooDB.sql
```

##### Understanding the previous command

In the previous command, the first part is where MySQL is located on your computer, -u is for your MySQL user name (in the previous command it's "root"), -p is for your password (in the previous command we have a blank password). 

It may still ask for your password after that, and if its blank, then press enter.

The third part (/Users/pavankatepalli/Downloads/zooDB.sql) is where the sql file is located on your computer. This contains all the data (tables and rows inside those tables) for your database.

##### If you have trouble finding where MySQL is located on your computer, then do this:

* run this command in the MySQL console 

```
SHOW VARIABLES WHERE Variable_name LIKE '%dir';
```
* The datadir is where MySQL is located

Alternatively, on a mac you can do this in the terminal to find out where MySQL is located:

```
type -a mysql
```

##### *Hint: How to tackle access denied error*

if you get this:

```
mysql> create database zoo_db;
ERROR 1044 (42000): Access denied for user ''@'localhost' to database 'zoo_db'
```

then do this

```
mysql -u root -p
```

and then press enter for your password

and then do the importing above.


### Part 0.5: Test

Test to see if import worked, inside the MySQL console

Get into the database

run the following command
```
SELECT * FROM caretakers;
```

You should get back data.

With the database correctly imported, you are ready to create the node app.

### Part 1: Creating the Node.js connection to MySQL

* create a file named index.js inside of your homework folder for this assignment

```
index.js
```

* *Hint: Look up the NPM package mysql for more info*

Put the following at the top of your index.js file:

```
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'nameOfYourHost',
	user: 'YourUserName',
	password: 'YourPassword',
	database: 'zoo_db'
});

```
* modify the above credentials to fit your machine. `'nameOfYourHost'` could be `'localhost'`, `'YourUserName'` could be `'root'`, `'YourPassword'` could be `''`.	

##### Explanation of the above code

* You are using the mysql npm package in your index.js file
	* you have a global variable called mysql
		* you set it equal to `require()` with an input string of 'mysql'

* You created a global variable named `connection`
	* and set it equal to `mysql.createConnection()` with an input object of your database credentials.

Add the following code in to check if your connection to the database works or not and also make the connection to your database:

```
	connection.connect(function(err) {
	    if (err) {
	        console.error('error connecting: ' + err.stack);
	        return;
	    };
	    //console.log('connected as id ' + connection.threadId);
	});
```

* Create a variable named `prompt`
	* set it to `require()` with an input string of 'prompt'
	* call this `prompt.start()`
	* call this `prompt.message` and set it to an empty string ""

Launch your node app
```
node index.js
```

* ***Hint: Don't use Nodemon. Nodemon doesn't play nice with prompt so beware if you are testing with Nodemon.***

### Part 2: Creating the zoo object

* Start by creating a variable `zoo` and make it an object
	* The welcome message function
		* Create a key named `welome` inside of the `zoo` object 
			* The function should console log the following welcome message: "Welcome to the Zoo And Friends App~!"
	
	* The menu message function
	* Create a key named `menu` inside of the `zoo` object
		* console logs Enter (A): ------> to Add a new animal to the Zoo!
		* console logs Enter (U): ------> to Update info on an animal in the Zoo!
		* console logs Enter (V): ------> to Visit the animals in the Zoo!
		* console logs Enter (D): ------> to Adopt an animal from the Zoo!
		* console logs Enter (Q): ------> to Quit and exit the Zoo!

			* ***Hint: To make it pretty when displaying make sure to console log a empty line after every console log with a message***

	* ***Hint: `this` will change many times in your app, because we are using the npm package prompt, and now we're using prompts within prompts, so, you should be storing `this` into a variable before you use `this` inside of a prompt callback function. Then you should be using that variable in the next function. This will get clearer as we move on.***
	* The menu message function
		* Create a key inside of `zoo` named `add` that points to an anonymous function with one argument named `input_scope`
			* Inside that anonymous function
				* Create a variable named `currentScope` set it to `input_scope`
				* console log "To add an animal to the zoo please fill out the following form for us!"
				* calls the function `prompt.get()` with two inputs
					* first input: an array of all strings `->`, `name`, `type`, `age`
					* second input: an anonymous function with an input (`err`, `result`)
						* inside of that anonymous function of prompt.get
							*  use the function `connection.query()` to take the user's input and insert it into the animal's table

							* now send the user back to the start menu
								* this will start working on later on.
									* call `currentScope.menu()`
									* call `currentScope.promptUser()`

							* ***Hint: What we're doing here is first calling the prompt function asking the user to give us some inputs, and prompt gives that in the result argument of the callback function. Then inside the anonymous function in prompt.get, we are making a connection to the MySQL database and doing an insert commmand using the user input as our data. Then at the end, we are calling functions to get back to our start menu prompt***

							* ***Hint: The NPM mysql package has slightly different syntax than normal MySQL commands, look up the mysql NPM package for more info***

	* The visit message function
		* Create a key inside of the `zoo` object named `visit`, that points to an anonymous function
			* inside the anonymous function
				* console log Enter (I): ------> do you know the animal by it's id? We will visit that animal!
				* console log Enter (N): ------> do you know the animal by it's name? We will visit that animal!
				* console log Enter (A): ------> here's the count for all animals in all locations!
				* console log Enter (C): ------> here's the count for all animals in this one city!
				* console log Enter (O): ------> here's the count for all the animals in all locations by the type you specified!
				* console log Enter (Q): ------> Quits to the main menu!
					* this will start working on later on.
						- call `currentScope.visit()`
						- call `currentScope.view(currentScope)`

	* The view function
		* Create a key inside of the `zoo` object named `view`, that points to an anonymous function
			* Create a function inside of `zoo` named `add` with one input name it `input_scope`
			* Create a variable named `currentScope` set it to `input_scope`
			* console log Please choice what you like to visit!
			* calls the function `prompt.get()` with two inputs
				* first input: an array of all strings `->`, `visit`
				* second input: an anonymous function with an input (`err`, `result`)
					* if the `result.visit` == "Q"
						-call the `currentScope.menu()` function
					* else if the `result.visit` == "O"
						-call the `currentScope.type(input_scope)` function
					* else if the `result.type` == "I" 
						-call the `currentScope.type(input_scope)` function
					* else if the `result.animId` == "N"
						-call the `currentScope.name(input_scope)` function
					* else if the `result.name` == "A"
						-call the `currentScope.all(input_scope)` function
					* else if the `result.all` == "C"
						-call the `currentScope.care(input_scope)` function
					* else
						- console log Sorry didn't get that, come again?
							* this will start working on later on.
								- call `currentScope.visit()`
								- call `currentScope.view(currentScope)`

	* The type function
		* Create a key inside of the `zoo` object named `type`, that points to an anonymous function that has one argument named `input_scope`
			* Create a variable named `currentScope` set it to `input_scope`
			* console log Enter animal type to find how many animals we have of those type.
			* calls the function `prompt.get()` with two inputs
				* first input: an array of strings `->`, `animal_type`
				* second input: an anonymous function with an input (`err`, `result`)
					* inside that anonymous function in prompt.get
						*  call the function `connection.query()` and give a count of the animals of this type

						* now send the user back to the start menu
							* this will start working on later on.
								* call `currentScope.menu()`
								* call `currentScope.promptUser()`

	* The care function
		* Create a function inside of `zoo` named `care` with one input name it `input_scope`
		* Create a variable named `currentScope` set it to `input_scope`
		* console log Enter city name NY/SF.

		* ***Hint: Hint: Notice that this database has 2 tables and are going into the realms of dealing with both database at the same time***

		* calls the function `prompt.get()` with two inputs
			* first input: an array of all strings `->`, `city_name`
			* second input: an anonymous function with an input (`err`, `result`)
				*  call the function `connection.query()` with a string in the form of a mySQL select the number of animals that all the caretakers from the specific user inputed city
					* call `currentScope.visit()`
					* call `currentScope.view(currentScope)`

	* The animId function
		* Create a key inside of the `zoo` object named `animId` and point it to an anonymous function with one input name it `input_scope`
			* inside that anonymous function do the following:
				* Create a variable named `currentScope` set it to `input_scope`
				* console log Enter ID of the animal you want to visit.
				* calls the function `prompt.get()` with two inputs
					* first input: an array of all strings `->`, `animal_id`
					* second input: an anonymous function with an input (`err`, `result`)
						* inside that anonymous function of the prompt.get do this
							*  call `connection.query()` and get the data for the particular animal of that id that the user typed in.
								* call `currentScope.visit()`
								* call `currentScope.view(currentScope)`

	* The name function
		* similar to the animId function but finds the animal by name instead of the animal id

	* The all function
		* similar to the type function but finds the count of total animals instead of count of total animals of a type

	* The update function
		* Create a key inside of the `zoo` object named `update` and point it to an anonymous function with one input name it `input_scope`
			* inside that anonymous function do the following:
				* Create a variable named `currentScope` set it to `input_scope`
				* calls the function `prompt.get()` with two inputs
					* first input: an array of all strings '--->','id','new_name','new_age','new_type','new_caretaker_id'
					* second input: an anonymous function with an input (`err`, `result`)
						*  call the function `connection.query()` and update that particular animal with the input the user provided
							* call `currentScope.menu()`
							* call `currentScope.promptUser()`

	* The adopt function
		* Create a key inside of the `zoo` object named `adopt` and point it to an anonymous function
			* inside that anonymous function do the following:
				* Create a variable named `currentScope` set it to `input_scope`	
				* call the function `prompt.get()` with two inputs
					* first input: an array of all strings `->`, `animal_id`
					* second input: an anonymous function with an input (`err`, `result`)
						* inside that anonymous function of prompt.get
							*  call `connection.query()` and delete it from the animals table
								* call `currentScope.visit()`
								* call `currentScope.view(currentScope)`

	* The promptUser function
		* Create a key inside of the `zoo` object named `promptUser` and point it to an anonymous function
			* inside that anonymous function do the following:
				* create a variable named `self` set it to `this`
				* call the function `prompt.get()` with two inputs
					* first input: a string with the value of `input`
					* second input: an anonymous function with an input (`err`, `result`)
						* inside that anonymous function
							* if the `result.visit` == "Q"
								-call the `self.exit()` function
							* else if the `result.visit` == "A"
								-call the `self.add(self)` function
							* else if the `result.animId` == "V"
								-call the `self.visit()` function
								-call the `self.view(self)` function
							* else if the `result.name` == "D"
								-call the `self.adopt(self)` function
							* else
								- console log Sorry didn't get that, come again?
								- do not call `self.promptUser()`
								- do not call `self.menu()`

	* The exit function
		* Create a key inside of the `zoo` object named `exit` and point it to an anonymous function
			* inside that anonymous function do the following:
				* console log Thank you for visiting us, good bye~!
				* call `process.exit()` function

	* The open function
		* Create a key inside of the `zoo` object named `open` and point it to an anonymous function
			* inside that anonymous function do the following:
				* call `this.welcome()`
				* call `this.menu()`
				* call `this.promptUser()`

### After your zoo object is completed

call the function `zoo.open();` after your object in index.js.


# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.
