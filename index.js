//Quiz.
const question = document.getElementById("question");
// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');

// submitButton.addEventListener('click', showResults);


// const myQuestions = [
//   {
//     question: "Who invented JavaScript?",
//     answers: {
//       a: "Douglas Crockford",
//       b: "Sheryl Sandberg",
//       c: "Brendan Eich"
//     },
//     correctAnswer: "c"
//   },
//   {
//     question: "Which one of these is a JavaScript package manager?",
//     answers: {
//       a: "Node.js",
//       b: "TypeScript",
//       c: "npm"
//     },
//     correctAnswer: "c"
//   },
//   {
//     question: "Which tool can you use to ensure code quality?",
//     answers: {
//       a: "Angular",
//       b: "jQuery",
//       c: "RequireJS",
//       d: "ESLint"
//     },
//     correctAnswer: "d"
//   }
// ];

// function buildQuiz(){
//   const output = [];

//   myQuestions.forEach(
//     (currentQuestion, questionNumber) => {

//       const answers = [];

//       for(letter in currentQuestion.answers){

//         answers.push(
//           `<label>
//             <input type="radio" name="question${questionNumber}" value="${letter}">
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//           </label>`
//         );
//       }

//       output.push(
//         `<div class="question"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join('')} </div>`
//       );
//     }
//   );

//   quizContainer.innerHTML = output.join('');
// }

// buildQuiz();

// function showResults(){

//   // gather answer containers from our quiz
//   const answerContainers = quizContainer.querySelectorAll('.answers');

//   // keep track of user's answers
//   let numCorrect = 0;

//   // for each question...
//   myQuestions.forEach( (currentQuestion, questionNumber) => {

//     // find selected answer
//     const answerContainer = answerContainers[questionNumber];
//     const selector = `input[name=question${questionNumber}]:checked`;
//     const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//     // if answer is correct
//     if(userAnswer === currentQuestion.correctAnswer){
//       // add to the number of correct answers
//       numCorrect++;

//       // color the answers green
//       answerContainers[questionNumber].style.color = 'lightgreen';
//     }
//     // if answer is wrong or blank
//     else{
//       // color the answers red
//       answerContainers[questionNumber].style.color = 'red';
//     }
//   });

//   // show number of correct answers out of total
//   resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
// }



function displayQuizz () {
  question.style.visibility = "visible";
  console.log("display");
}




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

disableScroll();function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}



//
const homeCountDown = document.getElementById("homeCountDown");

// function Home(limit) {
//   return new Promise((resolve, reject) => {
//     let count = 100;
//     let id = setInterval(() => {
//       count--;
//       homeCountDown.textContent = count;
//       if (count === limit) resolve(id);
//     }, 1000);
//   });
// }

// timerHome(0)
//   .then((id) => {
//     clearInterval(id);
//     modalRestartVisibilityHandler();
//   });


const modal = document.getElementById("modal");

const startBtn = document.getElementById("start-btn");

const modal2 = document.getElementById('modal2');

const restartBtn = document.getElementById("restart-btn");

function modalStartVisibilityHandler() {
  modal.style.visibility = "hidden";
}


function modalRestartVisibilityHandler() {
  modal2.style.visibility = "visible";
}

startBtn.addEventListener("click", modalStartVisibilityHandler);

function refresh() {
  window.location.reload();
}

restartBtn.addEventListener("click", refresh);

const points = document.getElementById("points");

// const span = document.getElementById('counter-display');
// function decrement() {
//   let count = 2;
//   let isThereTimeStill = true;
//   while (count > 0) {
//     count -= 1;
//     // console.log(typeof count);
//     span.innerHTML = count;
//     if (count = 0) {
//       span.innerHTML = "You've ran out of times";
//     }
//   }

// else {
//   isThereTimeStill = false;
//   count = "You've run out of times !";
//   span.innerHTML = count;
// }
// console.log(typeof count);


// const interval = setInterval(decrement, 1000);

// function myStopFunction() {
//   clearInterval(interval);
// }


// const myGameArea = {
//   canvas: document.getElementById('castle'),
//   frames: 0,
//   start: function () {
//     this.context = this.canvas.getContext('2d');
//     var background = new Image();
//     background.src = "Japanese-Castle.jpg";
//     background.onload = function() {
//         this.context.drawImage(background, 0, 0);
//     }
//     this.context.fillStyle = 'purple';
//     this.context.beginPath();
//     this.context.moveTo(50, 50);
//     this.context.lineTo(250, 50);
//     this.context.stroke();
//     this.context.moveTo(250, 50);
//     this.context.lineTo(250, 100);
//     this.context.stroke();
//     this.context.closePath();

// //     this.interval = setInterval(updateGameArea, 2000)
// },
//   clear: function () {
//   this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
// },
//   stop: function () {
//   clearInterval(this.interval);
// },
// }


//
const canvas2 = document.getElementById("other");
const ctx = canvas2.getContext('2d');

// const theCastle = new Image();
// theCastle.src = './Japanese-Castle.jpg';
// ctx.drawImage(theCastle);

// function drawLabyrinth() {
// ctx.fillStyle = 'purple';
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 50);
// ctx.stroke();
// ctx.moveTo(200, 50);
// ctx.lineTo(200, 180);
// ctx.stroke();
// ctx.closePath();
// ctx.moveTo(200, 180);
// ctx.lineTo(350, 180);
// ctx.stroke();
// ctx.closePath();
// ctx.moveTo(80, 100)
// ctx.lineTo(80, 250);
// ctx.stroke();
// ctx.closePath();
// }

// class Component {
//   constructor(x, y, src) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     this.x = x;
//     this.y = y;

//    // Load the image
//    const image = new Image();
//    image.addEventListener('load', () => {
//      // Once image loaded => draw
//      this.image = image;
//      this.draw();
//    });
//    image.src = './tux-161365_640.png';
//    src = image.src;
//  }
//  // update() {
//  //   const context = myGameArea.context;
//  //   this.draw();
//  // }
//  draw() {
//    ctx.drawImage(this.image, this.x, this.y, 50, 50);
// }
//   }


// // //Exécution.

// const gamePlayer = new Component(50, 50, './man-g8ee15bac5_640.png');

//Zombies.


class Door {
  constructor(x, y) {
    this.x = 1300;
    this.y = 900;

    // Load the image
    const img = new Image();
    // img.addEventListener('load', () => {
    //   // Once image loaded => draw
    //   this.img = img;
    //   this.draw();
    // });
    img.src = './door.jpg';
    this.img = img;
    this.draw();
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 75);
  }
}

const aDoor = new Door();

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

const zombie = new Zombie(1000, 25, 8, 2);
const zombie2 = new Zombie(80, 100, 4, 3);
const zombie3 = new Zombie(150, 300, -1, -7);
const zombie4 = new Zombie(500, 20, -5, -1);

//generateZombies.

// //Création d'un range pour la génération.
// function randomIntFromInterval(min, max) { // min and max included 
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }


// // tableau de zombies.
// const zombies = [];
// // const coordinates = [];
// // Générer des zombies.
// function generateZombie(abs, ord) {
//   let aZombie = new Zombie(abs, ord);
//   zombies.push(aZombie);
// }
// for (let i = 0 ; i < 6 ; i ++) {
//   let coordinate = [randomIntFromInterval(50, 900), randomIntFromInterval(50, 900)]
//   // coordinates.push(coordinate);
//   generateZombie(coordinate[0], coordinate[1]);
// }

// console.log(zombies[4])



// function moveZombies() {
//   zombies.forEach(function move(zombie) {
//     zombie.move();
//   })
// }

// sauver les coordonnées, 
function updateZombies() {
  // ctx.clearRect(0, 0, 1500, 1000);
  updatePlayer();
  updatePrize();
  zombie.draw();
  zombie2.draw();
  zombie3.draw();
  zombie4.draw();
  if (zombie.x > 1200 || zombie.y > 600 || zombie.x < 1 || zombie.y < 1) {
    zombie.move("minus");
  }
  else {
    zombie.move("plus");
  }
  if (zombie2.x > 1200|| zombie.y > 600 || zombie2.x < 1 || zombie2.y < 1) {
    zombie2.move("minus");
  }
  else {
    zombie2.move("plus");
  }
  if (zombie3.x > 1200 || zombie.y > 600 || zombie3.x < 1 || zombie3.y < 1) {
    zombie3.move("minus");
  }
  else {
    zombie3.move("plus");
  }
  if (zombie4.x > 1200 || zombie.y > 600 || zombie4.x < 1 || zombie4.y < 1) {
    zombie4.move("minus");
  }
  else {
    zombie4.move("plus");
  }
  const zombiesArr = [];
  zombiesArr.push(zombie);
  zombiesArr.push(zombie2);
  zombiesArr.push(zombie3);
  zombiesArr.push(zombie4);
  zombiesArr.forEach(function crashCheck(zombie) {
    if ((zombie.y - player.y < 50) && (zombie.x - player.x < 50)) {
      GameOver();
      // stopFunction();
    }
  })
  if (prize.y - player.y < 50 && prize.x - player.x < 50) { 
    displayQuizz();
    stopFunction();
  }
  // use time to generate zombies any x time %;
  // console.log(zombies);
  // console.log(zombies[0].y);
  // const coordinates = [[zombies[0].x, zombies[0].y],[zombies[1].x, zombies[1].y],[zombies[2].x, zombies[2].y],[zombies[3].x, zombies[3].y],[zombies[4].x, zombies[4].y],[zombies[5].x, zombies[5].y]]
  // // zombies.map(function (zombie) {
  // //   [zombie.x, zombie.y];
  // // })
  // console.log(coordinates);
  // for (let i = 0 ; i < 6 ; i ++) {
  //   generateZombie(coordinates[i][0], coordinates[i][1]);
  // }
  // console.log(zombies);
  // zombies.forEach(function move(zombie) {
  // zombie.move();

  // const zombie = new Zombie(30, 30);
  // zombie.move();
  // const zombie2 = new Zombie(50, 50);
  // zombie2.move();
  // const zombie3 = new Zombie(200, 350);
  // zombie3.move();
  // const zombie4 = new Zombie(550, 70);
  // zombie4.move();
  // })
  // moveZombies();
  //   zombies.forEach(function crashCheck(zombie) {
  //     if ((zombie.y - player.y < 50) && (zombie.x - player.x < 50)) {
  //       GameOver();
  //     }
  //   })
  //   if ((prize.y - player.y < 50) && (prize.x - player.x < 50)) { console.log("Well done") }
  // }
}

const intervalId = setInterval(updateZombies, 100);

function stopFunction() {
  clearInterval(intervalId);
}

//Player.

class Player {
  constructor(x, y) {
    this.x = 30;
    this.y = 30;

    // Load the image
    const imgPlayer = new Image();
    // imgPlayer.addEventListener('load', () => {
    //   // Once image loaded => draw
    //   this.img = imgPlayer;
    //   this.draw();
    // });
    imgPlayer.src = './man-g8ee15bac5_640.png';
    this.img = imgPlayer;
    this.draw();
  }
  moveUp() {
    this.y -= 25;
  }
  moveDown() {
    this.y += 25;
  }
  moveLeft() {
    this.x -= 25;
  }
  moveRight() {
    this.x += 25;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 120, 120);
  }

  //   left() {
  //     return this.x;
  //   }
  //   right() {
  //     return this.x + this.width;
  //   }
  //   top() {
  //     return this.y;
  //   }
  //   bottom() {
  //     return this.y + this.height;
  //   }
  //   crashWith(zombie) {
  //     return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
  //   }
  // }
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
  aDoor.draw();
  // if (zombie.x === 900 || zombie.y === 1300) {
  //   zombie.move("minus");
  // }
  // else {
  //   zombie.move("plus");
  // }
  // if (zombie2.x === 900 || zombie.y === 1300) {
  //   zombie2.move("minus");
  // }
  // else {
  //   zombie2.move("plus");
  // }
  // if (zombie3.x === 900 || zombie.y === 1300) {
  //   zombie3.move("minus");
  // }
  // else {
  //   zombie3.move("plus");
  // }
  // if (zombie4.x === 900 || zombie.y === 1300) {
  //   zombie4.move("minus");
  // }
  // else {
  //   zombie4.move("plus");
  }
  // generateZombie();
  // moveZombies();
  //   zombies.forEach(function crashCheck(zombie) {
  //     if ((zombie.y - player.y < 50) && (zombie.x - player.x < 50)) {
  //       GameOver();
  //     }
  //   })
  //   if ((prize.y - player.y < 50) && (prize.x - player.x < 50)) { console.log("Well done") }
  // }



//
function GameOver() {
  // ctx.clearRect(0, 0, 1500, 1000);
  // window.location.reload();
  modalRestartVisibilityHandler();
  console.log("crash");
}

// 
// Collision.
// Loop thru zombiesArray.
//
// zombies.forEach(function crashCheck(zombie) {
//   if ((zombie.y - player.y < 50) && (zombie.x - player.x < 50) ) {
//     GameOver();
//   }
// })

//

class Prize {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // Load the image
    const img = new Image();
    // img.addEventListener('load', () => {
    //   // Once image loaded => draw
    //   this.img = img;
    //   this.draw();
    // });
    img.src = './geisha.png';
    this.img = img;
    this.draw();
  }
  draw() {
    // this.move()
    ctx.drawImage(this.img, this.x, this.y, 150, 150);
  }
  // move() {
  //   this.x -= 1;
  //   this.y -= 1; 
  // }
}

const prize = new Prize(800, 800);
// const prize2 = new Prize(700, 700);

function updatePrize() {
  ctx.clearRect(0, 0, 1500, 1000);
  prize.draw();
  player.draw();
  // generateZombies();
  zombie.draw();
  zombie2.draw();
  zombie3.draw();
  zombie4.draw();
  aDoor.draw();
  // if (zombie.x === 900 || zombie.y === 1300) {
  //   zombie.move("minus");
  // }
  // else {
  //   zombie.move("plus");
  // }
  // if (zombie2.x === 900 || zombie.y === 1300) {
  //   zombie2.move("minus");
  // }
  // else {
  //   zombie2.move("plus");
  // }
  // if (zombie3.x === 900 || zombie.y === 1300) {
  //   zombie3.move("minus");
  // }
  // else {
  //   zombie3.move("plus");
  // }
  // if (zombie4.x === 900 || zombie.y === 1300) {
  //   zombie4.move("minus");
  // }
  // else {
  //   zombie4.move("plus");



  
    ctx.clearRect(0, 0, 1500, 1000);
  player.draw();
  // generateZombies();
  zombie.draw();
  zombie2.draw();
  zombie3.draw();
  zombie4.draw();
  aDoor.draw();
  prize.draw();
  // if (zombie.x === 900 || zombie.y === 1300) {
  //   zombie.move("minus");
  // }
  // else {
  //   zombie.move("plus");
  // }
  // if (zombie2.x === 900 || zombie.y === 1300) {
  //   zombie2.move("minus");
  // }
  // else {
  //   zombie2.move("plus");
  // }
  // if (zombie3.x === 900 || zombie.y === 1300) {
  //   zombie3.move("minus");
  // }
  // else {
  //   zombie3.move("plus");
  // }
  // if (zombie4.x === 900 || zombie.y === 1300) {
  //   zombie4.move("minus");
  // }
  // else {
  //   zombie4.move("plus");
  // }
  // }
}



// Compteur des points. 


