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


# Theme
Using `express` to serve web pages


### 1. Instructor Explain `10 minutes`
* What is Express - it's a complete application framework
* What do typical applications have?
  * Routes
  * Static Assets
  * Dynamic Content
  * Sessions
  * Authentication
* Almost 5 million downloads https://www.npmjs.com/package/express
* 22,000 people starred on Github
* Super active project

### 2. Instructor Do `20 minutes`
`npm install express body-parser --save`

VIEW
```
<form action="/login" method="POST">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" name="email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password">
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
```
JS
```
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;

// This is the bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', function(req, res) {
  res.sendFile(process.cwd() + '/views/login.html');
});

app.get('/help', function(req, res) {
  res.sendFile(process.cwd() + '/views/help.html');
});

app.post('/login', function(req, res) {
  console.log(req.body);
});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});
```

### 3. Student Do `30 minutes`
**Every 10 minutes, type out part of the solution to ensure that students don't get stuck**
```
* Create a web app using Express that has 5 routes
  * Home
  * Login Page
  * Account Page
  * Help Page
* If a user correctly logs in, send them to the Account Page (the correct credentials are whatever you want)
```

### 4. Instructor Review `15 minutes`
Review student work for the entire class.
Explore:
* Using a `GET` request instead of `POST`
* Think about how to restrict access to the `account` page

###### 75 minutes have passed - break time for 15 minutes :)

### 5. Instructor Do `20 minutes`
`npm install express-session --save`

```
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
var PORT = 3000;

function myLoggingMiddleware(req, res, next) {
  var url = req.url;
  var method = req.method;

  console.log("%s request at %s", url, method);
  next()
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(myLoggingMiddleware);
app.use(session({
  secret: 'my super secret',
  cookie: { maxAge: 60000 },
  saveUninitialized: true,
  resave: false
}));

app.get('/', function(req, res, next) {
  var sess = req.session
  if (sess.views) {
    sess.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + sess.views + '</p>')
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    sess.views = 1
    res.end('welcome to the session demo. refresh!')
  }
});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});
```

### 6. Student Do `30 minutes`
* Write an authentication app that keeps a user logged in
* Create middleware to check if the user is logged in before allowing access to the account page
* Have fun

### 7. Instructor Review `10 minutes`

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.
