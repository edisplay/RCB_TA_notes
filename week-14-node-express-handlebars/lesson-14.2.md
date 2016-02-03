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

Using Node Express Handlebars and HTML form submit, GET, POST

### 4. Partners do (5 minute) 
* *Have student explain to eachother what just happened* 

### 4.5 Everyone do: ()
Instructor calls on random students on what you happened.

### 5. Everyone do (15 minute) 
* *Slack this out and commit this in your in class repo*
Student Exercise:
Create a Node Express MySQL handlebars APP.
That can do Read in C.R.U.D. using MySQL database.

### 6. Instructor do (15 minutes) 
* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*

### 7. Instructor do (15 minutes) 
Instructor Demo Create in C.R.U.D. using MySQL database.
Using Node Express Handlebars and HTML form submit

### 8. Everyone do (10 minutes)
* *Have student explain to eachother what just happened* 

-- 15 minute break -- (total including break: 100 minutes)

PART TWO:
---------

### 11. Instructor do (10 minutes)
Instructor Demo Update in C.R.U.D. using MySQL database.
Using Node Express Handlebars and HTML form submit

### 12. Partners do (10 minute) 
* *Have student explain to eachother what just happened* 

### 12. Everyone do: (10 minutes) 
Student Exercise:
Create a Node Express MySQL handlebars APP.
That can do Update in C.R.U.D. using MySQL database.

### 11. Everyone do (20 minutes) 


### 12. Everyone do (10 minutes) 
* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*


(Instructor do): Review all topics

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.