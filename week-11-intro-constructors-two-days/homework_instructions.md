#Week of 11 homework for Node.js

### Introduction

* You will be creating a Hangman Game.

* Building it with Constructor functions.

* It will be a command line node app that will take in prompted text as an input.

* We will build this game step by setup one piece at a time.

### Remember

You will be fully capable of doing this homework by Saturday's class.

## Part 0: Setup

* Install the npm package prompt

```
npm install prompt --save
```

## Part 1: Making the letter Constructor 

* create a file called
```
letter.js
```

* Start by creating a constructor function named `Letter`
	* it should take an argument `let`
	* create a property called `charac` which will store the argument `let`
	* create a property called `appear` set it to `false`
	* create a function inside of the `Letter` constructor called `letterRender`
	* when the function `letterRender` is called
		- it will check the value of `appear`
		if `false` return a string `"_"`, else it will return the value `charac`

export the Letter constuctor function with

```module.exports = Letter;```

## Part 2: Making the Word Constructor

* create a file called
```
word.js
```

* Start by importing the `letter.js` file by using require, set it to a variable called `Letter`

* Create a constructor function named `Word`
	* it should take an argument `wrd`
	* create a property called `word` which will store the argument `wrd`
	* create a property called `lets` which is set to an empty array
	* create a property called `found` which is set to `false`

* create a function inside of `Word` constructor called `getLets` 
	- it will run a loop that iterate over each of the letter in the `word` property
	- everytime the loop iterates, it creates a new Letter object with the argument being the current letter

- [x] *Hint: this function will create `Letter` objects that will be put into the `lets` array*
*After this function runs, the property `lets` will contain `Letter` objects for each of the letter in `word`*

* create a function inside of `Word` constructor called `checkIfLetterFound`
	* this function will take an argument `guessLetter`
	- create an varaible called `whatToReturn` and set it to the number 0
	- it will run a loop that iterate over each object in the `lets` array
	- check the current object that's being iterated over
	- if the `charac` property in that object is equal to `guessLetter`, set the `appear` property of that object to `true`
	- add 1 to `checkIfLetterFound`
	* return `checkIfLetterFound`

- [x] *Hint: the objects in `lets` array are created with the `Letter` constructor, with all the property created in `Letter` constructor*

* create a function inside of `Word` constuctor called `didWeFindTheWord`
	- call the `.every()` method on the `lets` array
	- `.every()` method takes in an anonymous function as argument, that function will take an argument `curLet`
	- set the property `found` to `true` if all letter objects have the `true` value in their `appear` property
	- return `found`

- [x] *Hint: look up `.every` to see how it works on array.*
*the goal here is to have the `didWeFindThWord` function check if all the objects in `lets` array has `appear` property of `true`, if so then the function return `true`*

* create a function inside of `Word` constuctor called `wordRender`
	- create a varaible called `str` set it to `""` empty string
	- it will run a loop that iterate over each object in `let` array
	- everytime the loop iterates, calling the `letterRender` on that object and then string concatenate that to the varaible `str`
	- return `str`

export the Word constuctor function with

```module.exports = Word;```

## Part 3: Making the Game

* create a file called
```
main.js
```
* Start by importing npm prompt by using require, set it to a variable called `prompt`
	* call the `.start()` method on `prompt`

* Importing the `word.js` file by using require, set it to a variable called `Word`

* Create an object called `game`
	* create a key named `wordBank` with the value of: an array contain strings, these are the works that the user will try to guess
	* create a key named `guessesRemaining` with the value of: 10
	* create a key named `currentWrd` with the value of: null
	* create a function named `startGame` with an argument of `wrd`
		- create a new `Word` object with an argument of a string from your wordBank, a random word
		- set the newly created `Word` object to `currentWrd`
		- called `.getLets()` method on the `currentWrd` object 
		- call the `keepPropmtingUser()` function with no argument, we haven't build `keepPropmtingUser` yet but will shortly

- [x] *Hint: `currentWrd` is now an object created with `Word` constructor it have all the function created in Word constructor*

	* create a function named `keepPropmtingUser` with no argument
		- create a variable named `self` set it to `this`
		- [x] *Hint: because when we are going inside the prompt object out `this` will lose scope, we must store `this` inside of `self`*
		
		- called the `prompt.get()` function with two arguments
		- [x] *Hint: look up how npm prompt works*

		- first argument is an array with one element, a string named `guessLetter`
		- second argument is an anonymous function
		- the anonymous function has two arguments as well (`err`, `result`), the anonymous function will
			* console logs ("The Letter or space you guessed is " + result.guessLetter)
			* create a variable named `findHowManyOfUserGuess`, set it to `currentWrd.checkIfLetterFound(result.guessLetter)`
			- [x] *Hint: this checks if the letter was found and if so, sets that specific letter object to appear, it also returns a number

			* check if `findHowManyOfUserGuess` is 0
				- if is 0, console log ("You gusses wrong~!")
				- minus 1 from the value `guessesRemaining`
			* else 
				- console log ('You guessed right!')
				- check if user has won the game
				- if function `currentWrd.didWeFindTheWord()` returns `true`
					* console log ('You Won!!!')
					* return 1 to end the game

			* console log('Guesses remaining: ' + value of `guessesRemaining`);
			* console log( call the `wordRender()` method on `currentWrd` )
			- [x] *Hint: this will display all the letters guessed, if correct display as letters and "_" has hidden letters not yet guessed correctly"

			* if the value `guessesRemaining` is greater than 0 and the property `currentWrd.found` is `false`
				- called the function `keepPromptingUser()`
				- [x] *Hint: Yes we calling a function inside of itself the if statment stops the recursion from going infinite*
			* else if the value `guessesRemaining` is equal to 0
				- console log "Game over bro" and the word user was guessing
			* else 
				- console log (call the function `.wordRender()` on `currentWrd`)

* start the game by calling `game.startGame()`


# Copyright
Rutgers Coding Boot Camp (C) 2016. All Rights Reserved.
