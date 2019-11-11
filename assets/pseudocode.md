//Project Plan:

    // FRONT END:
    - create index.html --
        - link css and bootstrap
        - add wireframe
        - add content
        - link js to file
    
    - - include instructions and start button
    - - timer = 0
    - - use Bootstrap (make sure is responsive).

    - figure out logic as follows(?):
            //Pseudo Code//
            ///code description:
            - when clicking the start button a question and timer (80sec) appears; (count timer--)
            - if answer===true - add 10 points to user local storage;
            - if answer === false - subtract 5 points from high score && subtract 10 sec' from timer;
            - score = sec + highscore
            - when time=0 || all questions completed =>final score + ask for initials (store in localstorage)
            - return to first view ("start quiz").

        Questions.js -include all quiz questions.
         ///Pseudo:
            Step 0 - 
            var timer = 0;

            Step1 - Click on "Start Quiz"

            ////

            var timer=80

            var secondsLeft = 80;

            setTimeout(function() {
            console.log('Set timeout complete');
            }, 1000)

            var interval = setInterval(function() {
            secondsLeft--;
            console.log('tick');
            if (secondsLeft === 0) {
                clearInterval(interval)
                console.log('BOOM')
            }
            }, 1000)
-------------------
            var timer = setInterval(function() {
            console.log("another second passes..." + counter);
            counter--;

            if (counter === 0) {
                clearInterval(timer);
                console.log("Time's up!");
            }
            }, 1000);
-------------------
                incrementEl.addEventListener("click", function() {
                timer++;
                setCounterText();
                });

                decrementEl.addEventListener("click", function() {
                if(count > 0) {
                    timer--;
                    setCounterText();
                }
                }); 
            
            ////

            - present questions (for loop through questions.js array)
            for (var i = 0; i < questions.length; i++) {
                show question + [answers] as buttons
                    if answer===true{
                        textContent("Correct!") to div;
                        highscore= highscore+10;
                    }
                    else {
                        textContent ("Wrong!") to div;
                        highscore= highscore-5;
                        timer= timer-10sec;
                    }
            }

            - All Done - present highscore = highscore+timer
                -input "Enter initials" -> localStorage
                show Highscore page with a list of local storage initial+highscore
                button: back 
                button: clear highscore

        - Create CSS file:
            - style this thing! 

        - edit questions.js - add questions

    - Edit README


