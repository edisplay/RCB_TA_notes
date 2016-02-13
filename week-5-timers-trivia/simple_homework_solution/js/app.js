var panel = $('#quiz-area');
var countStartNumber = 120;


///////////////////////////////////////////////////////////////////////////////

//CLICK EVENTS

///////////////////////////////////////////////////////////////////////////////


$(document).on('click', '#start', function(e) {
  start();
});

$(document).on('click', '#done', function(e) {
  done();
});
///////////////////////////////////////////////////////////////////////////////


//Question set


///////////////////////////////////////////////////////////////////////////////

var questions = [{
  question: "What was the first full length CGI movie?",
  answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
  correctAnswer: "Toy Story",
  image: "img/toystory.gif"
}, {
  question: "Which of these is NOT a name of one of the Spice Girls?",
  answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
  correctAnswer: "Fred Spice",
  image: "img/spicegirls.gif"
}, {
  question: "Which NBA team won the most titles in the 90s?",
  answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
  correctAnswer: "Chicago Bulls",
  image: "img/bulls.gif"
}, {
  question: 'Which group released the hit song, "Smells Like Teen Spirit"?',
  answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
  correctAnswer: "Nirvana",
  image: "img/nirvanabark.gif"
}, {
  question: 'Which popular Disney movie featured the song, "Circle of Life"?',
  answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
  correctAnswer: "The Lion King",
  image: "img/lionking.gif"
}, {
  question: 'Finish this line from the Fresh Prince of Bel-Air theme song: "I whistled for a cab and when it came near, the liscense plate said..."',
  answers: ["Dice", "Mirror", "Fresh", "Cab"],
  correctAnswer: "Fresh",
  image: "img/fresh.gif"
}, {
  question: "What was Doug's best friend's name?",
  answers: ["Skeeter", "Mark", "Zach", "Cody"],
  correctAnswer: "Skeeter",
  image: "img/skeeter.gif"
}, {
  question: "What was the name of the principal at Bayside High in Saved By The Bell?",
  answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
  correctAnswer: "Mr.Belding",
  image: "img/belding.gif"
}];


var start = function() {
  $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">120</span> Seconds</h2>');
  $('#start').remove();

  for (var i = 0; i < questions.length; i++) {
    panel.append('<h2>' + questions[i].question + '</h2>');
    for (var j = 0; j < questions[i].answers.length; j++) {
      panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
    }
  }

  panel.append('<button id="done">Done</button>');
};


var done = function() {
  var correct = 0;
  var incorrect = 0;

  $.each($("input[name='question-0']:checked"), function() {
    if ($(this).val() == questions[0].correctAnswer) {
      correct++;
    } else {
      incorrect++;
    }
  });
  $.each($("input[name='question-1']:checked"), function() {
    if ($(this).val() == questions[1].correctAnswer) {
      correct++;
    } else {
      incorrect++;
    }
  });
  $.each($("input[name='question-2']:checked"), function() {
    if ($(this).val() == questions[2].correctAnswer) {
      correct++;
    } else {
      incorrect++;
    }
  });
  $.each($("input[name='question-3']:checked"), function() {
    if ($(this).val() == questions[3].correctAnswer) {
      correct++;
    } else {
      incorrect++;
    }
  });
  $.each($("input[name='question-4']:checked"), function() {
    if ($(this).val() == questions[4].correctAnswer) {
      correct++;
    } else {
      incorrect++;
    }
  });
  $.each($("input[name='question-5']:checked"), function() {
    if ($(this).val() == questions[5].correctAnswer) {
      correct++;
    } else {
      incorrect++;
    }
  });
  $.each($("input[name='question-6']:checked"), function() {
    if ($(this).val() == questions[6].correctAnswer) {
      correct++;
    } else {
      incorrect++;
    }
  });
  $.each($("input[name='question-7']:checked"), function() {
    if ($(this).val() == questions[7].correctAnswer) {
      correct++;
    } else {
      incorrect++;
    }
  });
  console.log(correct)
  console.log(incorrect)
}
