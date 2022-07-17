// __________Global Variables__________

// questions bank
var arrayOfQuestions = [
    {
        questions: 'Which of the follow output pairs corresponds with booleans?',

        answers: [
            'Yes/No',
            'True/False',
            'Right/Wrong',
            'None of the above',
        ],
        correctAnswer: 'b'
    },
    {
        question: "Which of the follow is not a primitive type in Javascript?",
        
        answer: [
            'Object',
            'String',
            'Number',
            'Boolean',
        ],

        correctAnswer: 'a'
    },
    {
        question: "Which of the follow is a 3rd party API for Javascript?",
        
        answer: [
            'Event listener',
            'DOM',
            'CSS',
            'JQuery',
        ],

        correctAnswer: 'd'
    },
    {
        question: "All of the follow are loops in JS expect:",
        
        answer: [
            'for/in',
            'for',
            'why',
            'while',
        ],

        correctAnswer: 'c'
    },
    {
        question: "Which is not considered a mouse event listener?",
        
        answer: [
            'click',
            'doubleClick',
            'mousedown',
            'mousemove',
        ],

        correctAnswer: 'b'
    },
    {
        question: "All of the follow are ways to declare a variable expect:",
        
        answer: [
            'let',
            'const',
            'declar',
            'var',
        ],

        correctAnswer: 'c'
    },
    {
        question: "Say we have 5 === '5', will this default to true and why?",
        
        answer: [
            'Yes, both have the say value',
            'Yes, because the three equal forces everything to be equal',
            'No, because the operator is looking for same type and value',
            'No, because that is not a valid assignment operator',
        ],

        correctAnswer: 'c'
    },
    {
        question: "When using the && assignment operator, what needs to be true for the conditional statement to evaluate to true?",
        
        answer: [
            'The condition only on the left side of the operator needs to be true',
            'Both conditions need to be true',
            'The condition only on the right side of the operator needs to be true',
            'All of the above',
        ],

        correctAnswer: 'b'
    },
    {
        question: "When using the || assignment operator, what needs to be true for the conditional statement to evaluate to true?",
        
        answer: [
            'The condition only on the left side of the operator needs to be true',
            'The condition only on the right side of the operator needs to be true',
            'Both conditions need to be true',
            'All of the above',
        ],

        correctAnswer: 'd'
    },
    {
        question: "What is an array?",
        
        answer: [
            'An ordered list of values',
            'A primitive type',
            'An empty string',
            'None of the above',
        ],

        correctAnswer: 'a'
    },
]

//___ timer set up___
var timeRemaining= document.getElementById('remaining-time');

function timer() {
    var timeLeft = 5;  //total time given
        
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