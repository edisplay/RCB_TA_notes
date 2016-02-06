var express = require('express');
var GitHubApi = require("node-github");

var github = new GitHubApi({
    version: "3.0.0"
});

var app = express();
var PORT = 3000;

app.get('/github/:user', function(req, res) {
  var user = req.params.user;
  github.user.getFrom({
  	user: user
  }, function(err, gitResponse){
  	res.send(JSON.stringify(gitResponse))
  });
});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});