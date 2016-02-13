console.log('Locked and Loaded');

window.onload = function(){

};



///////////////////////////////////////////////////////////////////////////////

//CLICK EVENTS

///////////////////////////////////////////////////////////////////////////////

$(document).on('click', $('#start-over') , function() {
  game.currentQuestion = 0;
  game.counter = 3; ////////////////////////CHANGE ME
  game.correct = 0;
  game.incorrect = 0;
  game.loadQuestion();
});

$(document).on('click', $('.answer-button'), function(e) {
  clearInterval(timer);
  if ($(e.target).data("id") == questions[game.currentQuestion].correctAnswer){
    game.answeredCorrectly();
  } else {
    game.answeredIncorrectly();
  }
});


///////////////////////////////////////////////////////////////////////////////


//Question set


///////////////////////////////////////////////////////////////////////////////

var questions = [{
  question: "What was the first full length CGI movie?",
  answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
  correctAnswer: 3,
  image:"img/toystory.gif"
}, {
  question: "Which of these is NOT a name of one of the Spice Girls?",
  answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
  correctAnswer: 2,
  image:"img/spicegirls.gif"
}, {
  question: "Which NBA team won the most titles in the 90s?",
  answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
  correctAnswer: 4,
  image:"img/bulls.gif"
}, {
  question: 'Which group released the hit song, "Smells Like Teen Spirit"?',
  answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
  correctAnswer: 1,
  image:"img/nirvanabark.gif"
}, {
  question: 'Which popular Disney movie featured the song, "Circle of Life"?',
  answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
  correctAnswer: 4,
  image:"img/lionking.gif"
}, {
  question: 'Finish this line from the Fresh Prince of Bel-Air theme song: "I whistled for a cab and when it came near, the liscense plate said..."',
  answers: ["Dice", "Mirror", "Fresh", "Cab"],
  correctAnswer: 3,
  image:"img/fresh.gif"
}, {
  question: "What was Doug's best friend's name?",
  answers: ["Skeeter", "Mark", "Zach", "Cody"],
  correctAnswer: 1,
  image:"img/skeeter.gif"
}, {
  question: "What was the name of the principal at Bayside High in Saved By The Bell?",
  answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
  correctAnswer: 3,
  image:"img/belding.gif"
}];


var panel = $('#quiz-area');


var game = {
  questions:questions,
  currentQuestion:0,
  counter:3, ////////////////////////CHANGE ME
  correct:0,
  incorrect:0,
  timeCount: function(){
    timer = setInterval(game.countdown, 1000);
  },
  countdown: function(){
    //Not sure if we're teaching them how to save the state of "this" to be used elsewhere.
    console.log(game.counter);
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.timeUp();
    }
  },
  loadQuestion: function(){
    this.timeCount();
    panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
    for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
      panel.append('<button class="answer-button" id="button"' + 'data-id="' + i + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
    }
  },
  nextQuestion: function(){
    //I'm a little worried they might be confused as to why they cant use "this" here
    console.log('question reset');
    game.counter = 3; ////////////////////////CHANGE ME
    game.currentQuestion++;
    game.loadQuestion();
  },
  timeUp: function (){
    clearInterval(timer);
    panel.html('<h2>Out of Time!</h2>');
    panel.append('<h3>The Correct Answer was:' + questions[this.currentQuestion].correctAnswer);
    panel.append('<img src="' + questions[this.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);////////////////////////CHANGE ME
    } else {
      //figured it would be good to also include setTimeout
      setTimeout(game.nextQuestion, 3 * 1000);////////////////////////CHANGE ME
    }
  },
  results: function() {
    panel.html('<h2>All done, heres how you did!</h2>');
    panel.append('<h3>Correct Answers: ' + game.correct + '</h3>');
    panel.append('<h3>incorrect Answers: ' + game.incorrect + '</h3>');
    panel.append('<h2 id="start-over">Start Over?</h2>');
  },
  answeredIncorrectly: function() {
    console.log(this);
    game.incorrect++;
    clearInterval(timer);
    panel.html('<h2>Nope!</h2>');
    panel.append('<h3>The Correct Answer was:' + questions[game.currentQuestion].correctAnswer);
    panel.append('<img src="' + questions[game.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);////////////////////////CHANGE ME
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);////////////////////////CHANGE ME
    }
  },
  answeredCorrectly: function(){
    console.log(this);
    game.correct++;
    clearInterval(timer);
    panel.html('<h2>Correct!</h2>');
    panel.append('<img src="' + questions[game.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);////////////////////////CHANGE ME
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);////////////////////////CHANGE ME
    }
  }
};

game.loadQuestion();
