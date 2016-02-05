var express = require('express');
var app = express();
var PORT = 3000;

app.use("/static", express.static('public'));

app.get('/', function(req, res, next) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});
