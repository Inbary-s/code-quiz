var totalTime = 100;
var start = document.querySelector("#start");
var count = 0;
var totalPoints = 0;
var highscore = 0;

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

endGame = () => {
  if (totalPoints > highscore) {
    //set totalPoints to highscore, append to DOM
    highscore = totalPoints;
  }
  alert("GAME OVER, YOUR HIGHSCORE IS " + highscore);
};

answeredRight = () => {
  alert("YOU GOT IT RIGHT!");
  totalPoints += 10;
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
  totalTime -= 10;
  if (count === questions.length) {
    endGame();
  } else {
    generateQuestions();
  }
};

///end questions
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

start.addEventListener("click", function() {
  console.log(totalTime);
  generateQuestions();

  var interval = setInterval(function() {
    totalTime--;
    document.getElementById("timer").innerHTML = "Your time: " + totalTime;
    console.log("tick .. " + totalTime);
    if (totalTime === 0) {
      clearInterval(interval);
      console.log("Time's out");
      alert("Time's out!");
      endGame();
    }
  }, 1000);

  //remove quiz-start content
  var quizStart = document.getElementById("quiz-start");
  console.log(quizStart);
  quizStart.textContent = "";
  //
  // present question
  var quiz = document.getElementById("quiz");
  console.log(quiz);
  var choose = document.getElementById("chBtn");
  console.log(choose);
  var answerLine = document.getElementById("answer");
  console.log(answerLine);

  // - present button choises
  //   function printBtn() {
  //     for (var i = 0; i < choicesButtons.length; i++) {
  //       var btn = document.createElement("button");
  //       var text = document.createTextNode(choicesButtons[i]);
  //       btn.appendChild(text);
  //       choose.appendChild(btn); //clear from loop look at the bookmark activity
  //     }
  //   }

  //             - present questions (for loop through questions.js array)
  //   for (var i = 0; i < questions.length; i++) {
  //     var question = questions[i].title;
  //     var choicesButtons = questions[i].choices;
  //     var answer = questions[i].answer;
  //     console.log(question);
  //     console.log(choicesButtons);
  //     console.log(answer);

  //     quiz.innerHTML = question;
  //     printBtn();

  // choicesButtons.addEventListener("click", function() {
  //   var choicesButtons = [];
  //   var userChoise = choose.querySelectorAll(".choisesButtons");
  //   var userAnswer = "";
  //   var ansCorrect = 0;
  //   if (userChoise === answer) {
  //     document.getElementById("answer").textContent = "Correct!";
  //     // answerLine.innerHTML = answer;
  //   } else {
  //     return (document.getElementById("answer").textContent =
  //       "Wrong! It is... " + answer);
  //   }
  //   console.log(document.getElementById("answer"));
  // });

  //     quesrions[i].appendChild("style", "text-decoration:underline; color:red;");
  //     show question + [answers] as buttons
  //         if answer===true{
  //             textContent("Correct!") to div;
  //             highscore= highscore+10;
  //         }
  //         else {
  //             textContent ("Wrong!") to div;
  //             highscore= highscore-5;
  //             timer= timer-10sec;
  //         }
  // }

  // });

  //             - All Done - present highscore = highscore+timer
  //                 -input "Enter initials" -> localStorage
  //                 show Highscore page with a list of local storage initial+highscore
  //                 button: back
  //                 button: clear highscore
});
