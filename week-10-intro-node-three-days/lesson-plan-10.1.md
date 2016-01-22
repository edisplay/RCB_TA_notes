#Pavan to do

solutions for in class exercises

need to shorten - too intense

# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Yes
	* Expertly navigate the file system and terminal basics
	* Work independently or in a group on complex projects throughout the entire development lifecycle
	* Implement complex logical conditions to meet an objective.
	* Create and consume RESTful API’s utilizing JSON as a data format
	* Write clean code with proper variable names, indentation according to industry best practices

* Kind of
	* Understand the basics of troubleshooting and enhancing legacy code

# Theme
Intro to Node.js 

# INSTRUCTOR MUST COVER!!!
```
21. - 23.
```

or they will fall behind


# Objectives

* Students will run their first node app in the terminal
* Students will be able to pass arguments to a node app
* Students will improve their problem solving skills
* Students will be able to use require and exports to modularize their Node code

# Lesson Plan + In Class Exercises

### 1. Instructor do (15 minutes)

* Talk about Node.js (use your own experiences)
	* what it is 
		* Open Source Runtime Environment
		* Server-side JavaScript Interpreter
	* why it's important
		* Non-blocking I/O
		* Event Driven Architecture
	* benefits
		* Scalable
		* Let’s you write JavaScript (no new language)
		* Widely Used
		* Low Latency
		* Reusability
			* https://www.npmjs.com/
	* history
		Created in 2009 by Ryan Dahl
		Sponsored by Joyent
		Uses the Google V8 Engine

	* how it compares to Ruby, PHP, Python, etc.

* bring up links as necessary
	
### 2. Partners do (5 minutes)
	
"Spend 5 minutes looking up websites that use Node.js."

### 3. Everyone do (5 minutes) 

* discuss last exercise around the room
	* cold call groups 
		* give them 20 seconds, make a comment, move on

### 4. Instructor do (5 minutes)

* Make a js file on your computer called hello.js

inside hello.js

```
console.log('hello');
```

run it in your terminal by doing this
```
node hello.js
```

"That's it. It's that easy. Very soon you're going to find yourself loving Node, because you know it already!!! It's JavaScript. What have we been doing forever? JAVASCRIPT!"

### 5. Student do (20 minutes) - (note to instructor: extended time because students may have problem with Node installed on their computer. TAs and instructor help troubleshoot students who have issues with Node on their computer)

Step 1: 

Make a JS file named siracha.js and console log out "Node's like siracha. It's good on EVERYTHING".

Run this in your terminal like this:

```
node siracha.js
```

Step 2: 

Project Euler Problem 10

Make a command line node app that finds the sum of all prime numbers under 2 million

Ex: The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

### 6. Everyone do (10 minutes) 

Go over solution to Step 2

Look in in-class-exercises-solutions.md for solutions

###### 60 minutes have gone by

### 7. Partners do (15 minutes)

Make a command line node app that outputs the sum of odd fibonacci numbers under 1 million. 

Bonus: We haven't gone over this yet, and I won't go over this right away, but what the hell, let's do it. Have the program take in an argument of even or odd. If it's even then output the sum of even fibonacci numbers under 1 million and if it's odd then output the sum of odd fibonacci numbers under 1 million.

### 8. Everyone do (6 minutes) 

Go over solution to Step 2

### 9. Instructor do (2 minutes)

make a js file called arguments.js

```
console.log(process.argv);
```

run this in terminal:
```
node arguments.js
```

### 10. Partners do (1 minute)

"What just came up to the screen? And why? 1 minute. Turn to your partners and discuss."

### 11. Instructor do (5 minutes)

"process.argv gives an array of the arguments"

"watch what happens when I do these commands"

```
node arguments.js 'stuff'
node arguments.js 34
node arguments.js 'stuff' 34
node arguments.js 'stuff I like' 34
node arguments.js stuff I like 34 
```

### 12. Partners do (1 minute)
	
"Why did all of that happen? And why? 1 minute. Turn to your partners and discuss."

###### 90 minutes have gone by

### 13. Instructor do (2 minutes)

add following to arguments.js

```
console.log(process.argv[2] + process.argv[3]);
```

run the program

```
node arguments.js 233 349
```

### 14. Partners do (2 minutes)

Explain to your partners what just happened

### 15. Cold Call (1 minute)

Ask a set of partners what happened

### 16. Partners do (9 minutes)

Make a command line node app that takes in two parameters and outputs whether they are equal or not. 

I'll be walking around 8 minutes into this to see where everyone is. We'll go over it after.

### 17. Instructor do (1 minutes) 

Go over previous solution

###### 105 minutes have gone by BREAK TIME for 15 minutes

### 18. Student do (15 minutes)

Please slack me the answer when you're done. I will give feedback during the next in class exercise.

If you don't have anything then slack me the problem so I know exactly what to help you with after class.

Make a calculator command line node app that takes in parameters like this

```node calculator.js add 1 2```
* should output 3

```node calculator.js subtract 5 3```
* should output 15

```node calculator.js multiply 3 2```
* should output 6

```node calculator.js divide 6 2```
* should output 3

```node calculator.js remainder 7 2```
* should output 1

Bonus 1: 
```node calculator.js exp 7 2```
* should output 49

Bonus 2:
```node calculator.js algebra '4x+2=10```
* should output 2
* assume that it will always be in this format and that it will always be addition

### 19. Partners do (10 minutes)

Write a command line node app that takes in a number from the command line and finds the sum of all the multiples of 6 under it. 

Bonus: 

* Make the program take in two parameters, the first one is the same one, the second parameter replaces the 6.  
* Give it default values in case the user doesn't provide parameters

### 20. Instructor do (5 minutes)

Go over the previous problem

### 21. Instructor do (5 minutes)
"You can modularize your code in Node.js by using require."

make ess.js
```
exports.essentials = {
  drink: 'water',
  eat: 'snickers',
  fun: 'phone',
  friend: 'faebook'
}
```

make run.js
```
var stuffINeed = require('./ess.js');
console.log(stuffINeed);
```

run run.js
```
node run.js
```

### 22. Partners do (15 minutes)

Make a JavaScript file called bands.js that exports an object of music genres and bands like this:
```
{
	punk: 'Green Day',
	rap: 'Run DMC', 
	classic: 'Led Zeppelin'
}
```

require this JavaScript file into run.js and loop over the values and console.log them. 

Make sure the program runs properly in the terminal like this:

```
node run.js
```

that command in the terminal would output
```
a punk band is Green Day
a rap band is Run DMC
a classic band is Led Zeppelin
```

Bonus: Make it so that your program takes in a parameter lke 'classic' and then outputs the associated band with it. In this case Led Zeppelin. 

If no parameter is passed then loop over and output all of them like asked above.

###### 155 minutes have gone by

### 23. Instructor do (2 minutes)

Go over above exercise

### 24. Go Over Homework (8 minutes)

* This can be gone over by a TA if they want practice presenting.

* talk about what they will be building

* show them what it will look like

* show them parts they can do now

###### 165 minutes have gone by CLASS OVER


# Copyright
Rutgers Coding Boot Camp (C) 2015. All Rights Reserved.