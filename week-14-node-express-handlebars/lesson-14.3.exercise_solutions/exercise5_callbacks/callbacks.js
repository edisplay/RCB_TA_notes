//a basic callback function
setTimeout(function() {alert("SUP!!!") }, 1000);

//a function containing a callback 
var sayHi = function() {
	var greeting = 'hi';
	setTimeout(function() {
		console.log(greeting);
	}, 3000);
};
sayHi();


//declare the function taking a callback and using the callback
var yell = function(cb) {
	var t = Math.random()* 10000;
	setTimeout(function() { 
		cb("HI~!!!!!!! it's been " + t +  " milaseconds!");
	}, t);
}
//calling the function which takes the callback
//this anonymous function is now cb and takes an input passed in from the function yell
yell(function(input) {
	alert(input);
});