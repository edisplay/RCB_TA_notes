var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
var PORT = 3000;

function myLoggingMiddleware(req, res, next) {
  var url = req.url;
  var method = req.method;

  console.log("%s request at %s", url, method);
  next()
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(myLoggingMiddleware);
app.use(session({
  secret: 'my super secret',
  cookie: { maxAge: 60000 },
  saveUninitialized: true,
  resave: false
}));

app.get('/', function(req, res, next) {
  var sess = req.session
  if (sess.views) {
    sess.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + sess.views + '</p>')
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    sess.views = 1
    res.end('welcome to the session demo. refresh!')
  }
});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});
