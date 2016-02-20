# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)
  * Develop your vision for a website -- and then build it!
  * Expertly navigate the file system and terminal basics
  * Work independently or in a group on complex projects throughout the entire development lifecycle
  * Communicate the basics of serving a webpage and how the browser renders code
  * Implement complex logical conditions to meet an objective.
  * Write SQL commands to perform Create, Read, Update and Delete commands
  * Utilize an ORM to manage a database schema and connection from a server
  * Create and consume RESTful API’s utilizing JSON as a data format
  * Write clean code with proper variable names, indentation according to industry best practices

# Objectives

* *slack out the objectives to the students, and call on random students to read each of them outloud.* 

* *Make a BRIEF comment about each objective after a person reads it.*

# Theme: 
  Review
  Passport + Sessions

# INSTRUCTOR MUST COVER ALL!!!

```
3 - 10 or they won't be able to do the homework.
```

### 1. Students do ( 20 minutes )
Review student Exercise: Chocolate

* *Slack this out to class*

|Chocolate|Satisfaction Level|
|---------|-|
|Dark chocolate|8|
|Couverture|5|
|Milk chocolate|10|
|Hershey|7|
|White chocolate|8|
|Unsweetened chocolate|5|
|Gianduja|6|
|Cacao|4|

* Create a new DB using a Sequelize model
* Create an `express` / `handlebars` / `node.js` / `sequelize` app
  * With only 1 route and display all the chocolate names and their satifaction level.

### 2. Everyone do ( 10 minutes )

* *Call on students to go over the previous exercise*

### 3. Instructor do ( 20 minutes )
Passport Demo Part 1: Intro to Passport 

* *Start APP Setup* 
* *Create a database named `hash_db`

* *Explain what passport is*
> Passport does the work of parsing input and setting up cookies in your app, it's a middleware which handles authentication of requests with verification functions that's written by the developer, it's a safer and way to store request object for access, and configured strategies with varities of authentication schemes.

* *Explain what passport Strategy is*
> Think of strategy as middleware that you can config and change, for our app we are using passport-http. 

### 4. Partners do ( 5 minutes )
* *MAKE SURE THE CODE FROM THE PREVIOUS DEMO IS UP ON THE SCREEN!*
* *Have student talk to each other about what just happened.*

### 5. Instructor do ( 20 minutes )
Passport Demo Part 2: Handlebars and Express Routes

* *Explain what passport.authenticate is doing*

> Passport replaces the callbacks function and takes the req and res by using the passport local authenticate stategy. Storing the ID in session. 

> 'passport.use' takes the choosen passportLocal.Strategy and create a callbacks function. passport.authenticate take the data pass to it when the route is hit and pass that data to passportLocal.Strategy function. Using that function we are going to use another callback function to verify the user name and password by using sequelize and bcrypt, and the done callback will set the session ID. 

> passport.authenticate can setup and check the callback done's return and check the success and fail of verification and use that to redirect to different viewss.  

### 6. Everyone Do ( 10 minutes )
* *MAKE SURE THE CODE FROM THE PREVIOUS DEMO IS UP ON THE SCREEN!*
* *Have student talk to each other about what just happened.*

###### 85 minutes have passed

### 7. Instructor do: ( 15 minutes ) 
Passport Demo Part 3: Sessions

* *Explain how passport uses express sessions*
> Password will set the sessions to have authencation in the request object.

* *Explain what serializeUser is doing*
> Passport does not want to store the whole object into the session ID, by using serialize function and automatically serialize the request object to keep the more safe, by using the done callback.

* *Show where the cookie is created in the browser*

### 8. Everyone do ( 10 minutes )
* *Have student talk to each other about what happened* 

### 10. Instructor do: ( 15 minutes ) 
Passport Demo Part 4: Putting it all together

* *Review how sequelize is doing in the App* 

### 11. Partners do ( 5 minutes )
* *Have student talk to each other about what just happened* 

### 12. Everyone Do ( 5 minutes )
* *Call on one unique student per each part of the previous demo to explain what happened*

###### 125 minutes have passed

### 13. BREAK ( 45 minutes )
--------- --------- ---------

### 14. Instructor do: ( 30 minutes ) 
Student Exercise: Secret Clubhouse

* Create an `express` / `handlebars` / `node.js` / `sequelize` app
  * With user validation. 
  * Bcrypt password.
  * Sequelize database.
  * Passport Sessions authentication.
  * Users can register, login, and view the secret page with upcoming events. 

### 15. Instructor do: ( 15 minutes )
* *Go over the previous exercise with the class - call on one unique student per each part of the previous exercise to explain what they did for each part of the exercise*

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.