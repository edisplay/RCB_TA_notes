// Why is this code not ideal?

var express = require('express');
var omdb = require('omdb');
var app = express();
var PORT = 3000;

app.get('/movies/revenant', function(req, res) {
  omdb.search('revenant', function(err, revenantMatches) {
    var revenant = revenantMatches[0];
    res.send(JSON.stringify(revenant))
  });
});

app.get('/movies/fargo', function(req, res) {
  omdb.search('fargo', function(err, fargoMatches) {
    var fargo = fargoMatches[0];
    res.send(JSON.stringify(fargo))
  });
});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});