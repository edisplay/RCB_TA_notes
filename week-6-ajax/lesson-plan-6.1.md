# Theme: APIs and AJAX

### Instructor Must Cover!
* 1 - 20 

### Objectives
* To provide an introduction to the concepts of APIs and JSON
* To demonstrate the use of jQuery AJAX GET Requests to retrieve data from an external source via an API.  

### 1. Student Do (5 minutes)
* Slack out the following code (`1-CustomerObject.html`) to students. Then have students create single `console.log()` statements to retrieve the various proprties from the `customer` object.

### 2. Instructor Do (5 minutes)
* Go over the previous example. Be sure to point out that the `phoneNumber` sub-property holds an array of phone numbers and thus required a slightly different syntax to retrieve the individual index entries (i.e. Home Phone and Fax Number). 

* Use just a few moments to briefly mention that objects like this one are incredibly important in web development, as they provide a convenient format for sending and retrieving data. (Don't drone on yet -- there will be more time for emphasis later in class).  

```
// SOLUTION

// Log the firstName
console.log(customer.firstName);

// Log the lastName 
console.log(customer.firstName);

// Log the State of the Address
console.log(customer.address.state);

// Log the Home Phone Number... 
console.log(customer.phoneNumber[0].number);

// Log the Fax Number
console.log(customer.phoneNumber[1].number);

```

### 3. Student Do (5 minutes)
* Instruct students to install the following chrome extension (JSONView):
https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en

### 4. Instructor Do (10 minutes)
* Navigate to this link: https://mean-google-maps.herokuapp.com/#/join
* Then take a few moments to explain what this web app does. Simply put, it does two things. 
* On the Join Page: It allows users from around the world to log their location and a few properties about themselves (age, gender, screenname, and favorite languate). 
* On the Find Page: It allos a user to query (or search) for users that meet certain criteria. 
* Now, navigate to its API link: https://mean-google-maps.herokuapp.com/users (Note tha tthere is no # symbol in this link).
* Walk students through the Javascript Object behind the app. Point out the properties that correlate with the fields on the web application. 
* Also, show them how creating a new user on the map -- also creates a new JSON entry on the API backend.
* Take a few moments now to have them talk about JSONs. Then tell them we'll be using them *heavily* in this class. 

### 5. Everyone Do (5 minutes)
* Have students navigate to the same link: https://mean-google-maps.herokuapp.com/#/join and experiment with creating users looking at the backend API: https://mean-google-maps.herokuapp.com/users

### 6. Students Do (7 minutes)
* Have students research answers to the following questions: 
```
1. What is an API?
2. What does API stand for?
3. What are some examples of APIs? (Find links to specific APIs)
4. What do these specific APIs allow you as a developer to do? 
```

### 7. Everyone Do (5 minutes)
* Have students share their answers to these questions. 

### 8. Instructor Do (10 minutes)
* Offer your own definition of an API 
* Talk about why APIs are created. Talk about how you save time not having to create your own code. Give a few examples of other websites that use APIs (e.g. AirBNB uses Google's API for Maps (https://www.airbnb.com/s?s_tag=_s84SXqA)... Google Searches for Weather uses the Weather API (https://www.google.com/?gws_rd=ssl#q=weather+new+brunswick)... even jQuery is an API (https://api.jquery.com/)).
* Point out that there are millions of APIs out there.  
* Point out that APIs can be short snippets of code for retrieving data... they can be snippets of code for quickly creating larger code (like generating maps)... or they can be a way to control other pieces of software. 

#### 9. Instructor Do (10 minutes)
* Navigate to this url: https://market.mashape.com/ismaelc/yoda-speak . Explain that the Yoda API takes a string sentence and then outputs a revised sentence. (NOTE TO Instructor: You will need to login using your GitHub account to use this service).
* Navigate to this url: https://market.mashape.com/faceplusplus/faceplusplus-face-detection . Explain that this FaceFacePlus API takes a URL link to an image and then outputs a JSON of properties associated with that image (e.g. Gender, Age, whether the person is wearing glasses, etc. -- Not perfect, but can be kind of fun).

### 10. Students Do
* Have students navigate to this link: https://market.mashape.com/explore?sort=developers and sign up with their own accounts. Then have them experiment with any of the free APIs available. (not that not all of them will work if they require an authentication token). 

### 11. Instructor Do (5 minutes)
* Navigate to the OMDB API then using the Example User Interface do a search for a movie like `The Matrix`. Show students how the following URL is generated: http://www.omdbapi.com/?t=The+Matrix&y=&plot=short&r=json and that this URL is associated with a JSON about the movie. 

### 12. Partners Do (10 minutes)
* As partners, read through the documentation associated with the OMDb API (http://www.omdbapi.com/). Task students specifically with answering the following:

```
Without using the user interface -- how would I query the OMDB API to get all of the information related to the movie: Frozen? (hint: you will have to build a URL of your own with the search parameters listed). 
```

### 13. Everyone Do (10 minutes)
* Using this URL as an example, have students break down the URL (http://www.omdbapi.com/?t=Forrest+Gump&y=&plot=short&r=json) and explain each parameter listed (i.e. the `?t`, the `+`, the `&`, `r=`, etc). 
* Ask students how they would show multiple movies that meet a condition? (i.e. how would you get all movies with the word `Matrix` in it). SOLUTION: Use the `/s` format: http://www.omdbapi.com/?s=Matrix&y=&plot=short&r=json

##### 90 minutes have passed. It is now 8:00 PM.
### BREAK (15 minutes)

### 14. Instructor Do (10 minutes)
* Using the code in `14-Ajax_omdb.html`, walk Students the code through performing an AJAX Query to the OMDB API. Point out the key aspects of the code (i.e. The construction of the queryURL using the `type` variable as a search term, the jquery `ajax` method, the url and `GET` parameters, and the `done` function. 
* Tell students that this AJAX syntax is fairly standard and will be re-used again and again (especially in the coming homework).
* Run the code and open it in browser. Using the Chrome Inspector, drill into the data being logged in the response variable. Point out that response holds a JSON matching the URL content.

### 15. Everyone Do (5 minutes)
* Ask students how they would `console.log` specific properties from the JSON (i.e. the Actors names and Director's Names).

### 15. Students Do (15 minutes)
* Now, have students go through the process of creating their own AJAX call to the OMDB API using your HTML as an example. They can search for any movie they like. 

### 16. Students Do (15 minutes)
* Slack out the following starter code to students `16-Ajax_to_HTML.html`. 
* Task them with filling up the HTML table with their own favorite movies. (Hint: You will need multiple AJAX Calls)
* BONUS: Try to incorporate Poster Images for your favorite movies (note: You won't have permission to access all images, but many will work. Keep experimenting!)

### 17. Instructor Do (10 minutes)
* Review the solution to the previous activity. Pointing out that we are able to use the specific properties retrieved in the JSON directly into our HTML.  

### 18. Partners Do (10 minutes) 
* Have students read the Giphy documentation (https://github.com/Giphy/GiphyAPI). 
* How would you return back a single gif tied to a search term?
* How would you return five gifs tied to a search term?
* How would you return the trending gifs back from this API? 

### 19. Instructor Do (15 minutes)
* Go over `19-Giphy_API.html`. Explain that this code will be particularly relevant to the homework assignment.

### 20. Instructor Do (5 minutes)
* Go over the homework assignment. You can play the homework_demo.mov file or showcase the final html file (`hw.html` in All-Lesson-Plans). 

### 21. Instructor Do (20 minutes TIME PERMITTING)
* Go over the button generation activity (`21-ButtonActivation/1-6.html`). Pay particular attention to the differences between `5.html` and `6.html`.
* Demonstrate to the students how when you click "add another button above" in `5.html`, it adds another button above, but the on click doesn't work on it.*
* Show the solution to this issue in `6.html` (i.e. event bubbling and that the click event is attached to the document and not just the button). 

# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.
