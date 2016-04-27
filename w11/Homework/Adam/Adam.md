Awesome job with this assignment Adam. We falsely advertised that this week's HW would be easy; it wasn't.

Here's some feedback:

The Student and NewStudent constructors are redundant; you don't need both. You can have one Student constructor that looks like this:

var Student = function(name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase){
		this.name = name;
		this.gender = gender;
		this.grade = grade;
		this.GPA = GPA;
		this.detentions = detentions;
		this.sleepingInClass = sleepingInClass;
		this.catchPhrase = catchPhrase;

		this.canStudentHaveFun = function(){
			if(this.detentions<10 && parseFloat(this.GPA)>2){
				console.log("\n"+this.name.bold.red+" can have fun!\n".bold.green);
			}
		}	
}

It would make more sense to add students in the Bus constructor, since students are only being added (or created) as they get on the bus.

Don't forget to require files when you need them. I think  you forgot to require your NewStudent constructor in your bus.js file.

Otherwise, keep going. Keep working on the busChatter function and allow me to kick some students off the bus!

C

