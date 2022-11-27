const socket = io();
const myimage = new Image();
myimage.src = "../images/neon.png";

function Myjet() {
    this.dx = 39;
    this.dy = 363;
    this.jx = 100;
    this.jy = 100;
    this.w = 74;
    this.h = 74;

}
Myjet.prototype.draw = function() {
    canvas.ctx.drawImage(myimage,this.dx,this.dy,this.w,this.h,this.jx,this.jy,this.w,this.h);

}
Myjet.prototype.update = function() {
    
}


function Canvas() {
    this.body = document.querySelector("body");
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = innerWidth-10;
    this.canvas.height = innerHeight-10;

    this.myjet  = new Myjet();
}
Canvas.prototype.draw = function() {
    this.myjet.draw();
}
Canvas.prototype.update = function() {
    this.myjet.update();
}
let canvas = new Canvas();






function anim() {
    canvas.ctx.clearRect(0,0,innerWidth,innerHeight);
    canvas.draw();
    canvas.update();
    requestAnimationFrame(anim);
}
anim();