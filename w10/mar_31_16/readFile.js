var fs = require('fs');

fs.readFile("movies.txt", "utf8", function(err, content){
	if(err){
		return console.log(err);
	}
	console.log(content);
});

//if want to specify something on the command line
// fs.readFile(process.argv[2], "utf8", function(err, content){
// 	if(err){
// 		return console.log(err);
// 	}
// 	console.log(content);
// });
	//would then run node readFile.js fileName

