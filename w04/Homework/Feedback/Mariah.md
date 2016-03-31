put all of your images in a folder called "images" and then put that folder inside your "assets" folder. This makes it easier to navigate your folder(s). Then you link to the folder in your .html file.

This is a really good start. You have a lot of code here, so it's difficult to tell what's wrong with your code. Right now, it looks like the click events to add your player and an opponent are all that's working. So what I would recommend is commenting out everything else and slowly (line by line) uncommenting code to figure out where it's breaking. Adding console.log after each line (or every few lines) will also help. Some of your variables are undefined, which is breaking your code.

Otherwise, your UI is awesome. You've got a knack for good design!