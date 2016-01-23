# Pavan to do

add in timing

# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Yes
	* Expertly navigate the file system and terminal basics
	* Work independently or in a group on complex projects throughout the entire development lifecycle
	* Understand the basics of troubleshooting and enhancing legacy code
	* Implement complex logical conditions to meet an objective.
	* Write clean code with proper variable names, indentation according to industry best practices


# Theme

Connecting Constructor Functions Together

# Objectives

* students will discover why the prompt npm package fails inside of a while loop and will be able to use an alternative strategy around it
* students will be able to use constructor functions to connect two different objects together

### Instructor do (15 minutes)

- write code from 11.2-in-class-exercises/first_instructor_demonstration/1.js DO NOT EXECUTE IT

### Partners do (5 minutes)

"When I run this node file, will it fail?"

"I'll be calling on groups, so get ready - talk - learn - discuss! I could call on any one of you. You are responsible for the people around you."


### Everyone do (10 minutes)

* call on weaker students until you get the complete right answer out of them

### Instructor do (15 minutes)

- write code from 11.2-in-class-exercises/first_instructor_demonstration/2.js DO NOT EXECUTE IT

### Partners do (5 minutes)

"When I run this node file, why will it fail?"

"I'll be calling on groups, so get ready - talk - learn - discuss! I could call on any one of you. You are responsible for the people around you."

### Everyone do (15 minutes)

* call on two average students then two strong students until you get the complete right answer out of them

* execute it + explain

### Instructor do (15 minutes)

* change up code to match 11.2-in-class-exercises/first_instructor_demonstration/3.js and execute it.

* explain it to the class.

### Everyone do (10 minutes)

- explain every line to your partner. You're responsible for your partners understanding of this. I'll be calling on two people to present

### Students Present (10 minutes)

two students present to the class and go over line by line what each does

### Everyone do (15 minutes)

* show students how to require a constructor function in Node.js *
look at 11.2-in-class-exercises/second_instructor_demonstration/1

* Note to instructor: 

	+ the first time you do this it will pass because you didn't use the Dud constructor function yet.

	+ ```console.log('dudes?', zbtPartyBus.duds);```

	+ the second time you do it, it will fail because the PartyBus constructor function was looking for the Dud constructor function and couldn't find it.

* Before executing the code, ask the students why it'll fail. * 
	+ You execute the code by running

```
node main.js
```

### Instructor do (15 minutes)

* show students how you have to require a constructor function file inside of a constructor function file to get it to work

* code is here:
11.2-in-class-exercises/second_instructor_demonstration/2

### Everyone do (15 minutes)

* Bring up all three files on the screen (you can drag sublime text windows out and line them up next to each other) *

"Why did it work? Explain every single line to your partners."


### Everyone do (5 minutes)

* Go over it with the class - call on random people * 

### Instructor do (20 minutes)

* code out the full solution. It's here * 
11.2-in-class-exercises/second_instructor_demonstration/2


### Partners do 45 minutes

"Everyone open up sublime text and code."

"If you don't have sublime text open, then you're not doing your job."

* Walk around make sure people have sublime text open and are all coding * 

```
Make a student constructor function.

1. In a new folder
2. auto create a package.json file with ```npm init```
3. use ```npm install prompt --save``` to install prompt
4. make a new node file called main.js
5. require prompt in it
6. make a new node file called student.js
7. Inside student.js, make a constructor function called Student that creates a student object with properties of name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, and a function called canStudentHaveFun that checks if they have less than 10 detentions and above a 2 GPA. If they do then console.log out to the terminal that the student can have fun.
8. Prompt the user for a student's information, make a new Student Object with it, then invoke the canStudentHaveFun function.
9. export the student constructor at the bottom of the file
10. make a new node file called bus.js 
11. inside the bus.js file, make a bus constructor function, that has the following properties:

studentsOnTheBus (array)

driverName (string)

color (string)

gas (integer)

studentEntersBus (function that adds a student to the studentsOnTheBus property)

busChatter (function that outputs the students' catch phrases if they can have fun one by one)

12. at the bottom of bus.js, export the constructor function

13. require the appropriate file(s) in the appropriate file(s).

14. in main.js make the bus object with the constructor function, and then add 20 students to it. Then successfully all the busChatter property of the bus object.

BONUS:

make a property inside of the bus constructor function to remove a particular student by their name.
```

* no solution for this. get a student to present *

# Copyright
Rutgers Coding Boot Camp (C) 2015. All Rights Reserved.