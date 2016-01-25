#Week of 12 HW: Node.js & mySQL

### Introduction

* You will be creating a Zoo app.

* Building it with an object.

* Using an mySQL database

* It will be a command line node app that will take in prompted text as an input.


## Part 0: Setup

Make sure to download or aquire the file
```
zooDB.sql
```
Install npm packages

```
npm install prompt --save
npm install mysql --save
```
Start mySQL server
`net start mysql`
Make sure you are Admin when start the mySQl server
And make sure you have the correct instance name my instance name is `mysql`

*Importing the database
launch: MySQL 5.7 Command Line Client
enter your password
```
CREATE DATABASE myTestDB;
```

launch: gitbash
Example command:
```
C:/xampp/mysql/bin/mysql –u root -p myTestDB < C:/zooDB.sql
```
In this example mySQL is connect via XAMPP and mysql database is located with in path:

-u for your mySQL user name, my user name "root", it may also ask for your password.

myTestDB is the name of the DB you created
zooDB is located in C folder

Test to see if import worked, inside MyySQL Client:
Use myTestDB

run the following command
```
SELECT * FROM careTaker;
```
You should get back 99 rows in set.

With the database imported, you are ready to create the node app.

## Part 1: Creating the Node.js connection to mySQL

* create a file named in side of the app folder if you already have one
```
index.js
```
* Start by creating a variable named mysql`
	* set it to the function `require()` with an input string of 'mysql'
* Create a global variable named `connection`
	* set it to the function `mysql.createConnection()` with an input object
	{
	host: 'nameOfYourHost',
	user: 'YourUserName',
	password: 'YourPassword',
	database: 'myTestDB'
	}

* Call the function `connection.connect()` with a function as it's input
	* an anonymous function with an input `err` 
	* if err `console.error('err connection ' + err.stack)`;
	* return

- [x] *Hint: Look up the NPM package mysql for more info*

* Create a variable named `prompt`
	* set it to the function `require()` with an input string of 'prompt'
	* call the function `prompt.start()`
	* call the function `prompt.message` set it to an empty string ""

- [x] *Hint: Look up the NPM prompt mysql for more info*

Launch your node App
```
node index.js
```

Nodemon doesn't play nice with prompt so beware if you are testing with nodemon

## Part 2: Creating the zoo object

* Start by creating an object `zoo`
	* The welcome message function
	* Create a function inside of `zoo` named `welcome` with no input
		* console logs a welcome message "Welcome to the Zoo And Friends App~!"
	
	* The menu message function
	* Create a function inside of `zoo` named `menu` with no input
		* console logs Enter (A): ------> to Add a new animal to the Zoo!
		* console logs Enter (U): ------> to Update info on an animal in the Zoo!
		* console logs Enter (V): ------> to Visit the animals in the Zoo!
		* console logs Enter (D): ------> to Adopt an animal from the Zoo!
		* console logs Enter (Q): ------> to Quit and exit the Zoo!
		- [x] *Hint: To make it pretty when displaying make sure to console log a empty line after every console log with a message*

	* The menu message function
	* Create a function inside of `zoo` named `add` with one input name it `input_scope`
		* Create a variable named `currentScope` set it to `input_scope`

		- [x] *Hint: The zoo object will have many function within it because the `prompt` npm only works when calling it as a function we are going to lose scope many-a-times while the app is being used it's aways safer to store the current `this` as we pass from function to function and back*

		* console logs "To add an animal to the zoo please fill out the following form for us!"
		* calls the function `prompt.get()` with two inputs
			* first input: an array of all strings `->`, `name`, `type`, `age`
			* second input: an anonymous function with an input (`err`, `result`)
				*  call the function `connection.query()` with a string in the form of a mySQL insert command into the database based on the user's input into the correct table

				- [x] *Hint: Check the `hw_readme.md` table for what the database might need, also what you asked the user for input*

					* call the function `currentScope.menu()`
					* call the function `currentScope.promptUser()`

		- [x] *Hint: What we are doing here is first calling the prompt function asking user to give us some inputs, by saving the result in `result, inside the prompt function we are making a connection the mySQL server and doing an insert commmand using the user input as our data, inside of the connection function we call promptUser function to go back to the menu of app*

		- [x] *Hint: NPM mysql has a sligtly different syntax than normal mySQL commands, look up mysql NPM for more info*

	* The visit message function
		* Create a function inside of `zoo` named `visit` with no input
		* console logs Enter (I): ------> to You know the animal by it's Id visit only it!
		* console logs Enter (N): ------> to You know the animal by name visit only it!
		* console logs Enter (A): ------> to Count all the animals in all the zoo locations!
		* console logs Enter (C): ------> to Count number of animal in zoo based on city!
		* console logs Enter (O): ------> to Count every animal in zoo with the same type!
		* console logs Enter (Q): ------> to Quit to main menu!

	* The view function
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
					- call `currentScope.visit()`
					- call `currentScope.view(currentScope)`

	* The type function
		* Create a function inside of `zoo` named `type` with one input name it `input_scope`
		* Create a variable named `currentScope` set it to `input_scope`
		* console log Enter animal type to check out many those we got.
		* calls the function `prompt.get()` with two inputs
			* first input: an array of all strings `->`, `animal_type`
			* second input: an anonymous function with an input (`err`, `result`)
				*  call the function `connection.query()` with a string in the form of a mySQL select from and where command, all the animal of the user inputed type from the correct table
					* call the function `currentScope.visit()`
					* call the function `currentScope.view(currentScope)`

	* The care function
		* Create a function inside of `zoo` named `care` with one input name it `input_scope`
		* Create a variable named `currentScope` set it to `input_scope`
		* console log Enter city name NY/SF.

		- [x] *Hint: Notice that this database has 2 tables and are going into the realms of dealing with both database at the same time*

		* calls the function `prompt.get()` with two inputs
			* first input: an array of all strings `->`, `city_name`
			* second input: an anonymous function with an input (`err`, `result`)
				*  call the function `connection.query()` with a string in the form of a mySQL select the number of animal that all the careTakers from a city takes care of
					* call the function `currentScope.visit()`
					* call the function `currentScope.view(currentScope)`

	* The animId function
		* Create a function inside of `zoo` named `animId` with one input name it `input_scope`
		* Create a variable named `currentScope` set it to `input_scope`
		* console log Enter ID of the animal you want to visit.
		* calls the function `prompt.get()` with two inputs
			* first input: an array of all strings `->`, `animal_id`
			* second input: an anonymous function with an input (`err`, `result`)
				*  call the function `connection.query()` with a string in the form of a mySQL select from and where command, the target animal of the user inputed id from the correct table
					* call the function `currentScope.visit()`
					* call the function `currentScope.view(currentScope)`

	* The name function
		* similar to the animId function but finds the animal by name instead of id

	* The all function
		* similar to the type function but finds the count of total animals instead of count of total animals of a type

	* The update function
		* Create a function inside of `zoo` named `update` with one input name it `input_scope`
		* Create a variable named `currentScope` set it to `input_scope`
		* calls the function `prompt.get()` with two inputs
			* first input: an array of all strings '--->','ID','new_name','new_age','new_type','new_careTaker_ID'
			* second input: an anonymous function with an input (`err`, `result`)
				*  call the function `connection.query()` with a string in the form of a mySQL updates the info on the animal finding it with a where animal_id
					* call the function `currentScope.menu()`
					* call the function `currentScope.promptUser()`

	* The adopt  function
		* Create a function inside of `zoo` named `adopt` with one input name it `input_scope`
		* Create a variable named `currentScope` set it to `input_scope`	
		* calls the function `prompt.get()` with two inputs
			* first input: an array of all strings `->`, `animal_id`
			* second input: an anonymous function with an input (`err`, `result`)
				*  call the function `connection.query()` with a string in the form of a mySQL delete from and where command, the target animal of the user inputed id from the correct table and delete it
					* call the function `currentScope.visit()`
					* call the function `currentScope.view(currentScope)`

	* The promptUser function
		* Create a function inside of `zoo` named `promptUser` with no input
		* create a varibale named `self` set it to `this`
		* calls the function `prompt.get()` with two inputs
			* first input: an array of all strings `input`
			* second input: an anonymous function with an input (`err`, `result`)
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
					- call `self.promptUser()`

	* The exit function
		* Create a function inside of `zoo` named `exit` with no input
		* console log Thank you for visiting us, good bye~!
		* call the `process.exit()` function

	* The open function
		* Create a function inside of `zoo` named `open` with no input
		* call `this.welcome()`
		* call `this.menu()`
		* call `this.promptUser()`

call the function `zoo.open()`




# Copyright
Rutgers Coding Boot Camp (C) 2016. All Rights Reserved.