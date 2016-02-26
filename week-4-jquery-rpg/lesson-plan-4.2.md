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

JavaScript Scope + jQuery Review

# INSTRUCTOR MUST COVER!!!

```
Parts 1 - 6
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

* students will demonstrate their knowledge of scope in JavaScript by solving hard scoping problems (through functions and objects)
* students will use click events with jQuery
* students will create virtual elements with jQuery and add them to the html
* students will see and explain to each other how to build a simple crystal game

### 1. Instructor do (20 minutes)

> now i'll build a mini version of the crystal game

* *please just open up each file, instead of coding it out.* 

* *spend time going over each step.* 

* *stop at least 4 times and have students explain the code on the board to their partners.*

* *open up 4.2-in-class-exercises/1-instructor-do-simple_crystal_game/1.html, demonstrate it, explain it*
* *open up 4.2-in-class-exercises/1-instructor-do-simple_crystal_game/2.html, demonstrate it, explain it*
* *open up 4.2-in-class-exercises/1-instructor-do-simple_crystal_game/3.html, demonstrate it, explain it*
* *open up 4.2-in-class-exercises/1-instructor-do-simple_crystal_game/4.html, demonstrate it, explain it*
* *open up 4.2-in-class-exercises/1-instructor-do-simple_crystal_game/5.html, demonstrate it, explain it*
* *open up 4.2-in-class-exercises/1-instructor-do-simple_crystal_game/6.html, demonstrate it, explain it*
* *open up 4.2-in-class-exercises/1-instructor-do-simple_crystal_game/7.html, demonstrate it, explain it*
* *open up 4.2-in-class-exercises/1-instructor-do-simple_crystal_game/8.html, demonstrate it, explain it*
* *open up 4.2-in-class-exercises/1-instructor-do-simple_crystal_game/9.html, demonstrate it, explain it*
* *open up 4.2-in-class-exercises/1-instructor-do-simple_crystal_game/10.html, demonstrate it, explain it*
* *open up 4.2-in-class-exercises/1-instructor-do-simple_crystal_game/11.html, demonstrate it, explain it*

* *slack the code from 11.html to students*

### 2. Partners do (10 minutes)

* *if you haven't already slack the code from 4.2-in-class-exercises/1-instructor-do-simple_crystal_game/11.html to students*

>go over the code with your partners. Explain every line to each other

### 3. Partners do (20 minutes)
Exercise: Fridge Magnets

* *Open this file into chrome and demo it for the class: 4.2-in-class-exercises/3-partners-do_fridgeMagnets/fridge_solution folder.*

* *Give the files from the starter folder located in (4.2-in-class-exercises/3-partners-do_fridgeMagnets/fridge_starter) to students*
* *Slack this out to class*

```
* You are provided with HTML and an image
* You will use jQuery
* Make sure the fridge image is inside the same folder as your html file
* Follow the steps inside the JavaScript portion of the html
* You are tasked to create a web page that lets you create your own fridge messages
	* The page must have all the letters of the alphabet and an underscore as buttons
	* Whenever a button is hit, a letter will display on the fridge
	* Make a clear button as well that will remove all the letters on the fridge
```

### 4. Everyone do (10 minutes)

* *Open the Code to the above exercise located in 4.2-in-class-exercises/3-partners-do_fridgeMagnets/fridge_solution/fridge.html into Sublime Text*

* *Call on students to go over the code on the screen*

### 5. Instructor do (5 minutes)
Intro to Lexical Environments:

* *DO NOT SPEND MORE THAN 5 MINUTES ON THIS. Otherwise students are going to get lost. Don't go into what lexical scope is and how it is different from other programming languages. DO NOT CONFUSE THEM!*

> Scope goes up in JS.

> First Scope checks inside of the function, and if it doesn't find it, it goes up a level.

> You could always check what the scope is by checking what `this` is.

> If you don't know what the scope is, just console log `this`, or throw a break point and type `this` in and press enter.

> in JavaScript, the technical term to describe scope is lexical scope

> Important thing to remember is that scope goes up in JavaScript

### 6. Everyone do (30 minutes)

* *Instructor demos. Look in folder.*
* *Open this file into Sublime Text (not the browser): 4.2-in-class-exercises/6-everyone-do_lexicalScope/1.html*
* *after 1 is done, then open 2, and so on...*

* *direct students to stand up and come to the front* 
* *have students go to one side of the room if they think something is going to happen and have students go to the other side of the room if they think something else will happen* 

* *after students make their decision, execute the code in browser*

* *go over the particular example line by line and using debugger*

* *explain the following multiple times*

> in javascript scope goes up

* *explain the following after the 7th example*
  
> regarding functions
  
> Inside your function, if you do console.log(this) it'll be whatever your function is inside

> so if your function is inside the window then 

> inside the function, this 

> will be the window

> if your function is inside of an object then

> inside the function, this 

> will be the object






# if time left over

push homework solutions for week 3 to in class repo repo

ask students to open up the psychic game and go over it with their partners step by step.

if done, then go over the hangman solutions step by step. There are two! The students can see two different solutions for the homework.





# Don't do these until Pavan goes over them

### 7. Student do (10 minutes)
Student Exercise: scopeQuiz

* *Get students to come to the front. Put a question up on the board - Ask them to pick up a side based on what value they think will alert*

Without running this code, write down what the code is going to in each example and explain why.

```
//---------- ---------- ---------- ----------
//question: when a() executes what values alert to the screen? Why?

var myVar = 1;
alert(myVar) // what will this alert

function a() {
	var myVar = 5 - 3;
	b();
	alert(myVar);
}

function b() {
	alert(myVar);
}

a();

//---------- ---------- ---------- ----------
//question: when d() executes what values alert to the screen? Why?

var myVar = 1;

function d() {

	function e() {
		alert(myVar);
	}

	var myVar = 2;

	e();

};

d();

//---------- ---------- ---------- ----------
//question:  answer the questions below

var myVar = 1;

function c() {
  alert(this); //Will this be the window? Or will it be the function?

  this.myVar = 15;

  alert(myVar); //will this alert 15? Or something else?

  var myVar = 3;

  alert(myVar); //will this alert 1, 15 or 3?
}

c();

alert(myVar); //will this be 1, 15 or 3?

```
### 8. Everyone do (10 minutes)

* You are now going over the previous exercise 

* *Open the Code to the above exercise located in 4.2.3_scopeQuiz/scopeQuiz-solution.html.*

* *Call on a student to go over the previous exercise*

### 9. Instructor do (10 minutes)

* *Instructor demos. Look in folder.*

* *Open this file into chrome and demo it for the class: 4.2-in-class-exercises/4.2.4_this folder.*

* *Explain what each line of the code is doing*











### 10. Student do (10 minutes)

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

### 11. Everyone do (10 minutes)

* You are now going over the previous exercise 

* *Open the Code to the above exercise located in 4.2.5_AliceInWonderland/wonderland.html.*

* *Call on a student to explain what's happening to go over the previous exercise*

###### 90 minutes have passed

##### BREAK ( 15 minutes ) - it is now 8:10 pm, you have 80 minutes left of class time

### 12. Instructor do (15 minutes)

* *Instructor demos. Look in folder.*
* *Open this file into chrome and demo it for the class: 4.2-in-class-exercises/4.2.6_ClickeEvents folder.*

* *go over the particular example line by line*

### 13. Partners do (10 minutes)

* *Have students talk to each other about what just happened. MAKE SURE THE CODE IS UP ON THE SCREEN!*

### 14. Student do (30 minutes)

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

### 15. Everyone do (15 minutes)

* *Open the Code to the above exercise located in 4.2-in-class-exercises/4.2.7_colorCorrect folder.*

* *Call on a student to go over the previous exercise*

# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.
