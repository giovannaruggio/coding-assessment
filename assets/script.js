
//Set variables for quiz index 
var startButton = document.querySelector("#start");
var questionContainer = document.querySelector(".question-container");
var optionContainer = document.querySelector(".option-container");
var headerContainer = document.querySelector("header");
var questionAnswer = document.querySelector("main");
var timeElement = document.querySelector(".timer");
var scoreBoard = document.querySelector("section");

//Set variables for questions and answers
var question = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var answer = document.querySelector("#scores");

//Set variables for unknowns
var position = 0;
var quizIndex = null;
var userScore = 0;
var secondsLeft = 60;
var userInitials = [];

console.log(headerContainer);

//Event listener to start quiz when start button is clicked
startButton.addEventListener("click", function(){
    console.log("click")
    headerContainer.style.display = "none";
    questionAnswer.classList.remove("hide");
    showQuestions();
})

//Display questions with corresponding options
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

//Function to check option as correct or inorrect
function checkAnswer (event) {
    console.log(event.target);
    var answer = event.target.innerText;
    //Add to score if answer is correct
    if (answer === quiz[position].correct) {
        alert ("Correct Answer!");
        userScore = userScore + 1
    //Subtract time from timer if answer is incorrect
    } else {
        alert ("Wrong Answer!");
        secondsLeft = secondsLeft - 10;
    }
    userScore++;
//Show next question when previous question is answered
    if (quizIndex < quiz.length) {
    optionContainer.addEventListener("click", showQuestions);
    console.log("click");
    position ++;
    showQuestions();
    } else {
        questionAnswer.classList.add("hide");
        scoreBoard.textContent = "Good Job!";
        userInitials = propmt("To Add to HighScore List, Pleas Enter Your Initials.");
        questionAnswer.style.display = "none";
    }

}

//Question/Answer Index for functions above
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

//Function to display remaining time and when time has run out
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

//Function to collect user's initials along with the user's score
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
