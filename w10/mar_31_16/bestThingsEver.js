var fs = require('fs');

/*1. read what's inside best_things_ever.txt 
2. output each item on a new line in the terminal. 
	Do not output the commas*/

fs.readFile("bestThingsEver.txt", "utf8", function(error, data){
	console.log(data);
	var output = data.split(", ");//split on the comma so it becomes an array of 7 elements. commas are removed
	for (var i = 0; i<output.length; i++){
		console.log(output[i]);
	};
});