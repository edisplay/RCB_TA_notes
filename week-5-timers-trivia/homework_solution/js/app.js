console.log('Locked and Loaded');

window.onload = function(){

};



var questions = [{
  question: "What was the first full length CGI movie?",
  answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
  correctAnswer: "Toy Story",
  image:"img/toystory.gif"
}, {
  question: "Which of these is NOT a name of one of the Spice Girls?",
  answers: ["Sporty", "Scary", "Fred", "Posh"],
  correctAnswer: "Fred",
  image:"img/spicegirls.gif"
}, {
  question: "Which NBA team won the most titles in the 90s?",
  answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
  correctAnswer: "Chicago Bulls",
  image:"img/bulls.gif"
}, {
  question: 'Which group released the hit song, "Smells Like Teen Spirit"?',
  answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
  correctAnswer: "Nirvana",
  image:"img/nirvanabark.gif"
}, {
  question: 'Which popular Disney movie featured the song, "Circle of Life"?',
  answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
  correctAnswer: "The Lion King",
  image:"img/lionking.gif"
}, {
  question: 'Finish this line from the Fresh Prince of Bel-Air theme song: "I whistled for a cab and when it came near, the liscense plate said..."',
  answers: ["Dice", "Mirror", "Fresh", "Cab"],
  correctAnswer: "Fresh",
  image:"img/fresh.gif"
}, {
  question: "What was Doug's best friend's name?",
  answers: ["Skeeter", "Mark", "Zach", "Cody"],
  correctAnswer: "Skeeter",
  image:"img/skeeter.gif"
}, {
  question: "What was the name of the principal at Bayside High in Saved By The Bell?",
  answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
  correctAnswer: "Mr.Belding",
  image:"img/belding.gif"
}];


var panel = $('#quiz-area');


var game = {
  questions:questions,
  currentQuestion:0,
  counter:3,
  correct:0,
  incorrect:0,
  timeCount: function(){
    timer = setInterval(game.countdown, 1000);
  },
  setupGame: function(){
    this.timeCount();
    panel.append('<h2>' + questions[0].question + '</h2>' );
    for (var i = 0; i<questions[0].answers.length; i++){
      panel.append('<button>' + questions[0].answers[i]+ '</button>');
    }
  },
  countdown: function(){
    console.log(game.counter);
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      game.nextQuestion();
    }
  },
  nextQuestion: function (){
    clearInterval(timer);
    panel.html('<h2>Out of Time!</h2>');
    panel.append('<h3>The Correct Answer was:' + questions[this.currentQuestion].correctAnswer);
    panel.append('<img src="' + questions[this.currentQuestion].image + '" />');
  }
};

game.setupGame();
