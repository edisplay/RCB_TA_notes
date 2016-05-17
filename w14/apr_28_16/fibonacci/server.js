var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//start server

app.listen(port);
console.log('Server started, at http://localhost' + port);


app.get('/:action/:numOne/:numTwo', function(request, response){

	var description = request.params.action;
	var numOne = request.params.numOne;
	var numTwo = request.params.numTwo;

	switch(description) {
		case ("addition"):
			response.sendStatus(Number(numOne) + Number(numTwo));
			break;

		case("subtraction"):
			response.sendStatus(Number(numOne) - Number(numTwo));
			break;
	}
})