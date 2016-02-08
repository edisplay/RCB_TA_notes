var orm = require('../config/orm.js');

var super_clubs = {
	findAllMembers: function(cb) {
		orm.selectAll('super_clubs', function(res){
			cb(res)
		});
	},
	addOneMemeber: function(nameInput,cb) {
		orm.insertOne('super_clubs', nameInput, 1, cb);
	},
	updateOneMember: function(inputId, cb){
		orm.updateOne('super_clubs', 1, inputId, cb);
	},
	removeOneMember: function(inputId, cb) {
		orm.deleteOne('super_clubs', 1, inputId, cb);
	}
};
    
module.exports = super_clubs;