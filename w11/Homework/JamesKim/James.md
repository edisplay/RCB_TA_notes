This is a good start. Let's keep working on this. All of the pieces will start to fall into place, and when you come back to it, it'll make more sense.

Tips:
Don't forget to include your package.json when you push up to github. It has the critical info I need to run the app. Without it, I have to figure out which modules to install and which file to initiate to run the app.

Your student constructor is coming along nicely. Instead of having the values for each variable be a string, pass in the arguments. So instead of:

var student = function (name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase) {
	this.name = "";
	this.gender = "";
	this.grade = "";
	this.GPA = "";
	this.detentions = "";
	this.sleepingInClass = "";
	this.catchPhrase = "";

	this.canStudentHaveFun = function () {
		if ((this.detentions < 10) && (this.GPA > 2)){
			console.log ("the students can have fun");
		}
	}

};

you should have:

var Student = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.GPA = GPA;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;
}
