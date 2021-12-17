//Quiz.
const question = document.getElementById("question_perso");
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const victory =  document.getElementById("victory")

// submitButton.addEventListener('click', showResults);


const canvas = document.getElementById("other");
const ctx = canvas.getContext('2d');


function openDoor() {
  question.style.visibility = "hidden";
  victory.style.visibility = "visible";
}


function displayQuizz () {

  question.style.visibility = "visible";
  console.log("display");
  canvas.style.opacity = "0.2";
  document.getElementById("homeCountDown").color = "red";
}


const Questions = [{
  id: 0,
  q: "What is the capital of India?",
  a: [{ text: "gandhinagar", isCorrect: false },
      { text: "Surat", isCorrect: false },
      { text: "Delhi", isCorrect: true },
      { text: "mumbai", isCorrect: false }
  ]

},
{
  id: 1,
  q: "What is the capital of Thailand?",
  a: [{ text: "Lampang", isCorrect: false, isSelected: false },
      { text: "phuket", isCorrect: false },
      { text: "Ayutthaya", isCorrect: false },
      { text: "Bangkok", isCorrect: true }
  ]

},

]

var start = true;

function iterate(id) {

var result = document.getElementsByClassName("result");
result[0].innerText = "";

const question = document.getElementById("question");

question.innerText = Questions[id].q;

const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
  op1.style.backgroundColor = "lightgoldenrodyellow";
  // op2.style.backgroundColor = "lightskyblue";
  // op3.style.backgroundColor = "lightskyblue";
  // op4.style.backgroundColor = "lightskyblue";
  selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
  // op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightgoldenrodyellow";
  // op3.style.backgroundColor = "lightskyblue";
  // op4.style.backgroundColor = "lightskyblue";
  selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightgoldenrodyellow";
  op4.style.backgroundColor = "lightskyblue";
  selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightgoldenrodyellow";
  selected = op4.value;
})

const submitAnswer = document.getElementsByClassName("submit_answer");

submitAnswer[0].addEventListener("click", () => {
  if (selected == "true") {
      start = false;
   if (id < 1) {
  id++;
  iterate(id);
  console.log(id);
}
  else if (id = 1) {
    openDoor();
  }
  }
  else {
      result[0].innerHTML = "Outrageous answer. Please do better.";
      result[0].style.color = "violet";
  }
})
}

if (start) {
iterate("0");
}
var id = 0;



var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

disableScroll();

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


const modal = document.getElementById("modal");

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", modalStartVisibilityHandler);
function modalStartVisibilityHandler() {
  modal.style.visibility = "hidden";
  play();
}

const modal2 = document.getElementById('modal2');

const restartBtn = document.getElementById("restart-btn");




function modalRestartVisibilityHandler() {
  modal2.style.visibility = "visible";
 canvas.style.opacity = 0.3;
}

function refresh() {
  window.location.reload();
  // play();
}

restartBtn.addEventListener("click", refresh);

const points = document.getElementById("points");

//

function play () {
const homeCountDown = document.getElementById("homeCountDown");

function timerHome(limit) {
  return new Promise((resolve, reject) => {
    let count = 100;
    let id = setInterval(() => {
      count--;
      homeCountDown.textContent = count;
      if (count === limit) resolve(id);
    }, 1000);
  });
}

timerHome(0)
  .then((id) => {
    clearInterval(id);
    modalRestartVisibilityHandler();
  });


class Door {
  constructor(x, y) {
    this.x = 1300;
    this.y = 900;
    const img = new Image();
    img.src = './door.jpg';
    this.img = img;
    this.draw();
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 75);
  }
}

// const aDoor = new Door();

class Zombie {
  constructor(x, y, vx, vy) {
    // this.x = randomIntFromInterval(50, 800);
    // this.y = randomIntFromInterval(50, 800);
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;

    // Load the image
    const img = new Image();
    img.addEventListener('load', () => {
      // Once image loaded => draw
      this.img = img;
      this.draw();
    });
    img.src = './tux-161365_640.png';
  }
  draw() {
    this.move()
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
  move(sign) {
    if (sign === "minus") {
      this.vx *= -1;
      this.vy *= -1;
      this.x += this.vx;
      this.y += this.vy;

    }
    if (sign === "plus") {
      this.x += this.vx;
      this.y += this.vy;
    }
  }
}

const zombie = new Zombie(1000, 500, -8, -2);
const zombie2 = new Zombie(80, 100, 4, 3);
const zombie3 = new Zombie(150, 300, -2, -3);
const zombie4 = new Zombie(500, 90, -5, -1);
const zombie5 = new Zombie(3, 500, -5, -1);
const zombie6 = new Zombie(750, 800, -2, -6);


function updateZombies() {
  updatePlayer();
  updatePrize();
  zombie.draw();
  zombie2.draw();
  zombie3.draw();
  zombie4.draw();
  zombie5.draw();
  zombie6.draw();
  if (zombie.x > 1200 || zombie.y > 800 || zombie.x < 1 || zombie.y < 1) {
    zombie.move("minus");
  }
  else {
    zombie.move("plus");
  }
  if (zombie2.x > 1200|| zombie2.y > 800|| zombie2.x < 1 || zombie2.y < 1) {
    zombie2.move("minus");
  }
  else {
    zombie2.move("plus");
  }
  if (zombie3.x > 1200 || zombie3.y > 800|| zombie3.x < 1 || zombie3.y < 1) {
    zombie3.move("minus");
  }
  else {
    zombie3.move("plus");
  }
  if (zombie4.x > 1200 || zombie4.y > 800 || zombie4.x < 1 || zombie4.y < 1) {
    zombie4.move("minus");
  }
  else {
    zombie4.move("plus");
  }
  if (zombie5.x > 1200 || zombie5.y > 800 || zombie5.x < 1 || zombie5.y < 1) {
    zombie5.move("minus");
  }
  else {
    zombie5.move("plus");
  }
  if (zombie6.x > 1200 || zombie6.y > 800 || zombie6.x < 1 || zombie6.y < 1) {
    zombie6.move("minus");
  }
  else {
    zombie6.move("plus");
  }
    if (((Math.abs(zombie.y - player.y) < 50) && (Math.abs(zombie.x - player.x) < 50)) || ((Math.abs(zombie2.y - player.y) < 50) && (Math.abs(zombie2.x - player.x) < 50)) || ((Math.abs(zombie3.y - player.y) < 50) && (Math.abs(zombie3.x - player.x) < 50)) || ((Math.abs(zombie4.y - player.y) < 50) && (Math.abs(zombie4.x - player.x) < 50)) || ((Math.abs(zombie5.y - player.y) < 50) && (Math.abs(zombie5.x - player.x) < 50)) || ((Math.abs(zombie6.y - player.y) < 50) && (Math.abs(zombie6.x - player.x) < 50))) {
      GameOver();
      stopFunction();
    }
  
  if (Math.abs(prize.y - player.y) < 100 && Math.abs(prize.x - player.x) < 100) { 
    displayQuizz();
    stopFunction();
  }
}

const intervalId = setInterval(updateZombies, 70);

function stopFunction() {
  clearInterval(intervalId);
}

//Player.

class Player {
  constructor(x, y) {
    this.x = 30;
    this.y = 30;
    const imgPlayer = new Image();
    imgPlayer.src = './man-g8ee15bac5_640.png';
    this.img = imgPlayer;
    this.draw();
  }
  moveUp() {
    this.y -= 50;
  }
  moveDown() {
    this.y += 50;
  }
  moveLeft() {
    this.x -= 50;
  }
  moveRight() {
    this.x += 50;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 120, 120);
  }
}


const player = new Player();

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 38:
      player.moveUp();
      console.log('up', player);
      break;
    case 40:
      player.moveDown();
      console.log('down', player);
      break;
    case 37:
      player.moveLeft();
      console.log('left', player);
      break;
    case 39:
      player.moveRight();
      console.log('right', player);
      break;
  }
  updatePlayer();
});


function updatePlayer() {
  ctx.clearRect(0, 0, 1500, 1000);
  player.draw();
  prize.draw();
  zombie.draw();
  zombie2.draw();
  zombie3.draw();
  zombie4.draw();
  zombie5.draw();
  zombie6.draw();
  // aDoor.draw();
  }

//
function GameOver() {
  ctx.clearRect(0, 0, 1500, 1000);
  modalRestartVisibilityHandler();
}

class Prize {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    const img = new Image();
    img.src = './geisha.png';
    this.img = img;
    this.draw();
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 150, 150);
  }
}

const prize = new Prize(800, 800);

function updatePrize() {
  ctx.clearRect(0, 0, 1500, 1000);
  prize.draw();
  player.draw();
  zombie.draw();
  zombie2.draw();
  zombie3.draw();
  zombie4.draw();
  zombie5.draw();
  zombie6.draw();
  // aDoor.draw();
}

}





