# Theme: Objects and Functions

### Objectives

* students will use ajax to get data and use it in their html

### 1. Partners Do (15 minutes)

Part One
Make an array of animals. 

Use a for loop to loop over them and create 4 buttons on the page with the text of those animals inside of them.

Part Two
in the for loop, add a data-type attribute to each button and set the value to the animal type from the array.

Part Three
when the user clicks on a button alert to the screen the value from the data attribute

### 2. Everyone do (10 minutes)

* *go over it with the class - call on people*

```
live code it - pavan fill in with solution
```

### 3. Instructor do (20 minutes)

> This is an interview question for TAs. We'll be building up to it.

* *demo 6.1-exercises/3-instructor-do/1.html*
* *demo 6.1-exercises/3-instructor-do/2.html*
* *demo 6.1-exercises/3-instructor-do/3.html*
* *demo 6.1-exercises/3-instructor-do/4.html*
* *demo 6.1-exercises/3-instructor-do/5.html*

* *Demonstrate to the students how when you click "add another button above", it adds another button above, but the on click doesn't work on it.*

* *keep the code on the screen for 5.html and slack out 5.html* 

### 4. Partners do (5 minutes)
* *ask the class to discuss with their partners what's wrong with the above code*

* *Ask the students to figure this out with their partners on why this is happening*

### 5. Everyone Do (5 minutes)

* *call on students until you get the answer you want*

> the new button(s) didn't exist on the page when the page loaded, so the jQuery onclick event isn't attached to the new button(s)

### 6. Instructor Do (10 minutes)

* *demo 6.1-exercises/3-instructor-do/6.html*

explain how now the on click event is attached to the document and how event bubbling allows the 

### 7. Partners Do (5 minutes)

* *slack out code for 6.html*

> Go over this code with your partners for 5 minutes. Make sure you both understand it verbatim.

##### 70 minutes have passed. It is now 7:40.

### 8. Instructor Do (5 minutes)

Talk about what an API is

application protocol interface

APIs are how websites share their data to the public and to their mobile apps.

We'll be exploring the omdbapi and the giphy api.

-----------

Talk about what JSON is

JSON = JavaScript Object Notation

- just a way of structuring data

* it's based on JavaScript objects. It has key value pairs.

Why use it?

* Most back end programming languages have support for it, so it's really easy to pass data back and forth from your JavaScript in your HTML to the code on the server.

### 9. Partners Do (10 minutes)

read through the omdbapi documentation

how do I get data back about a classic movie like the terminator?

### 10. Instructor Do (15 minutes)

Show students how you can take this url and hit it in the browser

http://www.omdbapi.com/?t=the+terminator&y=&plot=short&r=json

Explain the ? mark and &'s seperate data you're sending to the server

Explain that t, y, plot, short, r hold data

Explain the plus signs

Show students how chrome will format it for you if you have a special chrome extension called: 

JSONView

### 11. Student Do (10 minutes)

Part 1: 
install the JSONView chrome extension

go to this url

http://www.omdbapi.com/?t=the+terminator&y=&plot=short&r=json

Part 2:
change the+terminator to "the hateful 8" with the pluses

### 12. Instructor Do (15 minutes)

Show how to hit the browser with the omdbi api

use 12-instructor-do.html

### 13. last but not least Partners Do (10 minutes)

read through the giphy documentation

how do you return the trending gifs back from their api?

### 14. last instructor do (15 minutes)

show 14-instrucor-do.html

### last. Instructor Do (5 minutes)

Go over the homework. You can play the homework_demo.mov file.

# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.
