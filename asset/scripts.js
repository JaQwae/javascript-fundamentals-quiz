// __________Global Variables__________

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
        correctAnswer: 'B'
    },
    {
        question: "Which of the follow is not a primitive type in Javascript?",
        
        answer: [
            'Object',
            'String',
            'Number',
            'Boolean',
        ],

        correctAnswer: 'A'
    },
    {
        question: "Which of the follow is a 3rd party API for Javascript?",
        
        answer: [
            'Event listener',
            'DOM',
            'CSS',
            'JQuery',
        ],

        correctAnswer: 'D'
    },
    {
        question: "All of the follow are loops in JS expect:",
        
        answer: [
            'for/in',
            'for',
            'why',
            'while',
        ],

        correctAnswer: 'C'
    },
    {
        question: "Which is not considered a mouse event listener?",
        
        answer: [
            'click',
            'doubleClick',
            'mousedown',
            'mousemove',
        ],

        correctAnswer: 'B'
    },
    {
        question: "All of the follow are ways to declare a variable expect:",
        
        answer: [
            'let',
            'const',
            'declar',
            'var',
        ],

        correctAnswer: 'C'
    },
    {
        question: "Say we have 5 === '5', will this default to true and why?",
        
        answer: [
            'Yes, both have the say value',
            'Yes, because the three equal forces everything to be equal',
            'No, because the operator is looking for same type and value',
            'No, because that is not a valid assignment operator',
        ],

        correctAnswer: 'C'
    },
    {
        question: "When using the && assignment operator, what needs to be true for the conditional statement to evaluate to true?",
        
        answer: [
            'The condition only on the left side of the operator needs to be true',
            'Both conditions need to be true',
            'The condition only on the right side of the operator needs to be true',
            'All of the above',
        ],

        correctAnswer: 'B'
    },
    {
        question: "When using the || assignment operator, what needs to be true for the conditional statement to evaluate to true?",
        
        answer: [
            'The condition only on the left side of the operator needs to be true',
            'The condition only on the right side of the operator needs to be true',
            'Both conditions need to be true',
            'All of the above',
        ],

        correctAnswer: 'D'
    },
    {
        question: "What is an array?",
        
        answer: [
            'An ordered list of values',
            'A primitive type',
            'An empty string',
            'None of the above',
        ],

        correctAnswer: 'A'
    },
]



//_____________timer set up_________________
var timeRemaining= document.getElementById('remaining-time');

function timer() {
    var timeLeft = 10;  //total time given
        
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeRemaining.textContent = timeLeft + ' s';
            timeLeft--;
            }//subtract for a wrong answer
            else{
                timeRemaining.textContent = '';
                clearInterval(timeInterval);
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

function displayQuestions() {
for (let i = 0; i < arrayOfQuestions.length; i++) {
    //question displayed
    questionPlaceholder.textContent = arrayOfQuestions[i].question;
        //answers choice displayed
        answerChoiceA.textContent = arrayOfQuestions[i].answer[0];
        answerChoiceB.textContent = arrayOfQuestions[i].answer[1];
        answerChoiceC.textContent = arrayOfQuestions[i].answer[2];
        answerChoiceD.textContent = arrayOfQuestions[i].answer[3];
    }
}
displayQuestions() 

selectedAnswer = ''
function handleClick() {
    document.addEventListener('click', e => {
        if (e.target.matches('p#choice-text-A')){
            var selectedAnswerA = 'A';
            return selectedAnswer.concat(selectedAnswerA);
        }
        if (e.target.matches('p#choice-text-B')){
            var selectedAnswerB = 'B';
            return selectedAnswer.concat(selectedAnswerB)
        }
        if (e.target.matches('p#choice-text-C')){
            var selectedAnswerC = 'C';
            return selectedAnswer.concat(selectedAnswerC);
        }
        if (e.target.matches('p#choice-text-D')){
            var selectedAnswerD = 'D';
            return selectedAnswer.concat(selectedAnswerD);
        }
    })
}
handleClick() 



function isCorrect() {
    document.addEventListener('click', e => {
        if (e.target.matches('correctAnswer') == selectedAnswer) {
            //proceed with for loop
        } else {
            //if answer is incorrect subtract points
            timeRemaining = timeRemaining - 5
        }})
    }
isCorrect()

// function endGame () {
//     if (timeRemaining === 0 || i > arrayOfQuestions.length );
//          alert('Game Over! Thanks for playing')
// }