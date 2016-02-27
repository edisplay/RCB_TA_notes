$(document).ready(function() {

	/* Create the object "characters" and storing all the names and the images of all characters */
	var characters = {
	    'brother_big': {
	        imageUrl: "assets/images/brother_big.png"
	    },
	    'brother_mid': {
	        imageUrl: "assets/images/brother_mid.png"
	    },
	    'brother_small': {
	        imageUrl: "assets/images/brother_small.png"
	    },
	    'dad': {
	        imageUrl: "assets/images/dad.png"
	    },
	    'logo': {
	        imageUrl: "assets/images/logo.png"
	    },
	    'mom': {
	        imageUrl: "assets/images/mom.png"
	    },
	    'sister_big': {
	        imageUrl: "assets/images/sister_big.png"
	    },
	    'sister_mid': {
	        imageUrl: "assets/images/sister_mid.png"
	    },
	    'sister_small': {
	        imageUrl: "assets/images/sister_small.png"
	    },
	};

	// Create the variable "count" that will keep track how many divs are created
	var count = 0;

	// Create the array "positions" that will store all the id names of divs that we will be appending to as Strings
	var positions = ["slot-top-left", "slot-top-mid", "slot-top-right", "slot-mid-left", "slot-mid-mid", "slot-mid-right", "slot-bot-left", "slot-bot-mid", "slot-bot-right"];

	// Create the array "chars" that will store all the names of our characters as String
	var chars = ["mom", "dad", "brother_big", "brother_mid", "brother_small", "sister_big", "sister_mid", "sister_small", "logo"];


});