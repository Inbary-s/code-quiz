//--------------
// GLOBAL VARS
//--------------
var start = document.querySelector("#start");
var count = 0;
var totalPoints = 0;
var highscore = 0;
var quiz = document.getElementById("quiz");
console.log(quiz);
var choose = document.getElementById("chBtn");
console.log(choose);
var answerLine = document.getElementById("answer");
console.log(answerLine);

// /questions - remove
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  }
];
//

//--------------
// FUNCTIONALITIES 
//--------------

start.addEventListener("click", function() {
  var totalTime = 100;
  console.log(totalTime);
  generateQuestions();

  var interval = setInterval(function() {
    totalTime--;
    document.getElementById("timer").innerHTML = "Your time: " + totalTime;
    console.log("tick .. " + totalTime);
    if (totalTime === 0) {
      clearInterval(interval);
      console.log("Time's out");
      // alert("Time's out!");
      return endGame();
    }
  }, 1000);

  //remove quiz-start content
  var quizStart = document.getElementById("quiz-start");
  console.log(quizStart);
  quizStart.textContent = "";

});

generateQuestions = () => {
  document.getElementById("quiz").innerHTML = questions[count].title;
  document.getElementById("chBtn").innerHTML = "";

  questions[count].choices.map((choice, i) => {
    var btn = document.createElement("button");
    var textnode = document.createTextNode(choice);
    btn.appendChild(textnode);
    document.getElementById("chBtn").appendChild(btn);
    btn.setAttribute("data", choice);
    btn.setAttribute("id", `btn${i}`);
    btn.setAttribute("answer", questions[count].answer);

    document.querySelector(`#btn${i}`).addEventListener("click", function(e) {
      console.log(e.target.getAttribute("data"));
      if (e.target.getAttribute("data") === e.target.getAttribute("answer")) {
        answeredRight();
      } else {
        answeredWrong();
      }
    });
  });
};

answeredRight = () => {
  alert("YOU GOT IT RIGHT!");
  totalPoints += 10;
  console.log(totalPoints);
  count++;
  if (count === questions.length) {
    endGame();
  } else {
    generateQuestions();
  }
};

answeredWrong = () => {
  alert("YOU GOT IT WRONG!");
  totalPoints -= 5;
  count++;
  var totalTime = totalTime;
  totalTime -= 10;
  if (count === questions.length) {
    endGame();
  } else {
    generateQuestions();
  }
};

endGame = () => {
  var body = document.body;
  if (totalPoints > highscore) {
    //set totalPoints to highscore, append to DOM + local storage
    highscore = totalPoints;
  }
  alert("GAME OVER, YOUR HIGHSCORE IS " + highscore);

  function clear(){
    document.getElementById("timer").innerHTML = "";
  }
  var interval = setInterval(function(){
    clearInterval(interval);
  })
  body.textContent = "";
  // print "ALL DONE!"
  var allDone = '<h1> ALL DONE!</h1>';
  var title = document.createElement("div");
  document.body.appendChild(title);
  title.innerHTML = allDone;
  // print (<p> highscore)
  var finalScore = 'Your Final Score Is ' + highscore;
  var anounceScore = document.createElement("div");
  document.body.appendChild(anounceScore);
  // anounceScore.setAttribute("style", center);
  anounceScore.textContent = finalScore;
  // Input initials
  // log to localStorage
  // submit
  // Show highscore
  // Back button > start quiz (index.html)
  // Clear highscore > clear from screen
};

