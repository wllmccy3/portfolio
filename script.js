function openNav(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("responsive");
}

//constants
const COLOR_BG
const COLOR_CUBE
const SPEED_X
const SPEED_Y
const SPEED_Z
const POINT3D = function(x, y, z) {this.x = x; this.y = y; this.z = z;};

var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

var h = document.documentElement.clientHeight;
var w = document.documentElement.clientWidth;
canvas.height = h;
canvas.width = w;

ctx.fillStyle = COLOR_BG;
ctx.strokeStyle = COLOR_CUBE;
ctx.lineWidth = w / 100;
ctx.lineCap = "round";

var timeDelta, timeLast = 0;
requestAnimationFrame(loop);

function loop(timeNow){
    timeDelta = timeNow - timeLast;
    timeLast = timeNow;
    ctx.fillRect(0, 0, w, h);
    requestAnimationFrame(loop);
}