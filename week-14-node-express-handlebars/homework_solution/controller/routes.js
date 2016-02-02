var express = require('express');
var router = express.Router();
var connection = require('../model/database.js');

//console.log(connection);

// router.get('/', function(req, res) {
//     res.json({'foo':'bar'});
// });

router.get('/', function(req,res) {
	//mySQL commands
	connection.query('SELECT * FROM burgers;', function(err, col) {
	  if (err) throw err;
	    console.log('The solution is: ', col);
	    //res.send(col[0]);
		res.render('index', {col});
	});
	//res.render('index');
});

//put route -> back to home
router.put('/mySubmit', function(req,res){
    console.log("PUT received: ->");
    console.log(req.body);
	//mySQL commands
  	connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [true, req.body.todo_id], function(err, result) {
	if (err) throw err;
	});
	res.redirect('/');
});

//post route -> back to home
router.post('/mySubmit', function(req, res) {
	console.log('You sent, ' + req.body.todo);
	//mySQL commands
  	connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)', [req.body.todo, false], function(err, result) {
	if (err) throw err;
	});
	res.redirect('/');
});

module.exports = router;