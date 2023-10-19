// Iteration 5: Store the player score and display it on the game over screen
var score_box = document.getElementById("score-board")
var  value = JSON.parse(localStorage.getItem("score"))||0;
var value2 = localStorage.getItem("loglevel")
console.log(value)
console.log(value2)

score_box.textContent = value;



var play_again = document.getElementById("play-again-button")

play_again.onclick = ()=>{
  location.href = "./game.html"
}
