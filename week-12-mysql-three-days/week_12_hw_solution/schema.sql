/*
	no need to run this since you're importing the database
*/

CREATE TABLE caretakers (
id int AUTO_INCREMENT,
name varchar(30) NOT NULL,
city varchar(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE animals (
id int AUTO_INCREMENT,
caretaker_id int NOT NULL,
name varchar(30) NOT NULL,
type varchar(30) NOT NULL,
age int NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(caretaker_id) REFERENCES caretakers(id),
INDEX (type)
); 

/* ----------------------------- */
/* HOW WE POPULATED THE DATABASE */
/* ----------------------------- */

/*
//setup npm
var animals = require('animals');
var generateName = require('sillyname');
var random = require('random-name')
//console.log(random.first())
*/

/*
var sillyName = generateName() + "mon";
var randomAnimal = animals();
console.log(sillyName, randomAnimal);
*/

/*
connection.query('SELECT * FROM careTaker;', function(err, res) {
  if (err) throw err;
    console.log('Here is the keeper: ', res);
});
*/

/*comment
prompt is weird, do not use nodemon to test!!!
*/

/*
node index.js
*/

/*comment
generate data from node into mysql
*/

/*
var pop = function(input) {
	var taker = input;
	for (var i=0; i < 100000; i++) {
		var n = generateName() + "mon";
		var a = animals();
		var g = taker;
		connection.query('INSERT INTO animal (careTaker_id,name,type,age) VALUES (?,?,?,?)', [taker,n,a,g], function(err, result) {	
		if (err) throw err;
			connection.commit(function(err) {
		        if (err) { 
		          connection.rollback(function() {
		            throw err;
		          });
		        }
		    });
		});	
	};
}
*/

/*
pop(1);
console.log("done insert");
*/