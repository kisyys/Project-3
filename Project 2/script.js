// let playerState = "fall";
// const dropdown = document.getElementById("animations");
// dropdown.addEventListener('change', function(e){
//     playerState = e.target.value;
// })

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer.src="layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer.src="layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer.src="layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer.src="layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer.src="layer-5.png";

animate = () => {
    ctx.drawImage(backgroundLayer4, 0, 0);   
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
//     requestAnimationFrame(animate);
// }
