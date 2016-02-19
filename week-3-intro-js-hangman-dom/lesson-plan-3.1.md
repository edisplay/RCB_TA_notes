# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

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
2, 3, 5, 6, 8, 9, 10, 11, 13
```
or they won't be able to do the homework.

# ATTENTION

DO NOT USE JS FIDDLES.

We want students getting good at break points.

If you use js fiddles, then they can't get good at break points. 

DO NOT USE JS FIDDLES.

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

* students will use JavaScript
  * data types (strings, numbers, arrays)
  * user input gathering techniques
  * conditional logic

### 1. Partners do (15 minutes)

~~~~~~~~~~~~
PART ONE
~~~~~~~~~~~~
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
    var likeCats = confirm('Do you like cats?');

    var petName = 'Meeses';
    var petType = 'tuxedo cat';
    var petAge = 5;
    var petIsCat = true;

    if (likeCats){
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
    }else if(petAge < 5){
      alert('My pet is less than 5 years old')
    }else if(petAge > 5){
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

~~~~~~~~~~~~
PART TWO
~~~~~~~~~~~~
1. If Albert is thinking of a number, adds 5 to the number, then subtracts the result by 2, multiplies the result by 3, he gets 39. What's the original number that Albert thought of?

2. 

Find out what x and y are.

y is greater than x

x + y = 10
xy = 24

3. 

if 4 is less than 6 then jump up

4. 
if 6 is less than 4 then clap

5. 
if cats are reptiles then clap
else if dogs are mammals then snap

6. 

if dogs meow then stomp your feet
else if Ghana is a continent then scream really loud
else snap your fingers

7. 

make a list of 5 numbers: 4, 2, 8, 6, 9  

multiply the first and last ones by 3. Then multiply the middle ones by 2.

What's the new list of numbers?

8. 

if you used to play tag when you were a child then whisper to your partner: "Tag was a lot of fun."

else whisper to your partner that: "Tag wasn't that great; I was into books bro."










answers:
1. 13
2. x is 4 and y is 6
7. 12, 4, 16, 12, 27

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
    var name = 'Captain America';
    var age = 98;

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

### 3. Student do (10 minutes)

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

### 4. Everyone do (10 minutes)

* *Go over the previous exercise*

### 5. Instructor do (15 minutes)

* *demo the below code (we're basically adding to 2. student do)*

* *explain it to the class*

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
      document.write("You don't like sushi or ginger tea.");
    }      
  </script>
</body>
</html>
```

### 6. Student do (10 minutes)

- ask the user if they eat steak

- if they do then write the following to the screen: "Here's a steak sandwich!"

- if they don't then write the following to the screen: "Here's a tofu stir fry!"


BONUS: additionally ask the user what their birth year is. If it's greater than 1994, alert to the screen that "you're older than Justin Bieber". If it's smaller than 1994, then alert to the screen that "you're younger than Justin Bieber". If it's equal to 1994, then alert "you're around the same age as Justin Bieber" to the screen.


solution:
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
    //exercise
    var eatSteak = confirm("do you eat steak?");
    if (eatSteak){
      document.write("Here's a steak");
    }else{
      document.write("Here's a tofu stir fry!");
    }

    //bonus
    var year = prompt('What year were you born?');

    if (year > 1994){
      alert("you're younger than Justin Bieber");
    }else if(year < 1994){
      alert("you're older than Justin Bieber");
    }else{
      alert("you're around the same age as Justin Bieber");
    }
  </script>
</body>
</html>
```

### 7. Everyone Do 10 minutes

Go over the previous exercise - call on students to speak

##### 80 minutes have gone by - it is now 7:50

### 8. Instructor demo 15 minutes   

* with the below code

* *show that the* 
    * *value of an initialized variable is undefined.*
    * *show not equal to comparison.*
    * *show equal comparison.*
    * *show else if.*
    * *show parseInt.*
    * *show the alternative to an if statement - a case statement.*

```
var favBand;

//prints to the console
console.log(favBand);

favBand = 'Collective Soul';

console.log(favBand);
```

```
var age = prompt('your age');

if (age !== 'Run DMC'){
  alert('Your age does not equal to Run DMC.'); //when will this alert?
}else{
  alert('Your age equals to Run DMC'); //when will this alert?
}

if (age == 28){
  alert('You're as old as Pavan')
}else if(age < 28){
  alert('You're younger than Pavan!')
}else if(age > 28){
  alert('You're older than Pavan!)
}
```

```
//this replaces the entire page with this - so it's not something you'll normally use - but it's what we'll use for now to be able to print stuff to the page
document.write('I am ' + age + ' years old.');

var catAge = prompt('how old is your cat?');

alert(catAge + 2); //won't work as expected

alert(parseInt(catAge) + 2); //works as expected
```

```
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
```

### 9. Everyone Do (15 minutes) 

- exercise regarding strings, numbers and booleans, conditional logic

* *do not paste the below code to the students*

* *ask the class to come to the front of the class*

* *copy the code to your screen and ask the class to go to the left of the room if they think something will alert to the screen AND ask the class to go to the right of the room if they think something else will alert to the screen*

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
        alert('puppies')
      }else{
        alert('goats')
      }

      if ("4" === 4){
        alert('puppies')
      }else{
        alert('goats')
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
  </script>
</body>
</html>
```

Solutions: 
  hi, dude, puppies, goats, goo goo dolls, one direction, tofu, richard

##### 110 minutes

##### break - 15 minutes

##### 125 minutes went by

### 10. Instructor do - 15 minutes
> It's time for arrays. Arrays are lists of things. Numbers, words, both, doesn't matter. Arrays are lists of things.

> Everyone say it with me. "Arrays are lists of things"

* *Demo and explain the below code*

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
    var animals = ['parrot', 'cat', 'dog'];

    console.log(animals.length);
    console.log(animals[1]);
    console.log(animals[2]);    
    console.log(animals[0]);
    console.log(animals[animals.length]);
    console.log(animals[animals.length-1]);
    console.log(animals.indexOf('bear'));
    console.log(animals.indexOf('parrot'));
  </script>
</body>
</html>
```

> arrays have indexes so we can get random value

> arrays start at 0

> arrays store any value you want, but you should probably store a list that makes sense

> each instance of an array has its own methods

> keep in mind that all of what we are doing is very useful for the homework

* *slack the code below to the students after demoing*

```
animals.push('bear') //pushes to the end

animals.unshift('rabbit') //pushes to beginning // returns the new array length

animals.pop() //removes the last element of the array //also returns that element as a value

animals[0] = 'lion'; //replaces a value in an array
```

```
//check if something exists in an array or not
if (animals.indexOf('bear') == -1) {
  alert('not in the list man');
}else{
  alert('in the list man')
}
```

```
//choose random option from an array
var ranNumZeroToArrLength = Math.random() * animals.length;
var roundedNum = Math.floor(ranNumZeroToArrLength);

var randomComputerOption = animals[roundedNum];
```

### 11. Student do - 10 minutes

Part 1

* explain what arrays are to your partner

Part 2

* start with this array:

```
var animalsIamThinkingOf = ["lizards", "skunks", "chipmunks"]
```

ask the user to guess a type of animal you are thinking of (if it's in the above array then you're thinking of it)

if the animal is in the pets array then alert 'You guessed right!'

* use the indexOf method. The indexOf method returns -1 if it's not in the array
  * http://www.w3schools.com/jsref/jsref_indexof_array.asp

Part 3

* run the following code and explain things to your partner

```
var word = 'jupiter';

var wordsLetters = word.split(''); //creates an array of the string 

var wordsLetters = word.split(); //doesn't work as expected why?

var letterIndex = wordsLetters.indexOf('a')

wordsLetters.splice(letterIndex, 1); //gets rid of that letter in the array

wordsLetters;
```

### 12. Everyone do - 10 minutes

go over the previous exercise with the class

### 13. Partners do - 10 minutes

Part One

- make a list of 5 of your favorite bands/musicians and put it inside of an array and store that into a variable called myFavoriteMusicalArtists

- ask the user for a band/artist, turn the user input lower case (use the ) and then tell the user if the band is inside your myFavoriteMusicalArtists array or not. Which means you like the same band the user does too! 

Part Two

```
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
```

### 14. Everyone do - 5 minutes

* *go over the previous exercise with the class*

##### 15. Instructor Do - 5 minutes
    
* show the hw instructions

* two choices of games to make:

  * easier: make a psychic game

  * harder: make a hangman game


# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.