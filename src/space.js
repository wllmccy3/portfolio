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
    //call the next frame
    requestAnimationFrame(loop);

    function randomSign(){
        return Math.random() >= 0.5 ? 1 : -1;
    }
}