Awesome job, I like the styling of your app; it's appropriate for this game. 

Overall, your code is really clean and concise. 

Here are a few tips/suggestions:

consult this style guide (http://www.w3schools.com/js/js_conventions.asp) for tips on how to properly indent your code. Of course, each company that you work for will have slightly different standards for how to style your code, but our guide offers the basics. Proper spacing and indentation are really important and it's one of the first things employers look for when they're perusing your github repos.

One thing that you should consider when defining/calling functions is syntax. In your code, you write: 

	var compare = function(){
	 doSomething()...
	}

when you write a function this way, you can't call it elsewhere. This is known as hoisting. You don't run into any issues in your code, but you would've had you needed to use the compare function anywhere else. Check out this stackoverflow conversation: http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname

Also, look at the click events for each of the 4 crystals. To make it more dry, I would use a four loop, because the click function is doing the same exact thing for each of the crystals. The same is true for the code that you use to randomly generate numbers for each of the four crystals. Use a for loop for that as well.  

