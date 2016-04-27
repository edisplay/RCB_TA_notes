function Item(price, SKU, name){
	this.price = price;
	this.SKU = SKU;
	this.name = name;
	this.describe = function(){
		return "This item is made by "+ this.name + " and costs $" + this.price
	}
};

var shoe = new Item(50, "12345", "Nike");
var hat = new Item(40, "23456", "Stetson");
var jacket = new Item(100, "34567", "Under Armour");

var items = [];
items.push(shoe);
items.push(hat);
items.push(jacket);

for (var i =0; i < items.length; i++){
	console.log(items[i].describe());
};

