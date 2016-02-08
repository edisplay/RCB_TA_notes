var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 8000,
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'pets_shop_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

var data = "This is blank data";
connection.query('SELECT * FROM pets WHERE animal_name = ?', ['Grizze'], function(err, result) {
    if (err) throw err;
    data = result;
});

//data is still blank...
//wait how do I get data out of query to use for later???
console.log(data);