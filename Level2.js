
// import Bat from './Bat.js';

const canvas2 = document.getElementById("canvas_2");
const ctx2 = canvas2.getContext('2d');

const homeCountDown = document.getElementById("homeCountDown");

const victory = document.getElementById("victory");

const timeVictory = document.getElementById("timeVictory");


document.getElementById("play").addEventListener('click', reload);
function reload() {
    window.location.reload();
}


  function timerHome(limit) {
    return new Promise((resolve, reject) => {
      let count = 40;
      let id = setInterval(() => {
        count--;
        console.log(count);
        homeCountDown.textContent = count;
        timeVictory.textContent = 40 - count;
        localStorage.setItem('timeSecondLevel', (40 - count).toString());
        if (count === limit) resolve(id);
        if (done === true) resolve(id);
        if (dead === true) resolve(id);
      }, 1000);
    });
  }

  timerHome(0)
    .then((id) => {
      clearInterval(id);
      if (done === false) {
      gameOver2();
      }
    });

const failure = document.getElementById("failure");

function gameOver2 () {
    clearInterval(ballInterval);
    ctx2.clearRect(0, 0, 1000, 800);
    failure.style.visibility = "visible";
}

class Square {
    constructor(x, y, vy) {
        this.x = x;
        this.y = y;
        this.vy = vy;
    }
    draw() {
        ctx2.fillStyle = "white";
        ctx2.fillRect(this.x, this.y, 100, 20);
    }
    move() {
        if (this.y < 2 || this.y > 700) {
          ctx2.clearRect(this.x, this.y, 100, 20);
          this.vy *= -1;
          this.y += this.vy;
          this.draw();
        }
        else {
          ctx2.clearRect(this.x, this.y, 100, 20);
          this.y += this.vy;
          this.draw();
        }
      }
}

const squares = [];

function generateSquares() {
    const coordinates = [
        [3, 70, -5],
        [300, 200, 2],
        [600, 300, -3],
        [890, 400, 4]
    ]

    for (let i = 0; i < coordinates.length; i++) {
        let aSquare = new Square(coordinates[i][0], coordinates[i][1], coordinates[i][2]);
        aSquare.draw();
        squares.push(aSquare);
    }
}

generateSquares();


class Bat {
    constructor(x, y, vx) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.touched = false;
      const img = new Image();
    //   img.addEventListener('load', () => {
        this.img = img;
        img.src = './bat.png';
        this.draw();
    //   });
    //   img.src = './bat.png';
    }
  
    draw() {
      ctx2.drawImage(this.img, this.x, this.y, 100, 100);
      ctx2.rect(this.x, this.y, 100, 100);
      ctx2.stroke();
      ctx2.strokeStyle = 'blue';
    }
    move() {
      if (this.x < 2 && this.touched === false || this.x > 800 && this.touched === false) {
        ctx2.clearRect(this.x - 2, this.y - 2, 106, 106);
        this.vx *= -1;
        this.x += this.vx;
        this.draw();
        // squares.forEach(square => square.draw());
      }
      if (this.touched === true) {
        ctx2.clearRect(this.x - 2, this.y - 2, 106, 106);
      }
      else {
        ctx2.clearRect(this.x - 2, this.y - 2, 106, 106);
        this.x += this.vx;
        this.draw();
        // squares.forEach(square => square.draw());
      }
    }
  }

  let bats = [];
  function generateBats () {
   let coordinatesBats = [
       [10, 1, 5],
       [800, 51, -5],
       [300, 101, 5],
       [600, 151, -5],
   ]
   for (let i = 0 ; i < coordinatesBats.length ; i ++) {
        let aBat = new Bat(coordinatesBats[i][0], coordinatesBats[i][1], coordinatesBats[i][2]);
        bats.push(aBat);
   }}

   generateBats();


class Board {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 7;
    }
    draw() {
        ctx2.fillStyle = "green";
        ctx2.fillRect(this.x, this.y, 100, 20);
    }
    moveLeft() {
        ctx2.clearRect(this.x, this.y, 100, 20);
        this.x -= 20;
        this.draw();
    }
    moveRight() {
        ctx2.clearRect(this.x, this.y, 100, 20);
        this.x += 20;
        this.draw();
    }
}

const myBoard = new Board(30, 700);
myBoard.draw();

document.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case 37:
            myBoard.moveLeft();
            break;
        case 39:
            myBoard.moveRight();
            break;
    }
});


class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vy = 12;
        this.vx = 8;
    }
    draw() {
        ctx2.fillStyle = "red";
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, 14, 0, 2 * Math.PI);
        ctx2.stroke();
        ctx2.fill();
    }
    move() {
        ctx2.clearRect(this.x - 16, this.y - 16, 32, 32);
        this.y += this.vy;
        this.x += this.vx;
        this.draw();
    }
    rebound() {
        ctx2.clearRect(this.x - 16, this.y - 16, 32, 32);
        this.vy *= -1;
        this.y += this.vy;
        this.draw();
    }
    reboundRightSide() {
        ctx2.clearRect(this.x - 16, this.y - 16, 32, 32);
        this.vx *= -1;
        this.x += this.vx;
        this.draw();
    }
}



const aBall = new Ball(50, 50);
aBall.draw();

function openDoor2 () {
    window.location = "./Memory.html";
}

function ballUpdate() {
    const isTouched = (elem) => elem.touched === true;
    if (bats.every(isTouched)) {
        victory.style.visibility = "visible";
        ctx2.clearRect(0, 0, 1000, 800);
        done = true;
        const victoryInterval = setInterval(openDoor2, 4000);
    }
    else {
    killBats();
    bats.forEach(bat => bat.move());
    squares.forEach(square => square.move());
    squares.forEach(function(square) {
        if (Math.abs(square.x - aBall.x) < 73 && Math.abs(square.y - aBall.y) < 20) {
         aBall.rebound();
                }
    });
    if (Math.abs(myBoard.x - aBall.x) < 100 && Math.abs(myBoard.y - aBall.y) < 40) {
        aBall.rebound();
    }
    else if (aBall.y < 2) {
        aBall.rebound();
    }
    else if (aBall.x < 4 || aBall.x > 950) {
        aBall.reboundRightSide();
    }
    else if(aBall.y > 800) {
        gameOver2();
        dead = true;
    }
    else {
        aBall.move();
    }
}
}

const batCounter = document.getElementById("bat-counter");

let done = false;
let dead = false;

function killBats() {
    bats.forEach(function(bat) {
        if (aBall.x > bat.x && aBall.x < bat.x + 100 && aBall.y > bat.y && aBall.y < bat.y + 100) {
            bat.img.src = './bat2.png';
            bat.touched = true;
        }
    })
}



const ballInterval = setInterval(ballUpdate, 70);


export { squares };
export { ctx2 };


