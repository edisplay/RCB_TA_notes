/* What happenes when the code is ran! */

//---------- ---------- ---------- ----------
//question 1
var myVar = 1;

function a() {
	var myVar = 5 - 3;
	b();
	alert(myVar);
}

function b() {
	alert(myVar);
}
a();

//alert 1
//alert 2

/* Because when the code is ran lexically function b looks outside of it's scope to see myVar = 1 and alerted that, when function a is being called it created it's own local myVar and alerted that.*/

//---------- ---------- ---------- ----------
//question 2
var myVar = 1;
function d() {
	function e() {
		alert(myVar);
	}
	var myVar = 2;
	e();
};
d();

//alert 2

/* Because when the code is ran lexically the function e is inside of the function d so function e looks outside of it's scope to find myVar, myVar is a local varaible inside of d that equals 2, and e when called alerted 2*/

//---------- ---------- ---------- ----------
//question 3: Bonus
var myVar = 1;
function c() {
  this.myVar = 15;
  alert(myVar);
  var myVar = 3;
  alert(myVar);
}
c();

//alert undefined
//alert 3

/* Because when the code is ran lexically the function c has a property of myVar and a varible of myVar, the varaible myVar is set to undefined when the function is being read by JavaScript engine(hoisting), but when the function is called it's looking at the scope to see if it finds a variable named myVar, it alerts myVar with undefined and the function assigns myVar 3 and alerts 3 */