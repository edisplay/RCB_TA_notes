var express = require('express');
var app = express();
var port = 3000;

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

//requiring passport last
var passport = require('passport');
var passportLocal = require('passport-local');
//middleware init
app.use(passport.initialize());
app.use(passport.session());

//passport use methed
passport.use(new passportLocal.Strategy(function(username, password, done) {
	//check password in db
	if (username == password) {
		done(null, { id: username, name: username })
	}else {
		done(null, null);
	}
}));

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	done(null, {id: id, name:id})
});


app.get('/', function(req,res) {
	res.render('login');
});
app.get('/home', function(req,res) {
	//console.log(req.user);
	res.render('home', {
		isAuthenticated: req.isAuthenticated(),
		user: req.user
	});
});

//save to db
app.post('/save', passport.authenticate('local', {
	successRedirect: '/home',
	failureRedirect: '/login'
 }));

// , function(req, res) {
// 	res.send('opz!');
/*
  var userName = req.body.name;
  var password = req.body.password;
*/
  //bcrypt and hook to save password
/*
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
*/
// });

app.listen(port, function(){
	console.log("Listen on:" + port)
});