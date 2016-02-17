var express = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');

var Sequelize = require('sequelize');
var connection = new Sequelize('hash_db', 'root', '1111', {
    dialect: 'mysql',
    port: 8000,
    host: 'localhost'
});

var bcrypt = require('bcryptjs');

var PORT = 3000;
var app = express();

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
    extended: false
}));

//model hooks
var PasswordHash = connection.define('hash', {
  name: Sequelize.TEXT,
  psw: Sequelize.TEXT
}, {
    //using hooks to save hash as password
    hooks: {
        beforeCreate: function (input) {
        console.log('beforeCreate');
        input.psw = bcrypt.hashSync(input.psw, 10)
        }
    }
});

//render reg
app.get('/', function(req, res) {
    res.render('save');
});

//log in
app.get('/login', function(req, res) {
    res.render('login');
});

//save to db
app.post('/save', function(req, res) {
  var userName = req.body.name;
  var password = req.body.password;

  //bcrypt and hook to save password
  PasswordHash.create({
    name: userName,
    psw: password
  }).catch(function(err) {
   console.log(err);
  }).then(function(result) {
    res.redirect('/success');
  }).catch(function(err) {
    res.redirect('/fail');
  });

})

//check if password is correct
app.post('/check', function(req, res) {
  var userName = req.body.name;
  var userPassword = req.body.password;

  PasswordHash.findOne({
    where: {
      name: userName
    }
  }).then(function(results) {
    //check password against hash
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.compare(userPassword, results.dataValues.psw, function(err, rest) {
            if (rest) {
              console.log("HACKER VOICE: Your In...")
               res.redirect('/success');
            };
        });
    });
  });

});

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
