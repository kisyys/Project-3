/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let timeToNextRave = 0;
let ravenInterval = 500;
let lastTime = 0;

let ravens = [];


class Raven {
    constructor() {
        this.width = 100;
        this.height = 50;
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height. this.height);
        this.directionX = Math.random() * 5 + 3;
        this.directionX = Math.random() * 5 + 2.5;
 
    }
    update() {
        this.x -= this.directionX;
    }
    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}


animate = (timestamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let deltatime = timestamp - lastTime;
    lastTime = timestamp
    // for(let i = 0; i<ravens.length;i++) {
    //     explosions[i].update();
    //     explosions[i].draw();
        
    // }
    requestAnimationFrame(animate);
}
animate();