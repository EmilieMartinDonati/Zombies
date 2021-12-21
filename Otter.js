import {ctx} from './index.js';


class Otter {

    constructor(x, y) {
        this.collected = false;
        this.x = Math.floor(Math.random() * 1399) + 1;
        this.y = Math.floor(Math.random() * 899) + 1;
        const img = new Image();
        img.src = './Otter.png';
        this.img = img;
        this.draw();
    }

    disappear() {
        this.collected = true;
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, 100, 100);
    }

}

export default Otter;


