### examples of callbacks

```

var sayHi = function() {
	var greeting = 'hi';
	setTimeout(function() {
		console.log(greeting);
	}, 3000);
};
sayHi();


//callback function
var yell = function(cb) {
	var t = Math.random()* 10000;
	setTimeout(function() { 
		cb("HI~!!!!!!! it's been " + t +  " milaseconds!");
	}, t);
}

yell(function(input) {
	alert(input);
});

```