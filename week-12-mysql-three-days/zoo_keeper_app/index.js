//setup db
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myTestDB'
});

//setup npm
var prompt = require('prompt');
var animals = require('animals');
var generateName = require('sillyname');

//connect to mySQL 
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    //console.log('connected as id ' + connection.threadId);
});

prompt.start();
prompt.message = '';

"use strict";

/*
var sillyName = generateName() + "mon";
var randomAnimal = animals();
console.log(sillyName, randomAnimal);
*/

// connection.query('SELECT * FROM careTaker;', function(err, res) {
//   if (err) throw err;
//     console.log('Here is the keeper: ', res);
// });
// connection.query('SELECT * FROM animal;', function(err, res) {
//   if (err) throw err;
//     console.log('Here is the animal: ', res);
// });

//prompt is weird, wtf do not use nodemon to test~!!!
//node index.js

zoo = {
	welcome: function() {
		console.log("°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,ø");
		console.log("°");
		console.log("°                      Welcome to the Zoo And Friends App~!                     ø");
		console.log("°");
		console.log("°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,ø");
		console.log("");
	},
	menu : function() {
		console.log("Please select what you want to do...");
		console.log("--------------------------------------------------");
		console.log("Enter (A): ------>", "Add a new animal to the Zoo!");
		console.log("");
		console.log("Enter (U): ------>", "Update info on an animal in the Zoo!");
		console.log("");
		console.log("Enter (V): ------>", "Visit different animals in the Zoo!");
		console.log("");
		console.log("Enter (D): ------>", "Adopt an animal from the Zoo!");
		console.log("");
		console.log("Enter (Q): ------>", "Quit and exit the Zoo!");
		console.log("--------------------------------------------------");
	},
	add : function(input_scope) {
		var currentScope = input_scope;
		console.log("To add an animal to the zoo please fill out the following form for us!");
		console.log("--------------------------------------------------");
		//ask for user input
		//prompt.get(['_','name','_','type','_','age'], function(err, result) {
		prompt.get(['--->','name','type','age'], function(err, result) {
			//console.log(result.name, result.type, result.age);
			//INSERT INTO animal (careTaker_id, name, type, age) VALUES (1, 'Bobo', 'Bear', 3) ;	  	
			connection.query('INSERT INTO animal (careTaker_id,name,type,age) VALUES (?,?,?,?)', [1, result.name,result.type,result.age], function(err, result) {
			if (err) throw err;
			});			
			console.log("Thank you for adding this animal!");
			console.log("--------------------------------------------------");
			//going back to start menu
			currentScope.menu();
			currentScope.promptUser();
		});
	},
	visit: function() {
	    console.log("How would you like to see the animals today?");
		console.log("--------------------------------------------------");
		console.log("Enter (E): ------>", "View every animal in the zoo!");
		console.log("Enter (I): ------>", "You know the animal by it's Id visit only it!");
		console.log("Enter (N): ------>", "You know the animal by name visit only it!");
		console.log("Enter (C): ------>", "You know the careTaker visit all animal under that person!");
		console.log("--------------------------------------------------");
	},
	update : function(input_scope) {
		var currentScope = input_scope;
		console.log("To update an animal please enter the ID of the animal and it's changed information!");
		console.log("--------------------------------------------------");
		prompt.get(['--->','ID','new_name','new_age','new_careTaker_ID'], function(err, result) {
			//console.log(result.new_name, result.new_age, result.new_careTaker_ID);
			connection.query('UPDATE animal SET name=?,age=?,careTaker_id=? WHERE animal_id = ?', [result.new_name,result.new_age,result.new_careTaker_ID,result.ID], function(err, result) {
			if (err) throw err;
			});	
			console.log("Thank you for updating this animal, would you like to do something else today?");
			console.log("--------------------------------------------------");
			//going back to start menu
			currentScope.menu();
			currentScope.promptUser();
		});
	},
	adopt : function(input_scope) {
		var currentScope = input_scope;
		console.log("To adopt an animal please enter the ID of the animal!");
		console.log("--------------------------------------------------");
		prompt.get(['--->','animal_ID'], function(err, result) {
			//DELETE FROM orders WHERE id_users = 1 AND id_product = 2 LIMIT 1
			connection.query('DELETE FROM animal WHERE animal_id=?', [result.animal_ID], function(err, result) {
			if (err) throw err;
			});	
			console.log("Thank you for adopting this animal, would you like to do something else today?");
			console.log("--------------------------------------------------");
			//going back to start menu
			currentScope.menu();
			currentScope.promptUser();
		});
	},
	open : function () {
		//welcome the user at start of the app
		this.welcome();
		this.menu();
		this.promptUser();
	}, 
	exit : function() {
		console.log("Thank you for visiting us, good bye~!");
		process.exit();
	},
	populate : function() {
		//"use strict";
		for (var i=0 ; i < 100000 ; i++ ) {
			var n = generateName() + "mon";
			var a = animals();
			var g = 1;
			connection.query('INSERT INTO animal (careTaker_id,name,type,age) VALUES (?,?,?,?)', [1, n,a,g], function(err, result) {
			if (err) throw err;
			});			
		}
	},
	promptUser : function() {
		var self = this;
		//pass this in the form of self into other function
		prompt.get('input', function(err, result) {
			//data creation
			if (result.input == 'P') {
				//self.populate();
				connection.query('SELECT COUNT(*) FROM animal', function(err, result) {
					console.log(result);
				if (err) throw err;
				});			
			};
			//user choices
			if (result.input == 'Q') {
				self.exit();
			}else if (result.input == 'A') { 
				self.add(self);
			}else if (result.input == 'U') {
				self.update(self);
			}else if (result.input == 'D') {
				self.adopt(self);
			}else{
				console.log("Sorry didn't get that, come again?");
				self.promptUser();
			};
		});
	}
//zoo obj
};

zoo.open();