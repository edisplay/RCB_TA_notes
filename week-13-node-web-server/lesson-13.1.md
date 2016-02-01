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

# INSTRUCTOR MUST COVER!!!
```
1 - 10 at a
```
or they will be seriously behind

# Theme
Using `node.js` to serve web pages


### 1. Instructor Explain `10 minutes`

#### What is a web server

* TBD: Fill this in

*Get student engagement now to ensure they understand what a web server is*

#### Common Web Servers

* Apache
* Nginx
* Ruby on Rails
* Microsoft IIS
* Apache Tomcat

### Let's talk about Rails

* Ruby on Rails innovatively packaged a web server with a language-specific framework
* Requires a restart of the server when any `server side` code is changed


*Have the students figure out how PHP web pages are generally served. This will require some Googling.*

### 2. Instructor do `20 minutes`

```javascript
//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
```

From terminal, type:
`node myFirstHTTPServer.js`

#### Points to Discuss
* The port is arbitrary, but there are special ports that you cannot choose (anything under 1024 cannot be chosen easily - http://stackoverflow.com/questions/10182798/why-are-ports-below-1024-privileged)
* The concept of `listen`. A server won't know what to do until a request is made
* Standard HTTP port is 80. Standard HTTPS is port 443
* What is the difference between a `request` and a `response`

### 3. Students do `30 minutes`
* Create an app that has two web servers.
* One that listens on port 7000 and one that listens on port 7500.
* The one listening on port 7000 will always tell the user something good about themselves.
* The one listening on 7500 will always tell the user something bad about themselves.
* Make sure you create a Github repo and commit this code!

** Bonus **
* Generate the good / bad phrase randomly from a list of predefined phrases
* Use the `twitter` package inside the response to also return a random tweet!

### 3. Instructor do `30 minutes`

```javascript
var http = require('http'),
  url = require('url');

//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT = 8080;

var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function() {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

//We need a function which handles requests and send response
function handleRequest(req, res) {
  var url_parts = url.parse(req.url);

  switch (url_parts.pathname) {
    case '/':
      display_root(url_parts.pathname, req, res);
      break;
    case '/portfolio':
      display_portfolio(url_parts.pathname, req, res);
      break;
    case '/edit':
      sys.puts("display edit");
      break;
    default:
      display_404(url_parts.pathname, req, res);
  }
}

function display_root(url, req, res) {
  var myHTML = '<html>';
  myHTML += '<body><h1>Home Page</h1>';
  myHTML += "<a href='/portfolio'>Portfolio</a>";
  myHTML += '</body></html>';
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(myHTML);
}

function display_portfolio(url, req, res) {
  var myHTML = '<html>';
  myHTML += '<body><h1>My Portfolio</h1>';
  myHTML += "<a href='/'>Go Home</a>";
  myHTML += '</body></html>';
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(myHTML);
}

function display_404(url, req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}
```
#### Points to Discuss
* The `url` library is needed to parse the parts of the URL
* Reiterate the difference between `request` and `response`
* Ask students WHY we use different functions for the different parts of the route
* Do a `console.log` of the `req` so they can see all that comes in with a request

###### 90 minutes have passed - break time for 15 minutes :)

### 3. Students do `30 minutes`
* Create a website with 4 routes:
  * Home
  * Favorite Food
  * Favorite Movies
  * Favorite CSS Frameworks
* Serve the HTML from files rather than straight in the JavaScript

### 4. Instructor Do `20 minutes`
```
//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT = 8080;

var server = http.createServer(function(req, res) {
  var method = req.method.toLowerCase();
  var requestData = '';

  req.on('data', function(data) {
    requestData += data;
  });

  req.on('end', function() {
    output = 'You just ' + method + '\n';
    output += requestData.toString();
  });

});

//Lets start our server
server.listen(PORT, function() {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});
```

Use CURL to show different methods:
* `curl -i -H "Accept: application/json" -X GET -d "firstName=james" http://localhost:8080`
* `curl -i -H "Accept: application/json" -X POST -d "firstName=james" http://localhost:8080`
* `curl -i -H "Accept: application/json" -X PUT -d "firstName=james" http://localhost:8080`
* `curl -i -H "Accept: application/json" -X DELETE -d "firstName=james" http://localhost:8080`

### 5. Student Do `25 minutes`
* Create two routes, one that has a form that POSTS data
* The other that accepts POSTed data and displays it

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.
