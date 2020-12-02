//Think of the questions you want to ask and multiple answers
//create basic quiz structure in html & css
//create interactive elements in javascript 
//style html elements through the DOM
//create variables - questions, choices, answers, score, initials, time left?,
//create functions - start quiz(?), timer, 
//if/else - if (answer === x,y,z, etc.) {....}
//create a "start quiz" button on the home page

var h1Tag = document.createElement("h1");
h1Tag.textContent = "Welcome to my quiz!";
document.body.appendChild(h1Tag);

var pTag = document.createElement("p");
pTag.textContent = "Press the 'START' button below to begin!";
document.body.appendChild(pTag);

console.log(h1Tag)
console.log(pTag)


var questOne = "True or False: DOM stands for 'Document Object Model?'";
var questOneOpt = ["true", "false"];
var questTwo = "Question two is this";
var questThree = "Question three is this";
var questFour = "Question four is this";

