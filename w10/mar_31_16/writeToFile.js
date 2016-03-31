var fs = require('fs'); //reads and writes files

fs.writeFile("movies.txt", 'Inception, Die Hard', function(err) {
	if(err){
		return console.log(err);
	}
	console.log("movies.txt was updated!");
});

//node has a small number of libraries that it considers essential but you still have to require it