# Pavan to do

add in timing

add in master objectives

# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

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

### Instructor do (15 minutes)

* Note to Pavan: need to spell this out step by step

* show students how to require a constructor function in Node.js *
look at 11.2-in-class-exercises/party_time (don't do it verbatim. Do it slowly using the steps below. We need students to come to conclusions.)

* make party_bus.js, dud.js
 
* make main.js like this.

```
var Dud = require('./dud.js');
var PartyBus = require('./party_bus.js');
```

* show students how you have to require a constructor function file inside of a constructor function file to get it to work

### Partners do 45 minutes

* Pavan to do: finish this exercise * 

"Everyone open up sublime text and code."

"If you don't have sublime text open, then you're not doing your job."

* Walk around make sure people have sublime text open and are all coding * 

/*
Make a student constructor function.

1. In a new folder
2. make a new node file called constructorFun.js
3. auto create a package.json file with npm init
4. install the prompt package so that it's 
5. Inside constructorFun.js, make a constructor function called Student that creates a student object with properties of name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, and a function called canStudentHaveFun that checks if they have less than 10 detentions and above a 2 GPA. If they do then console.log out to the terminal that the student can have fun.
6. Prompt the user for a student's information, make a new Student Object with it, then invoke the canStudentHaveFun function.

Make a bus constructor function, that has the following functions:

it basically stores students and it would have a function called busChatter that outputs the students' catch phrases one by one if they can have fun
*/

### More exercises

# Copyright
Rutgers Coding Boot Camp (C) 2015. All Rights Reserved.