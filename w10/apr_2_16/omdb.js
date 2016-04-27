//Use the request npm package to hit the omdbiapi and return the imdb rating of The Notebook [http://www.omdbapi.com/](http://www.omdbapi.com/)

var rachelle = require('request');
rachelle('http://www.omdbapi.com/?t=the+notebook&y=&plot=short&r=json', function (error, response, body) {
	if (!error && response.statusCode == 200) {
	var json = JSON.parse(body);
	console.log(response); //response is a big object
	console.log("imbd rating: "+json.imdbRating); 
	};
});

// request(param1 = url, param2 =  callback function);
// param2 = function(error, response, body){

// }
// ! = not
// && = and
