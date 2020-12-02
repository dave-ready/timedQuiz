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
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");

var pTag = document.createElement("p");
pTag.textContent = "Press the 'START' button below to begin!";
document.body.appendChild(pTag);
pTag.setAttribute("style", "margin:auto; width:100%; text-align:center;");

var nextH1El = document.createElement("h1");
nextH1El.textContent = "Question One!";
document.body.appendChild(nextH1El);
nextH1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");

var h2El = document.createElement("h2");
h2El.textContent = "True of False: DOM stands for 'Document Object Model'?";
document.body.appendChild(h2El);
h2El.setAttribute("style", "margin:auto; width:100%; text-align:center;");


var optTrue = document.createElement("li");
optTrue.textContent = "TRUE";
document.body.appendChild(optTrue);
optTrue.setAttribute("style", "margin:auto; width:100%; text-align:center;");


var optFalse = document.createElement("li");
optFalse.textContent = "FALSE";
document.body.appendChild(optFalse);
optFalse.setAttribute("style", "margin:auto; width:100%; text-align:center;");



console.log(h1El)
console.log(pTag)
console.log(nextH1El)
console.log(h2El)
console.log(optTrue)
console.log(optFalse)



//var questOne = "True or False: DOM stands for 'Document Object Model?'";
//var questOneOpt = ["true", "false"];
//var questTwo = "Question two is this";
//var questThree = "Question three is this";
//var questFour = "Question four is this";

