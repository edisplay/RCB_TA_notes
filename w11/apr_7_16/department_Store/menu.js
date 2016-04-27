var Item = require('./item.js');

//constructor
var Menu = function(){
	this.items = [];
	this.addItem = function(name, price, category){
		
		this.items.push(new Item(name, price, category));
	}
};

module.exports = Menu;