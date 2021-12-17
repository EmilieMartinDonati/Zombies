
// PAGE 2. 

const canvas2 = document.getElementById("p2");
const ctx2 = canvas2.getContext('2d');

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
    ctx2.drawImage(this.img, this.x, this.y, 120, 120);
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
  ctx2.clearRect(0, 0, 1500, 1000);
  player.draw();
  prize.draw();
  // zombie.draw();
  // zombie2.draw();
  // zombie3.draw();
  // zombie4.draw();
  // zombie5.draw();
  // zombie6.draw();
  // aDoor.draw();
  }

//
function GameOver() {
  ctx2.clearRect(0, 0, 1500, 1000);
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
    ctx2.drawImage(this.img, this.x, this.y, 150, 150);
  }
}

const prize = new Prize(800, 800);

function updatePrize() {
  ctx2.clearRect(0, 0, 1500, 1000);
  prize.draw();
  player.draw();
  // zombie.draw();
  // zombie2.draw();
  // zombie3.draw();
  // zombie4.draw();
  // zombie5.draw();
  // zombie6.draw();
  // aDoor.draw();
}