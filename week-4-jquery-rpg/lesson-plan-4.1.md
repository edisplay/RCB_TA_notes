# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Develop your vision for a website -- and then build it!
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Build a frontend website either from scratch or utilizing a frontend framework (such as Bootstrap)

# Theme: jQuery

# INSTRUCTOR MUST COVER!!!

```
Parts 3 - 21 
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

* students will be introduced to the jQuery library
* students will use jQuery to select elements in the DOM
* students will use jQuery to create elements in the DOM
* students will create click events using jQuery to manipulate the DOM

PART ONE:

### 1. Student do (15 minutes)
Review Exercise: coffeeMenu

* *Open this file into chrome and demo it for the class: 4.1-in-class-exercises/lesson-4.1.exercise1_coffeeMenu folder.*

* *Slack this out to class*

|Coffee Menu|
|----------|
|Coffee: $5|
|Espresso: $7|
|Capunchino: $6|
|Latte: $4|
|Tea: $3|
|Ice Coffee: $6|
|Ice Espresso: $8|
|Ice Latte: $6|
|Ice Tea: $4|

```
* You are given the following coffee and their prices above.
	* Create a HTML file that displays the title 'Coffee Menu'.
	* Create a script tag and create a JavaScript function that will
		* Create an array that contains both the name and price of each item on the list as a string
		* Create a `for` loop, that loops through all the elements and makes them into divs, append those divs to DOM
```

### 2. Everyone do (10 minutes)

* *Open the Code to the above exercise located in 4.1-in-class-exercises/lesson-4.1.exercise1_coffeeMenu folder.*

* *Call on a student to go over the previous exercise*

### 3. Instructor do (5 minutes)
Intro to jQuery:

> Explain what jQuery is and why it's useful.

### 4. Instructor do (10 minutes)

* *Show how to use the jQuery cdn in HTML*

* *Instructor demos. Look in lesson-4.1.exercise2_pickEm folder.*

* *Explain what each line of the code is doing*

### 5. Partners Do (5 minutes)

* *Have student talk to each other about what just happened. MAKE SURE THE CODE IS UP ON THE SCREEN!* 

### 6. Student do (10 minutes)

* *Slack this out to class*

* You are given the following HTML, using JQuery create the code that will.
	* Select everything with the class "greekMythNames" and alert the second element's innerText.
	* Select the element with the id "wrestler" alert it's innerText
	* Select the element with the data-name "007" alert it's innerText
	* Select the element with the id "joker" alert it's data-name

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>TakeNames</title>
	</head>
	<body>

		<div id=""><h1>TakeNames!</h1></div>
	
		<div class="greekMythNames">Odysseus</div>
		<div class="greekMythNames">Penelope</div>
		<div class="greekMythNames">Medea</div>
		<div class="greekMythNames">Callisto</div>
		</br>
		<div id="wrestler">Hulk Hogan</div>
		</br>
		<div data-name='007'>James Bond</div>
		</br>
		<div id="joker" data-name='Jack Napier'></div>

		<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
	    <script type="text/javascript">
			//write your code here
	    </script>

	</body>
</html>
```

### 7. Everyone do (5 minutes)

* *Open the Code to the above exercise located in 4.1-in-class-exercises/lesson-4.1_exercise3_takeNames folder.*

* *Call on a student to go over the previous exercise*

### 8. Instructor do (10 minutes)

* *Instructor demos. Look in lesson-4.1_exercise4_doughnut folder.*

* *Explain what each line of code is doing*

* *Explain why and how `event` is passed into the on click function.*
* *Explain what `this` is, while inside of the click function.*

### 9. partners do (10 minutes)

Student Exercise: Passcode

* *Slack this out to class*

* You are given the following HTML, using JQuery
	* Create a click event on every "number" class
	* Whenever a number is clicked store it
	* If the user correct inputs 122343221 alert them they got in
	* If the user inputs that many numbers and wasn't correct alert them they got it wrong

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Passcode</title>
		<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
	</head>
	<body>
		<div id=""><h1>Passcode!</h1></div>

		<div class="number" data-name="one"><h3>ONE</h3></div>
		<div class="number" data-name="two"><h3>TWO</h3></div>
		<div class="number" data-name="three"><h3>THREE</h3></div>
		<div class="number" data-name="four"><h3>FOUR</h3></div>

	    <script type="text/javascript">
			//write your code here
	    </script>

	      document.body.onload = passcode;

	    </script>
	</body>
</html>
```

### 10. Everyone do (10 minutes)

* *Open the Code to the above exercise located in 4.1-in-class-exercises/lesson-4.1_exercise5_passcode folder.*

* *Go over the previous exercise call on one unique student per each part of the previous demo to explain what happened*

--------- --------- ---------

###### 85 mintues has passed

BREAK ( 15 minutes )
--------- --------- ---------

### 11. Instructor do (10 minutes)

* *Open the Code located in 4.1-in-class-exercises/lesson-4.1_exercise6_addStuff folder.*

* *Explain what each line of the code is doing*

### 12. Partners do (5 minutes)

* *Have student talk to each other about what just happened. MAKE SURE THE CODE IS UP ON THE SCREEN!* 

### 13. Instructor do (5 minutes)

* *Call on a student different unique students to explain what each parts of the code is doing*

### 14. Student do (15 minutes)

Student Exercise: Picture Perfect
* *Give the files from the starter folder to students*

* *Slack this out to class*

* You are given an HTML and a folder containing different pictures of letters.
	* Using jQuery create the code that will render to DOM pictures from the images folder and use it to spell the word "perfect"

### 15. Everyone do (10 minutes)

* *Open the Code to the above exercise located in 4.1-in-class-exercises/lesson-4.1_exercise7_picturePerfect folder.*

* *Call on a student to go over the previous exercise*

### 16. Instructor do (2 minutes)

Student Exercise: lotteryGenerateor

* *Demo the app located in 4.1-in-class-exercises/lesson-4.1_exercise8_lotteryGenerator folder.*

* *Slack this out to class*

* You are tasked to create a lottery generator
	* When the HTML is loaded there is a "Generate" button
	* When the user hits the button it will render on to the screen 7 number randomly generated numbers to the DOM.
	* Whenever the button is hit new numbers will be generated to the screen under the previse numbers
	* There is also a "Clear" button
	* Whenever the "Clear" button is hit, it removes all the number on screen

### 17. Student do (3 minutes)

* *Have student write out the pseudo code. NO CODING YET!* 

### 18. Everyone do (5 minutes)

* *Call on a student to go over explain their pseudo code*

### 19. Student do (15 minutes)

* *Have student start working on the lab! CODE CODE CODE!* 

### 20. Everyone do (10 minutes)

* *Open the Code to the above exercise located in 4.1-in-class-exercises/lesson-4.1_exercise7_picturePerfect folder.*

* *Call on a student to go over the previous exercise*

### 21. Instructor Do - (5 minutes)
    
* show the hw instructions

* two choices of games to make:

  * easier: make the crystal collector game

  * harder: make the starwars rpg game

# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.