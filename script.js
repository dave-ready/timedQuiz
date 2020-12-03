//Think of the questions you want to ask and multiple answers
//create basic quiz structure in html & css
//create interactive elements in javascript 
//style html elements through the DOM
//create variables - questions, choices, answers, score, initials, time left?,
//create functions - start quiz(?), timer, 
//if/else - if (answer === x,y,z, etc.) {....}
//create a "start quiz" button on the home page

var h1El = document.createElement("h1");
h1El.textContent = "Welcome to my quiz!";
document.body.appendChild(h1El);
h1El.setAttribute("style", "margin:auto; width:50%; textAlign:center; color:red;");

var pTag = document.createElement("p");
pTag.textContent = "Press the 'START' button below to begin!";
document.body.appendChild(pTag);
pTag.setAttribute("style", "margin:auto; width:50%; textAlign:center; color:green;");


var startBtn = document.createElement("button");
//startBtn = document.getElementById("button");
startBtn.textContent = "Start";
document.body.appendChild(startBtn);
startBtn.setAttribute("style", "textAlign: center; backgroundColor: green;");

//var btnEl = document.createElement("button");
//btnEl.textContent = <button>Start Quiz</button>;
//document.body.appendChild(btnEl);
//btnEl.setAttribute("style", "color:green;");


//LIST QUESTIONS/OPTIIONS/ANSWERS AS AN ARRAY
var quizQuests = [
    {question1: "True of False: DOM stands for 'Document Object Model'?", 
    options: {
        a: "TRUE", 
        b: "FALSE", },
    
    answer: "a"},
    
    {question2: "This is question 2, right?", 
    options: {
        a: "option a", 
        b: "option b", 
        c: "question 2",
        d: "option d",
      },
      answer: "c"},

    {question3: "This is question 3, right?",
      answers: {
        a: "option a", 
        b: "option b", 
        c: "option c",
        d: "question 3",
      },
      answer: "d"},

      {question4: "This is question 4, right?",
      options: {
        a: "option a", 
        b: "question 4", 
        c: "option c",
        d: "option d",
      },
      answer: "b"},
    ];

    console.log(quizQuests);


var mainEl = documnet.getElementById ("Main");
var timerEl = document.getElementById ("countdown")
var bodyEl = document.getElementById("div");

//work on this timer

var timeEl = document.querySelector(".time");
var secondsLeft = 20;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " " + "seconds left!!!";


    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();

       }
    }, 2000);

}

function sendMessage () {
    timeEl.textContent = "Sorry you are out of time!";

    }

setTime();


//DO I EVEN NEED THESE??

//var nextH1El = document.createElement("h1");
//nextH1El.textContent = "Question One!";
//document.body.appendChild(nextH1El);
//nextH1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");

//var quest1 = document.createElement("h2");
//quest1.textContent = "True of False: DOM stands for 'Document Object Model'?";
//document.body.appendChild(quest1);
//quest1.setAttribute("style", "margin:auto; width:100%; text-align:center; color:red;");


//var optTrue = document.createElement("li");
//optTrue.textContent = "TRUE";
//document.body.appendChild(optTrue);
//optTrue.setAttribute("style", "margin:auto; width:100%; text-align:center; color:green;");

//var optFalse = document.createElement("li");
//optFalse.textContent = "FALSE";
//document.body.appendChild(optFalse);
//optFalse.setAttribute("style", "margin:auto; width:100%; text-align:center; color:green;");


//var quest2 = document.createElement("h2");
//quest2.textContent = "This is question 2";
//document.body.appendChild(quest2);
//quest2.setAttribute("style", "margin:auto; width:100%; text-align:center; color:red;");



//var quest3 = document.createElement("h2");
//quest3.textContent = "This is question 3";
//document.body.appendChild(quest3);
//quest3.setAttribute("style", "margin:auto; width:100%; text-align:center; color:red;");

//var quest4 = document.createElement("h2");
//quest4.textContent = "This is question 4";
//document.body.appendChild(quest4);
//quest4.setAttribute("style", "margin:auto; width:100%; text-align:center; color:red;");



console.log(h1El);
console.log(pTag);
console.log(nextH1El);
console.log(quest1);
console.log(quest2);
console.log(quest3);
console.log(quest4);
console.log(optTrue);
console.log(optFalse);


