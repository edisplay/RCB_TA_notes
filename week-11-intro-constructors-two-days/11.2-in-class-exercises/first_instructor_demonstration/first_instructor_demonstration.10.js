var prompt = require('prompt');

prompt.start();

var life = {
	keepPromptingUser : function() {
		prompt.get(['hungry'], function(err, result) {		    
			console.log(result.hungry);
		    if (result.hungry == 'yes'){
		    	console.log("Here's some Pad See Ew!")
		    	this.keepPromptingUser();
		    }else{
		    	console.log("Take a nap. You had a big meal.");
		    }
		});

	}

}

life.keepPromptingUser();