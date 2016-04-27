var fs = require('fs');
var filecontents;

fs.readFile(process.argv[2], "utf8", function(err, content){ //callback
	if(err){
		console.log(err);
	}
	filecontents = data;
});
console.log(filecontents); //not inside the callback function

//readFile function is asynchronous. only applies contents to the variable when it has it.
// while it's waiting for the file to read it skips right over to line 10
	//have to make it hold 