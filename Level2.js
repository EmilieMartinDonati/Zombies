
import Bat from './Bat.js';

const canvas2 = document.getElementById("canvas_2");
const ctx = canvas2.getContext('2d');

const homeCountDown = document.getElementById("homeCountDown");


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
        localStorage.setItem('timeSecondLevel', (40 - count).toString());
        if (count === limit) resolve(id);
      }, 1000);
    });
  }

  timerHome(0)
    .then((id) => {
      clearInterval(id);
      gameOver();
    });

const failure = document.getElementById("failure");

function gameOver () {
    clearInterval(ballInterval);
    ctx.clearRect(0, 0, 1000, 800);
    failure.style.visibility = "visible";
}

class Square {
    constructor(x, y, vy) {
        this.x = x;
        this.y = y;
        this.vy = vy;
    }
    draw() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, 100, 20);
    }
    move() {
        if (this.y < 2 || this.y > 700) {
          ctx.clearRect(this.x, this.y, 100, 20);
          this.vy *= -1;
          this.y += this.vy;
          this.draw();
        }
        else {
          ctx.clearRect(this.x, this.y, 100, 20);
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


const aBat = new Bat(10, 1, 5);
const batTwo = new Bat(800, 51, -5);
const batThree = new Bat(300, 101, 5);
const batFour = new Bat(600, 151, -5);




class Board {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 7;
    }
    draw() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, 100, 20);
    }
    moveLeft() {
        ctx.clearRect(this.x, this.y, 100, 20);
        this.x -= 20;
        this.draw();
    }
    moveRight() {
        ctx.clearRect(this.x, this.y, 100, 20);
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
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 14, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
    move() {
        ctx.clearRect(this.x - 16, this.y - 16, 32, 32);
        this.y += this.vy;
        this.x += this.vx;
        this.draw();
    }
    rebound() {
        ctx.clearRect(this.x - 16, this.y - 16, 32, 32);
        this.vy *= -1;
        this.y += this.vy;
        this.draw();
    }
    reboundRightSide() {
        ctx.clearRect(this.x - 14, this.y - 14, 28, 28);
        this.vx *= -1;
        this.x += this.vx;
        this.draw();
    }
}



const aBall = new Ball(50, 50);
aBall.draw();

function ballUpdate() {
    killBats();
    aBat.move();
    batTwo.move();
    batThree.move();
    batFour.move();
    squares.forEach(square => square.move());
    squares.forEach(function(square) {
        if (Math.abs(square.x - aBall.x) < 100 && Math.abs(square.y - aBall.y) < 14) {
         aBall.rebound();
                }
    });
    if (Math.abs(myBoard.x - aBall.x) < 100 && Math.abs(myBoard.y - aBall.y) < 30) {
        aBall.rebound();
    }
    else if (aBall.y < 2) {
        aBall.rebound();
    }
    else if (aBall.x < 4 || aBall.x > 950) {
        aBall.reboundRightSide();
    }
    else if(aBall.y > 800) {
        gameOver();
    }
    else {
        aBall.move();
    }
}

const batCounter = document.getElementById("bat-counter");

let counter = 0;
function killBats() {
    if (Math.abs(aBall.x - aBat.x) === 100 && Math.abs(aBall.y - aBat.y) === 100) {
        aBat.img.src = './ninja.png';
        counter += 1;
        batCounter.innerHTML = counter;
    }
    if (Math.abs(aBall.x - batTwo.x) === 100 && Math.abs(aBall.y - batTwo.y) === 100) {
        batTwo.img.src = './ninja.png';
        counter += 1;
        batCounter.innerHTML = counter;
    }
    if (Math.abs(aBall.x - batThree.x) === 100 && Math.abs(aBall.y - batThree.y) === 100) {
        batThree.img.src = './ninja.png';
        counter += 1;
        batCounter.innerHTML = counter;
    }
    if (Math.abs(aBall.x - batFour.x) === 100 && Math.abs(aBall.y - batFour.y) === 100) {
        batFour.img.src = './ninja.png';
        counter += 1;
        batCounter.innerHTML = counter;
    }
//     if (Math.abs(aBall.x - aBat.x) < 102 && Math.abs(aBall.y - aBat.y) < 102) {
//        aBall.rebound();
//     }
//     if (Math.abs(aBall.x - batTwo.x) < 102 && Math.abs(aBall.y - batTwo.y) < 102) {
//         aBall.rebound();
//      }
//      if (Math.abs(aBall.x - batThree.x) < 102 && Math.abs(aBall.y - batThree.y) < 102) {
//         aBall.rebound();
//      }
//      if (Math.abs(aBall.x - batFour.x) < 102 && Math.abs(aBall.y - batFour.y) < 102) {
//         // aBall.rebound();
//      }
}


const ballInterval = setInterval(ballUpdate, 70);


export { squares };
export { ctx };


