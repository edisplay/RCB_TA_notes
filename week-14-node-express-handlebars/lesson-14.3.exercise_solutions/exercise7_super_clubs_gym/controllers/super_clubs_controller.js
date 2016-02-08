var express = require('express');
var router = express.Router();
var super_clubs = require('../models/super_clubs.js');


//get route -> index
router.get('/index', function(req,res) {
	super_clubs.findAllMembers(function(super_clubs_data){
		res.render('index', {super_clubs_data});
	});
});

//post route -> back to index
router.post('/create', function(req, res) {
	super_clubs.addOneMemeber(req.body.member_name, function(result){
		console.log(result);
		res.redirect('/index');
	});
});

//put route -> back to index
router.put('/update', function(req,res){
	super_clubs.updateOneMember(req.body.member_id, function(result){
		console.log(result);
		res.redirect('/index');
	});
});

//delete route -> back to index
router.delete('/delete', function(req,res){
	super_clubs.removeOneMember(req.body.member_id, function(result){
		console.log(result);
		res.redirect('/index');
	});
});

module.exports = router;