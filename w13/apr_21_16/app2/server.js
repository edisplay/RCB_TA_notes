var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var character = require('./character');

var app = express();
var PORT = process.env.PORT || 8081; 	// set the port
var staticContentFolder;

var characters = [];
var r2 = new character("R2D2","Astromech Droid",100,0);
characters.push(r2);

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });


//some basic config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

staticContentFolder = __dirname + '/content';

app.use(express.static(staticContentFolder)); 	// set the static files location /public/img will be /img for users

//set up routes
app.get('/', function(req, res){
	res.send("<html><head></head><body><h1>Welcome to Star Wars Page!</h1><br><img src='/images/AbominableChewbacca-SWT.png'></body></html>");
})

// app.get('/create', function(req,res){
// 	res.sendFile(path.join(staticContentFolder + '/create.html'));
// });

app.post('/create', function(req, res){
	var c = new character(req.body.charname, req.body.role, req.body.age, req.body.force);
	characters.push(c);	
	res.redirect('/characters');
})

app.post('/contactus', function(req, res){
	console.log(req.body.firstname);
	console.log(req.body.email);
})

app.get('/characters', function(req, res){
	var html = "<html><body><table width=500><tr><td>Name</td><td>Role</td><td>Age</td><td>Force</td></tr>";
	for(var i = 0;i<characters.length;i++)
	{
		html+="<tr><td>" + characters[i].name + "</td><td>" + characters[i].role + "</td><td>" + characters[i].age + "</td><td>" + characters[i].force + "</td></tr>";
	}
	html+="</table><br>";
	html+="<a href=/create.html>Add Character</a>";
	res.send(html);
})

app.listen(PORT,function() {
	console.log('Serving static content from ' + staticContentFolder)
	console.log('App listenting on PORT: '+ PORT);
});
