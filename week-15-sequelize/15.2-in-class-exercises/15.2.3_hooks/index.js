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

//model
var PasswordHash = connection.define('hash', {
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

app.get('/save', function(req, res) {
  //Using bcypt in Node
  /*
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash("sandwhich", salt, function(err, hash) {
          // Store hash in your password DB. 
          PasswordHash.create({
            psw: hash
          }).catch(function(err) {
           console.log(err);
          });
      });
  });
  */
  //use hook to save password
  PasswordHash.create({
    psw: 'cake'
  }).catch(function(err) {
   console.log(err);
  });

});

app.get('/check', function(req, res) {
  //
  PasswordHash.findOne({
    where: {
      id: 1
    }
  }).then(function(results) {
    //console.log(results.dataValues.psw)
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.compare("cake", results.dataValues.psw, function(err, res) {
            if (res) {
              console.log("HACKER VOICE: Your In...")
            };
        });
    });
  });

});


// app.post('/entry', function(req, res) {

//   var myTitle = req.body.title;
//   var myTest = req.body.text;

//   Note.create({
// 	title: myTitle,
// 	body: myTest
//   }).then(function(result) {
//     res.redirect('/success');
//   }).catch(function(err) {
//   	console.log(err);
//     res.redirect('/fail');
//   });
// })

// app.get('/success', function(req, res) {
//   res.send('SUCCESS PAGE!');
// });

// app.get('/fail', function(req, res) {
//   res.send('Fail to add entry!');
// });

connection.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  });
});
