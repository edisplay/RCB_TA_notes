var Sequelize = require('sequelize');
var connection = new Sequelize('password_db', 'root', '1111', {
    dialect: 'mysql',
    port: 8000,
    host: 'localhost'
});

var bcrypt = require('bcryptjs');

//using prompt to interact with user
var prompt = require('prompt');
prompt.start();
prompt.message = '';

//model
var Password = connection.define('password', {
  name: Sequelize.TEXT,
  psw: Sequelize.TEXT
});

var saveUser = function(userName, userPassword) {
  //Using bcrypt only in Node 
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(userPassword, salt, function(err, hash) {
          // Store hash in your password DB. 
          connection.sync().then(function() {          
            Password.create({
              name: userName,
              psw: hash
            }).catch(function(err) {
             console.log(err);
            });
          });
          console.log("User saved.")
      });
  });

};

var checkUser = function(userName, userPassword) {
  //check password against hash
  Password.findOne({
    where: {
      name: userName
    }
  }).then(function(results) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.compare(userPassword, results.dataValues.psw, function(err, rest) {
            if (rest) {
              console.log("HACKER VOICE: Your In...")
            };
        });
    });
  });
}

console.log("Please enter R or L for register for a new account or Login in to existing one.")
prompt.get(['input'], function(err, result) {
  if (result.input == "R") {
    //reg the user and password
    console.log("Please fill this out!")
    prompt.get(['_','UserName','UserPassword'], function(err, result) {
      saveUser(result.UserName, result.UserPassword)
    });
  } else {
    //check the user login
    console.log("Please enter login info!");
    prompt.get(['_','UserName','UserPassword'], function(err, result) {
      checkUser(result.UserName, result.UserPassword)
    });
  }
});