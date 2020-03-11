# code-quiz
## Purpose
Creating a fun way to test funamental knowledge in JavaScript.
## How to use
Click on start and answer as many questions as you can before the time runs out. Becareful because each wrong answer will subtract time from the clock.
## To Do
- The reset scores function doesn't work
## Code Highlight
Code hightlight
```
submitInitials.addEventListener("click", function(event) {
    var scoresEl = JSON.parse(localStorage.getItem("game-score"));
    var initials = document.getElementById("initials").value;
    var intScore = initials + " " +score;
    // cannot push to am array of null
    scoresEl = scoresEl || [];
    scoresEl.push(intScore);
    localStorage.setItem("game-score", JSON.stringify(scoresEl))
    document.location.href = "https://fox-yokai.github.io/code-quiz/scores.html";
```