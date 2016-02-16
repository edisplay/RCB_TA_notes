# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Work independently or in a group on complex projects throughout the entire development lifecycle
* Implement complex logical conditions to meet an objective.
* Write clean code with proper variable names, indentation according to industry best practices

# Theme: JavaScript Scope and this

# INSTRUCTOR MUST COVER!!!

```
Parts 4 - 14
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

* students will learn about Lexical Environments
* students will be introduced to JavaScope Scope 
* students will understand `this` more indepth
* students will understand click events more indepth

PART ONE:

### 1. Student do (20 minutes)
Review Exercise: Fridge Magnets

* *Open this file into chrome and demo it for the class: 4.2-in-class-exercises/4.2.1_fridgeMagnets/fridge_solution folder.*

* *Give the files from the starter folder located in (4.2-in-class-exercises/fridge_starter) to students*
* *Slack this out to class*

```
* You are provided with an HTML and an image
* You are tasked to create a web page that lets you create your own fridge message
	* The page must have all the letters of the alphabet and an underscore as buttons
	* Whenever a button is hit, a letter will display on the fridge
	* Make a clear button as well that will remove all the letters on the fridge
	* Bonus make the letter different colors
```

### 2. Everyone do (10 minutes)

* *Open the Code to the above exercise located in 4.2-in-class-exercises/4.2.1_fridgeMagnets folder.*

* *Call on a student to go over the previous exercise*

### 3. Instructor do (5 minutes)
Intro to Lexical Environments:

* *DO NOT SPEND MORE THAN 5 MINUTES ON THIS. Students are going to be lost. Please don't drone on. Don't go into what lexical scopes are and how they are different from other programming languages. DO NOT CONFUSE THEM!*

> Scope goes up in JS.

> First Scope checks inside of the function, and if it doesn't find it, it goes up a level.

> You could always check what the scope is by checking what `this` is.

> If you don't know what the scope is, just console log `this`, or throw a break point and type `this` in and press enter.

> in JavaScript, the technical term to describe scope is lexical scope


### 4. Everyone do (15 minutes)

* *Instructor demos. Look in folder.*
* *Open this file into chrome and demo it for the class: 4.2-in-class-exercises/4.2.2_lexicalScope folder.*


* *direct students to stand up and come to the front* 
* *have students go to one side of the room if they think something is going to happen and have students go to the other side of the room if they think something else will happen* 

* *after students make their decision*

* *go over the particular example line by line and using debugger*

### 5. is gone now

### 6. Student do (5 minutes)
Student Exercise: scopeQuiz

* *Slack this out to class*

Without running this code, write down what the code is going to in each example and explain why.

```
/* What happenes when the code is ran! */

//---------- ---------- ---------- ----------
//question 1
var myVar = 1;

function a() {
	var myVar = 5 - 3;
	b();
	alert(myVar);
}

function b() {
	alert(myVar);
}
a();

/* Because... */

//---------- ---------- ---------- ----------
//question 2
var myVar = 1;
function d() {
	function e() {
		alert(myVar);
	}
	var myVar = 2;
	e();
};
d();

/* Because... */

//---------- ---------- ---------- ----------
//question 3: Bonus
var myVar = 1;
function c() {
  this.myVar = 15;
  alert(myVar);
  var myVar = 3;
  alert(myVar);
}
c();

/* Because... */
```
### 7. Everyone do (10 minutes)

* You are now going over the previous exercise 

* *Open the Code to the above exercise located in 4.2.3_scopeQuiz/scopeQuiz-solution.html.*

* *Call on a student to go over the previous exercise*

### 8. Instructor do (5 minutes)

* *Instructor demos. Look in folder.*

* *Open this file into chrome and demo it for the class: 4.2-in-class-exercises/4.2.4_this folder.*

* *Explain what each line of the code is doing*

### 9. partners do (10 minutes)
Student Exercise: scopeQuiz

### 10. Everyone do (10 minutes)

* You are now going over the previous exercise 

* *Open the Code to the above exercise located in 4.2.5_AliceInWonderland/wonderland.html.*

* *Call on a student to go over the previous exercise*

###### 85 minutes have passed

##### BREAK ( 15 minutes ) - it is now 8:10 pm, you have 80 minutes left of class time

### 11. Instructor do (10 minutes)

Demo: click events

### 12. Partners do (5 minutes)


### 14. Everyone do (15 minutes)

click events 

### 14. Everyone do (10 minutes)


### 11. Instructor do (5 minutes)


### 16. Student do (20 minutes)


Student Excercise: Lab witches


### 17. Instructor do (10 minutes)


# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.