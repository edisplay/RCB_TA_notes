var http = require('http');

var PORT = 8080;

function handleRequest(request, response){
	response.end("It works! " + request.url);
}

var server = http.createServer

server.listen(PORT, function(){
	console.log("server listening on: http://localhost:%s", PORT);
})