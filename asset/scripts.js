// __________Global Variables__________

// To stop error message on index and leaderboard html
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").slideToggle();
//     });
// });



// questions bank
var arrayOfQuestions = [
    {
        question: 'Which of the follow output pairs corresponds with booleans?',

        answer: [
            'Yes/No',
            'True/False',
            'Right/Wrong',
            'None of the above',
        ],
        correctAnswer: 'True/False'
    },
    {
        question: "Which of the follow is not a primitive type in Javascript?",
        
        answer: [
            'Object',
            'String',
            'Number',
            'Boolean',
        ],

        correctAnswer: 'Object'
    },
    {
        question: "Which of the follow is a 3rd party API for Javascript?",
        
        answer: [
            'Event listener',
            'DOM',
            'CSS',
            'JQuery',
        ],

        correctAnswer: 'JQuery'
    },
    {
        question: "All of the follow are loops in JS expect:",
        
        answer: [
            'for/in',
            'for',
            'why',
            'while',
        ],

        correctAnswer: 'why'
    },
    {
        question: "Which is not considered a mouse event listener?",
        
        answer: [
            'click',
            'doubleClick',
            'mousedown',
            'mousemove',
        ],

        correctAnswer: 'doubleClick'
    },
    {
        question: "All of the follow are ways to declare a variable expect:",
        
        answer: [
            'let',
            'const',
            'declar',
            'var',
        ],

        correctAnswer: 'declar'
    },
    {
        question: "Say we have 5 === '5', will this default to true and why?",
        
        answer: [
            'Yes, both have the say value',
            'Yes, because the three equal forces everything to be equal',
            'No, because the operator is looking for same type and value',
            'No, because that is not a valid assignment operator',
        ],

        correctAnswer: 'No, because the operator is looking for same type and value'
    },
    {
        question: "When using the && assignment operator, what needs to be true for the conditional statement to evaluate to true?",
        
        answer: [
            'The condition only on the left side of the operator needs to be true',
            'Both conditions need to be true',
            'The condition only on the right side of the operator needs to be true',
            'All of the above',
        ],

        correctAnswer: 'Both conditions need to be true'
    },
    {
        question: "When using the || assignment operator, what needs to be true for the conditional statement to evaluate to true?",
        
        answer: [
            'The condition only on the left side of the operator needs to be true',
            'The condition only on the right side of the operator needs to be true',
            'Both conditions need to be true',
            'All of the above',
        ],

        correctAnswer: 'All of the above'
    },
    {
        question: "What is an array?",
        
        answer: [
            'An ordered list of values',
            'A primitive type',
            'An empty string',
            'None of the above',
        ],

        correctAnswer: 'An ordered list of values'
    },
]



//_____________timer set up_________________
var timeRemaining= document.getElementById('remaining-time');
var timeLeft = 100;

function timer() {    
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeRemaining.textContent = timeLeft + ' s';
            timeLeft--;
            }
            //once time hits 0
            else{
                timeRemaining.textContent = '';
                clearInterval(timeInterval);
                endGame(); //displays ending message
            }
        }, 1000);
}   
timer()



//__________Displays the question and answers_________________

var questionPlaceholder= document.getElementById('displayed-question');
var answerChoiceA = document.getElementById('choice-text-A');
var answerChoiceB = document.getElementById('choice-text-B');
var answerChoiceC = document.getElementById('choice-text-C');
var answerChoiceD = document.getElementById('choice-text-D');
let num = 0;

function displayQuestions() {
    if (num <= 9){
    //question displayed
    questionPlaceholder.textContent = arrayOfQuestions[num].question;
    //answers choice displayed
        answerChoiceA.textContent = arrayOfQuestions[num].answer[0];
        answerChoiceB.textContent = arrayOfQuestions[num].answer[1];
        answerChoiceC.textContent = arrayOfQuestions[num].answer[2];
        answerChoiceD.textContent = arrayOfQuestions[num].answer[3];
    }
}
displayQuestions() 



var score = document.getElementById('score-count')
//keeps track of the score
var playerScore = 0; 
//adds points to the score in HUD
function scoreTracker(event) {
    playerScore = playerScore += 5;
    score.textContent = playerScore;
    console.log(playerScore)
}



//subtracts time off time left in HUD
function timeReduction(){
    timeLeft = timeLeft - 5;
    timeRemaining.textContent = timeLeft;
}



//cycles through the questions
function nextQuestion (event) {
    //correct answer
    if (event.target.innerHTML == arrayOfQuestions[num].correctAnswer){
        scoreTracker();//adds points
        //moves to next question
        num++; 
        displayQuestions();
        //incorrect answer
        } else {
            timeReduction(); //subtracts time
            //moves to next question
            num++; 
            displayQuestions();
            }
    if (num + 1 > arrayOfQuestions.length) {
        endGame()
    }
}



// Allow the A button to be clicked
var buttonA = document.querySelector('.btnA');
buttonA.addEventListener('click', nextQuestion);

// Allow the B button to be clicked
var buttonB = document.querySelector('.btnB');
buttonB.addEventListener('click', nextQuestion);

// Allow the C button to be clicked
var buttonC = document.querySelector('.btnC');
buttonC.addEventListener('click', nextQuestion);

// Allow the D button to be clicked
var buttonD = document.querySelector('.btnD');
buttonD.addEventListener('click', nextQuestion);



function endGame() {
    confirm('Game Over! Thanks for playing! If you would like to save your score press OK');
    location.href = 'leaderboard.html';
    localStorage.setItem('userScore', playerScore);
    //need to pass variable for score to leaderboard page

}