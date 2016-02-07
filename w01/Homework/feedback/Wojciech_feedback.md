Wojciech Pierscionek
1. Awesome job overall! I'm impressed with how logically your site is laid out. You obviously spent a lot of time thinking about how to contain elements in html and you've got a firm understanding of how to group elements in css.
2. GREAT JOB recognizing that the html and css for the home page could be used as a template for the other two pages. 
3.. Very cool use of the "hr" tag! Way to think outside the box. Another solution is to add a border-bottom in your css to the h1.
4. pay attention to your indentations. keep opening and closing tags directly underneath each other on the page in sublime. instead of this: 

<div id="header">
		<h1>Wojciech Pierscionek</h1>
		<nav>
		<ul class="main_menu">
			<li><a href="contact.html">Contact</a></li>
			<li><a href="portfolio.html">Portfolio</a></li>
			<li><a href="index.html">About</a></li>
			</ul>
	</nav>
	</div>

DO THIS:

<div id="header">
		<h1>Wojciech Pierscionek</h1>
		<nav>
			<ul class="main_menu">
				<li><a href="contact.html">Contact</a></li>
				<li><a href="portfolio.html">Portfolio</a></li>
				<li><a href="index.html">About</a></li>
			</ul>
		</nav>
</div>
etc etc.
5. Just curious, why did you put a ul inside the nav tag? people have spent hours arguing over this on in tech forums. as long as you can explain it and understand why it's useful/not useful, you're good to go.
6. SECTION TAG: this is a really useful writeup about section vs. div tags
	http://html5doctor.com/the-section-element/
in div (id="article"), you have a "section" inside it that contains the image and the p tag. Generally, sections are useful to give whoever is reading your code an idea of what they're looking at - in other words, sections are semantic. If you're going to use a section tag make sure it starts with a header tag (h1 - h6).









