var mysql      = require('mysql');
var connection = mysql.createConnection({
  port     : 8000,
  host     : 'localhost',
  user     : 'root',
  password : '1111',
  database : 'pet_shops_db'
});

/*
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadId);
});
*/

var prompt = require('prompt');
prompt.start();
prompt.message = '';

petshop = {
  welcome: function() {
    console.log("°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,ø");
    console.log("°");
    console.log("°                      Welcome to the pet_shops App~!                           ø");
    console.log("°");
    console.log("°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,ø");
    console.log("");
  },
  action : function(table_name) {
    // var currentScope = input_scope;
    // console.log("!");
    // console.log("--------------------------------------------------");
    // //ask for user input
    // //prompt.get(['_','name','_','type','_','age'], function(err, result) {
   
    //   connection.query('INSERT INTO animals (caretaker_id,name,type,age) VALUES (?,?,?,?)', [1, result.name,result.type,result.age], function(err, result) {
    //   if (err) throw err;

    //   console.log("Thank you for adding this animal!");
    //   console.log("--------------------------------------------------");
    //   //going back to start menu
    //   currentScope.menu();
    //   currentScope.promptUser();
    // });
  },
  promptUser : function() {
    //pass this in as self into funcs
    var self = this;
    prompt.get('input', function(err, result) {
      //prompt the user to input just
      //depending on the input different kinds of actions can be executed
    });
  }, 
  exit : function() {
    console.log("Thank you for visiting us, good bye~!");
    process.exit();
  },
  open : function () {
    //welcome the user at start of the app
    this.welcome();
    this.promptUser();
  }
};

petshop.open();