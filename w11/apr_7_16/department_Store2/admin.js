var menu = require('./menu.txt');
var prompt = require('prompt');
var fs = require('fs');

prompt.start();

prompt.get(['name', "price", "category"], function(err, item){
	console.log("hey master. what do you want? ");
	console.log("name: " + item.name);
	console.log("price: " + item.price);
	console.log("category: " + item.category);
	console.log(item);
});

//STEP 2: