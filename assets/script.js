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

// Commonly used data types DO NOT include
    // 1) strings, 2) booleans, 3) alerts, 4)numbers
// The condition in an if/else statement is enclosed within ___.
    // 1) quotes, 2) curly brackets, 3) parentheses, 4) square brackets
// Arrays in JavaScript can be used to store ___.
    // 1) numbers and strings, 2) other arrays, 3) booleans, 4) all of the above
// String values must be enclosed within __ when being assigned to variables
    //1) commas, 2) curly brackets, 3) quotes, 4) parentheses
// A very useful tool used during development and debugging fro printing content to the debugger is
    // 1) Javascript, 2) terminal/bash, 3) for loops, 4) console.log


var startButton = document.querySelector("#start");
var questionContainer = document.querySelector(".question-container");
var optionContainer = document.querySelector(".option-container");
var headerContainer = document.querySelector("header");
var position = 0;

console.log(headerContainer);

startButton.addEventListener("click", function(){
    console.log("click")
    headerContainer.style.display = "none";
    var questionAnswer = document.querySelector("main");
    questionAnswer.classList.remove("hide");
    showQuestions();
})

function showQuestions() {
    var question = document.querySelector("#question");
    question.textContent = questions[position].question;
    var option1 = document.querySelector("#option1");
    option1.textContent = questions[position].options[0];
    var option2 = document.querySelector("#option2");
    option2.textContent = questions[position].options[1];
    var option3 = document.querySelector("#option3");
    option3.textContent = questions[position].options[2];
    var option4 = document.querySelector("#option4");
    option4.textContent = questions[position].options[3];
    option1.addEventListener("click", nextQuestion);
    option2.addEventListener("click", nextQuestion);
    option3.addEventListener("click", nextQuestion);
    option4.addEventListener("click", nextQuestion);
}

function nextQuestion() {
    console.log("click");
    position++
    showQuestions()
}

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "what color is grass?",
        options: ["green", "purple", "blue", "orange"],
        correct: "green"
    },
]