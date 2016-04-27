var mysql      = require('mysql');
var connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'root', //check MAMP for this
 password : 'password'
});

connection.connect(function(err) {
 if (err) {
   console.error('error connecting: ' + err.stack);
   return;
 }

 console.log('connected as id ' + connection.threadId);
});