/********************************************************************* */
//create array of objects

let quizData = [
    {
        question: "Most popular programming language?",
        a: "C++",
        b: "Python",
        c: "JavaScript",
        answer: "c",
    },

    {
        question: "Which Language runs in browser??",
        a: "Java",
        b: "Javascript",
        c: "PHP",
        answer: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        answer: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        answer: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        answer: "b",
    },
];
//test

/********************************************************************* */
//bring this data in to DOM

//get elements from DOM to make a link btw JS and Html
//to insert question
let title = document.querySelector(".title");

//to insert options
let aLabel = document.querySelector(".aLabel");
let bLabel = document.querySelector(".bLabel");
let cLabel = document.querySelector(".cLabel");

//select button
let submitButton = document.getElementById("submit");

//select the answer class of all inputs
let answers = document.querySelectorAll(".answer");
//console.log(answers)//we get 3 values here and JS has to check on each input

//container
let wrapperContainer = document.querySelector(".quiz-container");

//score element
let scores = document.querySelector(".score");

//next button

let nextButton = document.querySelector("#next");

//lists complete set

let lists = document.querySelectorAll(".answer");

//variable declaration
let quizNumber = 0;
let scoresValue = 0;

/********************************************************************* */
//Display UI

displayQuestionAnswers();
function displayQuestionAnswers() {
  deselectAnswers();
    for (let i = quizNumber; i < quizData.length; i++) {
        // console.log(quizData.length)
        //this is an array with indexes and has objects stored in indexes
        //insert question
        wrapperContainer.classList.remove("wrapperRed");
        wrapperContainer.classList.remove("wrapperGreen");

        title.innerHTML = quizData[quizNumber].question;

        //insert values
        aLabel.innerHTML = quizData[quizNumber].a;
        bLabel.innerHTML = quizData[quizNumber].b;
        cLabel.innerHTML = quizData[quizNumber].c;
    }
}

//call the fn
//displayQuestionAnswers();

/********************************************************************* */
//Add event on button
submitAnswer();
function submitAnswer() {
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        //task 3
        //Get user ANswer here
        let userAnswer = getUserAnswer(); //fn run only when u click the button, return value stored in userAnswer
        console.log(userAnswer);
        console.log(quizData[quizNumber].answer);
        if (userAnswer === quizData[quizNumber].answer) {
            wrapperContainer.classList.add("wrapperGreen");
            displayScores();
            // alert("Hey You are right, Congrats");
        } else {
            wrapperContainer.classList.add("wrapperRed");

            //alert("Oops, Better Luck next time");
        }
    });
}

/*------------------------------------------------------------------------------*/
//Function getUserAnswer
function getUserAnswer() {
    let userAnswer;
    answers.forEach(function (answer) {
        if (answer.checked === true) {
            userAnswer = answer.id;
        }
    });

    return userAnswer;
}

//call fn

/********************************************************************* */

function displayScores() {
    scoresValue += 1;
    scores.innerHTML = `<h2>Your Score is :${scoresValue} </h2>`;
    console.log(scoresValue);
}

/********************************************************************* */

//next button
function nextQuestion() {
    nextButton.addEventListener("click", function (event) {
        event.preventDefault;
        console.log(quizData[(quizNumber += 1)]);
        displayQuestionAnswers();
       
    });
}

nextQuestion();

/********************************************************* */
//to deselect all radio button when moved to next page

function deselectAnswers(){
  lists.forEach(function(el){
    el.checked=false;
  })
  }