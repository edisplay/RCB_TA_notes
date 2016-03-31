// if argv[2] = addition, do this
//if argv[2] = subtraction, do this
num1 = parseInt(process.argv[3]);
num2 = parseInt(process.argv[4]);
// console.log(process.argv[2] + process.argv[3]);
if (process.argv[2] == 'addition') {
	console.log(num1 + num2 );
} else if (process.argv[2] == 'subtraction') {
	console.log(num1 - num2 );
} else if (process.argv[2] == 'multiplication') {
	console.log(num1 * num2 );
} else if (process.argv[2] == 'division') {
	console.log(num1 / num2 );
} else if (process.argv[2] == 'remainder') {
	console.log(num1 % num2);
} else if (process.argv[2] == 'exponents') {
	console.log(Math.pow(num1, num2));
} 