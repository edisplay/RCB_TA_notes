# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Work independently or in a group on complex projects throughout the entire development lifecycle
* Implement complex logical conditions to meet an objective.
* Write clean code with proper variable names, indentation according to industry best practices

# Theme: JQuery/JavaScript Review and Timing Events

# INSTRUCTOR MUST COVER!!!

```
Parts
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

* students will reinforce their knowledge of JQuery
* students will reinforce their knowledge of JavaScript
* students will understand JavaScript Timing Events

### 1. Student do (15 minutes)
Review Exercise: Coin Flipper

* *Open this file into chrome and demo it for the class: [PUT FOLDER HERE!]*

* *Slack this out to class*

```
* Make a Coin Flipper
* The user presses a button, and the app randomly chooses heads or tails and displays it on the screen.
* If heads, use: http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg
* If tails, display: http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-tail.jpg
* BONUS:
  * Allow the user to pick Heads or Tails before they press the coin flip button. Notify them if they guessed correctly or incorrectly.

```

### 2. Everyone do (10 minutes)

* *Open the Code to the above exercise located in [PUT FOLDER HERE!]*

* *Call on a student to go over the previous exercise*

### 3. Instructor do (5 minutes)

* *Recap the last Exercise and answer any questions*


### 4. Partners do (10 minutes)

* *Slack this out*

* With a partner, talk about what each [this] keyword will be.
* Answer the questions at the bottom of the script.

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>What is this?</title>
  
</head>
<body>
  <button id="button">CLICK ME!</button>

  <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.js"></script>
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

* *Open the Code to the above exercise located in file path goes here*
* *Choose a team to go over the previous exercise*
* *Run each function to see if they are correct or not*


### 6. Instructor does (5 minutes)

* *Recap the last Exercise and answer any questions*


### 7. Instructor do (10 minutes)
  > Introduce setTimeout
  > Introduce clearTimeout

  >Explain how they are located on the window object?

### 8. partners do (5 minutes)
  > Show them an example of setTimeout and clearTimeout
  >Have them pair program and adjust the values

### 9. Student do (15 minutes)
>Make a page with a a simple timer that sends an alert and plays a sound/video after 15 minutes
>They will use this to time the break

###### 85 minutes have passed

##### BREAK ( 15 minutes ) - it is now 8:10 pm, you have 80 minutes left of class time

### 12. Instructor do (5 minutes)
  >Go over exercise
  >Answer any questions

### 10. Instructor do (10 minutes)
  >Introduce setInterval
  >Introduce clearInterval

### 13. partners do (5 minutes)
> Show them an example of setInterval and clearInterval
>Have them pair program and adjust the values

### 14. Student do (20 minutes)
>Create a stopwatch with Start, Stop
>Bonus: Lap timer with Jquery
> put everything in an object to illustrate how this will point to the window inside a timing event. (Because the function exists in the window object )
### 15. Everyone do (10 minutes)
> Go Over stopwatch exercise

### 19. Student do (20 minutes)
> Create slideshow using jquery and timing events

### 18. Everyone do (5 minutes)
> Go Over, answer questions

### 21. Instructor Do - (5 minutes)
 >Present Homework
 >Trivia game
 >Simple option and Advanced


# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.