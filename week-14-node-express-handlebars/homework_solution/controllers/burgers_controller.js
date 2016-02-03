var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//get rout -> index
router.get('/index', function(req,res) {
	//express callback response by calling burger.selectAllBurger
	burger.selectAllBurger(function(burger_data){
		//wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
		res.render('index', {burger_data});
	});
});

//post route -> back to index
router.post('/create', function(req, res) {
	//takes the request object using it as input for buger.addBurger
	burger.addBurger(req.body.burger, function(result){
		//wrapper for orm.js that using MySQL insert callback will return a log to console, render back to index with handle
		console.log(result);
		res.redirect('/index');
	});
});

//put route -> back to index
router.put('/update', function(req,res){
	burger.eatBurger(req.body.burger_id, function(result){
		//wrapper for orm.js that using MySQL update callback will return a log to console, render back to index with handle
		console.log(result);
		res.redirect('/index');
	});
});

module.exports = router;