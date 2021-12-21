import {ctx} from './index.js';


class Ghost {

    constructor() {
        this.x = Math.floor(Math.random() * 1299) + 1;
        this.y = Math.floor(Math.random() * 899) + 1;
        this.vx = Math.floor(Math.random() * 14) + - 7;
        this.vy = Math.floor(Math.random() * 14) + - 7;
        const img = new Image();
        img.src = './tux-161365_640.png';
        this.img = img;
        this.draw();
    }

    draw() {
        this.move();
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

export default Ghost;