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

### 1. Everyone do (15 minutes)
Review Exercise: coffeeMenu

* *Instructor demos. Look in lesson-4.1.exercise1_coffeeMenu folder.*

* *Slack this out to class*

|Coffe Menu|
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
* You are given the following of coffee and their price above.
	* Create a HTML that has display the title 'Coffee Menu'.
	* Create a script tag and create a JavaScript function
		* Create an array that contains both the name and price of each item on the list as a string
		* Create a for loop, that loops through all the elements and makes them divs, add those divs the page
		* Don't forget to onload the function when the HTML is loaded

```

### 2. Everyone do (10 minutes)
* *Call on a student to go over the previous exercise*

### 3. Instructor do (5 minutes)
Intro to jQuery:

> Explain what jQuery is and why it's useful.

### 4. Instructor do (10 minutes)

* *Show how it's sourced in HTML*

* *Instructor demos. Look in lesson-4.1.exercise2_pickEm folder.*

* *Explain what each line of code is doing*

### 5. Partners Do (5 minutes)

* *Have student talk to each other about what just happened* 

### 6. Everyone do (5 minutes)
Student Exercise: Take Names

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
		<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
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

	    <script type="text/javascript">
			//write your code here

	    </script>
	</body>
</html>
```

### 7. Everyone do (5 minutes)
* *Go over the previous exercise*

* *Instructor demos. Look in lesson-4.1.exercise3_takeNames folder.*

### 8. Instructor do (10 minutes)

* *Instructor demos. Look in lesson-4.1_exercise4_doughnut folder.*

* *Explain what each line of code is doing*

* *Explain why and how `event` is passed into the on click function.*
* *Explain what `this` is, while inside of the click function.*

### 9. partners do (10 minutes)
Student Exercise: Chain Reaction

* *Slack this out to class*

* You are given the following HTML, using JQuery
	* 


### 10. Everyone do (10 minutes)
* *Go over the previous exercise call on one unique student per each part of the previous demo to explain what happened*

--------- --------- ---------

###### 80 mintues has passed

BREAK ( 15 minutes )
--------- --------- ---------


### 11. Instructor do (10 minutes)
instructor demo
- create elements
	var el = $('<div id="buffy">')
- add attributes and classes to those elements and text
- add those elements to the dom 
	$("#random-area").append(randomNumDiv);
and compare to what the code would look like in JavaScript

### 12. partners do (10 minutes)
partners exercise

### 13. Everyone do (5 minutes)
go over exercise

### 14. Instructor do (10 minutes)
instructor demo

- setting up an object to store an image, and etc
- looping over objects and adding values to the dom

### 15. Everyone do (5 minutes)
student exercise

### 16. Everyone do (5 minutes)
go over

### 17. Instructor do (10 minutes)
- setting a counter and adding to it and then updating the dom with it

### 18. Everyone do (5 minutes)

### 19. Everyone do (5 minutes)
go over exercise

### 20. instructor do (10 minutes)
- do on click events
- with $(this) to modify the element itself

### 21. Everyone do (10 minutes)
partners exercise

### 22. Everyone do (5 minutes)
go over exercise

### 23. Instructor Do - (5 minutes)
    
* show the hw instructions

* two choices of games to make:

  * easier: make the crystal collector game

  * harder: make the starwars rpg game

# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.

<!-- 16. instructor demo like 3.2.13 

	AT THE END WE DO THIS
	-------------------------
	maybe we build this:

	the page displays a number

	input takes in a number

	then user clicks a button

	then it makes that many buttons with a random number in each button and on the data attribute

	then when the user clicks those buttons, it adds that number to the original number displayed to the screen

	BONUS

	the buttons could subtract or add to the top number
 -->