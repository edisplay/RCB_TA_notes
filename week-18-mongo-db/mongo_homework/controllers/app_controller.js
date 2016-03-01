var express = require('express');
var router = express.Router();
//var burger = require('../models/burger.js');
var scrape = require('../scripts/scrape.js');

/*
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
*/
router.get('/', function(req,res) {
    scrape("http://www.nytimes.com", function(data) {
        res.json(data);
    })
});

/*
//basic route use cb return json data from mongodb
app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/check', function(req, res) {
    times('check', function(data) {
        res.json(data)
    })
});

app.post('/gather', function(req, res) {
    notes('check', req.body, function(data) {
        res.json(data)
    })
});

//get grab web scrape
app.post('/fetch', function(req, res) {
    times('fetch');
    res.send('success');
});

//post save note
app.post('/save', function(req, res) {
    notes('save', req.body, function(data) {
        // post req must give back resopnce as json??? wat..ok..
        res.json(data)
    })
});

//delete note
app.delete('/delete', function(req, res) {
    notes('delete', req.body, function(data) {
        // post req must give back resopnce as json??? wat..ok..
        res.json(data)
    })
});
*/

module.exports = router;