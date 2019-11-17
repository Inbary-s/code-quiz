//--------------
// GLOBAL VARS
//--------------
var totalTime = 80;
var start = document.querySelector("#start");
var count = 0;
var totalPoints = 0;
var highscore = 0;
var quiz = document.getElementById("quiz");
var choose = document.getElementById("chBtn");
var answerLine = document.getElementById("answer");
//--------------
// FUNCTIONALITIES 
//--------------
start.addEventListener("click", function() {
  console.log(totalTime);
  generateQuestions();

  var interval = setInterval(function() {
    totalTime--;
    document.getElementById("timer").innerHTML = "Your time: " + totalTime;
    console.log("tick .. " + totalTime);
    if (totalTime === 0 ) {
      clearInterval(interval);
      console.log("Time's out");
      endGame();
      // alert("Time's out!");
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
  // alert("YOU GOT IT RIGHT!");
  totalPoints += 10 + totalTime;
  console.log(totalPoints);
  count++;
  // var ansRightMsg = document.getElementById("answer").textContent = "You Got it Right!";
  if (count === questions.length) {
    endGame();
  } else {
    // setTimeout(function(){ansRightMsg},2000, ansRightMsg = "");
    // setTimeout(function(){generateQuestions()},2000, ansRightMsg = "");
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

endGame = () => {
  var body = document.body;
  if (totalPoints > highscore) {
    //set totalPoints to highscore, append to DOM + local storage
    highscore = totalPoints;
  }

  function clear(){
    document.getElementById("timer").innerHTML = "";
    var interval = setInterval(function(){
      clearInterval(interval);
    })
  }
  body.textContent = "";
  // print "ALL DONE!"
  var allDone = '<h1> ALL DONE!</h1>';
  var title = document.createElement("div");
  document.body.appendChild(title);
  title.innerHTML = allDone;
  // print highscore
  var finalScore = 'Your Final Score Is ' + highscore;
  var anounceScore = document.createElement("div");
  document.body.appendChild(anounceScore);
  anounceScore.textContent = finalScore;
  
  // Input initials
  var initialsInput = document.createElement("input");
  initialsInput.setAttribute("placeholder", 'Please Enter Your Initials');
  initialsInput.setAttribute("id", 'initialsInput');
  initialsInput.setAttribute("type", 'text');
  document.body.appendChild(initialsInput);
  // submit
  var submit = "Submit!";
  var submitMe = document.createElement("button");
  submitMe.setAttribute("id", 'submit')
  submitMe.innerHTML = submit;
  document.body.appendChild(submitMe);
  
  // log to localStorage
  var isInput = document.getElementById("initialsInput");
  var submitBtn = document.getElementById("submit");
  var playerTable = document.createElement("table");
  
  document.body.appendChild(playerTable);

  submitBtn.onclick = function(){
    var key = isInput.value;
    var currentHighscore = highscore;
    console.log (key);
    
    if (key) {
      localStorage.setItem(key, currentHighscore);
    }
    // Show highscore
    for (var i = 0;  i < localStorage.length; i++){
      var key = localStorage.key(i);
      var currentHighscore = localStorage.getItem(key);
          playerTable.innerHTML += '<td>'+(key) +" "+'</td>' + '<td>'+" " +(currentHighscore)+'</td>';
        };
        submitBtn.parentNode.removeChild(submitBtn);
        isInput.parentNode.removeChild(isInput);
        
        //Clear Scores Button
      var clearBtnText = "Clear it all!";
      var clearBtn = document.createElement("button");
      clearBtn.setAttribute("id", "clearBtn");
      clearBtn.innerHTML = clearBtnText;
      document.body.appendChild(clearBtn);
      
      clearBtn.addEventListener("click", function(){
        playerTable.innerHTML = ''; 
        localStorage.clear();
        key.innerHTML = '';
      });
      // Back button
      var backBtnText = "Go Back!"
      var backBtn = document.createElement("button");
      backBtn.setAttribute("id", "backBtn");
      backBtn.innerHTML = backBtnText;
      document.body.appendChild(backBtn);
      
      backBtn.addEventListener("click", function(){
        location.reload();
      });

    };      
};
