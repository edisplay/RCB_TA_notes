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

