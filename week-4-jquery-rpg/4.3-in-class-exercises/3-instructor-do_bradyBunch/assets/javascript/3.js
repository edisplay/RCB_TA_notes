$(document).ready(function() {

	var positions = ["slot-top-left", "slot-top-mid", "slot-top-right", "slot-mid-left", "slot-mid-mid", "slot-mid-right", "slot-bot-left", "slot-bot-mid", "slot-bot-right"];

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

	// Create the array "chars" that will store all the names of our characters from the characters object
	var chars = Object.keys(characters);


	/* create the following divs and add to the div with an id of container: */
		// <div id="slot-top-left"></div>
		// <div id="slot-top-mid"></div>
		// <div id="slot-top-right"></div>
		// <div class="clear"></div>
		// <div id="slot-mid-left"></div>
		// <div id="slot-mid-mid"></div>
		// <div id="slot-mid-right"></div>
		// <div class="clear"></div>
		// <div id="slot-bot-left"></div>
		// <div id="slot-bot-mid"></div>
		// <div id="slot-bot-right"></div>
		// <div class="clear"></div>
	for (var i = 0; i < positions.length; i++) {
	    if ((i == 2) || (i == 5) || (i == 8)) {
	        var divTag = $('<div>');
	        divTag.attr('id', positions[i]);
	        $('#container').append(divTag);

	        var divTag = $('<div>');
	        divTag.addClass('clear');
	        $('#container').append(divTag);
	    } else {
	        var divTag = $('<div>');
	        divTag.attr('id', positions[i]);
	        $('#container').append(divTag);
	    }
	}
});