const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answers");
let currentQuestionIndex = 0;

function displayQuestion() {
    questionEl.textContent = questionList[currentQuestionIndex].question;
}

function displayAnswers() {
    for (i = 0; i < questionList[currentQuestionIndex].answers.length; i++) {
        const button = document.createElement("button");
        button.onclick = checkAnswer;
        button.textContent = questionList[currentQuestionIndex].answers[i];
        answerEl.appendChild(button);
    }
}

function checkAnswer() {
    if (questionList[currentQuestionIndex].correctAnswer === this.textContent) {
        console.log("right");
        document.getElementById("quizResponse").textContent = "Correct!";
    } else {
        document.getElementById("quizResponse").textContent = "Wrong!";
    } 
    console.log("the button is clicked!");
    
}

const questionList = [
    {
        question: "The condition in an if/else statement is enclosed with ____________.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "3. parentheses"
    },
    {
        question: "Commonly used data types DO NOT include: ",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "3. alerts"
    },
    {
        question: "Arrays in JavaScript can be used to store _____________.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "4. all of the above"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log()"],
        correctAnswer: "4. console.log()"
    },
    {
        question: "String values must be enclosed within ____________ when being assigned to variables.",
        answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "3. quotes"
    }
    ];




// Display Intro Title and Text with Start Quiz button (including high scores and timer at 0, as global elements)
function startIntro() {
    // dynamically insert intro text
    let introText = document.getElementById('intro');
        introText.setAttribute('style', 'text-align:center;');
        introText.innerHTML = "<h1>Coding Quiz Challenge</h1><br/><h2>Try to answer the following code-related questions within the time limit.<br />Keep in mind that incorrect answers will penalize your score/time<br />by ten seconds!</h2>";

    // dynamically insert start button
    let startBtn = document.createElement('button');
        startBtn.innerHTML = 'Start Quiz';
        startBtn.style.background = 'hsl(291, 100%, 28%)';
        startBtn.style.color = 'hsl(0, 100%, 100%)';
        startBtn.style.width = '20%';
        startBtn.style.margin = '0 40%';
        
    document.getElementById('intro').appendChild(startBtn);

    startBtn.addEventListener('click', startGame);
    
};

// Clicked Start Quiz button, Intro text display:none, Question 1 and choices appear, Timer starts at 75
function startGame() {

        var hideContent = document.getElementById('intro');
            hideContent.style.display = 'none';
      
    displayQuestion();
    displayAnswers();
};
    // function askQuestion() {
    //     for (i = 0; i < questionList.length; i++) {
    //         // array containing questions

    //     }
    // }


    // function timer() {
    //     var timer = document.getElementById('timer');
    //     function countdown() {
    //         var timeLeft = 75;
    //         // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    //         var timeInterval = setInterval(function() {
    //         // As long as the `timeLeft` is greater than 1
    //         if (timeLeft > 1) {
    //             // Set the `textContent` of `timerEl` to show the remaining seconds
    //             timer.textContent = timeLeft + ' seconds remaining';
    //             // Decrement `timeLeft` by 1
    //             timeLeft--;
    //         } else if (timeLeft === 1) {
    //             // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
    //             timer.textContent = timeLeft + ' second remaining';
    //             timeLeft--;
    //         } else {
    //             // Once `timeLeft` gets to 0, set `timerEl` to an empty string
    //             timer.textContent = '';
    //             // Use `clearInterval()` to stop the timer
    //             clearInterval(timeInterval);
    //         }
    //         }, 1000);
    //     }
    // };

    
    
    // function startTimer() {

    // 
startIntro();
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
    

