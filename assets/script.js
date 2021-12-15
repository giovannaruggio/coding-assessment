//GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var startButton = document.querySelector("#start");
var questionContainer = document.querySelector(".question-container");
var optionContainer = document.querySelector(".option-container");
var headerContainer = document.querySelector("header");
var questionAnswer = document.querySelector("main");
var timeElement = document.querySelector(".timer");
var scoreBoard = document.querySelector("section");


var question = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var answer = document.querySelector("#scores");

var position = 0;
var quizIndex = null;
var userScore = 0;
var secondsLeft = 60;
var userInitials = [];

console.log(headerContainer);

startButton.addEventListener("click", function(){
    console.log("click")
    headerContainer.style.display = "none";
    questionAnswer.classList.remove("hide");
    showQuestions();
})

function showQuestions() {
    question.textContent = quiz[position].question;
    option1.textContent = quiz[position].options[0];
    option2.textContent = quiz[position].options[1];
    option3.textContent = quiz[position].options[2];
    option4.textContent = quiz[position].options[3];
    option1.addEventListener("click", checkAnswer);
    option2.addEventListener("click", checkAnswer);
    option3.addEventListener("click", checkAnswer);
    option4.addEventListener("click", checkAnswer);
}

function checkAnswer (event) {
    console.log(event.target);
    var answer = event.target.innerText;
    if (answer === quiz[position].correct) {
        alert ("Correct Answer!");
        userScore = userScore + 1
    } else {
        alert ("Wrong Answer!");
        secondsLeft = secondsLeft - 10;
    }
    userScore++;

    if (quizIndex < quiz.length) {
    optionContainer.addEventListener("click", showQuestions);
    console.log("click");
    position ++;
    showQuestions();
    } else {
        scoreBoard.textContent = "Good Job!";
        userInitials = propmt("To Add to HighScore List, Pleas Enter Your Initials.");
        questionAnswer.style.display = "none";
    }



}

var quiz = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "String values must be enclosed within __ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        correct: "quotes"
    },
    {
        question: "What is a very useful tool used during development and debugging for printing content to the debugger?",
        options: ["Javascript", "terminal/bash", "for loops", "console.log"],
        correct: "Javascript"
    } 
]

function setTimer() {
    var timeInterval = setInterval(function(){
        secondsLeft--;
        timeElement.textContent = "Time Remaining: " + secondsLeft;
        if (secondsLeft <0) {
            clearInterval(timeInterval);
            alert ("Time is up!");
        }
    },1000);
}
setTimer();

function finalScore() {
    let userInitials = document.getElementById("userInitals").value;
    let userScore = JSON.parse(localStorage.getItem("userScore"));
        score.push({
            initials: initials,
            score: userScore
        })
        localStorage.setItem("scores", JSON.stringify(scores));
        showHighscores(scores);
}
