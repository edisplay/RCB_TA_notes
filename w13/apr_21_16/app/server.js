var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8081; //env = environment
	// "||" means if you don't have an accessible port, use 8081
var staticContentFolder;

//some basic config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

staticContentFolder = __dirname + '/public';

app.use(express.static(staticContentFolder)); //set the static files location /public

app.listen(PORT, function(){
	console.log('Serving static content from ' + staticContentFolder);
	console.log('App listening on PORT: ' + PORT); 
});

app.get('/', function(request, response){
	response.send("Welcome to my Star Wars page!");
});

app.use(function (request, response, next){ //a way to get something to happen regardless of what else happens. place to put code that runs before everything else is served
	// response.header('Access-Control-Allow-Origin', '*');
	// response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With', 'Content-Type,')
	next(); //an order to node that says, continue looking for routes
})

app.get('/create', function(request, response){
	response.sendFile(path.join(staticContentFolder + '/create.html'))
});

app.post('/create', function(request, response){

});






