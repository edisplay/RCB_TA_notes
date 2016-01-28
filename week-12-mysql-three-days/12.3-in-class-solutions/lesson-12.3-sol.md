### 12.3.1 Exercise 1: (Simple MySQL db C.R.U.D.)

```
CREATE DATABASE bears_db;
USE bears_db;

CREATE TABLE happy_bears (
id int AUTO_INCREMENT,
name varchar(30) NOT NULL,
favorite_food varchar(30) NOT NULL,
personality  varchar(30) NOT NULL,
PRIMARY KEY(id)
); 

INSERT INTO happy_bears (name, favorite_food, personality) VALUES ('Nom Nom','Vanity','Mean');

```
App setup:
```
1.create App Dir named 'bears'
2.npm init
4.create 'index.js' file

Database setup:
1.npm install mysql
2.mysql config
```

```
If you can't get access to the db, you might have installed mySQL with a port you need to put it
```
var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 8000,
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'bears_db'
});

connection.query('SELECT * FROM happy_bears', function(err, res) {
    console.log("Okay we got ", res);
});

```

Connect to movies db, find all bears data
```
var showBears = function() {
	connection.query('SELECT * FROM happy_bears', function(err, res) {
	    console.log("Okay we got ", res);
	});
}
//showBears();
```

Run app
```
node index.js
```

Create an node.js function that will insert the following data when the node.js server starts

| name  | favorite_food  | personality |
|-------|----------------|-------------|
|Grizzly|Pizza|'Out going'|
|Panda|'Hot Dog'|Shy|
|'Ice Bear'|'Fish'|Chill|

```
var bearsData = ['Grizzly','Panda','Ice Bear'];
var foodData = ['Pizza','Hot Dog','Fish'];
var PersonData = ['Out going','Shy','Chill'];

var addBears = function() {
	for (var i = 0; i < 3; i++) {
		connection.query('INSERT INTO happy_bears (name,favorite_food,personality) VALUES (?,?,?)', [bearsData[i],foodData[i],PersonData[i]], function(err, result) {
		if (err) throw err;
		});
	};
	console.log("insert finished~!")
};
//addBears();

var updateBear = function() {
	connection.query('UPDATE happy_bears SET favorite_food = ? WHERE id = 3', ['bamboo'], function(err, result) {
	if (err) throw err;
	});	
	console.log("update finished~!")
};
//updateBear();



```

--------- --------- ---------

### 12.3.2 Exercise 2: