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

/*
var sillyName = generateName() + "mon";
var randomAnimal = animals();
console.log(sillyName, randomAnimal);
*/
/*var addData = function() {
	//mySQL commands
  	connection.query('INSERT INTO Tasks (Todo, Done) VALUES (?, ?)', [req.body.todo, false], function(err, result) {
	if (err) throw err;
	});
}*/
	// connection.query('SELECT * FROM careTaker;', function(err, res) {
	//   if (err) throw err;
	//     console.log('Here is the keeper: ', res);
	// });
	// connection.query('SELECT * FROM animal;', function(err, res) {
	//   if (err) throw err;
	//     console.log('Here is the animal: ', res);
	// });

//show user choices
//do now use switch case does not work with npm prompt
zoo = {
	state: null,
	welcome: function() {
		console.log("°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,");
		console.log("");
		console.log("                      Welcome to the Zoo And Friends App~!                      ");
		console.log("");
		console.log("°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,");
		console.log("");
		console.log("Please select what you want to do...");
		console.log("--------------------------------------------------");
		console.log("Enter (A): ------>", "Add a new animal to the Zoo!");
		console.log("Enter (U): ------>", "Update info on an animal in the Zoo!");
		console.log("Enter (V): ------>", "Visit different animals in the Zoo!");
		console.log("Enter (D): ------>", "Adopt an animal from the Zoo!");
		console.log("--------------------------------------------------");
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
	open : function () {
		//welcome the user at start of the app
		if (this.state == null) {
			this.welcome();
		};
		this.state = "opened";
		this.keepPromptingUser();
	}, 
	keepPromptingUser : function() {
		var self = this;
		prompt.get(['input'], function(err, result) {
			if (result.input == 'V') {
				self.visit();
			  	self.keepPromptingUser();
			};
		});
	}

};

zoo.open();