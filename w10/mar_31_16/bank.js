var fs = require('fs');

var action = process.argv[2]; //what to do. either provide "total", "deposit", "withdraw", or "lotto"
var value = process.argv[3]; //result

switch(action){
	case 'total':
	//Statements executed when the result of expression matches value1, which equals 'total' here.
	total(); //do this
	break;
	case 'deposit': //next switch statement
	deposit();
	break;
	case 'withdraw':
	withdraw();
	break;
	case 'lotto':
	lotto();
	break;
	//default: (statements executed when none of the values match the value of the expression)
	//break;
};
function total(){
	fs.readFile('bank.txt', "utf8", function(err, data){ //callback function that reads the file
		data = data.split(', '); //split on the comma ensuring there's a space
		console.log("data", data);
		var result = 0; //start at 0

		for (var i = 0; i < data.length; i++){
			result+= parseFloat(data[i]); //add 
		}

		console.log("You have a total of " + result.toFixed(2));
	});
};
function deposit(){
	fs.appendFile('bank.txt', ", " + value);

	console.log("Deposited " + value + ".");
};
function withdraw(){
	fs.appendFile('bank.txt', ", -" + value);

	console.log("Withdrew " + value + ".");
};
function lotto(){
	fs.appendFile('bank.txt', ", -.25");

	var chance = Math.floor((Math.random() * 10) + 1);

	console.log(chance);

	if (chance === 1){
		fs.appendFile('bank.txt', ", 2");
		console.log("Congrats you won the lottery!");
	} else{
		console.log("Deposited .25...... You did not win.");
	}
}