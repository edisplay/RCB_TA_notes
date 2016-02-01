# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Expertly navigate the file system and terminal basics
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Implement complex logical conditions to meet an objective.


# Theme
Zen of Coding

# INSTRUCTOR MUST COVER!!!

```
5-12 or they will get really behind and won't be ready for the homework!
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

* Students will get to know their classmates, Instructor, TA's, and Support Team.
* Students and Instructors/TAs will resolve any issues regarding pre-work / setting up computers.
* Students will understand the course structure.
* Students will use common Terminal (Mac) / Git Bash (Windows) commands to set up their folder/file structure to create their first HTML page.
* Students will use common Terminal (Mac) / Git Bash (Windows) commands for web development.
* Students will set up a basic HTML document.

### 1.1. Introduction (35 minutes max)

* *Let the speakers know how much time they have left in intervals of 10 minutes, and 5 minutes near the end*

* *Instructor + TAs take a seat and relax*

* *University, Program Director, Student Services Director, Career Director chime in for an introduction to the students*

### 1.2 Instructor Do (10 minutes)
* Welcome all the students to the class. 
* Slack out the objectives to the students, have unique students read each one and then you make a comment after each one is read
* Introduce yourself, the TA's, and Support Team (Dan S, Student Success, Career Coach)

### 2. Partners Do (5 minutes)
+ Have the students get into groups of 4 or 5 and spend 30 seconds each talking about 1 bad movie they last watched and 1 interest they have.

### 3. Everyone do (15 minutes)
+ Go around the room to each group 

* Have all the students give a quick intro consisting of:
    + Their name
    + What their bad movie is
    + What their interest is
    + Where they come from geographically.


### 2. Instructor Do (5 minutes)

* Quickly go over this - don't rant on every single technology - if students have questions direct them to the parking lot

* Discuss the technologies that will be covered throughout the course and gauge the students to see who is familiar with what.

* Slack the following out to students

```
  + The Browser
    + HTML
    + CSS
    + Javascript
    + jQuery
    + Bootstrap
    + SEO
  + Tools
    + Grunt
    + Heroku
    + Git
    + Github
  + API Interaction
    + API's (Consuming)
    + JSON
    + AJAX
    + Cloud Databases via Parse
    + Javascript Objects
  + Full Stack Development
    + Constructor Functions
    + Templating Engines (Handlebars, Blaze)
    + Cookies, Sessions
    + TDD
    + Node.js
    + MySQL
    + Express.js
    + API's (Creating) & Model-View-Controller (MVC)
    + User Authentication & Object Relational Mapping (ORM)
  + MEAN Stack Development
    + Angular
    + MongoDB
  + Cutting Edge Development
    + Meteor
  + Computer Science Fundamentals Applied to JavaScript
    + Data Structures
    + Sorting Algorithms
    + Design Patterns
```

### 3. Instructor do (5 minutes)

* Discuss what the daily class structure will consist of:
  + Brief Introduction/Background to Objectives for the day
  + Quick Watch Me / Demonstration
  + Students Discuss Code
    + I'll ask you to explain code line by line to your partners
    + I'll ask you to figure out with your partners why the code on the screen is broken
  + Timed In-class Exercises
    + You'll be doing live timed coding tests during your interviews, and this will prepare you
    + You will constantly be put in an interview setting in every class with these timed exercises
     + exercises will be
        + independent
        + with partners
  + Project work
    + independent 
        + Browser based RPG Game
        + Independent Free Form Final Project
    + with partners
        + Front End Project (mashing up APIs)
        + Full Stack Project (server + database + front end)


### 4. Instructor Do (5 minutes)
* Google timer, set it to 5 minutes, put your volume up

* Engage the students to see who has any pre-work issues.

> Everyone open up Sublime Text on their computer. If you don't have it, then start downloading it and installing it now.

> Everyone either go to terminal or git bash and run this command:

```git```

> If it worked then git is installed on your computer

> If it doesn't, then please stay after class for 30 minutes to get git installed. Or come to office hours 45 minutes before the next class and get your issues fixed.

> The rest of the programs can be installed and downloaded during office hours before or after class with instructors and TAs

* *TA's and Instructors assist students who need help (WiFi connection, Sublime Text, etc.).*

* *If there are still issues, let students know that you and TAs are available for 30 minutes after class and 45 minutes before the next class*



###### Break (15 minutes) 95 minutes went by including break


### 5. Instructor do (10 minutes)

* Point out to students that they should be storing all their code in one folder that's easily accessible.

* Point out to students that if they're slow at typing then they need to get better - fast. Show: https://typing.io. 

> Practice when you get home.

* *When done going over these, slack out the below commands to the students* 

* *Open up the terminal*

> The terminal is an alternative way to use your computer.  

> Why use it, when you can do everything the way you normally use your computer?

> Because 

> * it's not easy to see hidden files when clicking through folders

> * you'll have to use the terminal or git bash to deploy your website to heroku. 

> * You'll have to use the terminal/git bash when installing and running node apps. 

> So we might as well get started now!

* Run the following commands while having the finder window open to show the files being created

* Ask the class how to
    * navigate to the home directory.
        + `cd ~`
    * go back a directory
        + `cd ..`
    * print the current working directory.
        + `pwd`
    * create a new folder.
        + `mkdir folder_name`
    * create a new html file.
        + `touch my-first-example-page.html`
    * delete a file and show auto complete with tab
        + `rm my-first-example-page.html`
    * delete a folder
        + `rm -r folder_name`
    * list files in a folder
        + `ls` - list files
        + `ls -a` - list all files, even hidden ones without filenames
        + `ls -la` - list all files and permissions in a list format

* Mac specific commands
    * `open .`
        + opens the current folder you are at in finder
    * `open <file name>`
        + open a specific file

* *When done going over these, slack out the above commands to the students* 

### 6. Student do (10 minutes)
* SLACK THE FOLLOWING to the students, call on students to read it to the class LOUD, google the word timer, set it to 10 minutes and start it, make sure your computer volume is up so the alarm goes off: 

* From the Terminal/Console and using only the command line, create the following:
    * A new folder with the name of first_day_stuff
    * A new HTML file with the name of first_day.html
    * Open the current folder containing the new HTML file.

* BONUS:
    * Create multiple directories/folders with the names `one_folder` and `second_folder` in one command.
    * Create multiple files with the names `one.html` and `two.html` in one command in the first_day_stuff directory.

### 7. Student do (5 minutes)
> Discuss with the person next to you how to make and remove files and folders.

> You are responsible for the people around you understanding what just happened.

> Everyone you should be talking now. Turn to your partners and talk.


### 8. Everyone do (5 minutes)
* *briefly call on one person to go over the previous exercise*

### 9. Instructor Do (20 minutes)

* ***AFTER CODING A LITTLE BIT. STOP, EXPLAIN AND SHOW WHAT IT DID IN THE BROWSER.*** 

> How should you set up an HTML page?

Answer:

```
The <!DOCTYPE html> declaration must be the very first thing in your HTML document, before the <html> tag.

The <!DOCTYPE html> declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.
```

1. *In your newly created folder and HTML file, set up an HTML file with the proper structure (located below).*

2. *Open up the whole folder with Sublime Text by dragging the folder into Sublime Text*

3. *code the below out.*

4. Point out that the language is set to html and that's why the code highlighting is working

5. *After done, Stage, Commit and Push up to your in class code github repo, link students to the code. Explain briefly what you did through the process.*

```html
<!DOCTYPE html>
  <html>
    <head>
      <title>My First Page</title>
    </head>
    <body>
      <h1>Hello World!</h1>
      <img src="<engage the students maybe ask them what someone had for lunch and google that find an image and put that here>" alt="image description goes here" />
      <!-- Absolute path-->
      <a href="any_url_you_want" target="_blank">Opens new tab</a>
      <!----------------->
      <br>
      <!--Relative Path-->
      <strong><a href="local_file.html">This is a bold link</a></strong>
      <!----------------->
      <br>
      <!--placeholder link-->
      <a href="#">This is a placeholder link, goes no where, for now</a>
      <!-------->
    </body>
</html>
```

### 10. Students Do (10 minutes)

* always slack out student exercises and display them on the screen + have students read out the exercise to the class + google timer and set the timer to the amount above and turn up the sound on your computer. Make them feel the pressure. * 

```
In a new HTML file, create the basic structure of an HTML document and include the following in it:
  * DOCTYPE declaration
  * Head tag with a title tag
  * H1 tag with a title of your choice
  * Embed an image
  * Create the following three links on your page:
    * One link that is target="_blank" so that it opens a new tab when clicked on.
    * Make the second link bold.
    * Make the third link a placeholder so it goes nowhere.

Bonus:

* Create an ordered list of steps to make a sandwich.
* Create an unordered list of 5 bands/musicians you like.
* Create a table with 2 columns (animal class, animal name) and have 4 rows of animals 
* Use an alternate way of separating links without line breaks.
* Embed a Youtube video of your favorite band/musician.
```

### 11. Everyone Do (5 minutes)

* *go around the room and go over the previous exercise*


### 12. Instructor Do (5 minutes)

* *go over the hw*

> If you had problems with installing any of the programs. Stay here now to get help from TAs


# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.