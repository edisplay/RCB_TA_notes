#Week of 4 Jquery

### Introduction

* You will create a web based game.

* You will use HTML, CSS to render the game on the web page.

* You will use Javascript and Jquery to create the logic of the game.

* see demonstration of how it works * 

### User story

Crystals Collector! 

* Is a guessing game using numbers, similar to the game hangman but instead of letters the player will guess with numbers. There will be four crystals displayed as buttons on the page. 

* The player will be given a random number at the start of the game.

* If the player clicks on a crystal it will add a specific amount of points to the player's total score.

* The player can win the game by matching their total score to random number, the player loses the game if their total score goes above the random number.

* The value of each crystal is hidden from the player until they click on it. Each time when the game starts, the game will change the values of each crystal.

### Remember

You will be fully capable of doing this homework by the end of Saturday's class.

### Steps

Dir setup:

	1. Create a folder named `crystalsCollector_game`.

	2. Create a `index.html` file inside `crystalsCollector_game`.

	3. Create a `crystalsCollector.js` file inside `crystalsCollector_game`.

	4. Create a `styles.css` file inside `crystalsCollector_game`.

	5. Create a folder inside `crystalsCollector_game` named `images` here is where your image files are stored.

HTML setup:

	1. Source the Jquery script from online

	2. Source the `crystalsCollector.js` file
	
	3. Source the `styles.css` file

	4. Inside of body

		* Create a <div> with the id "title" that will display the title of the game in text form
		* Create a <div> with the id "rules-area" that will display the basic rules of this game in text form
		* Create a <div> with the id "random-area" inside of it
			* Create a <div> with the text "The random number is:"
		* Create a <div> with the id "crystal-area"
		* Create a <div> with the id score-title" that will display the text 'Your total score is:'
		* Create a <div> with the id "score-area"

JavaScript setup:

	1. Start by creating a `document.onload` function, called when the DOM is ready, we will be creating all of our Js and Jquery code in this function.

	2. Create an empty array named `crystalsValue`, create a for loop that will loop 4 times, during each loop, push a random number whole number between 1 - 12 into `crystalsValue` array.

	3. Create a `crystals` object that contains 4 keys 'red', 'blue', 'yellow', and 'green' as strings, each key has a value of an object with `points` and `imageUrl` being it's key. 

	4. Set the value of `points` to an element of the `crystalsValue` array, with 
		* if the parent object is 'red' set it the `[0]` element
		*'blue' set it to the `[1]` element 
		*'yellow' set it to the `[2]` element 
		*'green' set it to the `[3]` element 

		* Set the `imageUrl` to the path of the image in the images folder as a string corresponding the key.
			* if the parent object is 'red', image should be 'red'
			* do that for all other `imageUrl` 

	5. Create a variable name `randomNum` which is a random number between 1 - 100 

	6. Create a varaible name `playerPoints` set it to zero we will use this to keep track of points during the game.

	7. Using Jquery create a <div> in the DOM which displays the `randomNum` as text.

	9. Create a `for` loop that loops through each of the keys in the `crystals` object each time it loops
		* Create a variable named 'crystalDiv', then using Jquery create a <div> with the class 'crystals-button' and set the 'data-name' equal to the key.
		* These <div> needs to have a 'data-name' like 'red', 'blue and etc because that's what we will use to check what the user is clicking on.
		* Create a variable named 'crystalImg', then using Jquery create a <img> with the class 'crystal-img' and the src of the image is the `imageUrl` path of the current object in the loop
		* Append 'crystalImg' into of 'crystalDiv'
		* Append 'crystalDiv' into "crystal-area" using Jquery

	10. Using Jquery select everything with the class "crystals-button" and create an on click event on them
		* The event is an anonymous function passing in `event` as an input
		* Create 4 (if/else if) statement that checks using Jquery what 'data-name' is equal to
			* If 'red' add the corresponding `points` value from `crystals` object to `playerPoints`
			* Else if 'blue' add the corresponding `points` value from `crystals` object to `playerPoints`
			* Else if 'yellow' add the corresponding `points` value from `crystals` object to `playerPoints`
			* Else if 'green' add the corresponding `points` value from `crystals` object to `playerPoints`

	11. Create a variable named 'scoreNumDiv', then using Jquery create a <div> with the id of 'score-number' as text

	12. Using Jquery to empty the "score-area" <div>

	13. Append 'scoreNumDiv' into "score-area" <div> using Jquery

	14. Create a (if/else if) statement
		* if 'playerPoints' is equal to `randomNum` alert the player they won and reload the page
		* else if 'playerPoints' is greater than `randomNum` alert the player they lost and reload the page

CSS setup:
	
	1. Set the 'background_img.jpg' as background images and repeat

	2. Using the id and class in the HTML style and make the <div> and everything look nice.
	

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.