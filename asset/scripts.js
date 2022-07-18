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
    // {
    //     question: "All of the follow are loops in JS expect:",
        
    //     answer: [
    //         'for/in',
    //         'for',
    //         'why',
    //         'while',
    //     ],

    //     correctAnswer: 'why'
    // },
    // {
    //     question: "Which is not considered a mouse event listener?",
        
    //     answer: [
    //         'click',
    //         'doubleClick',
    //         'mousedown',
    //         'mousemove',
    //     ],

    //     correctAnswer: 'doubleClick'
    // },
    // {
    //     question: "All of the follow are ways to declare a variable expect:",
        
    //     answer: [
    //         'let',
    //         'const',
    //         'declar',
    //         'var',
    //     ],

    //     correctAnswer: 'declar'
    // },
    // {
    //     question: "Say we have 5 === '5', will this default to true and why?",
        
    //     answer: [
    //         'Yes, both have the say value',
    //         'Yes, because the three equal forces everything to be equal',
    //         'No, because the operator is looking for same type and value',
    //         'No, because that is not a valid assignment operator',
    //     ],

    //     correctAnswer: 'No, because the operator is looking for same type and value'
    // },
    // {
    //     question: "When using the && assignment operator, what needs to be true for the conditional statement to evaluate to true?",
        
    //     answer: [
    //         'The condition only on the left side of the operator needs to be true',
    //         'Both conditions need to be true',
    //         'The condition only on the right side of the operator needs to be true',
    //         'All of the above',
    //     ],

    //     correctAnswer: 'B'
    // },
    // {
    //     question: "When using the || assignment operator, what needs to be true for the conditional statement to evaluate to true?",
        
    //     answer: [
    //         'The condition only on the left side of the operator needs to be true',
    //         'The condition only on the right side of the operator needs to be true',
    //         'Both conditions need to be true',
    //         'All of the above',
    //     ],

    //     correctAnswer: 'D'
    // },
    // {
    //     question: "What is an array?",
        
    //     answer: [
    //         'An ordered list of values',
    //         'A primitive type',
    //         'An empty string',
    //         'None of the above',
    //     ],

    //     correctAnswer: 'A'
    // },
]



//_____________timer set up_________________
var timeRemaining= document.getElementById('remaining-time');

function timer() {
    var timeLeft = 100;  //total time given
        
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeRemaining.textContent = timeLeft + ' s';
            timeLeft--;
            }
            else{
                timeRemaining.textContent = '';
                clearInterval(timeInterval);
                endGame();
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
//question displayed
questionPlaceholder.textContent = arrayOfQuestions[num].question;
//answers choice displayed
    answerChoiceA.textContent = arrayOfQuestions[num].answer[0];
    answerChoiceB.textContent = arrayOfQuestions[num].answer[1];
    answerChoiceC.textContent = arrayOfQuestions[num].answer[2];
    answerChoiceD.textContent = arrayOfQuestions[num].answer[3];
}
displayQuestions() 



function nextQuestion (event) {
    if (event.target.innerHTML == arrayOfQuestions[num].correctAnswer){
        //adds points for correct answer
        num++;
        displayQuestions();
    } else {
        //function that subtract time for timer
        timeRemaining = timeRemaining - 5;
        displayQuestions();
        }
    console.log(arrayOfQuestions[num].correctAnswer)
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
    alert('Game Over! Thanks for playing');
    
}


