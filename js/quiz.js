//array of objects inside curly brackets inside array
// object inside of an array (questions are the objects [])
var questions = [
    {
     question: "How do you log to the console in JavaScript?",
     options: [
     "console.log", "window.alert","console.writeLine", "console.dir"
     ],
     answer: "console.log"
    },

    {
     question: "Commonly used data Commonly used Data Types do NOT Include:", 
     options: [ 
         "strings", "booleans", "alerts", "numbers" 
     ],
     answer: "Alerts"

    },
    {
     question: "The condition in an if / else statement is enclosed within ________.",
     options: ["quotes", "curly brackets", "parenthesis", "square brackets" 
    ],
     answer: "parenthesis"
    },

    {
     question: "Arrays in JavaScript can be used to store ________.", 
     options: ["numbers and strings", "other arrays", "booleans", "all the above"
    ],
    answer: "all the above"
    },
    {
      question: "String values must be enclosed within ________ when being assigned to variables",
      options: ["commas", "curly brackets", "quotes", "parenthesis"
    ],
      answer: "quotes"  
    },
    {
      question: "What does HTML stand for?",
      options:["Hyper Trainer Marking Language", "Hyper Text Marketing Language/bash", "Hyper Text Markup Language", "Hyper Text Markup Leveler" 
    ],
      answer: "Hyper Text Markup Language"  
    }
]

var qIndex = 0;
var startingTime = 75;
var time = document.getElementById("time")
var start = document.querySelector(".startbtn")
var qTitle = document.querySelector("#question-title")
var qOptions = document.getElementById("question-options")
var qResponse = document.getElementById("question-response")

//new way to write a function
function pageLoad(){
    start.onclick = startQuiz
}
function startQuiz() {
setInterval(function(){
startingTime--
time.textContent = startingTime
if(startingTime < 1) {
    gameOver()
} 
},1000)
displayQ()
}

//displaying questions
function displayQ() {
   start.setAttribute("style", "display:none") 
   var showQuestion = questions[qIndex] 
   qOptions.innerHTML = ""
   qTitle.textContent = showQuestion.question
 
    showQuestion.options.forEach(function(option){
        var qBtn = document.createElement("button")
        qBtn.textContent = option
        qOptions.appendChild(qBtn)
    })
   if(questions.length < 1) {
       gameOver()
   }
}
function gameOver(){
clearInterval(startingTime) 
time.textContent = 0
}

pageLoad()