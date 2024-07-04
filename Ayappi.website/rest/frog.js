const canvas = document.getElementById("character");
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 400;
const CANVAS_HEIGHT = canvas.height = 400;

const playerImage = new Image();
playerImage.src = 'rest_image/frog2.png';
const spriteWidth = 364;
const spriteHeight = 410;
let frameX = 6;
let gameFrame = 0;
const staggerFrames = 5;


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100, 50, 100, 100);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0,  spriteWidth, spriteHeight);
    if(gameFrame % staggerFrames == 0){
        if(frameX <3) frameX++;
        else frameX = 0;
    }

    gameFrame++; 
    requestAnimationFrame(animate);

};

animate();