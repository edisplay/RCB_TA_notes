//what is `this`?
//`this` reference ALWAYS refers to (and holds the value of) an object—a singular object

console.log(this);
/*
when `this` is used outside of an object, it references the global scope: 
Window {external: Object, chrome: Object, document: document, speechSynthesis: SpeechSynthesis, webkitStorageInfo: DeprecatedStorageInfo…}
*/

/*
In most cases, the value of this is determined by how a function is called
*/
function myFunction(){
  console.log(this);
}
myFunction();

//In the example above `this` isn't referenced anywhere so it refer backs to the global object

/*
`this` is not assigned a value until an object invokes the function where this is defined. Let’s call the function where this is defined the “this Function.”
*/

//When a function is called as a method of an object, its this is set to the object the method is called on.
var someObj = {
	name: 'Red Hat',
	say: function() {
		console.log(this.name);
	}
};

someObj.say();

//In the example above `this` referes to the object "someObj"


