//EXAMPLE ONE global scope
var a = 1; 
function one(){
  alert(a);
}
one(); //what will happen?


//EXAMPLE TWO local scope
function two(a) { 
  alert(a); 
}

two(2); //what will happen?

//EXAMPLE THREE local scope
var a = 5;
function three() {
  var a = 3;
  alert(a); 
}

three();


// EXAMPLE FOUR: object scope (a function is also a type of object)
var person = {
  hair : 'black',
  eyes : 'brown',
  height : 72,
  describe : function(){
    debugger; //what is this here
    alert('Hey my hair is ' + this.hair + ' . My eyes are ' + this.eyes + '. My height is ' + this.height);
  }

}

// EXAMPLE FIVE:
debugger; //what is this here?
var a = 1;
function five() {
  debugger; //what is this here?
  a = 5;
  debugger; //what is a here?
}
five();


// EXAMPLE SIX:

function first(){
  
  var a = 5;

  function second(){

    var a = 3;

    function third(){
      alert(a);  //what will get alerted?   
    }

    third();
  } 

  second();
}

first();
