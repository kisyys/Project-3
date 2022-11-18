/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;

class Enemy {
    constructor(image, speedModifier) {
        this.x = 10;
        this.y = 50;
        this.width = 100;
        this.height = 100;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = 0;
        }
        this.x = Math.floor(this.x - this.speed);
        // this.x = gameFrame * this.speed % this.width;
    }
    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

const enemy1 = new Enemy();

animate = () => {
    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    requestAnimationFrame(animate);
}
animate();