var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 8000,
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'wizard_schools_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.get('/', function(req, res) {
  connection.query('SELECT * FROM schools', function(err, result) {

	var html = '<h1> These are the schools~!!! </h1>';

  	for (var s = 0; s < result.length; s++) {
  		html += '<div style="background-color:blue; color:red; margin-left:30px;">';
	  		html += '<ul>'
				html += '<li> ' + result[s].id + ' </li>';
				html += '<li> ' + result[s].name + ' </li>';
			html += '</ul>'
			html += '<br />';
		html += '</div>';
  	};

      res.send(html);
  });
});

var port = 3000;
app.listen(port);