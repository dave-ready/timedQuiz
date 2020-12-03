//user is presented with welcome message telling them to push button 
//to start quiz  -  create button 
//when user pushes button, they will be presented with the first question 
//and the timer function will start countdown - create a timer function + create a startQuiz function(?)

//if user selects the correct answer, they will be presented with the next question

//if user selects the incorrect answer, they will be presented with the next question AND
// will have 10 seconds taken off their time - is this done in timer or startQuiz function??? if/else

//quiz ends when all four questions are answered or the timer runs out - do I need separate functions or can the 
// above steps be covered in startQuiz function???

//the user's answers will be stored and they will be given their score at the end of the game 

//user will be able to save their scores and initials, and can be acceseed in "High Scores" 

//each correct answer = 25 points - storeAnswers function for lines 14,16,18?



//Think of the questions you want to ask and multiple answers
//create basic quiz structure in html & css
//create interactive elements in javascript 
//style html elements through the DOM
//create variables - questions, choices, answers, score, initials, time left?,
//create functions - start quiz(?), timer, 
//if/else - if (answer === x,y,z, etc.) {....}
//create a "start quiz" button on the home page


//VARIABLES

var mainEl = document.createElement("div")
document.getElementById ("div");
//mainEl.textContent = "";
//document.body.appendChild(mainEl);
//startBtn.setAttribute("style", backgroundColor: white;");

var h1El = document.createElement("h1");
h1El.textContent = "Welcome to my quiz!";
document.body.appendChild(h1El);
h1El.setAttribute("style", "margin:auto; width:50%; textAlign:center; color:red;");

var pTag = document.createElement("p");
pTag.textContent = "Press the 'START' button below to begin!";
document.body.appendChild(pTag);
pTag.setAttribute("style", "margin:auto; width:50%; textAlign:center; color:green;");

//Create Button -- WORK ON THIS!!!

var startBtn = document.createElement("Button");
startBtn.textContent = "START";
document.body.appendChild(startBtn);
startBtn.setAttribute("style", "padding:10px; margin:auto; textAlign:center; fontSize:24px; backgroundColor:dark green; color:green;");
startBtn.addEventListener('click', startQuiz());


//var startBtn = document.createElement("button");
//startBtn.textContent = "Start";
//document.body.appendChild(startBtn);
//startBtn.setAttribute("style", "textAlign: center; backgroundColor: green;");

//var btnEl = document.createElement("button");
//btnEl.textContent = <button>Start Quiz</button>;
//document.body.appendChild(btnEl);
//btnEl.setAttribute("style", "color:green;");


//LIST QUESTIONS/OPTIIONS/ANSWERS AS AN ARRAY
var question1 = "1. True or False: DOM stands for 'Document Object Model'?";
var question2 = "2. What is the maximum amount of items one can have in an array?";
var question3 = "3. This is question 3, right?";
var question4 = "4. This is question 4, right?";
var options1 = ["TRUE", "FALSE"];
var options2 = ["500", "50", "5000", "unlimited"];
var options3 = ["question %",  "question 1", "question c", "question 3"];
var options4 = ["option a", "question 4",  "option c", "option d"];
var answer1 =  options1[0];
var answer2 =  options2[3];
var answer3 =  options3[3];
var answer4 =  options4[1];

console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);




var quizQuests = [

    {question1, options1: ["TRUE", "FALSE"], answer1: 0 },
    
    {question2, options2: ["500", "50", "5000", "unlimited items"], answer2: 3 },

    {question3, options3: ["question %",  "question 1", "question c", "question 3"], answer3: 3 },

    {question4, options4: ["option a", "question 4",  "option c", "option d"], answer4: 1 },
    ];

    for (i = 0; i < question1.length; i++) {
        console.log(question1);
    }

    for (i = 0; i < question2.length; i++) {
        console.log(question2);
    }

    for (i = 0; i < question3.length; i++) {
        console.log(question3);
    }

    for (i = 0; i < question4.length; i++) {
        console.log(question4);
    }

    


//work on this timer


//var timerEl = document.createElement("quizTimer");
//timerEl = document.getElementById ("quizTimer");
//timerEl = document.querySelector("quizTimer");
//document.body.appendChild(timerEl);
//timerEl.setAttribute("style", "textAlign:right; Color:red;");

var secondsLeft = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = secondsLeft + " " + "seconds left!";
    secondsLeft--;
    if (secondsLeft === 0) {
        clearInterval(time);
        alert("Time out!! :(");
    }
}

console.log(myTimer);


//setTime();

//Start quiz function

function startQuiz() {
    if (startBtn === "click") {
        return question1.length[0];
        
    }

}


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
//console.log(nextH1El);
//console.log(quest1);
//console.log(quest2);
//console.log(quest3);
//console.log(quest4);
//console.log(optTrue);
//console.log(optFalse);


