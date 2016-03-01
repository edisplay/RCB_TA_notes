# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Develop your vision for a website -- and then build it!
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Build a frontend website either from scratch or utilizing a frontend framework (such as Bootstrap)


# Theme

Arrays Continued + Looping + Rock Paper Scsissors + Break Points

# INSTRUCTOR MUST COVER!!!

```
4, 11, 13, 15
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

* students will manipulate and use arrays
* students will loop over an array
* students will play rock paper scissors
* students will outline out how to play rock paper scissors
	*outlining means psuedo coding
* students will make a rock paper scissors game
* students will trigger break points in a couple of ways to "stop time"


### 1. Partners do (15 minutes)

PART ONE:

```
var coolPeople = ['bruce lee', 'arnold schwarzenegger', 'will smith', 'esther', 'marie curie', 'joan of arc'];

//console.log out each part of the coolPeople array
```

PART TWO:

```
// make an array of drinks with all capitals
// modify each part of the array of drinks and make each item lowercased - DO NOT DIRECTLY EDIT THE INSIDE OF THE ARRAY! 
```


BONUS ONE:
```
1. Create a new variable called cart. Add the gameboy, pokemon, and tetris arrays into the cart array.

// How would you:

// Access the name of the pokemon game through the cart variable.
// Access the price of the tetris game.
// Change the price of the tetris game to be 9012.
// Change the name of the Game Boy in the cart to Game Boy Advance.

var gameboy = [ 'Game Boy', 'nintendo', 149.99 ];
var pokemon = [ 'Pokemon Blue', 'nintendo', 49.99 ];
var tetris = [ 'Tetris', 'SEGA', 49.99 ];
```

BONUS TWO:
* Look at the original variables and look at the values stored in the cart array.
* Did changing the array values in the cart array affect the values of the original arrays?
* Why?


### 2. Everyone do (10 minutes)
* go over previous exercises


BONUS ONE SOLUTION:
```
var gameboy = [ 'Game Boy', 'nintendo', 149.99 ];
var pokemon = [ 'Pokemon Blue', 'nintendo', 49.99 ];
var tetris = [ 'Tetris', 'SEGA', 49.99 ];

var cart = [gameboy, pokemon, tetris];
//cart.push(gameboy, pokemon, tetris)

cart[1][0]; //name of the pokemon game
cart[2][2]; //price of the tetris game
cart[2][2] = 9012; 
```

BONUS TWO SOLUTION:
* When we use a variable we are referencing the original value stored there. Cart is just an array, holding references to the three original arrays. If we change the arrays within cart it is the same as changing the original arrays directly.

* slice will give us a copy of the array which is safer than referencing the original array and editing it

### 3. Partners do (5 minutes)

* everyone explain the solution to the previous exercise to your partners

### 4. Instructor do (10 minutes)
* *for loop demo*

* make sure you go over how the for loop works, step by step.

1. i = 0
2. is 0 less than 5
3. yes, so do what's inside of the for loop
4. increment i to 1
5. is 1 less than 5
6. yes, so do what's inside of the for loop
7. increment i to 2
8. is 2 less than 5
9. yes, so do what's inside ofthe for loop
10. increment i to 3
11. ... keep going until you can't ...

```
var coolKids = ['Eric', 'Blake', 'Emily', 'Xena', 'Boris'];

for(var i = 0; i < coolKids.length; i++){
	alert(coolKids[i]);
}
```


### 5. Partners do (10 minutes)

var myFarm = ['chickens', 'pigs', 'cows', 'horses', 'ostriches'];

use the above array, loop over it and alert each value to the screen

BONUS: 

in the for loop, if the value starts with a c or an o then additionally alert that the animal is a bird.

### 6. Everyone do (10 minutes)
* go over it with everyone

### 7. Partners do (10 minutes)
* everyone explain the previous for loop code to your partners step by step

### 8. Cold Call (5 minutes)
* call on someone to explain it again to the class

### 9. Partners Do (5 minutes)

> we're going to build a rock paper scissors game

> but first, it's important that we play the game before making it

> everyone play rock paper scissors for 5 minutes straight

### 10. Partners Do (10 minutes)

> everyone write out the steps to playing rock paper scissors to a meticulous degree in short simple steps

##### Break Time - 15 minutes

##### 105 minutes went by including break (it's now 8:15 PM and there's one hour and fifteen minutes left of class)

### 11. Instructor do (15 minutes)

* *emphasize the importance of outlining out the steps before coding. Let them know that it's called pseudocode.* 

> If you don't pseudocode then you will be all over the place.

> the steps you made before break is called psuedocode - it's what you do as a programmer before you start programming around a problem

> now check out this rock paper scissors pseudocode I made

1. user chooses r, p or s on keyboard representing rock, paper or scissors. 

2. computer chooses a random value in a list of r, p or s

3. we determine if the user won or not

	if user picked rock and computer picked scissor
		then 
			user wins

	if user picked rock and computer picked paper
		then 
			user loses

	if user picked scissor and computer picked rock
		then 
			user loses

	if user picked scissor and computer picked paper
		then 
			user wins

	if user picked paper and computer picked rock
		then 
			user wins

	if user picked paper and computer picked scissor
		then 
			user loses

4. 

	if the user won then we would add one to the wins

	if the user lost then we would add one to the losses

	if the user ties with the computer then we would add one to the ties

5. the user would press r, p, s to play again

### 12. Partners do (5 minutes)

> explain each part of the pseudo code I did to your partner

### 13. Everyone do (25 minutes)

> now i'll build rock paper scissors from the pseudo code.

* *be sure to slack out the code after each step*

* *please just open up each file, instead of coding it out.* 

* *spend time going over each step.* 

* *stop at least 4 times and have students explain the code on the board to their partners.*

* *open up 3.2-in-class-exercises/rps-1.html, demonstrate it, explain it*
* *open up 3.2-in-class-exercises/rps-2.html, demonstrate it, explain it*
* *open up 3.2-in-class-exercises/rps-3.html, demonstrate it, explain it*
* *open up 3.2-in-class-exercises/rps-4.html, demonstrate it, explain it*
* *open up 3.2-in-class-exercises/rps-5.html, demonstrate it, explain it*
* *open up 3.2-in-class-exercises/rps-6.html, demonstrate it, explain it*
* *open up 3.2-in-class-exercises/rps-7.html, demonstrate it, explain it*
* *open up 3.2-in-class-exercises/rps-8.html, demonstrate it, explain it*
* *open up 3.2-in-class-exercises/rps-9.html, demonstrate it, explain it*

* *slack the code from rps-9.html to students*

### 14. Groups do (10 minutes)

* *Pick 4 student leaders (strong nice students)- send them to four corners of the room, split the class among them. Have the leaders teach each line of code from rps-9.html to their groups.*

### 15. Instructor do (15 minutes)

* *demonstrate break points on rps-9.html*
	* *use debugger;*
	* *use actual break points in the sources tab*
	* *show how break points don't trigger unless console is open*

* *show how to cheat by putting the breakpoint in rps-9.html on line *

### 16. Partners do (15 minutes)

* *slack out rps-9.html if you haven't already*

Make break points in the code that was slacked out and watch how it works with your partners

# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.