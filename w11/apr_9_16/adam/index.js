//every time someone's information is logged, make a new student object with those arguments
//and then push them into the studentList array

	
	//then put the user-prompted information that they typed into terminal, into the constructor function
		//use "prompt" module to make a new student object for every student
		//then  want to put new student object into your "studentList" array 

var prompt = require('prompt');
 
  // Start the prompt 
  prompt.start();
 
  // Get three properties from the user: name, age and pass/fail status
  //use prompt to get the students information (name, age, pass);
  prompt.get(['name', 'age', 'pass'], function (err, result) {
    // 
    // Log the result. 
    // 
    console.log('Enter your student info: ');
    console.log('  name: ' + result.name);
    console.log('  age: ' + result.age);
    console.log(' pass/fail: ' + result.pass);
  	console.log(result);
  	console.log(typeof result);
  });

{
	name: "rachelle",
	age: 31,
	pass: true
}

var Student = function(name, age, pass){
	this.name = result.name;
	this.age = result.age;
	this.pass = result.pass;
}

