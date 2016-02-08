var orm = require('../config/orm.js');

var super_clubs = {
	selectAll: function(cb) {
		orm.selectAll('super_clubs', function(res){
			cb(res)
		});
	},
	addOne: function(nameInput,cb) {
		orm.insertOne('burgers', nameInput, 0, cb);
	},
	deleteOne: function(inputId, cb) {
		orm.updateOne('burgers', 1, inputId, cb);
	}
};
    
module.exports = super_clubs;