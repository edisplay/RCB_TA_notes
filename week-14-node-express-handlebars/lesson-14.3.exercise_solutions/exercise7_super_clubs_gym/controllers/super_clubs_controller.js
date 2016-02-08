var express = require('express');
var router = express.Router();
var super_clubs = require('../models/super_clubs.js');

//get route -> index
router.get('/index', function(req,res) {
	super_clubs.selectAll(function(super_clubs_data){
		res.render('index', {super_clubs_data});
	});
});

// router.get('/index', function(req, res) {
//   res.render('index', {});
// });


/*

//post route -> back to index
router.post('/create', function(req, res) {
	//takes the request object using it as input for buger.addsuper_clubs
	super_clubs.addsuper_clubs(req.body.super_clubs, function(result){
		//wrapper for orm.js that using MySQL insert callback will return a log to console, render back to index with handle
		console.log(result);
		res.redirect('/index');
	});
});

//put route -> back to index
router.put('/update', function(req,res){
	super_clubs.eatsuper_clubs(req.body.super_clubs_id, function(result){
		//wrapper for orm.js that using MySQL update callback will return a log to console, render back to index with handle
		console.log(result);
		res.redirect('/index');
	});
});
*/
module.exports = router;