Jeremy Gross
1. GREAT JOB recognizing that the html and css for the home page could be used as a template for the other two pages. 
2. Awesome job overall! I'm impressed with how logically your site is laid out. You obviously spent a lot of time thinking about how to contain elements in html and you've got a firm understanding of how to group elements in css.
3. I LOVE LOVE LOVE the hover effect on your nav items. UX designers would be very proud.
4. pay attention to your indentations. Indent one (or two) spaces if an element is inside another div. So instead of this: 
<body>
<div class="wrapper">

<header>
<h1>Jeremy Gross</h1>
<h2>
 <ul>
  <a href="index.html"><li>About</li></a>
  <li id="APC-line"></li>
  <a href="portfolio.html"><li>Portfolio</li></a>
  <li id="APC-line"></li>
  <a href="contact.html"><li>Contact</li></a>
 </ul>
</h2>
</header> 

DO THIS:
<body>
	<div class="wrapper"> //div is inside the body
	<header> //header is inside the body
		<h1>Jeremy Gross</h1> //h1 is inside the header
		<h2> //h2 is inside the header
			 <ul> //ul is inside the h2
				  <a href="index.html"><li>About</li></a> // a/li is inside the ul
				  <li id="APC-line"></li>
				  <a href="portfolio.html"><li>Portfolio</li></a>
				  <li id="APC-line"></li>
				  <a href="contact.html"><li>Contact</li></a>
			 </ul>
		</h2>
	</header> 
... etc etc.
5. Congrats on the assignment!