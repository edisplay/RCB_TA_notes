# TO DO PAVAN

last one needs solution

package.json lesson needs multiple packages to show use case

# Lesson Plan Goal
* Goal of lesson plan: Get every single person involved at the sametime for the majority of class! 

* Instructor should be talking the least among everyone.

* Instructor's job is to steer the coding and discussion in the right direction by using this lesson plan. Please do not deviate from it. 

* Use your own style when direction isn't provided
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* example: Relate your experiences to coding for scalabliity

* Weekday Lessons
	* 3 hour class - 15 minute break = 180 minutes - 15 = 165 minutes of class time.
		* 100+ minutes of "Partners do" and "Student do"
* Saturdays
	* 4 hour class - 40 minute break = 240 - 40 = 200 minutes of class time.
		* 120+ minutes of "Partners do" and "Student do"

* Does the lesson plan fit into the master learning objectives agreed to by the University?
	* Develop your vision for a website -- and then build it!
	* Expertly navigate the file system and terminal basics
	* Work independently or in a group on complex projects throughout the entire development lifecycle
	* Understand the basics of troubleshooting and enhancing legacy code
	* Communicate the basics of serving a webpage and how the browser renders code
	* Build a frontend website either from scratch or utilizing a frontend framework (such as Bootstrap)
	* Deploy static websites to a cloud provider
	* Create and deploy dynamic websites to a cloud provider utilizing a backend framework
	* Implement complex logical conditions to meet an objective.
	* Write SQL commands to perform Create, Read, Update and Delete commands
	* Utilize an ORM to manage a database schema and connection from a server
	* Create a full-stack Single Page Application with AJAX communication
	* Create and consume RESTful API’s utilizing JSON as a data format
	* Create session based applications utilizing user authentication schemes that are well-known and widely used
	* Understand and implement the mechanics of Git flow (including branching, merging, pull requests)
	* Apply ‘social coding’ accepted and best practices (including source control, issue tracking, functional feedback, etc)
	* Write clean code with proper variable names, indentation according to industry best practices

# Basics

* While students do exercises
	* take a breather
	* walk around make sure they're coding
	* help the students that aren't fully grasping everything

* If you have your microphone working (so Panopto can pick up your voice), then by all means, walk around - be Jaime Escalante from Stand and Deliver.
	
	* [Stand and Deliver](https://en.wikipedia.org/wiki/Stand_and_Deliver)

* Always mention the theme

* Always slack out the objectives
	* Cold call different students to read them out loud to the class.
	* Comment briefly about each one

* Always slack out the in class exercises
	* have someone read them outloud
	* make sure you explain it before starting the timer

* Always show a timer on the board during exercises (google timer and put your sound up so the alarm will go off)

* During one on ones: GUIDE don't TELL 
	* unless it's work flow errors (bad indentations, no word wrap, doesn't have console open)

	* unless you're in a time crunch. Go ahead tell, but use check points.

# Key for Instructors/TAs

* Partners do = Students work with a partner
	* partners pair program 
		* one person types
		* other person is main driver
		* typer drives too but less
		* make sure they alternate after each "Partners do" exercise

			* option 1: Match partners by like ability: 

				"Raise your hands if you feel good about event handlers." 

				Then call off the names of people with raised hands to pair off with each other, and ask them to come up to the class. 

				"Raise your hands if you feel decent about event handlers." 

				Then call off the names of people with raised hands to pair off with each other, and ask them to come to the back of the class. 

				* Then call off the people remaining one by one to be paired.

			* option 2: Match partners strong to weak: 

				"Raise your hands if you feel good about event handlers." 

				Then call on someone who has their hand raised and then someone who doesn't - they're partners.

				- you have to be careful - some personalities don't fit. Use your judgement. 

* Student do = Students work individually 
	* ask the students to slack you the code after they're done. This will let you see who is struggling and who isn't.

	* Have slack on your phone to give feedback to students during a tim you're free (a future exercise)

* Everyone do = Instructor does something and students do it along

* Instructor do = Instructor types, no one should be typing
	* Instructor: "I'm going to do something now, I need everyone to close their laptops. No need for them now. This code will be provided to you after so don't worry about taking notes either"

* Cold call = call on someone
	* avoid doing this often because it engages only one person in the class and not everyone
	
	* you want to strategically do this at times so that you can get your star students to answer questions. 
		* be sure the same student isn't answering every cold call 
			* kind of a downer for other students

	* How to raise someone's confidence
		* Sometimes, you'll find yourself with a below average student right before you're supposed to do a cold call. Give them large clues to the answer.

		* Call on them. 
		* Compliment them. 
		* Make the class clap.

* Check points = Questions you ask the student(s) to make sure they understand what's going on
	* Bad check point: "Do you understand?"
	* Good check point: "So in your own words, what does this line of code do?"

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
Review + Organizing and Debugging your Node Code

# INSTRUCTOR MUST COVER!!!
8 + 9

or they will fall behind

# Objectives

* Students will be able to debug node apps
* Students will learn how to know exactly what packages you're using and what versions of those packages)
* Students will be able to use the request npm package to hit a weather api and the omdbi api

### 1. Student do (10 minutes)

Stand up

### 2. Partners do 30 minutes

Write a command line node app get_sums_of_all_ints_except_at_index.js () that takes a list of integers and returns a list of the sums. Do not use subtraction in your solution.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [14, 8, 12, 11]

by calculating:

  [7+3+4, 1+3+4, 1+7+4, 1+7+3]

notice that for the first element of the array we don't add 1. 

for the second element of the array, we don't add 8.

### 3. Student do (5 minutes)

"Please slack me the answer when you're done. 

I won't be going over this afterwards. 

Based on what you send me on slack, I'll be giving feedback individually.

If you don't slack me anything, then I can't help you."

Use the request npm package to hit the omdbiapi and return the imdb rating of The Notebook (http://www.omdbapi.com/)

Remember to use this

```
npm install request
```

### 4. Instructor do (15 minutes)

Show how to debug in node with the iron-node npm package

First make a file with this code in it. 

"I need everyone to not shout out the answer. It's going to be obvious what's wrong. But I need to show you how to debug a node app."

```	
//goal console.log numbers that are odd

var nums = [584, 34, 29, 99, 23, 212, 243];

for(var i = 0; i < nums.length; i++){
	if ((nums[i] % 2) == 0){
		console.log(nums[i] + ' is odd!');
	}			
}
```

* run the program

"Ok hmm. This doesn't do what we want. I have no idea why. Time to use break points I guess."

* put a debugger; in the if statement.

* run the program

* "hmm it doesn't stop!"

* We need something to help us run debugger for node apps.

* we'll use Iron Node
	* [https://github.com/s-a/iron-node](https://github.com/s-a/iron-node)

"I need to install iron-node globally to debug things in Node"

```
npm install iron-node -g;
```

* to use iron-node
	* put a debugger; on the line where you want to stop the program
	* run the program like this from the console:

```
iron-node liri.js
```

* to get out of iron-node from the terminal: CONTROL + C on a MAC

### 5. Partners do (15 minutes)

I want you all to use iron-node on a previous node script that you wrote.


### 6. Partners do 30 minutes

* use option 2 pairing strategy - strong to strong - weak to weak * 

Sign up to http://openweathermap.org/appid

Use the api route provided here
http://openweathermap.org/current#zip

Write a command line node app that takes in the user's zip code 

and 

check what the weather is for that zipcode and 

- if it is 45 or below console.log a sad movie's json data (your choice) 
- if it is between 45 and 60 (inclusive) then console.log the json data for "Norwegian Ninja"
- if it is above 60 then console.log an action movie (make sure it has Michael Biehn in it) 

The open weather map api returns the temperature in Kelvin. You can use this formula to convert Kelvin to Fahrenheit
This will help
ºF =(K - 273.15)* 1.8000 + 32.00

### 7. Instructor do 15 minutes

go over previous solution

###### 120 minutes have went by. Break time 40 minutes

### 8. Instructor do (25 minutes)

package.json demonstration

slack this out to students. Have someone in the class read what it says
https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json

so to make a package.json file

```
npm init
```

then to install something like the request npm package you do 

```
npm install request --save
```

point out how the dependencies are put in there. 

Now you can push this file to github and your friends would pull down and they would be able to do

```
npm install
```

and all the packages you used would be installed on their computer

### 9. Instructor do (20 minutes)

"What I'm going to show you now, is going to take Node to another level of cool."

use package.json to install

go over this
https://github.com/flatiron/prompt

```
  var prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['username', 'email'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
  });
```

### 10. Partners do (60 minutes or whatever time is left)

* use option 2 pairing strategy - strong to strong - weak to weak * 

Make a command line zombie game

use https://www.npmjs.com/package/prompt

and utilize a package.json file	

###### user starts with
* 100 health
* 2-5 damage (random)

###### zombies start with
* 20 health
* 2-5 damage (random)

###### general
* there is only one zombie
* Each day, the user gets a prompt: `guess 1 to 10`
* If the number is correctly guessed, the user attacks a zombie
* If the number is incorrectly guessed, the zombie attacks a user

###### user dies
* if you get to 0 health

###### zombie dies
* if you get to 0 health

### 11. Everyone do (if left over time)

Presentations for two groups

# Copyright
Rutgers Coding Boot Camp (C) 2015. All Rights Reserved.