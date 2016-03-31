check out the instructions on how to upload to Heroku. Let me know if you're still having trouble with this.
	https://slack-files.com/files-pri-safe/T0J8XK2Q3-F0LFFPL1X/herokusteps.pdf?c=1458692604-adec4e005ef4b8e1b3e4cb0228f5a223ff45fcf2

based on what you have so far, I can see that you can make this code more D.R.Y. All of the "hover" events and all of the "click" events are doing the same things. You could execute the functionality using for loops instead of writing out the same code for each element. 

Otherwise, great job. The UI is awesome. In the future, I would focus on getting the logic done before spending lots of time on the front-end design.

Lastly, you can abstract your js files even more by putting all of your Audio files/variables into one js file called "audio.js" and linking to it in your html file.