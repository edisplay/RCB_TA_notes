var prompt = require('prompt');

prompt.start();

var life = {
	hungry: 'yes',
	keepPromptingUser : function() {
		while(this.hungry == 'yes'){
			prompt.get(['hungry'], function(err, result) {	
				this.hungry = result.hungry; 

			    if (this.hungry == 'yes'){
			    	console.log("Here's some Pad See Ew!")
			    	this.keepPromptingUser();
			    }else{
			    	console.log("Take a nap. You had a big meal.");
			    }
			});
		}
	}

}

life.keepPromptingUser();