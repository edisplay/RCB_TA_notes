# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Work independently or in a group on complex projects throughout the entire development lifecycle
* Implement complex logical conditions to meet an objective.
* Write clean code with proper variable names, indentation according to industry best practices

# Theme: 

JavaScript Scope + Functions/Objects Review

# INSTRUCTOR MUST COVER!!!

```
Parts 3 - 14
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

* students will learn about Lexical Environments
* students will be introduced to JavaScope Scope 
* students will understand `this` more in depth
* students will understand click events more indepth

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

### 5. Student do (5 minutes)
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
### 6. Everyone do (10 minutes)

* You are now going over the previous exercise 

* *Open the Code to the above exercise located in 4.2.3_scopeQuiz/scopeQuiz-solution.html.*

* *Call on a student to go over the previous exercise*

### 7. Instructor do (10 minutes)

* *Instructor demos. Look in folder.*

* *Open this file into chrome and demo it for the class: 4.2-in-class-exercises/4.2.4_this folder.*

* *Explain what each line of the code is doing*

### 8. Student do (10 minutes)

Student Exercise: Alice In Wonderland

* *Slack this out to class*

* The following code has lines and areas that's 'BLANKED OUT' by ony changing those areas and noting else, make the code work so when it's being run you get the expected result of:

 * Down the Rabbit Hole We Go.
 * A Pool of Tears Such A Tremendous Size.
 * The Causcs Race and a Long Tale animal.

```
      var chapterOne = {
        text: /*BLANKED OUT*/,
        read: function () {
          /*BLANKED OUT*/
        }
      };

      var chapterTwo = {
        text: "",
        read: function () {
          /*BLANKED OUT*/;
          var levelTwo = function() {
            /*BLANKED OUT*/ = "A Pool of Tears Such A Tremendous Size.";
          };
          /*BLANKED OUT*/;
          /*BLANKED OUT*/;
        }
      };   

      var chapterThree = {
        text : "",
        read: function() {
         /*BLANKED OUT*/s;
          /*BLANKED OUT*/ = function() {
            /*BLANKED OUT*/ = function() {
              /*BLANKED OUT*/ = "The Causcs Race and a Long Tale animal.";
              /*BLANKED OUT*/;
            };
            /*BLANKED OUT*/;
          };
          /*BLANKED OUT*/;
        }
      };

      this.text = "OPZ...";
```

### 9. Everyone do (10 minutes)

* You are now going over the previous exercise 

* *Open the Code to the above exercise located in 4.2.5_AliceInWonderland/wonderland.html.*

* *Call on a student to explain what's happening to go over the previous exercise*

###### 90 minutes have passed

##### BREAK ( 15 minutes ) - it is now 8:10 pm, you have 80 minutes left of class time

### 10. Instructor do (15 minutes)

* *Instructor demos. Look in folder.*
* *Open this file into chrome and demo it for the class: 4.2-in-class-exercises/4.2.6_ClickeEvents folder.*

* *go over the particular example line by line*

### 11. Partners do (10 minutes)

* *Have students talk to each other about what just happened. MAKE SURE THE CODE IS UP ON THE SCREEN!*

### 12. Student do (30 minutes)

Student Excercise: Color Correct Game

* *Explain and demo the game* 
* *Open this file into chrome and demo it for the class: 4.2-in-class-exercises/4.2.7_colorCorrect folder.*

* *Slack this out to class*

```
* You are tasked to create a web based game using jQuery
	* The page must render out a box using CSS at the start of the game.
	* Inside the box there is word inside of it, the word is the name of random color.
	* The box and the word is rendered with a color that's not the name of the random color.
	* For example if the word is 'red', the color of the word itself and the box would be rendered in 'blue'
	* The goal of the game is to match the word in the box to the correct color

* The player must correctly click on the word that matches it's color to the word of the box word.
	* Example: a box word that's color red with the word 'blue'
	* The user must click on the a word that's color 'blue' doesn't matter what the word is 
	* If the player does this correctly they win the game if not they lose
	* Whenever a player win or lose the game the game restarts with a new random box word and randomize the words
	* Make sure the box word cannot be rendered in it's own color.
	* You must have at 8 colors
	* BONUS: keep track of the score on how many wins and loses the player have.

// Use this code to randomize the array if your array name is 'words'
// words.sort(function() {return .5 - Math.random() });

* See demo for more details.
```

### 13. Everyone do (15 minutes)

* *Open the Code to the above exercise located in 4.2-in-class-exercises/4.2.7_colorCorrect folder.*

* *Call on a student to go over the previous exercise*

# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.