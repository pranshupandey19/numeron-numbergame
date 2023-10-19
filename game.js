// Iteration 2: Generate 2 random number and display it on the screen

var num1;
var num2;

let num1_box = document.getElementById("number1");
let num2_box = document.getElementById("number2");

function generateRandomNumber() {
  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 100);

  num1_box.textContent = num1;
  num2_box.textContent = num2;
}

generateRandomNumber();

// Iteration 3: Make the options button functional

let score = 0;

let greater_than = document.getElementById("greater-than");
let equal_to = document.getElementById("equal-to");
let lesser_than = document.getElementById("lesser-than");

greater_than.onclick = () => {
  if (num1 > num2) {
    update();
  } else {
    window.open("./gameover.html", "_self");
  }
};

equal_to.onclick = () => {
  if (num1 == num2) {
    update();
  } else {
    window.open("./gameover.html", "_self");
  }
};

lesser_than.onclick = () => {
  if (num1 < num2) {
    update();
  } else {
    window.open("./gameover.html", "_self");
  }
};
// Iteration 4: Build a timer for the game

// let num =1;
// let interval = setInterval(()=>{
//   console.log("I am in interval")
// },1000)
// clearInterval()

// let timeout = setTimeout(()=> {
//   console.log("I am in time out");
// },5000)

let time = 5;
let timer_box = document.getElementById("timer");

let interval;

function startInterval() {
  time = 5;

  interval = setInterval(() => {
    if (time == 0) {
      clearInterval(interval);
      location.href = "./gameover.html";
    }

    timer_box.textContent = time;
    time--;
  }, 1000);
}
startInterval();

function update() {
  score++;
  // console.log("score: ", score);
  localStorage.setItem("score", score);
  generateRandomNumber();
  clearInterval(interval);
  startInterval();
}

localStorage.setItem("score",score)