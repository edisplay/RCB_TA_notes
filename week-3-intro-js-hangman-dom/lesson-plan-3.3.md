### 1. Partners do (15 minutes)

Part One
1. Explain the below code to your partner
2. Why did we have a \ in what\'s your # below?
3. Why did we start the first for loop with i=1 instead of i=0?
4. Why did we start the second for loop with i=0 instead of i=1?

Part Two
break point exercise

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

### 2. Everyone do (10 minutes)

* *go over it with the class - call on people*

Solutions:

	1. Why did we start the first for loop with i=1 instead of i=0?

		Answer: if we started it off at i=1, then it would say:

		what's your #0 favorite tv show?'

		instead of 

		what's your #1 favorite tv show?'

	2. Why did we start the second for loop with i=0 instead of i=1?

		Answer: otherwise we would skip alerting the first value of the array

### 2. Partners do (5 minutes)

* *put up this code on the screen* 

* *ask the class to discuss with their partners what's wrong with this code*



- functions

- objects
	- scope
	- game where you use an object to organize your code

- pseudo code for psychic game

- pseudo code for hangman game


