var prompt = require('prompt');

var Student = function(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase){
  this.name = name;
  this.gender = gender;
  this.grade = grade;
  this.gpa = gpa;
  this.detentions = detentions;
  this.sleepingInClass = sleepingInClass;
  this.catchPhrase = catchPhrase;
  this.canStudentHaveFun = function(){
    if((this.detentions < 10) && (this.gpa > 2)){
      console.log("I can have fun!!!! " + this.catchPhrase)
    }else{
      console.log("I can't have fun. Darn!");
    }
  };
};

//if you just made a student manually it would look like this
//var zackMorris = new Student("Zack Morris", "male", "senior", 2.0, 90, true, "timeout");
//zackMorris.canStudentHaveFun();
prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
  var student = new Student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase)

  student.canStudentHaveFun();
});