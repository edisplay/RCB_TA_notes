var express = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');

var Sequelize = require('sequelize');
var connection = new Sequelize('test_sql_mod_db', 'root', '1111', {
    dialect: 'mysql',
    port: 8000,
    host: 'localhost'
});

var PORT = 3000;
var app = express();

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
    extended: false
}));

//model
var Note = connection.define('note', {
    title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        //valiation
        validate: {
            notEmpty: true,
            len: {
                //set vailation range and error mesage
                args: [1, 10],
                msg: 'Please enter a title that is not too long and at least one character',
            }
        }
    },
    body: {
        type: Sequelize.TEXT,
        //vailatioin function
        validate: {
        	check: function (bodyVal) {
        		if (bodyVal == "watwatwat") {
        			throw new Error('text must not be watwatwat')
        		}
        	}
        }
    }
});

app.get('/', function(req, res) {
  Note.findAll({
  }).then(function(results) {
    // var r = results[0].dataValues;
    // console.log(r);
    res.render('home', {
		results
    });
  });
});

app.post('/entry', function(req, res) {

  var myTitle = req.body.title;
  var myTest = req.body.text;

  Note.create({
	title: myTitle,
	body: myTest
  }).then(function(result) {
    res.redirect('/success');
  }).catch(function(err) {
  	console.log(err);
    res.redirect('/fail');
  });
})

app.get('/success', function(req, res) {
  res.send('SUCCESS PAGE!');
});

app.get('/fail', function(req, res) {
  res.send('Fail to add entry!');
});

connection.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  });
});
