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

//show user choices
//prompt is weird, wtf do not use nodemon to test~!!!

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
		prompt.get(['_','name','type','age'], function(err, result) {
			//console.log(result.name, result.type, result.age);
			//INSERT INTO animal (careTaker_id, name, type, age) VALUES (1, 'Bobo', 'Bear', 3) ;
			/*		  	
			connection.query('INSERT INTO animal (careTaker_id,name,type,age) VALUES (?,?,?,?)', [1, result.name,result.type,result.age], function(err, result) {
			if (err) throw err;
			});
			*/
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
		console.log("Enter (All): ------->", "View every animal in the zoo!");
		console.log("Enter (Id): -------->", "You know the animal by it's Id visit only it!");
		console.log("Enter (Name): ------>", "You know the animal by name visit only it!");
		console.log("Enter (Care): ------>", "You know the careTaker visit all animal under that person!");
		console.log("--------------------------------------------------");
	},
	update : function(input_scope) {
		var currentScope = input_scope;
		console.log("To update an animal please enter the ID of the animal and it's changed information!");
		console.log("--------------------------------------------------");
		prompt.get(['_','ID','new_name','new_age','new_careTaker_ID'], function(err, result) {
			console.log(result.new_name, result.new_age, result.new_careTaker_ID);
			console.log("Thank you for updating this animal, would you like to do something else today?");
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
	promptUser : function() {
		var self = this;
		prompt.get('input', function(err, result) {
			if (result.input == 'Q') {
				self.exit();
			}else if (result.input == 'A') { 
				//pass this in the form of self into new func
				self.add(self);
			}else if (result.input == 'U') {
				//pass this in the form of self into new func
				self.update(self);
			}else{
				console.log("Sorry didn't get that, come again?");
				self.promptUser();
			}
		});
	}

};

zoo.open();