# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)
* Expertly navigate the file system and terminal basics
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Implement complex logical conditions to meet an objective.
* Write SQL commands to perform Create, Read, Update and Delete commands
* Write clean code with proper variable names, indentation according to industry best practices

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

1. slack out the objectives to the students, and call on random students to read them outloud. *Make a comment about each objective after a person reads it.*

1. in class repo for your section, make a new folder for this week and day.

1. open up that folder in Sublime Text

1. make an objectives.txt file in that folder

1. copy these objectives into that objectives.txt file and save it, commit it, push it up.

1. keep the file open while the students are reading the objectives 

* Students will create a MySQL relational database, and create tables inside of it
* Students will use the JOIN clause in SQL to combine data from different tables
* Students will make a Node.js script connecting to their MySQL Database.
* Students will write code inside of a Node.js script to perform C.R.U.D on a MySQL database

# Theme: 
Prompt + MySQL + Node

--------- --------- ---------

# INSTRUCTOR MUST COVER ALL!!!

```
ALL or they won't be able to do the homework.
```

### 1. Students do (15 minutes)

1. Create a `bears_db` database, make a `happy_bears` table with a primary integer auto incrementing key of id, a name varchar(30) not null, a favorite_food varchar(30) not null, a personality varchar(30) not null.

2. Insert a happy bear named Nom Nom whose favorite food is tacos and is mean.

3. Make a node file that uses the mysql npm package, connects to the bears_db database and selects all the bears and returns them to the terminal through a console log. 

4. Run the node file.


### 2. Everyone do (10 minutes)

* *Call on a weaker student to go over the previous exercise*

* *Slack out your solution and commit this in your in class repo*


### 3. Instructor do (20 minutes)

* *do the following in mysql in front of students*

```
CREATE DATABASE sports_db;
USE sports_db;

CREATE TABLE sports (
id int AUTO_INCREMENT,
sport_name varchar(30) NOT NULL,
intensity int NOT NULL,
PRIMARY KEY(id)
); 

SELECT * FROM sports; /* show that it's empty */
```

* *make a node script that will select, insert, update, delete from the sports_db* 
* ***TO SAVE TIME: please copy and paste the following code in batches instead of coding this from scratch. Obviously go over each part as you copy and paste it.***

* *** Don't run all the functions all at once. Run them one at a time and make sure you get the class talking to each other about what's happening on the screen. Not one person. The entire class should be talking to each other. ***

```
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sports_db'
});

var showSports = function() {
  connection.query('SELECT * FROM sports', function(err, res) {
      console.log("Sports we have ", res);
  });
}

//showSports();
```

> Explain what just happened to your partners

```
var addFourSports = function() {

  connection.query('INSERT INTO sports (sport_name, intensity) VALUES (?,?)', ['extreme ping pong', 10], function(err, result) {
    if (err) throw err;

    console.log("insert finished~!")

  });

  connection.query('INSERT INTO sports (sport_name, intensity) VALUES (?,?)', ['tag', 7], function(err, result) {
    if (err) throw err;

    console.log("insert finished~!")

  });

  connection.query('INSERT INTO sports (sport_name, intensity) VALUES (?,?)', ['man hunt', 9], function(err, result) {
    if (err) throw err;

    console.log("insert finished~!")

  });

  connection.query('INSERT INTO sports (sport_name, intensity) VALUES (?,?)', ['ninja warrior', 10], function(err, result) {
    if (err) throw err;

    console.log("insert finished~!")

  });
};

//addFourSports();
```

> Explain what just happened to your partners

```
var updateThirdSport = function() {
  connection.query('UPDATE sports SET sport_name = ? WHERE id = 3', ['knife fighting'], function(err, result) {
    if (err) throw err;

    console.log("update finished~!");
  }); 
  
};

//updateThirdSport();
```

> Explain what just happened to your partners

```
var deleteFirstSport = function() {
  connection.query('DELETE FROM sports WHERE id=?', [1], function(err, result) {
    if (err) throw err;

    console.log("delete finished~!");
  }); 
  
};

//deleteFirstSport();
```

> Explain what just happened to your partners

### 4. Partners do (20 minutes)

1. In your previous happy_bears node script that you made, make an addBears funtion that loops over the below bearData array of objects and inserts the appropriate bear with the appropriate information into the happy_bears table.

2. Make an updateBear function that will update the third bear's favorite food to bamboo.

3. Make a deleteBear function that will delete the first bear in the happy_bears table.

4. call your functions at the end one at a time in the order that you made them. 

```
var bearData = [
  {name: 'Grizzly', favorite_food: 'Pizza', personality: 'Out going' },
  {name: 'Panda', favorite_food: 'Hot Dog', personality: 'Shy' },
  {name: 'Ice Bear', favorite_food: 'Fish', personality: 'Chill' }
];
```

### 4. Everyone Do (10 minutes)

* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*

###### 75 minutes have passed

*** ZHEN and Pavan need to update objectives at the top and the INSTRUCTOR MUST COVER!!! section when finished ***
*** ZHEN And PAVAN approve of above ***

### 5. Instructor do (10 minutes)

* *create the following node app in front of students*

App setup:
```
1.create App Dir named 'askme'
2.npm init
4.create 'index.js' file
5.npm install prompt
```
* Create this in the `index.js` file

```
var prompt = require('prompt');
prompt.start();
prompt.message = '';

prompt.get(['Say_anything'], function(err, result) {
  if (result.Say_anything == "Marco") {
    console.log("Polo!!!")
  } else {
    console.log("You said (" + result.Say_anything + ")" + " or watever...");
  }
});
```

show that a prompt can take in multiple inputs.

* *Make sure to use nodemon for the following demo*
```
prompt.get(['year','month','day'], function(err, result) {
  console.log("The date you entered is " + result.month + "/" + result.day + "/" + result.year );
});
```

### 7. Partners do ( 5 mins ) 

> Explain what just happened in the last two examples to your partners

### 8. Students do (20 minutes)

Introduce the exercise:simple prompt

The FBI needs an app to take eye witness reports of UFO sighting, you will be creating a node.js app to help the FBI make reports.

* *Copy the following instructions below and paste it in slack, and have students work on it*

When the app is run, the user will get a briefing with console logs.
The app will start by console logging these messages each on their own lines:

```
  "Hi,I'm from the FBI (X-files Division) I just wanted to ask you some questions."
  "Please answer the following questions as best you can, but if can't answer the question please say NOT SURE."
  "What is..."
```

* After these messages are been displayed, propmpt the user for their: 
  * first name
  * last name
  * age
  * time of sighting
  * location of sighting
  * name of another witness
  * description of sighting
  * initail thoughts
  * number of previous encounters
  * current drug use habit.

* You must create a report conclusion depending on the answer you get from the user.
  * If 8 or more answers are "NOT SURE" in the report, console log conclusion is Very Unreliable.
  * If 5 or more answers are "NOT SURE" the report, console log conclusion is Unreliable.
  * If only 2 or less answer are "NOT SURE" the report, console log conclusionis Complete.

Once the user has made an input for all of the questions, concatenate all the answers and your conculsion into one paragraph and console log it to the terminal in the following format, see example below.

```
FBI aliens sighitng report:

Eye witness name is Bob Johnson at age: 56
According to eye witness sighting happened sometime around 8PM-ish near Burbank
Another possible witness include a person by the name: NOT SURE
The sighting is described as: Some monster thingy and the witness's initial thoughts are: WOAH MAN!
This is the witness: 11 or 12th encounter, current drug use habit is None

Report conclusion: Complete
```

Instructions:

  1. Create a new app directory named 'FBI'.
  2. Setting up node by doing 'npm init'
  3. Create 'index.js` file
  4. Create a function called `makeReport()`
  5. Call prompt inside of the `makeReport()` function, only one prompt for this app
  6. Call `makeReport()` when you finishing building the function


##### Make sure to use nodemon for this app
  * *If students are still unclear demo the app infront of the class*

### 9. Everyone Do (10 minutes)

* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*

###### 120 minutes have passed

### 10. BREAK ( 40 minutes )
--------- --------- ---------

### 11. Instructor do: ( 15 minutes ) 

* Matryoshka doll Demo *
This demo will show how scope is losting during multiple nested prompt functions.
The solution to this demo shows how to get around the scope issue but using self.

```
//matryoshka doll app

```

### 12. Partners do: ( 5 minutes ) 

> Explain what just happened in the last example to your partners

### 12. Students do: ( 25 minutes ) 

* *Run the `jukebox` demo to demo how this app should work *

In the jukebox app there are two artists they each carry two songs, with the following lyrics.

```
Lorde:

  Team: (lyrics)
    If user choose Team jukebox will play:
    "~ Wait'til you're announced
    We've not yet lost all our graces
    The hounds will stay in chains ~""

  Yellow Flicker Beat: (lyrics)
    If user choose Team jukebox will play:
    "~ I’m a princess cut from marble,
    smoother than a storm.
    And the scars that mark my body, they’re silver and gold ~"
    Once a song is played will quit the jukebox.

KanyeWest:

  Power: (lyrics)
    If user choose Power jukebox will play:
    ~ I'm living' in that 21st century
    Doing something mean to it
    Do it better than anybody
    you ever seen do it ~

  Stronger: (lyrics)
    If user choose Stronger jukebox will play:
    ~ N-now th-that that don't kill me
    Can only make me stronger
    I need you to hurry up now ~
```
### Creating the jukebox object

* Start by creating a variable `jukebox` and make it an object
  * Inside of the jukebox object we will be creating some functions

* The `artistMenu` message function
  * Create a key named `artistMenu` inside of the `jukebox` object
    * console logs Please select who you want to listen to...
    * console logs Enter (L): ------> Pick songs from Lorde!
    * console logs Enter (K): ------> Pick songs from KanyeWest!
    * console logs Enter (Q): ------> Quit and exit jukebox!



  artistMenu : function()
  pickArtist : function(input_scope)
  LordeSongs : function()
  KanyeSongs : function()
  LordeChoices : function(input_scope)
  KanyeChoices : function(input_scope)
  start : function()
  exit: function()

To start the app call `jukebox.start();`

Part 2: 
  * After a song is played don't quit the jukebox, the jukebox will now go back to menu displaying the chooses and the take user input.

### 13. Instructor do: ( 15 minutes )

* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*

(Instructor do): Review all topics

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.