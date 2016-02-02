var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// router.get('/', function(req, res) {
//     res.json({'foo':'bar'});
// });

router.get('/index', function(req,res) {
	burger.selectAllBurger(function(burger_data){
		res.render('index', {burger_data});
	});
});
/*
//post route -> back to home
router.post('/create', function(req, res) {
	console.log('You sent, ' + req.body.todo);
	//mySQL commands
  	connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)', [req.body.todo, false], function(err, result) {
	if (err) throw err;
	});
	res.redirect('/index');
});

//put route -> back to home
router.put('/update', function(req,res){
    console.log("PUT received: ->");
    console.log(req.body);
	//mySQL commands
  	connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [true, req.body.todo_id], function(err, result) {
	if (err) throw err;
	});
	res.redirect('/index');
});
*/
module.exports = router;