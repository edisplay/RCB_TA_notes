# Week-1.1-1.2-1.3-HTML-CSS-DEPLOY

### Week 1.1 - Zen of Coding

#### Objectives
+ Get to know your classmates, Instructor, TA's, and your Support Team.
+ Resolve any issues regarding pre-work / setting up the students' computers.
+ Understand the course structure.
+ Learn common Terminal (Mac) / Console (Windows) commands to set up your folder/file structure to create your first HTML page.
+ Practice common Terminal (Mac) / Console (Windows) commands for web development.
+ Learn how to set up a basic HTML document.
+ Practice how to set up a basic HTML document.
+ Get familiar with Chrome DevTools.

----

#### Get to know your classmates, Instructor, TA's, and your Support Team.
###### Instructor Does:
+ Welcome all the students to the class.  
+ Introduce yourself, the TA's, and Support Team (Dan S, Student Success, Career Coach?)
+ Have all the students give a quick intro consisting of:
  - What their career background is.
  - What they want to accomplish in this course.
  - Where are they coming from geographically.

----

#### Resolve any issues regarding pre-work / setting up the students' computers.

###### Instructor Does:
+ Engage the students to see who has any pre-work issues.
+ TA's assist those students who need help (WiFi connection, Sublime Text, etc.).

----

#### Understand the course structure.
###### Instructor Does:
+ Discuss the modules that will be covered throughout the course and gauge the students to see who's familiar with what.
  - The Browser
    * HTML
    * CSS
    * Javascript
    * jQuery
  - API Interaction
    * API's (Consuming)
    * JSON
    * Ajax
    * Cloud Databases via Parse
    * Javascript Objects
  - Full Stack Development
    * Node.js
    * Constructor Functions
    * MySQL
    * Express
    * API's (Creating) & Model-View-Controller (MVC)
    * User Authentication & Object Relational Mapping (ORM)
  - MEAN Stack Development
    * Angular
    * MongoDB
  - Cutting Edge
    * Meteor
+ Discuss what the daily class structure will consist of:
  - Brief Introduction/Background to Objectives for the day
  - Quick Watch Me / Demonstration
  - In-class Exercises

----

### Exercise 1

#### Objectives
+ Learn common Terminal (Mac) / Console (Windows) commands to set up your folder/file structure to create your first HTML page.
+ Practice common Terminal (Mac) / Console (Windows) commands for web development.

##### Watch Me / Demo To Class
###### Instructor Does:

+ Ask the class how to navigate to the home directory.
  - `cd ~` or `cd ..`
+ Ask the class how to print the current working directory.
  - `pwd`
+ Ask the class how to create a new folder.
  - `mkdir folder_name`
+ Ask the class how to create a new html file.
  - `touch my-first-example-page.html`
+ Ask the class how to open the current working directory from the Terminal/Console with the Sublime command.
  - `subl .`
+ Slack out Class Exercise to students.

##### Class Exercise
###### Students Do:
+ SLACK THE FOLLOWING: From the Terminal/Console and using only the command line, create the following:
  - A new folder
  - A new HTML file
  - Open the current folder containing the new HTML file.

###### SOLUTION
+ Open up a new Terminal / Console window.
+ Navigate to your home directory.
  - Type `cd ~` should lead you to `/Users/user_name ~ $`
+ Create a new folder named `my-first-example-page`.
  - Type `mkdir example-page`.
+ Navigate into the newly created folder `my-first-example-page`
  - Type `cd my-first-example-page`.
+ Create a new HTML document (however the students want to name their HTML file) in the newly created folder.
  - `touch my_first_page.html`
+ Open the current working directory from the Terminal/Console with the Sublime command.
  - type `subl .`

###### BONUS
+ Slack out the next Exercise to students who've completed Exercise this current one already.

----

### Exercise 2

#### Objectives
+ Learn how to set up a basic HTML document.
+ Practice how to set up a basic HTML document.

##### Watch Me / Demo To Class
###### Instructor Does
+ Ask the class how they should start setting up their HTML document.
  - In your newly created folder and HTML file, set up the HTML file with the proper structure.  An example solution could look like:
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
+ Slack out Class Exercise to students.

##### Class Exercise
###### Students Do:
+ SLACK THE FOLLOWING: In your new HTML file, create the basic structure of an HTML document and include the following in it:
  - DOCTYPE declaration
  - Head tag with a title tag
  - H1 tag with a title of your choice
  - Embed an image
  - Create the following three links on your page:
    * One link opens a new tab when clicked on.
    * Make the second link bold.
    * Stub the third link so it goes nowhere.

###### SOLUTION WITH BONUS
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
      <!--Absolute path-->
      <br>
      <a href="any_url_you_want" target="_blank">Opens new tab</a>
      <!------------->
      <br>
      <!--Relative Path-->
      <strong><a href="local_file.html">This is a bold link</a></strong>
      <!------------->
      <br>
      <!--Stub-->
      <a href="#">This is a stub, goes no where, for now</a>
      <!---->
      <!---BONUS--->

      <!--ORDERED LIST-->
      <ol>
        <li>Ordered List Item 1</li>
        <li>Ordered List Item 2</li>
        <li>Ordered List Item 3</li>
      </ol>
      <!----------------->

      <!--UNORDERED LIST-->
      <ul>
        <li>Unordered List Item 1</li>
        <li>Unordered List Item 2</li>
        <li>Unordered List Item 3</li>
      </ul>
      <!------------------>

      <!--TABLE-->
      <table>
      <tr>
        <th>Movie Name</th>
        <th>Actor/Actress Name</th>
        <th>Genre</th>
      </tr>
      <tr>
        <td>Jurassic World</td>
        <td>Chris Pratt</td>
        <td>Action/Adventure</td>
      </tr>
      <tr>
        <td>American Sniper</td>
        <td>Bradley Cooper</td>
        <td>Action/Drama</td>
      </tr>
      </table>
      <!--------->

      <!--ALTERNATE WAY TO SEPARATE LINKS-->
      <!--You can use a div or an alternate way of your choosing-->
      <!--Absolute path-->
      <div>
        <a href="any_url_you_want" target="_blank">Opens new tab</a>
      </div>
      <!------------->
      <!--Relative Path-->
      <div>
        <strong><a href="local_file.html">This is a bold link</a></strong>
      </div>
      <!------------->
      <!--Stub-->
      <div>
        <a href="#">This is a stub, goes no where, for now</a>
      </div>
      <!----------------------------------->

      <!--EMBED YOUTUBE VIDEO-->
      <iframe width="420" height="315" src="https://www.youtube.com/embed/J---aiyznGQ" frameborder="0" allowfullscreen></iframe>
      <!----------------------->
      <!-------------->
    </body>
  </html>
  ```

###### BONUS
+ Create an ordered list.
+ Create an unordered list.
+ Create a table to organize information.
+ Use an alternate way of separating links without the line breaks.
+ Embed a Youtube video.

---

### Exercise 3

#### Objectives
+ Get familiar with Chrome DevTools.

##### Watch Me / Demo To Class
###### Instructor Does
+ Inspect your newly created HTML files with Chrome DevTools.
+ Right-click on any element inside the HTML page and select the `Inspect` option.
+ Navigate to the `Elements` tab and focus specifically on the HTML markup inside.
+ Hover over the HTML markup and observe the page as it highlights the corresponding rendered parts.
+ Direct students to look at the `Elements` tab specifically and hover over the various HTML elements and have them watch it highlight to it's corresponding rendered part in the page.  
+ Discuss with students as actions are being performed.

##### Class Exercise
###### Students Do:
+ Right-click on any element in their newly created HTML file and click on the `Inspect` option.
+ Navigate to the `Elements` tab and focus specifically on the HTML markup inside.
+ Hover over the HTML markup and observe the page as it highlights the corresponding rendered parts.
