//WHEN I click the start button
//THEN a timer starts and I am presented with a question

//1. make a button in html
//2. create a timer
//    a. make a timer section in html
//    b. make a timer function in javascript
//3. make an event listener - put it on the button/connect it to the button
//4. present/show a question in html
//      maybe: hide question in html before ready
//      make an global variable array of all questions in javascript 
//              //question is going to be an object
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


//when I answer a question
//then I am presented with another question
//  make buttons for each answer choice or make the answer choice itself a button
//  hide the previous question or make the question container change text or remove the container element and append a new element
//  


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