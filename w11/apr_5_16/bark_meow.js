// Make a dog object with two keys.

// One key called sleepy = false;

// Second key called noise = 'woof';

// Third key called makeNoise which console.logs the noise to the screen if the dog is not sleepy.
// var fs = require('fs');
// var dog = {
// 	sleepy: false,
// 	noise: "woof",
// 	makeNoise: function(){
// 		if(this.sleepy === false){
// 			console.log(this.noise);
// 		} 
// 	}
// };
// Part two:
// ---------
// Make a cat object with two keys.

// One key called sleepy = true;

// Second key called noise = 'meow';

// Third key called makeNoise which console.logs the noise to the screen if the cat is not sleepy.
//SOLUTION
// var cat = {
// 	sleepy: true,
// 	noise: "meow",
// 	makeNoise: function(){
// 		if(this.sleepy === false){
// 			console.log(this.noise);
// 		}
// 	}
// }
// Part Three:
// -----------
// make the dog bark
//SOLUTION
//dog.makeNoise();
// make the cat meow
//cat.sleepy = false;
//cat.makeNoise();

function Animal(name, sleepy, noise){
	this.name = name;
	this.sleepy = sleepy;
	this.noise = noise;
	this.makeNoise = function(){
		if(this.sleepy === false){
			console.log(this.name + " says " + this.noise);
		}
	}
};
// var dog = new Animal("Benji", false, "woof");
// dog.makeNoise();
// var cat = new Animal("Whiskers", false, "meow");
// cat.makeNoise();
var liger = new Animal("jerome", false, "cast spell");
// liger.makeNoise();
// console.log(liger.name);

Animal.prototype.typeName = "Animal";
