App setup:
```
1.create App Dir (make sure app name is all lowercase)
2.npm init
4.create 'index.js' file

Database setup:
1.npm install mysql
2.mysql config
```

```
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret',
  database : 'some_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

```
If you can't get access to the db, you might have installed mySQL with a port you need to put it
```
var connection = mysql.createConnection({
  port	   : 8000,
  host     : 'example.org',
  user     : 'bob',
  password : 'secret',
  database : 'some_db'
});
```

Connect to movies db: note synatx is bit different 
```
connection.query('SELECT * FROM samuel_l_jackson_movies', function(err, res) {
    console.log("Okay we got ", res);
});
``