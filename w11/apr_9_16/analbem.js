//to make sure that node works on your computer
	//console.log("this thing works");

//make an array of students. 
	var students = ["rachelle", "analbem", "jordan"];

//to display rachelle in the terminal	
	//console.log(students[0]);

//display all of the students in the terminal
	for(var i = 0; i < students.length; i++){
		//console.log(students[i]);
	}

//what is an object?
	//object is an associative array that has key/value pairs


// var rachelle = {
// 	first_name: "rachelle",
// 	last_name: "faroul",
// 	hair_color: "dark brown"
// };

// var analbem = {
// 	first_name: "analbem",
// 	last_name: "manakiwala",
// 	hair_color: "black"
// };


// var Student = function(first_name, last_name, hair_color) {
// 	this.first_name: first_name,
// 	this.last_name: last_name,
// 	this.hair_color: hair_color
// };

//var student = new Student(first_name, last_name, hair_color);
// var rachelle = new Student("rachelle", "faroul", "dark brown");
// var analbem = new Student("analbem", "manakiwala", "black");

var bus = [];

//have a list of students first and last names
var students = [ {first_name: "rachelle", last_name: "faroul"}, {first_name: "analbem", last_name: "manakiwala"} ];
	//arrays have indexes

var Student = function(first_name, last_name) {
	this.first_name = first_name,
	this.last_name = last_name
};

var jordan = new Student("jordan", "biason");
console.log(jordan);
console.log(typeof jordan);

for(var i = 0; i < students.length; i++){
	bus.push(students[i]);
	//console.log(bus);

};

students.push(jordan);
console.log(students);

//make a new student every time they get on the bus



//add the student to the bus



//one empty array called bus
//


