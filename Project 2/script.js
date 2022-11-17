// let playerState = "fall";
// const dropdown = document.getElementById("animations");
// dropdown.addEventListener('change', function(e){
//     playerState = e.target.value;
// })

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 15;

const backgroundLayer1 = new Image();
backgroundLayer1.src="layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src="layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src="layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src="layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src="layer-5.png";

let x = 0;
let x2 = 2400;

animate = () => {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer4, x, 0);
    ctx.drawImage(backgroundLayer4, x2, 0);
    if(x<-2400) x = 2400 + x2 - gameSpeed;
    else x -=gameSpeed;
    if(x2<-2400) x2 = 2400 + x - gameSpeed;
    else x2 -=gameSpeed;  
    requestAnimationFrame(animate);   
}
animate();

// const spriteWidth = 575;
// const spriteHeight = 523;

// let gameFrame = 0;
// const staggerFrames = 5;
// const spriteAnimations = [];
// const animationStates = [
//     {
//         name: "idle",
//         frames: 7,
//     },
//     {
//         name: "jump",
//         frames: 7,
//     },
//     {
//         name: "fall",
//         frames: 7,
//     },
//     {
//         name: "run",
//         frames: 9,
//     },
//     {
//         name: "dizzy",
//         frames: 11,
//     },
//     {
//         name: "sit",
//         frames: 5,
//     },
//     {
//         name: "roll",
//         frames: 7,
//     },
//     {
//         name: "bite",
//         frames: 7,
//     },
//     {
//         name: "ko",
//         frames: 12,
//     },
//     {
//         name: "getHit",
//         frames: 4,
//     }

// ];

// animationStates.forEach((state,index) =>  {
//     let frames = {
//         loc: [],
//     }
//     for (let j = 0; j<state.frames; j++) {
//         let positionX = j * spriteWidth;
//         let positionY = index * spriteHeight;
//         frames.loc.push({x: positionX, y: positionY});
//     }
//     spriteAnimations[state.name] = frames;
// });
// console.log(spriteAnimations);


    

//     gameFrame++;
//     
// }
