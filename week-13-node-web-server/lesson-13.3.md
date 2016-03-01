# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Theme
Using `express` to serve dynamic web pages and static assets and response via an API.
Deploying to Heroku

### 1. Instructor Recap `10 minutes`
* Why use `express` over native `http` for creating web servers?
* Have them explain middleware

### 2. Instructor Do `15 minutes`
VIEW (feel free to fill this out to be more interesting)
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

  </body>
  <script type="text/javascript" src="/static/myfile.js"></script>
</html>
```

JS File
```
var express = require('express');
var app = express();
var PORT = 3000;

app.use("/static", express.static('public'));

app.get('/', function(req, res, next) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});
```

### 3. Student Do `30 minutes`
**Every 10 minutes, type out part of the solution to ensure that students don't get stuck**
* Create a 3 page website
  * Home
  * Register
  * Dashboard
* Include jQuery (not from CDN)
* Include Bootstrap (not from CDN)
* Create a navbar
* In the navbar, have a login link. Clicking login should open a bootstrap modal that has an `email` and `password` field (and button)
* Make this look good!
* On the Registration form, use JavaScript / jQuery to ensure all fields are filled out before POSTing the form

### 4. Instructor Review `10 minutes`
* Throughout the `Student Do`, the instructor should be going over parts of this
* Use completed student work if possible to showcase how to solve this

### 5. Instructor Do `15 minutes`
Deploy to Heroku:
* Make sure you've done `npm init`
* `npm install express --save`
* Need to add to `package.json`
```
"scripts": {
  "start": "node server.js"
},
```
* `heroku create mytestapp`
* Change the `PORT` line in your code to: `var PORT = process.env.PORT || 3000;`
* `git push heroku master`

### 6. Student Do `10 minutes`
* Deploy to Heroku
* Share your deployed app link in Slack

### 7. Instructor Do `30 minutes`
In a view, add:
```
<ul>
  <li><a href="/movies/saw">Saw</a></li>
  <li><a href="/movies/inception">Inception</a></li>
</ul>
```
JS
```
var express = require('express');
var omdb = require('omdb');
var app = express();
var PORT = process.env.PORT || 3000;

app.use("/static", express.static('public'));

app.get('/', function(req, res, next) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get('/movies/:movieName', function(req, res, next) {
  var movieName = req.params.movieName;
  omdb.search(movieName, function(err, movies) {
    var firstMovie = movies[0];
    res.send(JSON.stringify(firstMovie))
  });
});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});
```

** 120 minutes passed. 40 minute break **

### 7. Student Do `30 minutes`
**Every 10 minutes, type out part of the solution to ensure that students don't get stuck**

* On the `Dashboard` page from earlier, add a list of `Github` usernames for 10 of your classmates
* Clicking a username should get a list of repos for that user and return the JSON to the browser

Starter code (using OMDB instead of Github. Same logic applies)
```
app.get('/movies/:movieName', function(req, res, next) {
  var movieName = req.params.movieName;
  omdb.search(movieName, function(err, movies) {
    var firstMovie = movies[0];
    res.send(JSON.stringify(firstMovie))
  });
});
```

### 8. Instructor Review `15 minutes`
* Talk about how this can be used via AJAX. They just created an API endpoint without realizing it


### 9. Student Do `30 minutes`
* Only allow a user to access the dashboard if they have "logged in"
* Use AJAX to authenticate and login a user
* Using AJAX, return the list of repos for a particular user


### 10. Instructor Review `5 minutes`

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.
