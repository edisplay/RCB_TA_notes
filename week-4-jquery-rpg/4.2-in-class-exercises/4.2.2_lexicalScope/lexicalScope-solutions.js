//EXAMPLE ONE global scope
var a = 1; //second js checks here to see what a is. It finds a, so that's what it alerts out
function one() {
  //first js checks here to see what a is, it doesn't find a, so it goes up a level
  alert(a);
}
one();


//EXAMPLE TWO local scope
function two(a) { // a gets set to 2
  alert(a); // 2 gets alerted to screen
}

two(2);

//EXAMPLE THREE local scope
var a = 5;
function three() {
  var a = 3;
  alert(a); // 3 gets alerted to the screen, not 5 because JS checks inside the function first, and if it finds then it doesn't go up a level
}

three();



// EXAMPLE FOUR: object scope(a function is also a type of object)
var person = {
  hair : 'black',
  eyes : 'brown',
  height : 72,
  describe : function(){
    debugger; //show students that this is the person object, that's why when you do this.hair you get the hair
    alert('Hey my hair is ' + this.hair + ' . My eyes are ' + this.eyes + '. My height is ' + this.height);
  }

}

// EXAMPLE FIVE:
debugger; //show that this is window scope
var a = 1;
function five() {
  debugger; //show that this is window scope
  a = 5;
  debugger; //show that a is 5 now. Not 1 - BECAUSE IN JS - it looks for the variable inside, and if it doesn't find it, it goes up a level
}
five();


// EXAMPLE SIX:

function first(){
  
  var a = 5;

  function second(){

    var a = 3;

    function third(){
      alert(a);  //it will alert 3 not 5, because JavaScript goes up with scope    
    }

    third();
  } 

  second();
}

first();
