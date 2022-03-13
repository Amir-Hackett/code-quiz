//array of objects inside curly brackets inside array

var questions = [
    {
     question: "How do you log to the console in JavaScript?",
     options: [
     "console.log", "window.alert","console.writeLine", "console.dir"
     ],
     answer: "console.log"
    },

    {
     question: "What's Batman's real name", 
     options: [ 
         "Bruce", "Peter", "Tony", "Thanos" 
     ],
     answer: "Bruce"

    }
]

var startingTime = 75;
var time = document.getElementById("time")
var start = document.querySelector(".startbtn")

//new way to write a function
function pageLoad(){
    start.onclick = startQuiz
}
function startQuiz() {
setInterval(function(){
startingTime--
time.textContent = startingTime
},1000)}


pageLoad()

