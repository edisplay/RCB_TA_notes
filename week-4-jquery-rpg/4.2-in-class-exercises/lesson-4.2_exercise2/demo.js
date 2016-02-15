function a() {
	var myVar = 5 - 3;
	b();
	console.log(myVar);
}

function b() {
	console.log(myVar);
}

var myVar = 1;
a();