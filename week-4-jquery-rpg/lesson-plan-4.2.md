# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Work independently or in a group on complex projects throughout the entire development lifecycle
* Implement complex logical conditions to meet an objective.
* Write clean code with proper variable names, indentation according to industry best practices

# Theme: JavaScropt Scope

# INSTRUCTOR MUST COVER!!!

```
Parts 7 - 14
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

* students will learn about Lexical Environments
* students will be introduced to JavaScope Scope 
* students will understand `this` more indepth
* students will understand callbacks more indepth

PART ONE:

### 1. Student do (20 minutes)
Review Exercise: Fridge Magnets

* *Open this file into chrome and demo it for the class: 4.2-in-class-exercises/4.2.1_fridgeMagnets/fridge_solution folder.*

* *Slack this out to class*

```
* You are provided with an HTML and an image
* You are tasked to create a web page that lets you create your own fridge message
	* The page must have all the letters of the alphabet and an underscore as buttons
	* Whenever a button is hit, a letter will display on the fridge
	* Make a clear button as well that will remove all the letters on the fridge
	* Bonus make the letter different colors
```

* *Give the files from the starter folder located in (4.2-in-class-exercises/fridge_starter) to students*

### 2. Everyone do (10 minutes)

* *Open the Code to the above exercise located in 4.2-in-class-exercises/4.2.1_fridgeMagnets folder.*

* *Call on a student to go over the previous exercise*

### 3. Instructor do (5 minutes)
Intro to Lexical Environments:

> Explain what Lexical Environments is.

> Lexical environments hold variables and parameters. The currently active environment is managed via a stack of execution contexts.
> Functions remember the scope they were defined in. 
> When a function is invoked, a new environment is created for is arguments and local variables. 

> English: Where your code is written in your script is important(as in term of line number), because JavaScript reads the code one line at a time in order, when the code is being read by the JavaScript engine. 

> However when the code is being run, it's the execution context that determines what is really going happen, JavaScript creates these "enviroments" that contains variables where functions can grab and use it. So functions inside of the enviroment can use variables in the environment.

> But when a function is called and invoked, it can create it's own environment that can contain variables.

### 4. Instructor do (10 minutes)

* *Instructor demos. Look in folder.*
* *Open this file into chrome and demo it for the class: 4.2-in-class-exercises/4.2.2_lexicalScope folder.*

* *Explain what each line of the code is doing*

### 5. Partners Do (5 minutes)

* *MAKE SURE THE CODE FROM THE PREVIOUS DEMO IS UP ON THE SCREEN!*
* *Have student talk to each other about what just happened.*

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

* *Open the Code to the above exercise located in 4.2.3 folder.*

* *Call on a student to go over the previous exercise*

### 8. Instructor do (5 minutes)

* *Instructor demos. Look in folder.*
* *Open this file into chrome and demo it for the class: 4.2-in-class-exercises/4.2.4_this folder.*

* *Explain what each line of the code is doing*

### 9. partners do (10 minutes)


### 10. Everyone do (10 minutes)


###### 85 minutes have passed

##### BREAK ( 15 minutes ) - it is now 8:10 pm, you have 80 minutes left of class time

### 11. Instructor do (15 minutes)

Demo: callbacks

### 12. Partners do (5 minutes)


### 13. Instructor do (5 minutes)


### 14. Student do (15 minutes)

Student Excise: callbacks

### 15. Everyone do (10 minutes)


### 16. Instructor do (2 minutes)

Student Excise: Lab witches

### 17. Student do (5 minutes)


### 18. Everyone do (3 minutes)


### 19. Student do (15 minutes)


### 20. Everyone do (10 minutes)


### 21. Instructor Do - (5 minutes)



# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.