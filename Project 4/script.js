/** @type {HTMLCanvasElement} */

// Canvas attributes
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 700;
let canvasPosition = canvas.getBoundingClientRect();

// Creating Explosion class and array
const explosions = [];
class Explosion {
    constructor(x,y) {
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth * 0.7;
        this.height = this.spriteHeight * 0.7;
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "boom.png";  
        this.frame = 0;
        this.timer = 0;
        this.angle = Math.random() * 6.2;
        this.sound = new Audio();
        this.sound.src = "boom.wav"  // found at https://opengameart.org/content/magic-sfx-sample
    }
    update() {
        if(this.frame===0){
            this.sound.play();
        }
        this.timer++;
        if(this.timer % 10 == 0) {
            this.frame++;
        }  
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, this.spriteWidth* this.frame, 0, this.spriteWidth, this.spriteHeight, 0 - this.width/2, 0 - this.height/2, this.width, this.height);
        ctx.restore();
    }
}

// Creating Event Listener for mouse clicking
this.addEventListener("click", function(e){
    createAnimation(e);
});

// Creating explosions with mouse click even listener and adding them to array
createAnimation = (e) => {
    let positionX = e.x - canvasPosition.left;
    let positionY = e.y - canvasPosition.top;
    explosions.push(new Explosion(positionX,positionY));
}

// Creating animation
animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i<explosions.length;i++) {
        explosions[i].update();
        explosions[i].draw();
        if(explosions[i].frame >5) {
            explosions.splice(i,1);
            i--;
        }
    }
    requestAnimationFrame(animate);
}
animate();