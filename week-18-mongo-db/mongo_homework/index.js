var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/public'));
var port = 3000;

var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

var routes = require('./controllers/app_controller.js');

app.use('/', routes);
app.use('/home', routes);
app.use('/fetch', routes);
app.use('/gather', routes);
app.use('/check', routes);
app.use('/save', routes);
app.use('/delete', routes);


app.listen(port, function() {
    console.log("lisenting on port:" + port);
});
