





const questionList = [
    {
        question: "The condition in an if/else statement is enclosed with ____________.",
        answers: ["1. quotes","2. curly brackets","3. parentheses","4. square brackets"],
        correctAnswer: "3. parentheses",
    },
    {
        question: "Commonly used data types DO NOT include: ",
        answers: ["1. strings","2. booleans","3. alerts","4. numbers"],
        correctAnswer: "3. alerts",
    },
    {
        question: "Arrays in JavaScript can be used to store _____________.",
        answers: ["1. numbers and strings","2. other arrays","3. booleans","4. all of the above"],
        correctAnswer: "4. all of the above",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: ["1. JavaScript","2. terminal/bash","3. for loops","4. console.log()"],
        correctAnswer: "4. console.log()",
    },
    {
        question: "String values must be enclosed within ____________ when being assigned to variables.",
        answers: ["1. commas","2. curly brackets","3. quotes","4. parentheses"],
        correctAnswer: "3. quotes",
    }
    ];
console.log(questionList[1]);

// Display Intro Title and Text with Start Quiz button (including high scores and timer at 0, as global elements)
function startGame() {
    // dynamically insert intro text
    let startText = document.getElementById("intro");
        startText.setAttribute('style', 'text-align:center;');
        startText.innerHTML = "<h1>Coding Quiz Challenge</h1><br/><h2>Try to answer the following code-related questions within the time limit.<br />Keep in mind that incorrect answers will penalize your score/time<br />by ten seconds!</h2>";

    // dynamically insert start button
    let startBtn = document.createElement('button');
        startBtn.innerHTML = 'Start Quiz';
        startBtn.style.background = 'hsl(291, 100%, 28%)';
        startBtn.style.color = 'hsl(0, 100%, 100%)';
        document.body.appendChild(startBtn);

    startBtn.addEventListener("click", askQuestion());

}

// Clicked Start Quiz button, Intro text display:none, Question 1 and choices appear, Timer starts at 75
function changeScreen() {
    // turns display: none for startGame function text

    // turns display: flex for askQuestion function text

}

function askQuestion() {
    for (i = 0; i < questionList.length; i++) {
        // array containing questions

    }
}

function startTimer() {

}


startGame();

// One answer button is clicked, compared to correctAnswer


// create running total of points in score


// attach function to correct answer button to:
    // 1. display correct

    // 2. add points to score

    // 3. check if last question
        // if yes, 
            // a. go to All Done! final score page
            // function endGame ()
            // b. enter initials box, store in localStorage

        // if no,
            // a. go to next question

// attach function to wrong answer buttons to:
    // 1. display wrong

    // 2. subtract 10 sec from countdown

    // 3. check if last question (same as if correct code)
        // if yes, 
            // a. go to All Done! final score page
            // function endGame ();
            // b. enter initials box, store in localStorage

        // if no,
            // a. go to next question
    


// function to start game, welcome to quiz, start button
    // classes 
    // question container in html (class=hide, display=none), question container remove attribute

    // how to get JUST the question to show
    // how to get JUST the answers to show

// function for timer, text content of time

// create q container(hide)
// create a container(hide)

// getQuestion function
// getAnswer function

// how to make intro hide, start button hide

// questions show, answers show, timer appears and starts

// show question 1, answers populate (in their title section ....)

// for loop for each, index 0 for current question

// current question from array (i = 0), i++, loop through questions/choices.  element = array i

// fnc to compare event.target.value to questions.correctanswer

// generate dynamically data-questions, data
