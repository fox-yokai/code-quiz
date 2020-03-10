var quizArr = [
    {
     question: "This is the first sample question?",
     choices: ["This is the correct answer for 1", "This is the wrong answer for 1", "This is the wrong answer for 1", "This is the wrong answer for 1"],
     correctAnswer: "This is the correct answer for 1", 
    },
    {
        question: "This is the second sample question?",
        choices: ["This is the wrong answer for 1", "This is the correct answer for 2", "This is the wrong answer for 1", "This is the wrong answer for 1"],
        correctAnswer: "This is the correct answer for 2", 
    },
    {
        question: "This is the third sample question?",
        choices: ["This is the wrong answer for 1", "This is the wrong answer for 1","This is the correct answer for 3", "This is the wrong answer for 1"],
        correctAnswer: "This is the correct answer for 3", 
       }
];

var timeLeft = 99;
var i = 0;
var score = 0;
document.getElementById("timer").innerHTML = timeLeft;

var qAnswers = document.getElementById("qChoices");
var submitInitials = document.getElementById("submitInitials");

function quizQuestions() {
    document.getElementById("start").style.display = "none";
    document.getElementById("quizWindow").style.display = "block";
    quizTimeLeft();
    quizStart();
}

function quizStart() {
    if (i > 2) {
        gameOver();
    } else {
        document.getElementById("qChoices").textContent = "";
        document.getElementById("winQuestion").textContent = quizArr[i].question;
        for (var q = 0; q <= 3; q++) {
            var qChoice = quizArr[i].choices[q];
            var li = document.createElement("li");
            li.textContent = qChoice;
            qAnswers.appendChild(li);  
            }
    }
}

qAnswers.addEventListener("click", function(event){
    if (event.target.innerHTML === quizArr[i].correctAnswer) {
        score = score + 5;
        i++;
        quizStart();
    } else {
        score = score - 5;
        i++;
        quizStart();
    }
})

function quizTimeLeft() {
    var timerInerval = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;

        if(timeLeft <= 0) {
            clearInterval(timerInerval);
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    // total hack to stop the timer
    timeLeft = 0;
    document.getElementById("quizWindow").style.display = "none";
    document.getElementById("gameOverWindow").style.display = "block";
    document.getElementById("totalScore").innerHTML = score;
}

submitInitials.addEventListener("click", function(event) {
    var initials = document.getElementById("initials").value;
    localStorage.setItem("game-score", initials + " " + score);
    document.location.href = "https://fox-yokai.github.io/code-quiz/scores.html";
} )


