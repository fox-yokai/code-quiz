var quizArr = [
    ["What is a question one?", "This is sample answer 1A", "This is sample answer 1B", "This is sample answer 1C", "This is sample answer 1D", "This is sample answer 1A"],
    ["What is a question two?", "This is sample answer 2A", "This is sample answer 2B", "This is sample answer 2C", "This is sample answer 2D", "This is sample answer 2C"],
    ["What is a question three?", "This is sample answer 3A", "This is sample answer 3B", "This is sample answer 3C", "This is sample answer 3D", "This is sample answer 3D"],
];

var timeLeft = 99;
var i = 0;
var qLoop = 0;
var score = 0;
document.getElementById("timer").innerHTML = timeLeft;

var qAnswers = document.getElementById("qChoices");

function quizQuestions() {
    document.getElementById("start").style.display = "none";
    document.getElementById("quizWindow").style.display = "block";
    quizTimeLeft();
    quizStart();
}

function quizStart() {
    document.getElementById("winQuestion").textContent = quizArr[i][0];
    showAnswers();
}

function showAnswers() {
    for (var q = 1; q <= 4; q++) {
        var qChoice = quizArr[i][q];
        var li = document.createElement("li");
        li.textContent = qChoice;
        qAnswers.appendChild(li);  
        }
}

qAnswers.addEventListener("click", function(event){
    if (event.target.innerHTML === quizArr[i][5]) {
        guessCorrect();
    } else {
        guessWrong();
    }
})

function guessCorrect() {
    score = score + 5;
    qLoop++;
    quizStart();
}

function guessWrong() {
    console.log("incorrect")
}


function quizTimeLeft() {
    var timerInerval = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInerval);
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    document.getElementById("quizWindow").style.display = "none";
    document.getElementById("gameOverWindow").style.display = "block";
}
