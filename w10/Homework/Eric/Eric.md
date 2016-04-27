This is a great start. 

your tweets aren't displaying in the console. your callback function returns a "tweets" object that you need to then parse to display only the tweet (and whatever additional you choose to display). console.log(tweets) after if (!error){
	....
}

instead of just using if statements, you should put each of your methods in functions. a getTweets() method, a spotifyThis() method, etc. etc. And then call that function (make a callback) when you get the user's input

Also, prompt the user. Let the user know what their options are. How do I know what to type in order to get info about a movie or song?
