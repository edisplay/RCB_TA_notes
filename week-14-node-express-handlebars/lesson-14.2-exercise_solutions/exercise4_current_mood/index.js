var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  port     : 8000,
  host     : 'localhost',
  user     : 'root',
  password : '1111',
  database : 'current_mood_db'
});

connection.connect(function(err) {
if (err) {
console.error('error connecting: ' + err.stack);
return;
};
console.log('connected as id ' + connection.threadId);

//home get route
app.get('/', function(req,res) {
    //mySQL commands
    connection.query('SELECT * FROM current_mood;', function(err, col) {
      if (err) throw err;
        console.log('The solution is: ', col[0]);
        //res.send(col[0]);
        res.render('index', col[0]);
        });
    });
    //res.render('index');
})

//put route -> back to home
app.put('/update', function(req,res){
    console.log("PUT received: ->");
    console.log(req.body);
    //mySQL commands
    connection.query('UPDATE current_mood SET mood = ? WHERE ID = 1', [req.body.changed_mood], function(err, result) {
    if (err) throw err;
    });
    res.redirect('/');
});

//delete route -> back to home
app.delete('/delete', function(req,res){
    //mySQL commands
    connection.query('DELETE FROM current_mood WHERE ID = 1', function(err, result) {
    if (err) throw err;
    });
    res.redirect('/');
});


var port = 3000;
app.listen(port);