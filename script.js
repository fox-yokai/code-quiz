var quizArr = {
    questionOne: {
        question: "This is a sample questions 1?",
        answerOne: "This is the first answer (1).",
        answerTwo: "This is the second answer (1).",
        answerThree: "This is the third answer (1).",
        answerFour: "This is the fourth answer (1).",
    },
    questionTwo: {
        question: "This is a sample questions 1?",
        answerOne: "This is the first answer (2).",
        answerTwo: "This is the second answer (2).",
        answerThree: "This is the third answer (2).",
        answerFour: "This is the fourth answer (2).",
    },
    questionThree: {
        question: "This is a sample questions 1?",
        answerOne: "This is the first answer (3).",
        answerTwo: "This is the second answer (3).",
        answerThree: "This is the third answer (3).",
        answerFour: "This is the fourth answer (3).",
    }
};

var timeLeft = 99;
document.getElementById("timer").innerHTML = timeLeft;

function quizQuestions() {
    document.getElementById("start").style.display = "none";
    document.getElementById("quizWindow").style.display = "block";
    quizTimeLeft()
}

function quizTimeLeft() {
    var timerInerval = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;

console.log(timeLeft)

        if(timeLeft === 0) {
            clearInterval(timerInerval);
        }
    


    }, 1000);
}
