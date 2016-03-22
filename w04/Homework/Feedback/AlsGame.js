window.onload = function(){
	newGame();
};


//FUNCTIONS
//========================================================
function newGame() {
	wins = 0;
	moves = 0; 
	player1 = [];
	player2 = [];
	$('#start').append('<div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 fighter\" id=\"tyson\"> <img src=\"assets/images/tyson.jpg\"></div>');
	$('#start').append('<div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 fighter\" id=\"ali\"><img src=\"assets/images/ali.jpg\"</div>');
	$('#start').append('<div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 fighter\" id=\"george\"><img src=\"assets/images/GeorgeForeman.jpg\"></div>');
	$('#start').append('<div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 fighter\" id=\"frazier\"><img src=\"assets/images/frazier.jpg\"></div>');
	$('#choosenOne').empty();
	$('#fighter2').empty();
	$('#fightStatus').empty();
	$('#opponentStatus').empty();
	$('#yourFighter').empty();
	$('#yourOpponent').empty();
	tyson = {
		name: "Tyson",
		healthPoints: 100,
		attackPower: 6,
		counterAttackPower: 6
	};

	ali = {
		name: "Ali",
		healthPoints : 100,
		attackPower: 6,
		counterAttackPower: 6
	};

	george = {
		name: "GeorgeForeman",
		healthPoints: 100,
		attackPower: 6,
		counterAttackPower: 6
	};

	frazier = {
		name: "Frazier",
		healthPoints: 100,
		attackPower: 6,
		counterAttackPower: 6
	};
};

$('#tyson').click(function(){
	if (moves == 0){
	$('#choosenOne').html(this);
	player1 = tyson;
	$("#fightStatus").html("<p>" + "health : " + player1.healthPoints + "</p>");
	$("#yourFighter").html("Iron Mike Tyson");	
	console.log("player1 :" + player1.name);
	} else if (moves > 0 && player2.length == 0  && player1 != tyson){
	$('#fighter2').html(this);
	player2 = tyson; 
	$("#opponentStatus").html("<p>" + "health : " + player2.healthPoints + "</p>");
	$('#yourOpponent').html("Iron Mike Tyson");
	console.log("player2 :" + player2.name);
	} else{
	alert("illegal move 1");
	};
	moves += 1;
	console.log("moves:" + moves);
});


$('#ali').click(function(){
	if (moves == 0){
	$('#choosenOne').html(this);
	player1 = ali;
	$("#fightStatus").html("<p>" + "health : " + player1.healthPoints + "</p>");
	$('#yourFighter').html("Muhammed Ali");
	console.log("player1 :" + player1.name);
	} else if(moves > 0 && player2.length == 0 && player1 != ali ){
	$('#fighter2').html(this);
	player2 = ali;
	$("#opponentStatus").html("<p>" + "health : " + player2.healthPoints + "</p>");
	$("#yourOpponent").html("Muhammed Ali");
	console.log("player2 :" + player2.name);
	} else{
	alert("illegal move 2");
	}
	moves += 1;
	console.log("moves:" + moves);
});

$('#george').click(function(){
if (moves == 0) {
$('#choosenOne').html(this);
player1 = george;
$('#fightStatus').html("<p>" + "health : " + player1.healthPoints + "</p>");
$("#yourFighter").html("George Forman");
console.log("player1: " + player1.name);
} else if(moves > 0 && player2.length == 0 && player1 != george){
$('#fighter2').html(this);
player2 = george;
$("#opponentStatus").html("<p>" + "health : " + player2.healthPoints + "</p>");
$("#yourOpponent").html("George Forman");
console.log("player2:" + player2.name);
} else{
alert("illegal move");
};
moves += 1;
console.log("moves :" + moves);
});
	
$('#frazier').click(function(){
if (moves ==0){
$('#choosenOne').html(this);
player1 = frazier;
$("#fightStatus").html("<p>" + "health : " + player1.healthPoints + "</p>");
$("#yourFighter").html("Joe Frazier");
console.log("player1 :" + player1.name);
} else if( moves > 0 && player2.length == 0 && player1 != frazier){
$('#fighter2').html(this);
player2	= frazier;
$("#opponentStatus").html("<p>" + "health : " + player2.healthPoints + "</p>");
$('#yourOpponent').html("Joe Frazier");
console.log("player2: " +  player2.name);
} else{
alert('illegal move');
};
moves += 1;
console.log("moves :" + moves);
});

$('#button').click(function(){
	audioElement.play();
	fightStatus();
	fight();
	winLose();
});

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'assets/audio/punch.wav');
audioElement.setAttribute('autoplay', 'autoplay');
//audioElement.load()
$.get();
audioElement.addEventListener("load", function() {
audioElement.play();
}, true);


function winLose (){
	if (player1.healthPoints <= 0){
	alert(" YOU GOT KNOCKED OUT! ")
	newGame();
	} else if (player2.healthPoints <= 0 && wins < 2){
	alert("NEXT OPPONENT!");
	player2 = [];
	$('#fighter2').empty();
	$('#opponentStatus').empty();
	$('#yourOpponent').empty();
	wins += 1;
	} else if(player2.healthPoints <=0 && wins == 2){
	alert("You are the Champion!");
	newGame();
	};
};

function fightStatus(){
	if(moves == 0) {
		$("#fightStatus").html("<p>" + "health : " + player1.healthPoints + "</p>");
		console.log("player1 health : " + player1.healthPoints);
		$("#opponentStatus").html("<p>Choose your opponent</p>");
	} else {
		$("#fightStatus").html("<p>" + "health : " + player1.healthPoints + "</p>");
		console.log("player1 health : " + player1.healthPoints);
		$("#opponentStatus").html("<p>" + "health : " + player2.healthPoints + "</p>");
		console.log("player2 health:" + player2.healthPoints);
	};
};

function fight(){
player1Attack = Math.floor(Math.random() * player1.attackPower );
console.log("player1 attack :" + player1Attack);
player2Attack = player2.counterAttackPower;
console.log("player2 attack :" + player2Attack);
	if(isNaN(player1.healthPoints)){
		$("#fightStatus").html("<p>Choose a Player</p>");
	} else if(isNaN(player2.healthPoints)){
		$("#opponentStatus").html("<p>Choose your opponent</p>");
	} else if(isNaN(player1.healthPoints) && isNaN(player2.healthPoints)) {
		$("#fightStatus").html("<p>Choose a Player</p>");
		$("#opponentStatus").html("<p>Choose your opponent</p>");
	} else {
		player1.healthPoints -= player2Attack;
		player2.healthPoints -= player1Attack;
	};
	console.log("player1 health:" + player1.healthPoints);
	console.log("player2 health:" + player2.healthPoints);
	player1.attackPower += 6;
};










//LISTENERS RESPONSIBLE FOR MOVING AROUND AND CHOOSING PLAYER

	



 	








