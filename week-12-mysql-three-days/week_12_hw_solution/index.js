//setup db
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoo_db'
});
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    //console.log('connected as id ' + connection.threadId);
});
var prompt = require('prompt');
prompt.start();
prompt.message = '';

/*
//setup npm
var animals = require('animals');
var generateName = require('sillyname');
var random = require('random-name')
//console.log(random.first())
*/
//connect to mySQL 

/*
var sillyName = generateName() + "mon";
var randomAnimal = animals();
console.log(sillyName, randomAnimal);
*/
// connection.query('SELECT * FROM careTaker;', function(err, res) {
//   if (err) throw err;
//     console.log('Here is the keeper: ', res);
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
		console.log("Enter (V): ------>", "Visit the animals in the Zoo!");
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
			connection.query('INSERT INTO animals (caretaker_id,name,type,age) VALUES (?,?,?,?)', [1, result.name,result.type,result.age], function(err, result) {
			if (err) throw err;
			});			
			console.log("Thank you for adding this animal!");
			console.log("--------------------------------------------------");
			//going back to start menu
			currentScope.menu();
			currentScope.promptUser();
		});
	},
	visit : function() {
	    console.log("How would you like to see the animals today?");
		console.log("--------------------------------------------------");
		console.log("Enter (I): ------>", "You know the animal by it's Id visit only it!");
		console.log("");
		console.log("Enter (N): ------>", "You know the animal by name visit only it!");
		console.log("");
		console.log("Enter (A): ------>", "Count all the animals in all the zoo locations!");
		console.log("");
		console.log("Enter (C): ------>", "Count number of animal in zoo based on city!");
		console.log("");
		console.log("Enter (O): ------>", "Count every animal in zoo with the same type!");
		console.log("");
		console.log("Enter (Q): ------>", "Quit to main menu!");
		console.log("--------------------------------------------------");
	},
	view : function(input_scope) {
		var currentScope = input_scope;
		console.log("Please choice what you like to visit!");
		console.log("--------------------------------------------------");
		prompt.get(['--->','visit'], function(err, result) {
			if (result.visit == "Q") {
				currentScope.menu();
				currentScope.promptUser();
			}else if (result.visit == "O") {
				currentScope.type(input_scope);
			}else if (result.visit == "I") {
				currentScope.animId(input_scope);
			}else if (result.visit == "N") {
				currentScope.name(input_scope);
			}else if (result.visit == "A") {
				currentScope.all(input_scope);
			}else if (result.visit == "C") {
				currentScope.care(input_scope);
			}else{
				console.log("Sorry didn't get that, come again?");
				console.log("--------------------------------------------------");
				currentScope.visit();
				currentScope.view(currentScope);
			}
		});
	},
	type : function(input_scope) {
		var currentScope = input_scope;
		console.log("Enter animal type to check out many those we got.");
		console.log("--------------------------------------------------");
		prompt.get(['--->','animal_type'], function(err, result) {
			connection.query('SELECT COUNT(*) FROM animals WHERE type = ?',[result.animal_type], function(err, res) {
			  if (err) throw err;
			  	var t = res[0];
			    console.log("Okay we got ", t, result.animal_type);
			    console.log("--------------------------------------------------");
				currentScope.visit();
				currentScope.view(currentScope);
			});
		});
	},
	care : function(input_scope) {
		var currentScope = input_scope;
		console.log("Enter city name NY/SF.");
		console.log("--------------------------------------------------");
		prompt.get(['--->','city_name'], function(err, result) {
			// connection.query('SELECT parent_tagid AS owner_id FROM '+dbname+'.iag_key_tag_relationships WHERE TYPE =2 AND tagid =  '+ voucher.voucher_id,
			connection.query('SELECT COUNT(*) name FROM animals RIGHT JOIN caretakers ON animals.caretaker_id = caretakers.id WHERE caretakers.city = ?',[result.city_name], function(err, res) {
			  if (err) throw err;
			    console.log("Okay we got ", res);
			    console.log("--------------------------------------------------");
				currentScope.visit();
				currentScope.view(currentScope);
			});
		});
	},
	animId : function(input_scope) {
		var currentScope = input_scope;
		console.log("Enter ID of the animal you want to visit.");
		console.log("--------------------------------------------------");
		prompt.get(['--->','anim_id'], function(err, result) {
			connection.query('SELECT * FROM animals WHERE id = ?',[result.anim_id], function(err, res) {
			  if (err) throw err;
			    console.log("Here is the animal", res);
			    console.log("--------------------------------------------------");
				currentScope.visit();
				currentScope.view(currentScope);
			});
		});
	},
	name : function(input_scope) {
		var currentScope = input_scope;
		console.log("Enter name of the animal you want to visit.");
		console.log("--------------------------------------------------");
		prompt.get(['--->','anim_name'], function(err, result) {
			connection.query('SELECT * FROM animals WHERE name = ?',[result.anim_name], function(err, res) {
			  if (err) throw err;
			    console.log("Here is the animal", res);
			    console.log("--------------------------------------------------");
				currentScope.visit();
				currentScope.view(currentScope);
			});
		});
	},
	all: function(input_scope) {
		var currentScope = input_scope;
		//SELECT COUNT(*) FROM animal;
		connection.query('SELECT COUNT(*) FROM animals', function(err, res) {
		  if (err) throw err;
		    console.log("Here is the total animal count", res);
		    console.log("--------------------------------------------------");
			currentScope.visit();
			currentScope.view(currentScope);
		});
	},
	update : function(input_scope) {
		var currentScope = input_scope;
		console.log("To update an animal please enter the ID of the animal and it's changed information!");
		console.log("--------------------------------------------------");
		prompt.get(['--->','ID','new_name','new_age','new_type','new_careTaker_ID'], function(err, result) {
			//console.log(result.new_name, result.new_age, result.new_careTaker_ID);
			connection.query('UPDATE animals SET name=?,age=?,type=?,caretaker_id=? WHERE id = ?', [result.new_name,result.new_age,result.new_type,result.new_careTaker_ID,result.ID], function(err, result) {
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
			connection.query('DELETE FROM animals WHERE id=?', [result.animal_ID], function(err, result) {
			if (err) throw err;
			});	
			console.log("Thank you for adopting this animal, would you like to do something else today?");
			console.log("--------------------------------------------------");
			//going back to start menu
			currentScope.menu();
			currentScope.promptUser();
		});
	},
	promptUser : function() {
		//pass this in as self into funcs
		var self = this;
		//user choices
		prompt.get('input', function(err, result) {
			//data creation
			if (result.input == 'C') {
				//self.populate();
				connection.query('SELECT COUNT(*) FROM animals', function(err, result) {
				console.log(result);
				if (err) throw err;
				self.promptUser();
				});			
			}else if (result.input == 'Q') {
				self.exit();
			}else if (result.input == 'A') { 
				self.add(self);
			}else if (result.input == 'U') {
				self.update(self);
			}else if (result.input == 'V') { 
				self.visit();
				self.view(self);
			}else if (result.input == 'D') {
				self.adopt(self);
			}else{
				console.log("Sorry didn't get that, come again?");
				self.promptUser();
			};
		});
	}, 
	exit : function() {
		console.log("Thank you for visiting us, good bye~!");
		process.exit();
	},
	open : function () {
		//welcome the user at start of the app
		this.welcome();
		this.menu();
		this.promptUser();
	}
//zoo obj
};

zoo.open();