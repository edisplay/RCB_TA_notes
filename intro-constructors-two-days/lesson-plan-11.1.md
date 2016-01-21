# Objectives

* Students will run their first node app in the terminal

# Lesson Plan + In Class Exercises

### 1. Student do (20 minutes)

Everyone open up sublime text and code.

If you don't have sublime text open, then you're not doing your job.

Part one:
---------
Make a dog object with two keys.

One key called sleepy = false;

Second key called noise = 'woof';

Third key called makeNoise which alerts the noise to the screen if the dog is not sleepy. 

Part two:
---------
Make a cat object with two keys.

One key called sleepy = true;

Second key called noise = 'meow';

Third key called makeNoise which alerts the noise to the screen if the cat is not sleepy. 

Part Three:
-----------
make the dog bark 

make the cat meow

Part Four:
-----------
Why are parts one and two redundant? What are ways we can write dry code?


### 2. Everyone do (10 minutes)

We go over together previous exercise.

### 3. I do

show how to reduce redundancies with constructor functions

### 4. they do 20 minutes

For those who don't remember (or choose to forget), Tamagotchis were "digital pets" that you could carry around with you and feed them, clean up after them, pet them, and try to keep them happy.

Make a Tamagotchi constructor. Give it the following properties:
1. a hungry property (initially false)
2. a sick property (initially false)
3. an age of 0

and give it the following methods:

feed() - if hungry is true, print "That was yummy!" and set hungry to false. If hungry is false, print "No thanks, I'm full." and set hungry to true.
sleep() - prints out "zzzzzzz" (use as many z's as you want)
medicate() - if sick is true, print "I feel much better!" and set sick to false. If sick is false, print "No thanks, I feel fine." and set sick to true.
increaseAge() - increase the age by one and print "Happy Birthday to me! I am " + age + " years old!"
Now make a variable named dog that is set to a new Tamagotchi.

Add the following methods to it:
1. bark() - prints out "ruff ruff
2. goOutside() - prints out "I own that tree now!"

Make a variable named cat that is set to a new Tamagotchi. Add the following methods to it:
1. meow() - prints out "Meow!"
2. scratchThatChair() - "Stop scratching that chair!!!"

* solution

```
var Tamagotchi = function() {
  this.hungry = false;
  this.sick = false;
  this.age = 0;

  this.feed = function() {
    if(this.hungry === true) {
      console.log("That was yummy!");
      this.hungry = false;
    }
    else {
      console.log("No thanks, I'm full.");
      this.hungry = true;
    }
  };

  this.sleep = function() {
    console.log("zzzzzzzzzzzz");
  };

  this.medicate = function() {
    if(this.sick === true) {
      console.log("I feel much better");
      this.sick = false;
    }
    else {
      console.log("No thanks, I feel fine.");
      this.sick = true;
    }
  };

  this.increaseAge = function() {
    this.age ++;
    console.log("Happy Birthday to me! I am " + this.age +
    " years old!");
  };
};

var dog = new Tamagotchi();
dog.bark = function() {
  console.log("ruff ruff!");
}

dog.goOutside = function() {
  console.log("I own that tree now!");
}

var cat = new Tamagotchi();
cat.meow = function() {
  console.log("Meow!");
}
cat.scratchThatChair = function() {
  console.log("Stop scratching that chair!!!");
}
```

	
### Partners do (20 minutes)

strong to strong - weak to weak

both of you code

1. In a new folder
2. make a new node file called constructorFun.js
3. auto create a package.json file with npm init
4. install the prompt package so that it's 
5. Inside constructorFun.js, make a constructor function called Student that creates a student object with properties of name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, and a function called canStudentHaveFun that checks if they have less than 10 detentions and above a 2 GPA. If they do then console.log out to the terminal that the student can have fun.
6. Prompt the user for a student's information, make a new Student Object with it, then invoke the canStudentHaveFun function.

### everyone does



# Copyright
Rutgers Coding Boot Camp (C) 2015. All Rights Reserved.
