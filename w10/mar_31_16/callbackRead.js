var fs = require('fs'); 

// LOOK AT THIS NUMBER
var number = 0;

fs.readFile("movies.txt", "utf8", function(error, data) {

	// I'm CHANGING THE VALUE OF NUMBER!!!
	number = 99999999;

	var dataArr = data.split(',');

	console.log(dataArr);
	console.log("runs second", number);
	
});

// WHAT WILL THIS PRINT?
console.log("runs first", number);

//setTimeout(console.log("runs first", number), 1000);

//node is designed to be asynchronous so it can handle bugs, etc.
