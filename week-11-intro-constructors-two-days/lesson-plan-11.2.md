# Pavan to do

add in timing

add in master objectives

# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Theme

Connecting Constructor Functions Together

# Objectives

* students will discover why the prompt npm package fails inside of a while loop and will be able to use an alternative strategy around it
* students will be able to use constructor functions to connect two different objects together

### Instructor do (15 minutes)

- write code in first_instructor_demonstration.1.js

- do not execute it.

### Everyone do (5 minutes)

"When I run this node file, will it fail?"

"I'll be calling on groups, so get ready - talk - learn! I could call on any one of you."


### Everyone do (10 minutes)

""

- get students to explain every line before it executes

ask students a better way

show students the way - prompt in function that recursively calls itself

### Instructor do (15 minutes)

* show students how to require a constructor function in Node.js *
look at 11.2-in-class-exercises/party_time (don't do it verbatim. Do it slowly using the steps below. We need students to come to conclusions.)

* make party_bus.js, dud.js
 
* make main.js like this.

```
var Dud = require('./dud.js');
var PartyBus = require('./party_bus.js');
```




* show students how you have to require a constructor function file inside of a constructor function file to get it to work

### Partners do 45 minutes

"Everyone open up sublime text and code."

"If you don't have sublime text open, then you're not doing your job."

* Walk around make sure people have sublime text open and are all coding * 

/*
Make a student constructor function.

1. In a new folder
2. make a new node file called constructorFun.js
3. auto create a package.json file with npm init
4. install the prompt package so that it's 
5. Inside constructorFun.js, make a constructor function called Student that creates a student object with properties of name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, and a function called canStudentHaveFun that checks if they have less than 10 detentions and above a 2 GPA. If they do then console.log out to the terminal that the student can have fun.
6. Prompt the user for a student's information, make a new Student Object with it, then invoke the canStudentHaveFun function.

Make a bus constructor function, that has the following functions:

*/

### Everyone do 25 minutes

Together lets make a Car constructor. So we are going to make a Car constructor. This car constructor should have a make, model, year, hp. It should be able to return its full name, ex: "1967 Ford Mustang". Its should be able to be supercharged, which will ramp up the hp by 150hp. 

```
var Car = function (make, model, year, hp) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.hp = hp;
	this.fullName = function(){
		// this.year + " " + this.make + " " + this.model
		return [this.year, this.make, this.model].join(" ")
	};
	this.supercharge = function(){
		this.hp += 150
		return this.
	};
}


var Person = function(firstName, lastName, age) {
	this.firstName = name;
	this.LastName = lastName;
	this.age = age;
	this.fullName = function(){
		return [this.firstName, this.lastName].join(" ")
	};
}

```

# You do

Lets tie these two things together!!! Lets make a Garage constructor. People are building car collections like hot cakes. The Garage constructor should have the following attributes: owner - which will be a Person object, cars - which will start as an empty array, it will hold Car objects. addCar - which will be a behavior that adds a new Car to the cars array. changeOwner - which will transfer ownership to a new Person. 


```

var Garage = function(owner) {
	this.owner = owner;
	this.cars = [];
	this.addCar = function(car){
		this.cars.push(car)
	};
	this.changeOwner = function(newOwner){
		this.owner = newOwner
	};
}
```

Review!


### Partners do (30 minutes)

# Create an Account

An account should have the following attributes:

- a balance (starts at 0) -> `balance`

An account should be able to:

- deposit money -> `deposit`
	- should deposit money into the current account
- withdraw money -> `withdraw`
	- should withdraw money from the current account but only if enough is available

# Create a Bank

A Bank should have the following attributes:

- `name` -> a name
- `address` -> an address
- `accounts` -> accounts
	+ - you decide how this should be represented (array vs object)
	+ - a bank starts with a checking AND savings account
- `information` -> display its information 
	- should return the banks name and address
- `makeTransaction` -> make a transaction
	+ - should accept three arguments -> a transaction type, an account type, and an amount
	+ - should use the appropriate account functions to perform a transaction (deposit or withdrawal)
	+ - should render the new balances
- `render` -> display the account balances
	+ - should take the current balances of the savings and checking accounts, then update the DOM display of the bank account balances


```
var Account = function() {
	this.balance = 0;
}

Account.prototype.deposit = function(amount) {
	if (amount > 0) {
		this.balance += amount;
	}
};

Account.prototype.withdraw = function(amount) {
	if (amount <= this.balance) {
		this.balance -= amount;
	}
};

var Bank = function(name, address) {
	this.name = name;
	this.address = address;
	this.accounts = {
		checking: new Account(),
		savings: new Account()
	};
};

Bank.prototype.information = function() {
	return this.name + '\n' + this.address;
};

Bank.prototype.makeTransaction = function(transaction, account, amount) {
	var currentAccount = this.accounts[account];
	currentAccount[transaction](parseInt(amount));
	this.render();
};

```


# Copyright
Rutgers Coding Boot Camp (C) 2015. All Rights Reserved.