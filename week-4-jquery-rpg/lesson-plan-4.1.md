# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Work independently or in a group on complex projects throughout the entire development lifecycle
* Implement complex logical conditions to meet an objective.
* Write clean code with proper variable names, indentation according to industry best practices

# Theme: Intro to jQuery

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
* Do not use jQuery. Use JavaScript.
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

* *Please keep it short.*

Personally, I would just say this.

> jQuery is a library that makes JavaScript DOM manipulation simple. It makes manipulating html easier than if you had to do it with JavaScript. 

> It's optimized to work on every browser and mobile device. While, with pure JavaScript, you're screwed.

> How do you use it? We'll find out in the next episode of jQuery.

### 4. Instructor do (10 minutes)

* *Show how to use the jQuery cdn in HTML*

* *Instructor demos. Look in lesson-4.1.exercise2_pickEm folder.*

* *Explain what each line of the code is doing*

### 5. Partners Do (5 minutes)

* *MAKE SURE THE CODE FROM THE PREVIOUS DEMO IS UP ON THE SCREEN!*
* *Have student talk to each other about what just happened.* 

### 6. Student do (10 minutes)

* *Slack this out to class*

* You are given the following HTML, using jQuery create the code that will:
	* Select everything with the class "greekMythNames" and alert the second element's text.
	* Select the element with the id "wrestler" alert it's text
	* Select the element with the data-name "007" alert it's text
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

* *Explain how the anonymous function that's passed into the click event is not being triggered on page load - it's being triggered when you click. That's a callback function. When a function is triggered later if something happens.*

* *demonstrate how when the page loads, the anonymous function isn't triggered. It's triggered when you click.*

* *Explain what `this` is, while inside of the click function.*

* *demonstrate with a break point what $(this) looks like in the console WHEN YOU ARE INSIDE THE CLICK EVENT'S ANONYMOUS FUNCTION.*

* *demonstrate with a break point what this looks like in the console WHEN YOU ARE INSIDE THE CLICK EVENT'S ANONYMOUS FUNCTION.*

### 9. partners do (10 minutes)

Student Exercise: Passcode

* *Slack this out to class*

* You are given the following HTML, using jQuery
	* Create a click event on every "number" class
	* Whenever a number is clicked store it
	* If the user correctly inputs 122343221 alert them they got in
	* If the user inputs that many numbers and was wrong, alert them that they got it wrong

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

###### 85 minutes have passed

##### BREAK ( 15 minutes ) - it is now 8:10 pm, you have 80 minutes left of class time

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

### 17. Student do (10 minutes)

* *Have student write out the pseudo code. NO CODING YET!* 

### 18. Everyone do (3 minutes)

* *Call on a student to go over explain their pseudo code*

### 19. Student do (10 minutes)

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