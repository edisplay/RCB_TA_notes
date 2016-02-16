// global scope
var a = 1;
function one() {
  alert(a);
}
one();


// local scope
var a = 1;
function two(a) {
  alert(a);
}

function three() {
  var a = 3;
  alert(a);
}

two(a);
three();

// function scope
var a = 1;
function four() {
  if (true) {
    var a = 4;
  }
  // alerts '4', not the global value of '1'
  alert(a); 
}
four();

// object scope(a function is also a type of object)
var a = 1;
function five() {
  this.a = 5;
  console.log(a);
}
five();
