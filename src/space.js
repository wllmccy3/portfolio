const { random } = require("animejs");

//constants
const COLOR_SPACE = "black";
const COLOR_STARS = "white";
const STAR_NUM = 200;
const STAR_SIZE = 0.005;
const STAR_SPEED = 0.05;

//canvas & context setup
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
document.body.appendChild(canvas);

//stars setup
var stars = [];
var starSpeed = STAR_SPEED * canvas.width;
var xy = starSpeed * randomSign() * Math.random();
var yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(sv, 2)) * randomSign();
for (let i = 0; i < STAR_NUM; i++) {
    stars[i] = {
        r: Math.random() * STAR_SIZE * canvas.width / 2,
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        xv: xv,
        yv: yv
    }
}

//animation loop
var timeDelta, timeLast = 0;
requestAnimationFrame(loop);

function loop(timeNow){
    //calculate the time difference
    timeDelta = timeNow - timeLast;
    timeLast = timeNow;
    //space background
    ctx.fillStyle = COLOR_SPACE;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //draw the stars
    ctx.fillStyle = COLOR_STARS;
    for (let i = 0; i < STAR_NUM; i++) {
        ctx.beginPath();
        ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI *2);
        ctx.fill();
    }
    //update star's x position
    stars[i].x += stars[i].xv * timeDelta * 0.001;
    //update star's y position
    stars[i].y += stars[i].yv * timeDelta * 0.001;
    //stars go to other side once off screen
    if (stars[i].x < 0 - stars[i].r) {
        stars[i].x = canvas.width + stars[i].r;
    } else if (stars[i].x > canvas.width + stars[i].r) {
        stars[i].x = 0 - stars[i].r;
    }
    //call the next frame
    requestAnimationFrame(loop);

    function randomSign(){
        return Math.random() >= 0.5 ? 1 : -1;
    }
}