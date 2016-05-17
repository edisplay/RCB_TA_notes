//prompt user to input info about each item
//need an item constructor that creates a new item on keyStroke enter
//user is passing in arguments, process.argv[2]??
var storeMenu = require('./menu.js');
var prompt = require('prompt');
var request = require('request');
var fs = require('fs'); //file system library

// ===========================

//start the prompt
prompt.start();


// Get two properties from the user: username and email
prompt.get(['name', 'price', 'jacket'], function (err, item) {
    // Log the items. 
    console.log('Welcome Master. Add items to the Menu here: ');
    console.log('name: ' + item.name);
    console.log('price: ' + item.price);
    console.log('category: ' + item.category);
    console.log(item);
    storeMenu.addItem(item.name, item.price, item.category);
    //Print menu
    console.log("Items? ", storeMenu.items);

    //Add item
    fs.appendFile("menu.txt", JSON.stringify(storeMenu.items) + "\r\n", function(err){
    	if(err)
    		throw err;
    	else{
    		console.log("Item added to menu");
    	}
    })
});

//item is an object
