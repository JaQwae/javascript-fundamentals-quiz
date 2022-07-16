//__________HMTL_____________


//__________CSS_____________


//__________JS_____________
//WHEN I click the start button
//THEN a timer starts and I am presented with a question

    //1. make a button in html
    //2. create a timer
        //a. make a timer section in html
        // b. make a timer function in javascript
    //3. make an event listener - put it on the button/connect it to the button
    //4. present/show a question in html
        //maybe: hide question in html before ready
        //make an global variable array of all questions in javascript 
            //question is going to be an object

            // var arrayOfQuestions = [
            //     {
            //         question: "what is an object",
            //         answer: [
            //             "answer 1 is this",
            //             "answer 2 is this and it's correct",
            //             "answer 3 is this"
            //         ],
            //         correctAnswer: 1
            //     },
            //     {
            //         question: "what is an array",
            //         answer: [
            //             "answer 1 is this",
            //             "answer 2 is this",
            //             "answer 3 is this"
            //         ]
            //     }
            // ]
            // // code for targeting something in nested structure of objects and arrays
            // arrayOfQuestions[0].answer[1]




//WHEN I answer a question
// THEN I am presented with another question I answer a question

    //1. check to see if answer is correct
        // if correct 
            // increase score
            // increase the question index in the global arrayOfQuestions index 
    // switch questions
//  make buttons for each answer choice or make the answer choice itself a button 
    // assign the click event listening into here
//  hide the previous question or make the question container change text or remove the container element and append a new element





//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock/timer

//1. if statement to check if the answer choice selected is correct by giving functionality to the button used to select an answer choice
// if(wrong answer is clicked) {
// do something with variable that keeps track of total time
//timeLeft  timeLeft = timeLeft - 1
// }

// function timer() {
// var timeLeft = 5;  //total time given

// var timeInterval = setInterval(function () {
// }, 1000);
// }




// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

    // array of question.length is greater than question array then you display last page to submit , if the question length is less than array of question.length then display the next question
    //create the empty element in the HTML to display it or create the form an give it a display none first, on the last page display block (handle all css in js)







// WHEN the game is over
// THEN I can save my initials and score

    // local storage to save initials 
    // allow others to see previous scores
