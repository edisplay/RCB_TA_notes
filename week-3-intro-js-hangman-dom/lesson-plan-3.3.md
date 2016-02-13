### 1. Partners do (15 minutes)

Part One
1. Explain the below code to your partner
2. Why did we have a \ in what\'s your # below?
3. Why did we start the first for loop with i=1 instead of i=0?
4. Why did we start the second for loop with i=0 instead of i=1?

Part Two
add a break point inside of both for loops, execute the code and evertime the browser stops, check the value of 

```
<!DOCTYPE html>
<html>
<head>
	<title>exercise one</title>
</head>
<body>
<script type="text/javascript">
//initialize array
var favTVshows = [];

//for loop 
for (var i=1; i<4; i++){
	favTVshows.push(prompt('what\'s your #' + i + ' favorite tv show?'));
}

for(var i=0; i < favTVshows.length; i++){
	alert(favTVshows[i]);
}

</script>
</body>
</html>


```

### 2. Everyone do (15 minutes)

* *go over it with the class - call on people*

Solutions:

	1. Why did we start the first for loop with i=1 instead of i=0?

		Answer: if we started it off at i=1, then it would say:

		what's your #0 favorite tv show?'

		instead of 

		what's your #1 favorite tv show?'

	2. Why did we start the second for loop with i=0 instead of i=1?

		Answer: otherwise we would skip alerting the first value of the array

### 2. Instructor do (5 minutes)

* *demo 3.3-in-class-exercises/demo-1.html*

* *then put up the code on the screen* 

### 3. Partners do (5 minutes)
* *ask the class to discuss with their partners what's wrong with the above code*

### 4. Everyone Do (5 minutes)

* *call on students until you get the answer you want*

> the problem with the code is that it's redundant.

> the code is not DRY - don't repeat yourself 

> it works and it's fine for a rough draft, but it's not the final product

> we need a way of reduce the repetitiveness

> and we do that with functions

### 5. Instructor Do (15 minutes)

* *show the code in 3.3-in-class-exercises/demo-2.html*

* *demo the file in the browser to show students that it works just like demo-1.html*

> this is how I would reduce the complexities=

##### Break for 40 minutes

# Next I need to finish this
- objects
	- scope
	- game where you use an object to organize your code

- pseudo code for psychic game

- pseudo code for hangman game
