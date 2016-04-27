//Write a command line node app `get_sums_of_all_ints_except_at_index.js()` that takes a list of integers and returns a list of the sums. Do not use subtraction in your solution.

	//input will be an array of numbers
	//process.argv is an array

// var numbers = [];
// for (var i = 2; i < (process.argv).length; i++){
// 	(numbers).push(process.argv[i]);
// 	for (var j = 0, j < numbers.length; j++){
// 		//loop through and parseInt each index of the array
// 	};
// };
// console.log("numbers", numbers);


//JOHN'S SOLUTION
// var args = process.argv.slice(2); //removes elements in the array up to, but not including, index 2
// var returnArray = [];

// var addAllBut = function (c){ //c is 0 the first time you loop through the args array below (line 35)
// 	var total = 0;

// 	for(var b = 0; b < args.length; b++){ //looping through the process.argv array of numbers

// 		if (b != c){ //if we're not on the 0 element of the input array, then add...
// 			total += parseFloat(args[b]);
// 		}
// 	}

// 	return total;
// }

// for(var i = 0; i < args.length; i++){ //walking through args array
// 	returnArray.push(addAllBut(i));
// }

// console.log(returnArray);

