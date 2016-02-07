Greg Gallant
1. Awesome job overall! I'm impressed with how logically your site is laid out. You obviously spent a lot of time thinking about how to contain elements in html and you've got a firm understanding of how to group elements in css.
2. GREAT JOB recognizing that the html and css for the home page could be used as a template for the other two pages. 
3. your use of "overflow: scroll" is very cool! Great way of containing content in the browser!
4. pay attention to your indentations. keep opening and closing tags directly underneath each other on the page in sublime. instead of this: 
<html>
<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="assets/css/reset.css">
		<link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>

<body>
<header>Greg S. Gallant, B.S., D.M.D.
	<ul id="headerlinks">
		<li><a href="index.html"style="text-decoration:none">About</a></li>
		<li>|</li>
		<li><a href="portfolio.html"style="text-decoration:none">Portfolio</a></li>
		<li>|</li>
		<li><a href="contact.html"style="text-decoration:none">Contact</a></li>
	</ul>

</header>

DO THIS:

<html>
	<head> //your head tag is inside the html, so indent one tab
			<meta charset="UTF-8">
			<link rel="stylesheet" type="text/css" href="assets/css/reset.css">
			<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	</head>
	<body> //body is inside the html, so indent
		<header>Greg S. Gallant, B.S., D.M.D. //everything is inside the body, so indent
			<ul id="headerlinks">
				<li><a href="index.html"style="text-decoration:none">About</a></li>
				<li>|</li>
				<li><a href="portfolio.html"style="text-decoration:none">Portfolio</a></li>
				<li>|</li>
				<li><a href="contact.html"style="text-decoration:none">Contact</a></li>
			</ul>
		</header>
5. SECTION TAG: this is a really useful writeup about section vs. div tags
	http://html5doctor.com/the-section-element/
you have a "section" inside of another "section" that contains divs etc. Generally, sections are useful to give whoever is reading your code an idea of what they're looking at - in other words, sections are semantic. If you're going to use a section tag make sure it starts with a header tag (h1 - h6).	
6. We can talk more about the layout of your page next week. And great job with the styling. Your added touches are really nice!