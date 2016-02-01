once you've laid out your divs in html and placed the content, the next two steps would be setting the floats and widths of the sections imo

try putting a background color behind the sections to just see how the boxed regions would look (kind of like th exercise we did in class with the floats). the exercise is in our git repo mw content.

SCRIPT:
CSS works by hooking onto selectors added into HTML using "classes" and "identifiers"
once you're hooked, you add styles to the HTML selectors using css
a = selector, { = declaration start, background-color = property, : = property/value separator, yellow = value, ; = declaration separator, } = declaration end
//
- start with your doctype
- then add html tag and include language
- move onto the head tag. what goes in the head tag?
	- title
	-links. order matters
	- add your css file
	- add your reset.css/normalize.css file. impt for creating browser-compatible websites
	- paste in the code from here: http://meyerweb.com/eric/tools/css/reset/reset.css
- go back to your html file. Inside it, reference the reset.css file and your cats.css file. Be sure to reference reset.css before cats.css because you want your styles to be more important and override reset.css if needed.
- At the top of your cats.css file include
	* {
	box-sizing:border-box;
	}
	box-sizing property is used to alter default CSS box model used to calculate width and height of the elements. The default is "content-box" where the width and height are measured including only the content, but not the padding, border or margin.
	- with border-box the width and height include the padding and border, but not the margin.
	https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
//
- add html 
	- h1 tag
	- div that includes about me content. use a div when you want to keep content together. you can still apply styling to individual elements within the div, using what? id's!
	- add anchor tags. start with facebook image. find a good image. for smaller photos, size doesn't matter, but use google's search tools and select larger images when pixelation matters. 
		- prompt students to add a target so that the link opens up in a new page. tell them to not be lazy. you lose SEO and customers.
		- remember that the a tags might need id's and classes later
		- TITLE: who knows what the title is for in the anchor tag?
	- add background color to social media div tag
		- it's the width of the page. don't want that so guess a width (200px), set it and then go into chrome dev tools to tweak it. should actually be 213px










