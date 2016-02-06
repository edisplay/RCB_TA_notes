var express = require('express');
var omdb = require('omdb');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/movies/:movieName', function(req, res) {
  var movieName = req.params.movieName;
  omdb.search(movieName, function(err, movies) {
  	if(movies.length > 0){
    	var firstMovie = movies[0];
    	res.send(JSON.stringify(firstMovie));
  	} else {
  		res.status(404).send('Not found');
    }
  });
});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});