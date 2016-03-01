var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

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

var routes = require('./controllers/app_controller.js');

app.use('/', routes);
// app.use('/update', routes);
// app.use('/create', routes);

app.listen(port, function() {
    console.log("lisenting on port:" + port);
});
