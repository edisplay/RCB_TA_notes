# Pavan to do

make sure all students have mysql for next week when they have to use it - if they don't then make sure those students come to office hours for help installing it

add in timing

add in master objectives

make sure the timing works in the class format

# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

look at this file at the root of the repository: 
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide)

# Objectives

* students will use constructor functions to structure objects and solve problems in a DRY way

### 1. Partners do (20 minutes)

"Everyone open up sublime text and code."

"If you don't have sublime text open, then you're not doing your job."

* Walk around make sure people have sublime text open and are all coding * 

```
Part one:
---------
Make a dog object with two keys.

One key called sleepy = false;

Second key called noise = 'woof';

Third key called makeNoise which console.logs the noise to the screen if the dog is not sleepy. 

Part two:
---------
Make a cat object with two keys.

One key called sleepy = true;

Second key called noise = 'meow';

Third key called makeNoise which console.logs the noise to the screen if the cat is not sleepy. 

Part Three:
-----------
make the dog bark 

make the cat meow

Part Four:
-----------
Why are parts one and two redundant? What are ways we can write dry code?
```

### 2. Everyone do (15 minutes)

We go over previous exercise together as a class

### 3. Partners do (15 minutes)

> Spend the next 5 minutes talking about the code above

> You are responsible for the people around you understanding the previous code completely.

* call on a weak student to go over part 1 + 2. If he/she screws up call out the students near him/her *

* call on another weak student to go over part 3 + 4. If he/she screws up call out the students near him/her *

Make it known that people are responsible for the people around them. This will force stronger students to explain to the people around them what's going on.

### 4. Instructor do (15 minutes)

* show how to reduce redundancies with constructor functions *

> construction functions are used to reduce redundancy of object creation

> Notice the capital A at the beginning of the function

> This tells developers that this is a Constructor Function and shouldn't be directly invoked

> It doesn't prevent you from invoking the function, it's a convention that tells developers, hey this is a constructor function and will be used to create objects.

```
function Animal(sleepy, noise){
  this.sleepy = sleepy;
  this.noise = noise;
  this.makeNoise = function(){
    if (this.sleepy === false){
      console.log(this.noise);  
    }
  }
}
```

### 5. Partners do (10 minutes)

> You should never outright invoke a constructor function.

Ever...

So, first thing i'm going to do now, is invoke a constructor function.

* don't execute this *

Animal();

"What's going to happen? Talk about this with your partners. Figure out what's going to happen. Figure out why it's bad."

### 6. Everyone do (10 minutes)

call on people and try to get this full story:

"When you invoke the Animal() constructor function, it creates global variables, sleepy, noise and makeNoise. This is bad, because if you had variables named sleepy, noise or makeNoise, you'll end up over riding those variables. And that's bad."

### 7. Instructor do

Now i'm going to use the constructor function to make a cat.

```
var cat = new Animal(false, 'meow');
```

### 8. Everyone do

"Don't shout out the answer. Think in your head -  how do I make a dog?"

var dog = new Animal(false, 'woof');

"Now what about a giraffe?"

var giraffe = new Animal(false, 'dude');


### 9. Instructor do

"Now if you notice I have sleepy in the function arguments here. And sleepy twice below it."

"Everyone think in your head. Don't shout it out. Does the argument sleepy HAVE TO BE written as sleepy?"

"No. It doesn't. I could name sleepy cashews and it would work still"

original:
```
function Animal(sleepy, noise){
  this.sleepy = sleepy;
  this.noise = noise;
  this.makeNoise = function(){
    if (this.sleepy === false){
      console.log(this.noise);  
    }
  }
}
```

changed:
```
function Animal(cashews, dude){
  this.sleepy = cashews;
  this.noise = dude;
  this.makeNoise = function(){
    if (this.sleepy === false){
      console.log(this.noise);  
    }
  }
}
```

### 10. Partners do 10 minutes

"Everyone explain to your partners the above code. If someone around you doesn't understand the code on the screen. It's on you. 10 minutes go."

### 11. Partners do 20 minutes

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

	
### 12. Partners do (20 minutes)

* Pair students strong to strong - weak to weak * 

* Everyone codes. Everyone has Sublime Text open.*

1. In a new folder
2. make a new node file called constructorFun.js
3. auto create a package.json file with npm init
4. install the prompt package so that it's 
5. Inside constructorFun.js, make a constructor function called Student that creates a student object with properties of name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, and a function called canStudentHaveFun that checks if they have less than 10 detentions and above a 2 GPA. If they do then console.log out to the terminal that the student can have fun.
6. Prompt the user for a student's information, make a new Student Object with it, then invoke the canStudentHaveFun function.

### 13. everyone does

* Go over the previous code *



# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.
