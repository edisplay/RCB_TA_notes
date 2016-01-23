# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Yes
  * Expertly navigate the file system and terminal basics
  * Work independently or in a group on complex projects throughout the entire development lifecycle
  * Implement complex logical conditions to meet an objective.


# Theme
Zen of Coding

# INSTRUCTOR MUST COVER!!!
or they won't be able to do the homework.

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one being read)

* Students will be able to get to know their classmates, Instructor, TA's, and Support Team.
* Students will resolve any issues regarding pre-work / setting up the students' computers.
* Students will understand the course structure.
* Students will learn common Terminal (Mac) / Console (Windows) commands to set up your folder/file structure to create your first HTML page.
* Students will be able to use common Terminal (Mac) / Console (Windows) commands for web development.
* Students will learn how to set up a basic HTML document.
* Students will be able to set up a basic HTML document.
* Students will get familiar with Chrome DevTools.

----

### 1. Instructor Do (45 minutes)
* Welcome all the students to the class.
* Introduce yourself, the TA's, and Support Team (Dan S, Student Success, Career Coach)
* Have all the students give a quick intro consisting of:
   What their career background is.
   What they want to accomplish in this course.
   Where are they coming from geographically.
* If there is time remaining, play some games to fill up the time so the students become better friends/colleagues:
  * Have the students get into groups of 4 or 5 and have each group assign one person as the leader to write down or type 1 interest and 1 bad movie they last watched from each member of the group.
  * Have the group leaders read out the names of each member, their interest and last bad movie they watched.

----

### 2. Instructor Do (10 minutes)
* Engage the students to see who has any pre-work issues.
* TA's will assist those students who need help (WiFi connection, Sublime Text, etc.).

----

### 3. Instructor Do (15 minutes)
* Discuss the modules that will be covered throughout the course and gauge the students to see who's familiar with what.
  * The Browser
    * HTML
    * CSS
    * Javascript
    * jQuery
  * API Interaction
    * API's (Consuming)
    * JSON
    * Ajax
    * Cloud Databases via Parse
    * Javascript Objects
  * Full Stack Development
    * Node.js
    * Constructor Functions
    * MySQL
    * Express
    * API's (Creating) & Model-View-Controller (MVC)
    * User Authentication & Object Relational Mapping (ORM)
  * MEAN Stack Development
    * Angular
    * MongoDB
  * Cutting Edge
    * Meteor

----

### 4. Instructor do (5 minutes)
* Discuss what the daily class structure will consist of:
  * Brief Introduction/Background to Objectives for the day
  * Quick Watch Me / Demonstration
  * In-class Exercises

----
Break (15 minutes)
----

### 5. Instructor do (15 minutes)

* Ask the class how to navigate to the home directory.
  * `cd ~` or `cd ..`
* Ask the class how to print the current working directory.
  * `pwd`
* Ask the class how to create a new folder.
  * `mkdir folder_name`
* Ask the class how to create a new html file.
  * `touch my-first-example-page.html`
* Ask the class how to open the current working directory from the Terminal/Console with the Sublime command.
  * `subl .`
* Slack out Class Exercise to students.

----

### 6. Student do (10 minutes)
* SLACK THE FOLLOWING: From the Terminal/Console and using only the command line, create the following:
  * A new folder
  * A new HTML file
  * Open the current folder containing the new HTML file.

### BONUS
* Create multiple directories/folders in one command.
* Create multiple files in one command in the current directory.

----

### 7. Student do (5 minutes)
* Tell the students to discuss with the person next to them what they just did.

----

### 8. Instructor Do (15 minutes)

* Ask the class how they should start setting up their HTML document.
  * In your newly created folder and HTML file, set up the HTML file with the proper structure.  An example solution could look like:
   ###### HTML
  ```html
  <!DOCTYPE html>
  <html>
      <head>
        <title>My First Page</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        <img src="http://static.comicvine.com/uploads/original/12/128399/2509558-arts-tron-props-584.jpg" alt="image" />
        <!-- Absolute path-->
        <a href="any_url_you_want" target="_blank">Opens new tab</a>
        <!----------------->
        <br>
        <!--Relative Path-->
        <strong><a href="local_file.html">This is a bold link</a></strong>
        <!----------------->
        <br>
        <!--Stub-->
        <a href="#">This is a stub, goes no where, for now</a>
        <!-------->
      </body>
  </html>
  ```
* Slack out Class Exercise to students.

----

### 9. Students Do (20 minutes)
* SLACK THE FOLLOWING: In your new HTML file, create the basic structure of an HTML document and include the following in it:
  * DOCTYPE declaration
  * Head tag with a title tag
  * H1 tag with a title of your choice
  * Embed an image
  * Create the following three links on your page:
    * One link opens a new tab when clicked on.
    * Make the second link bold.
    * Stub the third link so it goes nowhere.

### BONUS
* Create an ordered list.
* Create an unordered list.
* Create a table to organize information.
* Use an alternate way of separating links without the line breaks.
* Embed a Youtube video.

----

### 10. Instructor Do (15 minutes)
* Inspect your newly created HTML files with Chrome DevTools.
* Right-click on any element inside the HTML page and select the `Inspect` option.
* Navigate to the `Elements` tab and focus specifically on the HTML markup inside.
* Hover over the HTML markup and observe the page as it highlights the corresponding rendered parts.
* Direct students to look at the `Elements` tab specifically and hover over the various HTML elements and have them watch it highlight to it's corresponding rendered part in the page.
* Discuss with students as actions are being performed.

----

### 11. Students Do (10 minutes)
* Right-click on any element in their newly created HTML file and click on the `Inspect` option.
* Navigate to the `Elements` tab and focus specifically on the HTML markup inside.
* Hover over the HTML markup and observe the page as it highlights the corresponding rendered parts.
