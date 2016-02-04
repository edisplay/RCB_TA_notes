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

* keep the file open while the students are reading the objectives
  * Students will use GET, POST, PUT, and DELETE.  
  * Students will be able to create C.R.U.D Apps in Node
  * Using Node.js server to connect MySQL database and Express and handlebar to server pages using different routes.

# Theme: 
Node Express Handlebars MySQL C.R.U.D. all in one App

--------- --------- ---------

# INSTRUCTOR MUST COVER 

```
ALL or they won't be able to do the homework.
```

PART ONE:
---------

### 1. Student do (15 minutes) 

* *Slack this out and commit this in your in class repo*
Review Exercise: Handlebars Render

Given the following Js object 'lineage' create Node Express Handlebars App, that will render to HTML the family tree of these three house on one HTML page.
	* Create the Node Express App
	* Do not using MySQL
	* Do not change the Js object 'lineage' in anyway
	* Create the HTML for handlebars to properly render each character by their lineage. 

Make sure the name of each house is displayed with an underline and make each house have a different colored text and indented according to generations.

![lannister](/images/housesL.png)
![targaryen](/images/housesT.png)
![stark](/images/housesS.png)

```
var lineage = {
	lannister: {
		house: 'House Lannister',
		parents: {
			first_parents: 'Joanna & Tywin',
			second_parents: 'Devan & Dorna'
		},
		child: {
			first_child: 'Cersei',
			second_child: 'Jaime',
			third_child: 'Tyrion',
			fourth_child: 'Lancel'
		}
	},
	targaryen: {
		house: 'House Targaryen',
		parents: 'Aerys II & Rhaella',
		child: {
			first_child: 'Rhaegar',
			second_child: 'Viserys',
			third_child: 'Daenerys'
		}
	},
	stark: {
		house: 'House Stark',
		parents: 'Eddard & Catelyn',
		child: {
			first_child: 'Robb',
			second_child: 'Sansa',
			third_child: 'Arya',
			fourth_child: 'Bran',
			fifth_child: 'Rickon'		
		}
	},
};
```

* *Instructor demos. Look in lesson-14.2.exercise_solutions folder.*

BOUNS: 

	Find an image online that represent the house sigils and make it appear above the name of each house in HTML.

### 2. Everyone do (10 minutes)
* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*

### 3. Instructor do (15 minutes)
Explain HTTP actions: 

GET: The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect. (This is also true of some other HTTP methods.)

POST: The POST method requests that the server accept the entity enclosed in the request as a new subordinate of the web resource identified by the URI. The data POSTed might be, for example, an annotation for existing resources; a message for a bulletin board, newsgroup, mailing list, or comment thread; a block of data that is the result of submitting a web form to a data-handling process; or an item to add to a database.

PUT: The PUT method requests that the enclosed entity be stored under the supplied URI. If the URI refers to an already existing resource, it is modified; if the URI does not point to an existing resource, then the server can create the resource with that URI

DELETE: The DELETE method deletes the specified resource.


### 4. Partners do (5 minutes)
* *Have student talk to each other about how might these be using in an app* 

### 5. Everyone do: (5 minutes)
* *Call on one unique student per each part of the previous exercise to explain to the class on the topic*

### 6. Instructor do (15 minutes)
* *Create the 'quick_notes' App with GET, POST in front of students. Look in lesson-14.2.exercise_solutions folder.*

* Create the 'quick_notes_db' in MySQL database.
* Create app dir named "quick_notes"
* Create package.json with `npm init`
* Create `index.js` file
* Install npm package Express `npm install express --save`
* Setup Express in `index.js` file
* Install npm package Express `npm install handlebars --save`
* Install npm package `npm install express-handlebars --save` 
* Install npm package Body-Parser `npm install body-parser --save`

Setup the App:

* Setup the config for `index.js` for all npm packages
* Inside "quick_notes" Dir create the 'views' Dir
* Inside the 'views' Dir create the 'index.handlebars' file 
* Inside the 'views' Dir create the 'layouts' Dir
* Inside the 'layouts' Dir create the 'main.handlebars' file
* Setup the 'main.handlebars' file to take in handlebars data
* Setup the 'index.handlebars' file to have the template to be able to render onto

Code the App:

* Write the code in 'index.js' with GET and POST route to connect to MySQL
* Write the code in 'index.handlebars' with form action POST action
* Explain what body-parser is and why it's needed.

### 7. Partners do (5 minutes)
* *Have student explain to eachother what just happened* 

### 8. Everyone do: (5 minutes)
* *Call on one unique student per each part of the previous demo to explain what just happened to the class*

### 9. Everyone do (20 minute) 
* *Slack this out and commit this in your in class repo*

Student Exercise: Wish List

Create a Node Express MySQL Handlebars APP.
That renders the MySQL data you created in the database when the index route is hit.
And also let's user enter text that adds items to a wish list.
Whenever a item is submited to the server redirect back to the same page.

### 10. Instructor do (15 minutes)
* *Go over the previous exercise with the class*

-- 15 minute break -- (total including break: 120 minutes)

PART TWO:
---------

### 11. Instructor do (20 minutes)
* *Demo an App with PUT, DELETE.*

### 6. Instructor do (15 minutes)
* *Create the 'day_planner' App with PUT, DELETE in front of students. Look in lesson-14.2.exercise_solutions folder.*

* Create the 'day_planner_db' in MySQL database.
* Create app dir named "day_planner"
* Create package.json with `npm init`
* Create `index.js` file
* Install npm package Express `npm install express --save`
* Setup Express in `index.js` file
* Install npm package Express `npm install handlebars --save`
* Install npm package `npm install express-handlebars --save` 
* Install npm package Body-Parser `npm install body-parser --save`

Setup the App:

* Setup the config for `index.js` for all npm packages
* Inside "quick_notes" Dir create the 'views' Dir
* Inside the 'views' Dir create the 'index.handlebars' file 
* Inside the 'views' Dir create the 'layouts' Dir
* Inside the 'layouts' Dir create the 'main.handlebars' file
* Setup the 'main.handlebars' file to take in handlebars data
* Setup the 'index.handlebars' file to have the template to be able to render onto
* Install npm package Method-override `npm install method-override --save`

Code the App:

* Write the code in 'index.js' with GET route to connect to MySQL
* Write the code in 'index.handlebars' with form action PUT action
* Write the code in 'index.handlebars' with form action DELETE action
* Explain methodOverride and why it's needed inside 'index.handlebars' form action.

### 12. Partners do (5 minute) 
* *Have student explain to eachother what just happened* 


### 13 Everyone do: (5 minute)
Instructor calls on random students on what you happened.


### 14. Everyone do: (20 minutes) 
Student Exercise:
Create a Node Express MySQL handlebars APP.
That can do Update in C.R.U.D. using MySQL database.

### 15. Everyone do (15 minutes) 
* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*


(Instructor do): Review all topics

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.