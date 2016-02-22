# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Work independently or in a group on complex projects throughout the entire development lifecycle
* Implement complex logical conditions to meet an objective.
* Write clean code with proper variable names, indentation according to industry best practices

# Theme: jQuery/JavaScript Review and Timing Events

# INSTRUCTOR MUST COVER!!!

```
7,8,11,13
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

* Students will reinforce their knowledge of jQuery
* Students will reinforce their knowledge of JavaScript
* Students will understand JavaScript Timing Events

### 1. Student do (15 minutes)
Review Exercise: Coin Flipper

* *Open this file into chrome and demo it for the class: 5.1.1_coin_flip/solution/5.1.1_coin_flip.html*

* *Slack these instructions out to class*
* *Slack out 5.1.1_coin_flip/skeleton/coin_flip.html*

```
* Make a Coin Flipper Game

* Follow the directions in the html file

* How the app works:
  * The user chooses Heads or Tails, and the computer randomly selects heads or tails and displays the outcome on the screen. The app then displays whether or not the user won or lost.
  * If heads, use: http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg
  * If tails, display: http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg

* BONUS:
  * Put your JavaScript in its own file and link to it in the HTML
  * Keep track of the number of Heads or Tails and display the results on the screen.
  * Add CSS styling
```

### 2. Everyone do (10 minutes)

* *Open the Code for the above exercise, located in the 5.1.1_coin_flip folder*

* *Call on a student to go over the previous exercise*

### 3. Instructor do (5 minutes)

* *Recap the last Exercise and answer any questions*


### 4. Partners do (10 minutes)

* *Walk around, make sure Students are working with a Partner!*
* *Slack this out:*

With a partner, answer the questions in the script:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>What is this?</title>

</head>
<body>
  <button id="button">CLICK ME!</button>

  <script type="text/javascript" src="https://code.jQuery.com/jQuery-2.2.0.js"></script>
  <script type="text/javascript">

    var outside = function() {
      console.log(this); //1. what will be console logged out? What is *this* in this case?
    };

    $('#button').on('click', function(){
      console.log(this); //2. what will be console logged out? What is *this* in this case?
    });

    var bob = {
      firstName: "Bob",
      lastName: "Smith",
      whoIsBob: function() {
        console.log(this);
      },
      fullName: function() {
        //put something inside of here so that this works
      }
    };

    //3. what will the console log output if this function gets called:

    demoObject.whoIsBob();

    //4. fill in the code inside the fullName function above so that the below code console.logs out Bob's full name using the firstName and lastName properties

    demoObject.fullName();

    //5. Fill in the code below to make the theChosenOne function log "Keanu Reeves".

    //put code here
    //and put code here

    //don't touch any of the code below!!
    var theChosenOne = function () {
      console.log(this.firstName + "" + this.lastName)
    }

    theChosenOne();

  </script>
</body>
</html>
```

### 5. Everyone Do (10 minutes)

* *Open the Code for the above exercise located in 5.4.1_this.html*
* *Choose a team/pair to go over the previous exercise*
* *Run each function to see if they are correct or not*


### 6. Instructor does (5 minutes)

* *Recap the last Exercise and answer any questions*

### 7. Instructor does (10 minutes)

* *Open 5.1.7_timeout.html*
* *Introduce setTimeout and clearTimeout (we will get to setInterval after the break)*
* *Go over the file and explain what it's doing.*
* *Be sure to mention:*
  * *These are vanilla Javascript methods, not jQuery*

### 8. Instructor does (5 minutes)
* *Open 5.1.8_context.html*
* *Explain how functions executed by a setTimeout are run in a different execution context.*

### 9. Student do (10 minutes)
* *Slack out 5.1.9_simple_timer/skeleton/5.1.9_simple_timer.html*
* *Slack the following:*

* Make a page with a a simple timer that sends an alert and plays a sound after 15 minutes
* Have it send an alert when 5 minutes has passed, 10 minutes has passed and when the time is up.
* You will use this to time the break!

###### 80 minutes have passed

##### BREAK ( 15 minutes ) - it is now 8:05 pm, you have 85 minutes left of class time

### 10. Instructor do (5 minutes)
* *Open the files in the 5.1.9_simple_timer folder *
* *Recap the Exercise and answer any questions*

### 11. partners do (5 minutes)
* *Have students partner up and explain to each other what the following is doing*
* *Slack the following:*



```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>

<div id="show-number"></div>
<br>
<button id="stop">Stop</button>
<button id="resume">Resume</button>

  <script type="text/javascript" src="https://code.jQuery.com/jQuery-2.2.0.js"></script>
  <script>
    var number = 100;
    $('#stop').click(stop);
    $('#resume').click(run);

    function run(){
      counter = setInterval(increment, 1000);
    }
    function increment(){
      number--
      document.getElementById('show-number').innerHTML = ('<h2>' + number + '</h2>')
      if (number === 0){
        stop();
        alert('Time Up!')
      }
    }

    function stop(){
      clearInterval(counter);
    }

  run();
  </script>
</body>
</html>

```
### 12. Instructor do (5 minutes)
* *Open 5.1.11_interval.html*
* *Choose a team/pair to go over the previous exercise*
* *Answer any questions about anything we've covered so far*

### 13. Student do (20 minutes)
* *Open 5.1.13_stopwatch/5.1.13_stopwatch.html and demonstrate the stopwatch to the class*
* *Leave it up while they work.*
* *You will be giving them two starter files, a JavaScript file and an HTML file.*
* *Slack out 5.1.13_stopwatch/skeleton/5.1.13_stopwatch.html*
* *Slack out 5.1.13_stopwatch/skeleton/stopwatch.js*
* *Slack the following exercise:*

```
* You will not need to edit the HTML file we give you.
* Create a file called stopwatch.js in the same folder as your html file. Paste the JavaScript from Slack into it.
* Use jQuery and the timing events you learned today to create a stopwatch with Start, Stop, and Reset buttons.
  * Bonus: Add a lap timer.
  * Bonus: Use CSS to style the timer
```

### 14. Everyone do (15 minutes)
* *Open the files in the 5.1.13_stopwatch folder*
* *Go over the previous exercise*
* *You do not need to show the CSS unless someone asks to see it. The focus is on the javascript*


### 15. Student do (20 minutes)
* *Open 5.1.15_slideshow/5.1.15_slideshow.html and show the students what they will be making.*
* *Slack out the contents of the 5.1.15_slideshow/skeleton folder*
* *Slack the following exercise:*

* Create a slideshow using jQuery and JavaScript Timing Events
* Select a few images and make a slideshow
* Display the "loading.gif" image in between each picture for one second.
  * Bonus: Add CSS styling


### 16. Everyone do (10 minutes)
* *Open the files in the 5.1.15_slideshow folder*
* *Go over the previous exercise*

### 17. Instructor Do - (5 minutes)
* *Present the homework - there are two options, a basic trivia game and a slightly more advanced one.*
* *The students learned have learned everything they need to complete the homework, and can complete it tonight.*
* *Play the two videos (advanced-trivia-demo.mov and basic-trivia-demo.mov)*


# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.
