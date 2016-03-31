console.log(process.argv);

/* process.argv gives an array of arguments
	0 and 1 are node (the program) and the file name respectively
*/

console.log(process.argv[2] + process.argv[3]);
/* when run 'node arguments.js 233 349' in terminal, returns 233349
	because they're recognized as strings
*/
// if you add more than two arguments in terminal, it'll just concatenate the first two arguments and ignore the rest