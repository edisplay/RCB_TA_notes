# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Work independently or in a group on complex projects throughout the entire development lifecycle.
* Implement complex logical conditions to meet an objective.
* Write clean code with proper variable names and indentation according to industry best practices.

# Theme: Intro to jQuery

# INSTRUCTOR MUST COVER!!!

```
Parts 3 - 21
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

* Students will be introduced to the jQuery library
* Students will use jQuery to select elements in the DOM
* Students will use jQuery to create elements in the DOM
* Students will create click events using jQuery to manipulate the DOM

### 1. Partners Do (20 minutes)

* *slack out these instructions*

1. go to github.com
2. open up the console in Chrome
3. run this command:

`document.body.innerHTML = "<p>I like rock and roll.</p>";`

4. What did the previous JavaScript command do? Write down your answer!

5. run these commands one by one.

`var newDiv = document.createElement('div');`

`newDiv;`

6. What did the above code do? Write down your answer!

7. run this command:

`document.body.appendChild(newDiv);`

8. What did the above command do? Write down your answer!

9. run these commands one by one. You run `anotherDiv;` multiple times so you can see what is happening to it, as you manipulate it.

`anotherDiv = document.createElement('div');`

`anotherDiv;`

`anotherDiv.innerHTML = 'Frankie just said something';`

`anotherDiv;`

`anotherDiv.setAttribute('class', 'stuff');`

`anotherDiv;`

`document.body.appendChild(anotherDiv);`

10. What did the above code do? Write down your answer!


### 2. Instructor do (15 minutes)

* *Go over previous exercise - be sure to use points below*

* *Go to github.com.*

* *Open your console*

* *Run these commands and talk about them*


PART ONE

* *Show the students what the html looks like in the body*

`document.body.innerHTML = "<p>I like rock and roll.</p>";`

> this replaces the html in the body with <p>I like rock and roll.</p>

* *Show the students what the html NOW looks like in the body*


PART TWO

> Where does JavaScript live?

> In the window! 

> What is the window? 

> Everything you see on the screen!

`var a = 4;`
`window.a;`


PART THREE

`var newDiv = document.createElement('div');`
`newDiv;`
`window.newDiv;`

> this creates a div, and there's this variable named newdiv that references that newly created div. 

> It's not on the page yet.

`document.body.appendChild(newDiv);`

> Now it is.


PART FOUR

`anotherDiv = document.createElement('div');`

`anotherDiv;`

> anotherDiv is an empty divider

`anotherDiv.innerHTML = 'Frankie just said something';`

`anotherDiv;` 

> Now anotherDiv has Frankie just said something in it

`anotherDiv.setAttribute('class', 'special');`

`anotherDiv;`

> We updated the div's class to be special 

> Is it on the page yet?

`document.body.appendChild(anotherDiv);`

> Now it is

### 3. Student do (15 minutes)

* *Open this file in chrome and demo it for the class: 4.1-in-class-exercises/3-student-do_coffeeMenu/coffee.html*

* *Slack out 4.1-in-class-exercises/3-student-do_coffeeMenu/coffee-start.html and the below instructions* 

```
* Do not use jQuery. Use JavaScript.
* Follow the directions in the html file
* Put your code underneath the step in the JavaScript code
```

### 4. Everyone do (10 minutes)

* *Open the Code to the above exercise located in 4.1-in-class-exercises/3-student-do_coffeeMenu/coffee.html*

* *Call on students to go over the previous exercise*

### 5. Instructor do (5 minutes)
Intro to jQuery:

> Explain what jQuery is and why it's useful.

* *Please keep it short.*

Personally, I would just say this:

> jQuery is a library that makes JavaScript DOM manipulation simple. It makes manipulating HTML easier than if you had to do it with JavaScript.

> It's optimized to work on every browser and mobile device. While, with pure JavaScript, you're screwed.

> Now we'll start using it.

### 6. Instructor do (15 minutes)

* *Instructor demos code. Open the code for 4.1-in-class-exercises/6-instructor-do_pickEm/pickEm.html*

* *Show how it included the jQuery cdn in the HTML*

* *Explain what each line of the code does*

### 7. Partners Do (5 minutes)

* *MAKE SURE THE CODE FROM THE PREVIOUS DEMO IS UP ON THE SCREEN!*

* *Have students explain to each other what the code on the screen does.*

###### 85 minutes have passed

##### BREAK ( 15 minutes ) - after break it is now 8:10 pm, you have 80 minutes left of class time

### 8. Students do (15 minutes)

* *Slack this out to class*

* Follow the instructions in the JavaScript code below. It already includes jQuery for you. Use jQuery.

* *Slack out this code: 4.1-in-class-exercises/8-student-do_takeNames/takeNames_start.html*

### 9. Everyone do (10 minutes)

* *Open the solution to the above exercise located in 4.1-in-class-exercises/8-student-do_takeNames/takeNames.html*

* *Call on students to go over the previous exercise*

### 10. Instructor do (10 minutes)

* *Instructor demos code. Open code in 4.1-in-class-exercises/10-instructor-do_doughnut/doughnut-1.html folder.*

* *click the buttons and ask the class what happened?*

* *Point out one of the anonymous functions.*

> When does this anonymous function get triggered?

* *Explain how the anonymous function that's passed into the click event is not being triggered on page load - it's being triggered when you click. That's a callback function. When a function is triggered later if something happens.*

* *Explain what each line of code is doing*

* *show the code in doughnut-2.html* 
* *run it*

> Why doesn't the break point get triggered?

answer: I didn't click on the counter button yet.

* *When the break point hits. Run the following code in the anonymous function:*

`this;` //explain that this is the button

`$(this);` //explain how this is wrapped in jQuery so now you can chain jQuery methods on it

`$(this).attr('class', 'bostonCream');` //add a class on the counter button. Point out that the button changed in the html

`$(this).attr('class', '');` //remove a class on the counter button. Point out that the button changed in the html

`$(this).addClass('bostonCream');` //alternatively you could add a class by doing this:

`$(this).removeClass('bostonCream');` //alternative you could remove a class by doing this:

### 11. partners do (15 minutes)

Student Exercise: Passcode

* *Slack this out to the students: 4.1-in-class-exercises/11-partners-do_passcode/passCode_start.html*
* *Slack this out to class*


### 12. Everyone do (15 minutes)

* *Open the Code to the above exercise located in 4.1-in-class-exercises/11-partners-do_passcode/passCode.html*

* *Go over the previous exercise call on one unique student per each part of the previous demo to explain what happened*


### 13. Instructor Do - (5 minutes)

> You have two choices of games for homework

> There's a crystal collector game which is easier

> harder: make the starwars rpg game

* Open the crystal collector game (not the video)
	* Demonstrate the game to the students

* Open the starwars rpg game (not the video)
	* Demonstrate the game to the students

* link students to the hw instructions 
* link students to the hw video demos
* link students to the in class code you did today on github




# If time left over (pavan to do: qa)

### 14. Instructor do (10 minutes)

* *Open the Code located in 4.1-in-class-exercises/4.1.11_addStuff folder.*

* *Explain what each line of the code is doing*

### 15. Partners do (5 minutes)

* *Have students talk to each other about what just happened. MAKE SURE THE CODE IS UP ON THE SCREEN!*

### 16. Instructor do (5 minutes)

* *Call on different students to explain what each parts of the code is doing*

### 17. Student do (15 minutes)

Student Exercise: Picture Perfect
* *Give the files from the starter folder located in (4.1-in-class-exercises/4.1.14_picturePerfect/picturePerfect_starter) to students*

* *Slack this out to class*

* You are given an HTML file and a folder containing different pictures of letters.
	* Using jQuery create the code that will render pictures from the images folder to the DOM and use it to spell the word "perfect"

### 18. Everyone do (10 minutes)

* *Open the Code to the above exercise located in 4.1-in-class-exercises/4.1.14_picturePerfect/picturePerfect_solution.*

* *Call on a student to go over the previous exercise*

### 19. Instructor do (2 minutes)

Student Exercise: lotteryGenerateor

* *Demo the app located in 4.1-in-class-exercises/4.1.16_lotteryGenerator folder.*

* *Slack this out to class*

* You are tasked to create a lottery generator.
	* When the HTML is loaded there is a "Generate" button.
	* When the user hits the button it will render 7 randomly generated numbers to the DOM.
	* Whenever the button is pressed, 7 new numbers will be generated and added under the previous numbers.
	* There will also be a "Clear" button.
	* Whenever the "Clear" button is pressed, it removes all of the numbers on the screen.

### 20. Student do (10 minutes)

* *Have student write out the pseudo code. NO CODING YET!*

* *Walk around and look at students computers to see what their pseudo code looks like*

### 21. Everyone do (3 minutes)

* *Call on a student to go over explain their pseudo code*

### 22. Student do (10 minutes)

* *Have student start working on the lab! CODE CODE CODE!*

### 23. Everyone do (10 minutes)

* *Open the Code to the above exercise located in 4.1-in-class-exercises/4.1.16_lotteryGenerator folder.*

* *Call on a student to go over the previous exercise*


# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.