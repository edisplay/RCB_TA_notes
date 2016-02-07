# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Yes
    * Expertly navigate the file system and terminal basics
    * Work independently or in a group on complex projects throughout the entire development lifecycle
    * Communicate the basics of serving a webpage and how the browser renders code
    * Deploy static websites to a cloud provider
    * Implement complex logical conditions to meet an objective.

* Kind of
    * Develop your vision for a website -- and then build it!
    * Understand and implement the mechanics of Git flow (including branching, merging, pull requests)
    * Apply ‘social coding’ accepted and best practices (including source control, issue tracking, functional feedback, etc)
    * Write clean code with proper variable names, indentation according to industry best practices

# Theme
Intro to JavaScript

# INSTRUCTOR MUST COVER!!!
```
TBA
```
or they won't be able to do the homework.

# ATTENTION

DO NOT USE JS FIDDLES.

We want students getting good at break points.

If you use js fiddles, then they can't get good at break points. 

DO NOT USE JS FIDDLES.

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

* students will trigger break points in multiple ways to "stop time"
* students will use 

### 1. Partners do (15 minutes)

> I know you don't know how to use JavaScript yet, I want you to try your best for 15 minutes to run this code and disuss it line by line with your partners.

1. Save the following code to an html file
2. Open it in chrome watch how it works
3. Relate what it does to to the code. 
4. Explain to your partners what it does line by line

```
<!DOCTYPE html>
<html>
<head>
  <title>
    data types, user input, conditional logic
  </title>
</head>
<body>
  <script type="text/javascript">
    var userName = prompt("What's your name?");
    var confirm = confirm('Do you like cats?');

    var petName = 'Meeses';
    var petType = 'tuxedo cat';
    var petAge = 5;
    var petIsCat = true;

    if (confirm){
      alert(petName + petType + petAge)
    }else{
      alert("You don't get my cat's information")
    }

    if (petIsCat == true){
      alert('my pet is a cat')
    }else{
      alert('my pet is not a cat')
    }

    if (petAge !== 7){
      alert('My pet is not 7 years old')
    }

    if (petAge == 5){
      alert('My pet is 5 years old')
    }elseif(petAge < 5){
      alert('My pet is less than 5 years old')
    }elseif(petAge > 5){
      alert('My pet is older than 5 years old')
    }

    //this replaces the entire page with this - so it's not something you'll normally use - but it's what we'll use for now to be able to print stuff to the page
    document.write('Welcome to our page ' + userName);

    var catAge = prompt('how old is your cat?');

    alert(catAge + 2); //won't work as expected

    alert(parseInt(catAge) + 2); //works as expected
  </script>
</body>
</html>
```

### 2. Instructor do (10 minutes)

* *do not go over the previous code yet!*

> I'll be going over the code I pasted to you later. I will be breaking down each of those parts now.

> Variables store data. 

> Your name is a variable. for me, name equals to pavan, which is a word or in JavaScript - a string.

> Your age is a variable. for me, age equals to 28, which is a number in JavaScript.

* *demo the following code inside of an html file and explain it*

* *slack the code to the students*

```
<!DOCTYPE html>
<html>
<head>
  <title>
    data types, user input, conditional logic
  </title>
</head>
<body>
  <script type="text/javascript">
    var name = 'pavan';
    var age = 28;

    alert(name);
    alert(age);

    var anotherName = prompt('what\'s your name');
    var confirmAdult = confirm('are you 18 years or older?');

    alert(anotherName);
    alert(confirmAdult);
  </script>
</body>
</html>
```

### 2. Student do (10 minutes)

* Ask the user with a confirm: "Do you like sushi?" and store that into a variable.

* Ask the user "What kind of sushi do you like?" with a prompt and store that into a variable.

* alert both variables to the screen.

solution
```
<!DOCTYPE html>
<html>
<head>
  <title>
    data types, user input, conditional logic
  </title>
</head>
<body>
  <script type="text/javascript">
    var confirmSushi = confirm('Do you like sushi?');
    var sushiType = prompt('What kind of sushi do you like?');

    alert(confirmSushi);
    alert(sushiType);
  </script>
</body>
</html>
```

### 3. Everyone do (5 minutes)

* *Go over the previous exercise*

### 4. Instructor do (15 minutes)

* *demo this code (it's additional to 2. student do)*

* *explain it to the class*

* *replace the conditional with (confirmSushi)*

> you can't set a variable to an alert, because the alert function doesn't return anything

> document.write will write to the screen, but it'll overwrite anything you had before on it

```
<!DOCTYPE html>
<html>
<head>
  <title>
    data types, user input, conditional logic
  </title>
</head>
<body>
  <script type="text/javascript">
    var confirmSushi = confirm('Do you like sushi?');
    var confirmGingerTea = confirm('Do you like Ginger Tea?')
    var sushiType = prompt('What kind of sushi do you like?');

    if (confirmSushi){
      alert("You like " + sushiType + " !");
    }else if(confirmGingerTea){
      alert("You like ginger tea!!")
    }else{
      document.write("You don't like sushi.");
    }
  </script>
</body>
</html>
```

### 5. Student do (15 minutes)


As you go over the above code, you'll be covering the following:
- taking in user input

  - prompts take in strings
    - what are strings

  - confirms take in booleans
    - what are booleans

  - alerts just alert to the page

### 6. 15 minutes I DO - use prompts/confirms, alerts/document.write, variables, strings/numbers/booleans, 
   
10 minutes we DO

- ask the user if they eat steak

- if they do then write the following to the screen: "Here's a steak sandwich!"
- if they don't then write the following to the screen: "Here's a tofu stir fry!"

/*
  BONUS: additionally ask the user what their birthyear is. If it's greater than 1987, alert to the screen that "you're older than Pavan". If it's smaller than 1987, then alert to the screen that "you're younger than Pavan". If it's equal to 1987, then alert "you're around the same age as Pavan" to the screen.
*/

  solution:

  //exercise
  var eatSteak = confirm("do you eat steak?");
  if (eatSteak){
    document.write("Here's a steak");
  }else{
    document.write("Here's a tofu stir fry!");
  }

  //bonus
  var year = prompt('What year were you born?');

  var year = parseInt(year);

  if (year > 1987){
    alert("you're older than Pavan");
  }elseif(year < 1987){
    alert("you're younger than Pavan");
  }else{
    alert("you're around the same age as Pavan");
  }


    - variables contain data (like my name is 'Pavan')

    - variables can be initialized, then set

    - if the variable is initialized, it's value is undefined
      - you can do variable == undefined and it would be true
        - undefined is a variable that's available in javascript on default (easy explaination)
        - undefined is a variable that's available in global scope on default

    - variables can be initialized and set in one go

    - go over the different datatypes being used

    - go over conditional logic 

    - go over writing to the page

      var userName = prompt("What's your name?");
      var confirm = confirm('Do you like cats?');

      var petName = 'Meeses';
      var petType = 'tuxedo cat';
      var petAge = 5;
      var petIsCat = true;

      if (confirm){
        alert(petName + petType + petAge)
      }else{
        alert("You don't get my cat's information")
      }

      if (petIsCat == true){
        alert('my pet is a cat')
      }else{
        alert('my pet is not a cat')
      }

      if (petAge !== 7){
        alert('My pet is not 7 years old')
      }

      if (petAge == 5){
        alert('My pet is 5 years old')
      }elseif(petAge < 5){
        alert('My pet is less than 5 years old')
      }elseif(petAge > 5){
        alert('My pet is older than 5 years old')
      }

      //this replaces the entire page with this - so it's not something you'll normally use - but it's what we'll use for now to be able to print stuff to the page
      document.write('Welcome to our page ' + userName);

      var catAge = prompt('how old is your cat?');

      alert(catAge + 2); //won't work as expected

      alert(parseInt(catAge) + 2); //works as expected



      //alternatively you can do a switch statement:

      switch (new Date().getDay()) {
          case 0:
              day = "Sunday";
              break;
          case 1:
              day = "Monday";
              break;
          case 2:
              day = "Tuesday";
              break;
          case 3:
              day = "Wednesday";
              break;
          case 4:
              day = "Thursday";
              break;
          case 5:
              day = "Friday";
              break;
          case 6:
              day = "Saturday";
              break;
      }


  10 minutes we Do (message me your answers)
    - exercise regarding strings, numbers and booleans, conditional logic

    if (true == true){
      alert('hi')
    }else{
      alert('bye')
    }

    if (false == false){
      alert('dude')
    }else{
      alert('nope')
    }

    if ("4" == 4){
      alert('barnard')
    }else{
      alert('marford - I made this up')
    }

    if ("4" === 4){
      alert('barnard')
    }else{
      alert('marford - I made this up')
    }

    if (true){
      alert('goo goo dolls')
    }else{
      alert('vanilla ice')
    }

    if (false){
      alert('the neighborhood')
    }else{
      alert('one direction')
    }

    if (("5" + "5") == "55"){
      alert('tofu')
    }else{
      alert('soybean')
    }

    if ((6 + "5") == "65"){
      alert('richard')
    }else{
      alert('branson')
    }

    Answers: 
      goo goo dolls, one direction, tofu, richard

  10 minutes I do (95 minutes)
    - go over while loops

    //1
    var payingAttention = true;

    while (payingAttention){
      payingAttention = confirm('Are you paying attention _____?');
    }

    //ok ___ can you look at your phone - and stop paying attention - ____ is now not not paying attention

    //2
    var stockPrice = 10; //assume dollars

    while (stockPrice >= 10){

      stockPrice = confirm("What's YGE's stock price now?"); //won't work - why? Spend 2 minutes discussing this with your partner

      if (stockPrice < 10){
        alert('Sell!!!');
      }
    }

    //Answer:
    //wrap confirm in parseInt

    //on a side note: isNaN(""); //checks if a value is a number or not - why not isNumber?... JavaScript

  10 minutes we do (slack me your answers - if you don't, i'll assume you had trouble - and i'll be reaching out to help you)

    - while loop exercise

    //Problem 1
      //ask the user for a number, if it's above 5, keep asking the user for a number, if not, then alert "you lost!!!"

    //Problem 2
      //ask the user for a letter

      //if the letter is equal to either A, B, or C then keep going. If not then stop the loop. 

      //make your program case insensitive by using toLowerCase() - go here: http://www.w3schools.com/jsref/jsref_tolowercase.asp

    //Bonus using arrays (we haven't gone over this yet)
      //start with this array 
      //var pets = ["cats", "dogs", "rabbits"]

      //ask the user to guess a type of animal
        //if the animal is in the pets array then alert 'You won!'
        // use the indexOf method http://www.w3schools.com/jsref/jsref_indexof_array.asp - the indexOf method returns -1 if it's not in the array

  10 minutes I do (arrays)
    - lists of things
    - has indexes so we can get random value
    - starts at 0
    - stores any value you want
    - each instance has its own methods

    lists
      - animals, computers, trump

    var animals = ['parrot', 'cat', 'dog'];

    animals.length();

    animals[1];

    animals[2];

    animals[animals.length()];
    
    animals[animals.length()-1];

    animals.indexOf('bear'); 

    animals.indexOf('parrot'); 

    //check if something exists in an array or not
    if (animals.indexOf('bear') == -1) {
      alert('not in the list man');
    }else{
      alert('in the list man')
    }

    //choose random option from an array
    var randomComputerOption = animals[Math.floor(Math.random() * animals.length)];

    animals.push('bear') //pushes to the end

    animals.unshift('rabbit') //pushes to beginning // returns the new array length

    animals.pop() //removes the last element of the array //also returns that element as a value

    animals[0] = 'lion'; //replaces a value in an array

    var word = 'barnard';

    var wordsLetters = word.split(); //doesn't work as expected why?

    var wordsLetters = word.split(''); //creates an array of the string 

    var letterIndex = wordsLetters.indexOf('a')

    wordsLetters.splice(letterIndex, 1); //gets rid of that letter in the array

    wordsLetters;

    //keep in mind that all of that is useful for the hangman game that you ladies will be building

    //explain what arrays are to your partner


  10 minutes we do
    - make a list of 5 of your favorite bands/musicians and put it inside of an array and store that into a variable called myFavoriteMusicalArtists (make all your options lower case)

    - ask the user for a band/artist, turn the user input lower case and then tell the user if you like the band too 

  10 minutes we do
    // ### Array Manipulation - 20 minutes

    var gameboy = [ 'Game Boy', 'nintendo', 149.99 ];
    var pokemon = [ 'Pokemon Blue', 'nintendo', 49.99 ];
    var tetris = [ 'Tetris', 'SEGA', 49.99 ];

    // How would you:

    // Without touching the above code:
    // * Change the name of the gameboy to be `Game Boy Color`.
    // * Change the company of the pokemon game to be capitalized.
    // * Remove the price of Tetris and store it in a variable oldPrice, then put in a new price 9000.99 into the tetris array.
    // * Set the company of the tetris array to Nintendo instead of SEGA

  10 minutes we do 
    // ### Nested Arrays - 20 minutes

    //PART ONE
      // Create a new variable called cart. Add the gameboy, pokemon, and tetris arrays into the cart array.

      // How would you:

      // * Access the name of the pokemon game through the cart variable.
      // * Access the price of the tetris game.
      // * Change the price of the tetris game to be 9012.
      // * Change the name of the Game Boy in the cart to Game Boy Advance.

      var gameboy = [ 'Game Boy', 'nintendo', 149.99 ];
      var pokemon = [ 'Pokemon Blue', 'nintendo', 49.99 ];
      var tetris = [ 'Tetris', 'SEGA', 49.99 ];

    //PART TWO:
      // * Look at the original variables and look at the values stored in the cart array.
      // * Did changing the array values in the cart array affect the values of the original arrays?
      // * Why?

    // Solution

      var cart = [gameboy, pokemon, tetris];
      //cart.push(gameboy, pokemon, tetris)

      cart[1][0]; //name of the pokemon game
      cart[2][2] //price of the tetris game
      cart[2][2] = 9012; 

    // **Bonus Solution**
      // When we use a variable we are referencing the original value stored there. Cart is just an array, holding references to the three original arrays. If we change the arrays within cart it is the same as changing the original arrays directly.

      // slice will give us a copy of the array -> safer.

  3 minutes I do
    break out of while loop with ```break;```

Homework (you do):
  Make an extreme rock paper scissors game that keeps running until the user wants to quit. It will look like this when done: https://youtu.be/z6YjKudahCE

    - initialize a variable at the top called userInput

    - inside a while loop that uses the following condition: userInput doesn't equal to a string 'quit'
      - prompt the user with this question: "Please choose one of these options: rock, paper, scissors. If you want to stop playing then please type in quit" and capture it into the userInput variable

    - you can use switch statements or if/elseif/else conditional logic

    - if the user types in quit and clicks ok then the game should stop

    - keep score and everytime you prompt the user to "Please choose one of these..." then tell the user their score

    - if the user quits, then display the user's score on the page using document.write

    - add this code to your github as a new repository called rock_paper_scissors_fun
      - if you have trouble with github, then make a gist instead (doesn't require any installation): https://gist.github.com/

      - submit your homework here: 
        use: "week 1 extreme rock paper scissors" for the "name of assignment" question

        https://docs.google.com/forms/d/1D8mazyOoKKOn7Kq5DHJWo6nSDyTOo94jxoPKGxDu5Y8/viewform?usp=send_form

  Bonus 1: count the user's ties
    - count everytime the user ties and display that when your game prompts the user to "Please choose one of these..."
    - also display the user's ties when the user quits

  Bonus 2: put in validation, so if the user doesn't type in rock, paper scissors, string or macbook then your prompt with "Please choose one of these options: rock, paper, scissors..." comes up again

  Bonus 3: When the user quits, make a nice sound play if the user has a score greater than 0, make a bad sound play if the user has a score of 0 or below. Use the first answer to this question: http://stackoverflow.com/questions/9419263/playing-audio-with-javascript

    - you can use sounds from here: http://soundbible.com/
    - you need to download them and keep them included in the same folder as your javascript file in order to use them

  Bonus 4: add in string, and macbook to the options available
    - string beats rock and paper but gets beaten by scissors and macbook

    - macbook beats paper, string but gets beaten by rock and scissors

    - alternatively you can use envelope, rubber band and tape + come up with your own rules


# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.
