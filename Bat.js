
// import { ctx, squares } from './level2.js';

class Bat {
  constructor(x, y, vx) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    const img = new Image();
    img.addEventListener('load', () => {
      this.img = img;
      this.draw();
    });
    img.src = './images-all-level/bat.png';
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, 100, 100);
    ctx.rect(this.x, this.y, 100, 100);
    ctx.stroke();
    ctx.strokeStyle = 'blue';
  }
  move() {
    if (this.x < 2 || this.x > 800) {
      ctx.clearRect(this.x - 2, this.y - 2, 106, 106);
      this.vx *= -1;
      this.x += this.vx;
      this.draw();
      squares.forEach(square => square.draw());
    }
    else {
      ctx.clearRect(this.x - 2, this.y - 2, 106, 106);
      this.x += this.vx;
      this.draw();
      squares.forEach(square => square.draw());
    }
  }
}

// export default Bat;
