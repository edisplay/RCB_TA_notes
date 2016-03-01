### 1. Student do (20 minutes)

```
//PART ONE
var dog = {
  sleepy : false,
  noise : 'woof', 
  makeNoise : function(){
    if (this.sleepy === false){
      console.log(this.noise);
    }
  }
}

//PART TWO
var cat = {
  sleepy : true,
  noise : 'meow', 
  makeNoise : function(){
    if (this.sleepy === false){
      console.log(this.noise);
    }
  }
}

//PART THREE
dog.makeNoise();
cat.sleepy = false;
cat.makeNoise();

//PART FOUR
/*
The code is not DRY. We made two objects and they're very similar. If we wanted to add a new key called goToSleep that points to an anonymous function that makes the sleepy key true, and we wanted to add that to both dog and cat, we would have to add it into both the cat and dog objects. This not a scalable way of writing code. Maintaining this if we had 1000 animal objects would be a nightmare.

There needs to be a way to reduce the redundancy. 
*/
```

### 11. Partners do 20 minutes

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
