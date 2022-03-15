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

var totalScores = []
var qIndex = 0;
var startingTime = 75;
var time = document.getElementById("time")
var start = document.querySelector(".startbtn")
var qTitle = document.querySelector("#question-title")
var qOptions = document.getElementById("question-options")
var qResponse = document.getElementById("question-response")
var qDisplay = document.querySelector(".question-display")
var interval
var finalScore = 0
var finishedSection = document.getElementById("finished-section")
var finishedScore = document.getElementById("finished-score")
var playerInitials = document.getElementById("player-initials")

//new way to write a function
function pageLoad(){
    start.onclick = startQuiz
}
function startQuiz() {
interval = setInterval(function(){
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
   document.getElementsByTagName("h1")[0].style.display = "none" 
   document.getElementsByTagName("h2")[0].style.display = "none" 
   var showQuestion = questions[qIndex] 
   qTitle.textContent = showQuestion.question
   qOptions.innerHTML = ""
 //forEach calls a function for each element in an array.
    showQuestion.options.forEach(function(option){
        var qBtn = document.createElement("button")
        qBtn.value = option
        qBtn.textContent = option
        qBtn.onclick = verifyAns
        qOptions.appendChild(qBtn)
    })
   if(questions.length < 1) {
       gameOver()
   }
}

function verifyAns() {
  if (this.value === questions[qIndex].answer) {
    qResponse.textContent = 'Correct' 
    setTimeout(function(){
      qResponse.textContent = ""
    if(qIndex === questions.length || time === 0){
      gameOver()
    } else {
      displayQ()
    }
    }, 1000)
  } 
  else {
    qResponse.textContent = 'Incorrect'
    setTimeout(function(){
      qResponse.textContent = ""
    if(qIndex === questions.length || time === 0){
      gameOver()
    } else {
      displayQ()
    }
    }, 1000)
    startingTime = startingTime - 5
    time.textContent = startingTime
  } 
  qIndex++
}

function gameOver(){
clearInterval(interval) 
finalScore = time.textContent
time.textContent = 0
qDisplay.setAttribute("style", "display:none;")
finishedSection.setAttribute("style", "display:flex;")
finishedScore.textContent = "Great Work You Scored " + finalScore + "!  <br />";
finishedScore.textContent += "Insert Name Below"
var submit = document.createElement("button")
submit.textContent = "Submit Score"
finishedSection.appendChild(submit)
submit.onclick = function(){
  var initals = playerInitials.value
  var userScore = {
    initals: initals, 
    score: finalScore
  }
  var totalScores = JSON.parse(localStorage.getItem("totalScores")) || []
  totalScores.push(userScore)
  var newScore = JSON.stringify(totalScores)
  localStorage.setItem("totalScores", newScore)
  window.location.href="highscore.html"
  }
}

pageLoad()