var express = require('express');
var mysql = require('mysql');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('rcb_sequelize_user_relationships_db', 'root');

var User = sequelize.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
});

var User = sequelize.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
});

var PORT = process.env.NODE_ENV || 3000;

var app = express();

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function(req, res) {
  var msg = req.query.msg;
  res.render('home');
});

app.post('/register', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  User.create({
    email: email,
    password: password
  }).then(function(result) {
    res.redirect('/success');
  }).catch(function(err) {
    res.redirect('/?msg=' + err.message);
  });
});

app.post('/login', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({
    where: {
      email: email,
      password: password
    }
  }).then(function(result) {
      if(result) {
        res.redirect('/success');
      } else {
        res.redirect('/?msg=Invalid login');
      }
  });
});

app.get('/success', function(req, res) {
  res.send('SUCCESS PAGE!');
});

sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  });
});
