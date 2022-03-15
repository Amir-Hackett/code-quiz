var scoreList = document.getElementById("list")
var totalScores = JSON.parse(localStorage.getItem("totalScores")) || []
var clearScore = document.getElementById("clearHighScore")

for (i = 0; i < totalScores.length; i++) {
  var submit = document.createElement("li")
  submit.textContent = totalScores[i].initals + " : " + totalScores[i].score
  scoreList.appendChild(submit)
}

function clearPage(){
  clearAll.onclick = clearInterval (clearAll)
}
