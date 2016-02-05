# Have you read the Instructor Guide?

You should before you teach anyone anything.

Have a question? It's probably in the Instructor Guide.

Look at this file at the root of the repository:
[Instructor Guide](https://github.com/RutgersCodingBootcamp/All-Lesson-Plans/blob/master/instructor_guide.md)

# Master Objectives (Internal Use - do not share with students - because it's a waste of time)

* Expertly navigate the file system and terminal basics
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Implement complex logical conditions to meet an objective.


# Theme
TBD

# INSTRUCTOR MUST COVER!!!

```
ALL or they won't be able to do the homework.
```

# Objectives (Slack out to students, have unique students read each one and Instructor makes a comment after each one is read)

* Develop your vision for a website -- and then build it!
* Expertly navigate the file system and terminal basics
* Work independently or in a group on complex projects throughout the entire development lifecycle
* Communicate the basics of serving a webpage and how the browser renders code
* Understand and implement the mechanics of Git flow (including branching, merging, pull requests)
* Deploy static websites to a cloud provider

----

### 1. Student Do (15 minutes)

* *Show [this html file](in-class-exercises-2.3/2.3.1-in-class-exercise.html) on the projector. It is what the students must code out in this exercise.*

* Make new files and folders
		* Make a new html file called `mobile.html`
		* Make a new folder called `css` and inside that folder, make a file called `style.css`
		* Make another css file called `reset.css` and paste in the Meyerweb reset code (http://meyerweb.com/eric/tools/css/reset/reset.css)
* In your HTML do the following	
		* Reference both css files in the `head` of your html file, make sure to place your `style.css` after the `reset.css`
		* Make a `div` with a class called `wrapper`
		* Inside the wrapper div, make two section tags, one with an `id` of `main-content` the other `sidebar`
		* Place lorem text inside both section tags (http://www.lipsum.com/)
* In your style.css file do the following
		* At the top of your `style.css` file include
		```
		* {
		  box-sizing: border-box;
		}
		```
		* Make the `body` have a background color of `#ccc`, font size of 18 pixels, and line height 27 pixels
		* Give the wrapper div a width of `1024px` and a `margin: 40px auto;`
		* Make both section tags have a width of 500 pixels and padding 30 pixels on all sides
		* Make the `main-content` section float left and have a background color of `#fff` (white)
		* Make the `sidebar` section float right and have a background color of `#eee`


### 2. Instructor Do (20 minutes)

* Media Queries

> Media queries are simple filters that can be applied to CSS styles. They make it easy to change styles based on the characteristics of the device rendering the content, including the display type, width, height, orientation and even resolution. [source](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/use-media-queries?hl=en)

> This is how you make mobile friendly web pages

> You adjust the CSS conditions to make the content more appealing on different screen sizes

* *Open [this css file](in-class-exercises-2.3/css/style.css) file in Sublime and show it on the projector. Highilight the media tag and ask the students what they think it will do*
* *Demonstrate what happens in the browser [using this html file](in-class-exercises-2.3/2.3.1-in-class-exercise.html) by making your browsers width smaller than 800 pixels, it will change the background color*

* *Move the entire `@media` query to the top of the css file. Save. Ask the class what they think will happen. [Answer, the media queries wont work because the order of CSS matters! Media queries are always declared last] *
* *Demonstrate what happens in the browser*

> There are different kinds of `media`, `@media screen` is intended primarily for color computer screens. There are other kinds of media like `print` and `braille`, but to make mobile web pages you will use media screen

* [more about media types](https://www.w3.org/TR/CSS2/media.html)

* *Inside the `@media` tag, add more changes and show on in the browser what happens*


### 3. Student Do (20 minutes)

* Inside your `style.css` file, at the bottom, add the following

```
@media screen and (max-width: 768px) {

}
```

* Inside the `@media` query, make the following happen
		* Make the `body` have a background color of `#333`
		* Make the `wrapper` have a width of 100 percent
		* Make the `wrapper` have padding of 40 pixels on all sides
		* Make both `section` elements have a width of 100 percent
		* Make the `#sidebar` element have top margin of 40 pixels


### 4. Partner Do (10 minutes)

> Discuss step by step what happened in the previous exercise. If the people around you are lost, YOU ARE RESPONSIBLE for the people around you.


### 5. Instructor Do (15 minutes)

* Viewport

> The viewport is the user's visible area of a web page.

> A viewport controls how a webpage is displayed on a mobile device. Without a viewport, mobile devices will render the page at a typical desktop screen width, scaled to fit the screen. Setting a viewport gives control over the page's width and scaling on different devices. [source](https://developers.google.com/speed/docs/insights/ConfigureViewport)

> [Without viewport tag example](https://developers.google.com/speed/docs/insights/images/viewport/iphone_no_viewport.jpg)
> [With viewport tag example](https://developers.google.com/speed/docs/insights/images/viewport/iphone_viewport.jpg)


* *Slack this out to the students*
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

> The viewport tag belongs in the `head` of the html document

> Using the meta viewport value `width=device-width` instructs the page to match the screen's width in device independent pixels. This allows the page to reflow content to match different screen sizes. For example, like when you switch from landscape to portrait on your mobile phone.

> Using `initial-scale=1` allows the page to be be scaled full width


* Media Queries - different breakpoints

> You will want to include different "breakpoints" in your media queries to have different displays on different kinds of mobile devices e.g. phone vs tablet.

> There are a lot of breakpoint options, you only need to use what is necessary for your project. Using fluid widths is more ideal because they will meet all widths, whereas fixed pixels wont

> Typically 320px-480px are phone sizes and 768px is a tablet


### 6. Student Do (20 minutes)

* In your html file do the following:
		* Add the `viewport` tag to your html file
		* Add a new `section` element with an id called `mobile-content`, inside this element make a paragraph that says "Mobile content"
* In your CSS file do the following:
		* Make the `mobile-content` section have the following styling:
				* width: 100 percent
				* padding 30 pixels on all sides
				* background color 
				* `display: none`
		* Add an additional `@media` query with a max width of 480 pixels. Make sure to add this after the 768px media tag
		* Make the `#sidebar` `display: none`
		* Make the `#main-content` `float: none`
		* Make the `mobile-content` section element `display: block` and have a top margin of 40 pixels


### 7. Partner Do (5 minutes)

> Discuss step by step what happened in the previous exercise. If the people around you are lost, YOU ARE RESPONSIBLE for the people around you.

----
###### Break (40 minutes) 140 minutes went by including break
----


### 8. Everyone Do (15 minutes)

* Download Bootstrap here http://getbootstrap.com/getting-started/#download
The first option "Compiled and minified CSS, JavaScript, and fonts. No docs or original source files are included."

* Inside the bootstrap folder, make an html file called `index.html`

* Inside the `index.html` file paste the following code

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

* Read through the above comments. Once finished, delete them


### 9. Instructor Do (20 minutes)

* Bootstrap basics

> Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.

> Bootstrap has extremely thorough documentation on how to use all its components

**Slack this url out to students http://getbootstrap.com/getting-started/**

> The core beneift of Bootstrap is all its styling and its grid system

> Bootstrap provides classes for styling. They have a multitude of classes that style buttons, forms, everything

**Slack this url out to students http://getbootstrap.com/css/#grid**

**Go through the above url and explain Bootstraps Grid system. The url shows how the containers(fluid and fixed), rows, and columns are written (all columns should equal 12), talk about that**

### 10. Student Do (20 minutes)

* Inside the `index.html` Bootstrap file you just make, delete all the html comments ( if you ever want to see these comments again you can go here http://getbootstrap.com/getting-started/#template)
* Delete the `<h1>` tag
* Using the standards outlined in the documentation, make 2 column fixed width layout. The first column should span 8 columns, the second column should span 4 columns
* Use lorem copy as placeholders


### 11. Partner Do (5 minutes)

> Discuss step by step what happened in the previous exercise. If the people around you are lost, YOU ARE RESPONSIBLE for the people around you.


### 12. Instructor Do (15 minutes)

* Discuss

* Buttons http://getbootstrap.com/css/#buttons

* Images http://getbootstrap.com/css/#images

* Panels http://getbootstrap.com/components/#panels


### 13. Student Do (20 minutes)

* *Open [this file](in-class-exercises-2.3/2.3.13-in-class-exercise.html) file on the projector. This is what the students have to code out*

* Make a new css file called `bootstrap-overrides.css` and link to it in your html after the bootstrap css file. If you want to add your own styling, you do that here in this file, not inside the bootstrap css file.

* Inside the `index.html` Bootstrap file, do the following (Do not use any of your own styling, utilize bootstraps styling only)
* Add a top navbar
		* Go here http://getbootstrap.com/components/#navbar
		* Add in a top nav bar above your 3 columns
		* Make its container a fixed width
		* Add Your name to the left side, and 3 links on the right that say "About", "Portfolio", and "Contact"
* Add a header to the main body that says "About Me" http://getbootstrap.com/components/#page-header
* Inside the main body, make a row and two columns, inside one column add a placeholder image (http://placehold.it/150x150), inside the other column add in lorem text
* Add a panel to the sidebar http://getbootstrap.com/components/#panels
* Observe what happens when you shrink the browser. how does it behave? Using your bootstrap-overrides.css file, optimize the page to it is more pleasing

* Bonus
		* Add in form http://getbootstrap.com/css/#forms

----
# Copyright
Coding Boot Camp (C) 2015. All Rights Reserved.
