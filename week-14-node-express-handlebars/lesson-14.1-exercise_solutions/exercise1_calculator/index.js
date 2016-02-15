var express = require("express");
var app = express();
var logger = require("morgan");

app.listen(3000);
app.use(logger("dev"));


app.get('/:operation/:num/:value', function (req, res) {

	var operation = req.params.operation;
	var firstNum = parseInt(req.params.num);
	var secondNum = parseInt(req.params.value);
	var result = "";

	if (operation == "addition") {
		result = (firstNum) + (secondNum);
	}else if (operation == "subtraction") {
		result = (firstNum) - (secondNum);
	}else if (operation == "multiplication"){
		result = (firstNum) * (secondNum);
	}else if (operation == "division"){
		result = (firstNum) / (secondNum);
	}else if (operation == "fibonacci") {
		var fibNum = 0;
		var numOne = 0;
		var numTwo = secondNum;
		var next;
		var fibArray = [0,secondNum];
		while (fibNum < firstNum ){
			next = numOne + numTwo;
			numOne = numTwo;
			numTwo = next;
			fibNum++;
			fibArray.push(next);
		};
		result = fibArray;
	};

	res.send("" + result);
});