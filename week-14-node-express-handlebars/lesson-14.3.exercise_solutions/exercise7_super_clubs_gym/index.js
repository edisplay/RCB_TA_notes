var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/super_clubs_controller.js');

// app.get('/index', function(req, res) {
//   res.render('index', {});
// });
/*
use is a method to configure the middleware used by the routes of the Express HTTP server object. The method is defined as part of Connect that Express is based upon.
*/
app.use('/', routes);
// app.use('/update', routes);
// app.use('/create', routes);

var port = 3000;
app.listen(port);