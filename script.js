var quizArr = [
    {
     question: "What is NOT a feature of JavaScript",
     choices: ["JavaScript is not designed to creating network-centric applications", "JavaScript is a lightweight, interpreted programming language.", "JavaScript is complementary to and integrated with Java.", "JavaScript is open and cross-platform."],
     correctAnswer: "JavaScript is not designed to creating network-centric applications", 
    },
    {
        question: "What are the advantages of JavaScript?",
        choices: ["Less server interaction", "Immediate feedback to the visitors", "Increased interactivity", "All of the above"],
        correctAnswer: "All of the above", 
    },
    {
        question: "How to add one new element at the end of an array?",
        choices: ["pull()", "push()","splice()", "pop()"],
        correctAnswer: "push()", 
    },
    {
       question: "How do you declare a variable?",
       choices: ["console.log())", "if","function", "var"],
       correctAnswer: "var", 
      },
      {
        question: "What is the correct syntax for referring to an external script called 'script.js'",
        choices: ["<script src='script.js'>", "<script href='script.js'>","<script ref='script.js>'", "script name='script.js'"],
        correctAnswer: "<script src='script.js'>", 
       },
       {
        question: "Which of the following is not a reserved word in JavaScript?",
        choices: ["interface", "throws","program", "short"],
        correctAnswer: "program", 
       },
       {
        question: "Which of the following is the correct syntax to display “Warning!” in an alert box using JavaScript?",
        choices: ["alertbox('Warning!');", "msg('Warning!');","msgbox('Warning!');", "alert('Warning!);"],
        correctAnswer: "alert('Warning!);", 
       },
       {
        question: " What is the HTML tag under which one can write the JavaScript code?",
        choices: ["<javascript>", "<scripted>","<script>", "<js>"],
        correctAnswer: "<script>", 
       }
];

var timeLeft = 99;
var i = 0;
var score = 0;
document.getElementById("timer").innerHTML = timeLeft;

var qAnswers = document.getElementById("qChoices");
var submitInitials = document.getElementById("submitInitials");
var resetScores = document.getElementById("reset-scores");

function quizQuestions() {
    document.getElementById("start").style.display = "none";
    document.getElementById("quizWindow").style.display = "block";
    quizTimeLeft();
    quizStart();
}

function quizStart() {
    if (i > 7) {
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
        timeLeft = timeLeft -15;
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
    var scoresEl = JSON.parse(localStorage.getItem("game-score"));
    var initials = document.getElementById("initials").value;
    var intScore = initials + " " +score;
    // cannot push to am array of null
    scoresEl = scoresEl || [];
    scoresEl.push(intScore);
    localStorage.setItem("game-score", JSON.stringify(scoresEl))
    document.location.href = "https://fox-yokai.github.io/code-quiz/scores.html";
    // document.location.href = "file:///C:/Users/kitsu/Documents/CodingBootCamp/uofm-stp-fsf-ft-02-2020-u-c/homework/code-quiz/scores.html";
}
)

function displayScores() {
    highScore = JSON.parse(localStorage.getItem("game-score"));
    for (var i = 0; i < highScore.length; i++) {
        var li2 = document.createElement("li"); 

        console.log(highScore[i])
        li2.textContent = highScore[i];
        document.getElementById("high-scores").appendChild(li2);
    }


}

resetScores.addEventListener("click", function(event) {
    localStorage.removeItem("game-score");
    document.getElementById("high-scores").textContent = "";
})
