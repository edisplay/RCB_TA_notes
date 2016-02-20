//express setup
var express = require('express');
var app = express();
var port = 3000;

//database setup
var Sequelize = require('sequelize');
var connection = new Sequelize('hash_db', 'root', '1111', {
    dialect: 'mysql',
    port: 8000,
    host: 'localhost'
});
var bcrypt = require('bcryptjs');

//handlebars
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//bodyparser & cookieparser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
var cookieParser = require('cookie-parser')
app.use(cookieParser());

//sessions
var session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))

//model
var PasswordHash = connection.define('hash', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: {
                args: [1, 10],
                msg: 'Please enter a title that is not too long and at least one character',
            }
        }
    },
    psw: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            isUppercase: true
        }
    },
}, {
    hooks: {
        beforeCreate: function (input) {
        console.log('beforeCreate');
        input.psw = bcrypt.hashSync(input.psw, 10)
        }
    }
});

//requiring passport last
var passport = require('passport');
var passportLocal = require('passport-local');
//middleware init
app.use(passport.initialize());
app.use(passport.session());

//passport use methed as callback when being authenticated
passport.use(new passportLocal.Strategy(function(username, password, done) {
    //check password in db
    PasswordHash.findOne({
        where: {
            name: username
        }
    }).then(function(results) {
        //check password against hash
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.compare(password, results.dataValues.psw, function(err, rest) {
                if (rest) {
                	//if password is correct authenticate the user with cookie
                    done(null, { id: username, name: username });
                }else{
                	done(null, null);
                }
            });
        });
    });

}));

//change the object used to authenticate to a smaller token, and protects the server from attacks
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    done(null, { id: id, name: id })
});

//routes
app.get('/', function(req, res) {
    res.render('login');
});

app.get('/home', function(req, res) {
    //console.log(req.user);
    res.render('home', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user
    });
});

app.get('/logout', function(req, res) {
    //express logout redirect back to homepage
    req.logout();
    res.redirect('/');
});

//check login with db
app.post('/check', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login'
}));

//save into db
app.post('/save', function(req, res) {
  var u = req.body.name;
  var p = req.body.psw;
  PasswordHash.create({
    name: u,
    psw: p
  }).catch(function(err) {
   console.log(err);
  }).then(function(result) {
    res.redirect('/');
  });
});

//Datbase connection while express server is running
connection.sync().then(function() {
	app.listen(port, function() {
	    console.log("Listen on:" + port)
	});
});
