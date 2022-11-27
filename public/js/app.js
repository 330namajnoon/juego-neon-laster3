const socket = io();
const myimage = new Image();
myimage.src = "../images/neon.png";

function Myjet() {
    this.dx = 39;
    this.dy = 360;
    this.jx = innerWidth/2-35;
    this.jy = innerHeight-130;
    this.w = 74;
    this.h = 74;
    this.s = 10;

    window.addEventListener("keydown", (e) => {

        switch (e.keyCode) {
            case 37:
                if (this.jx > 0) this.jx -= this.s;
                break;
            case 38:
                if(this.jy > 0) this.jy -= this.s;
                break;
            case 39:
                if(this.jx + this.w < innerWidth)this.jx += this.s;
                break;
            case 40:
                if(this.jy + this.h*2 < innerHeight)this.jy += this.s;
                break;
            case 32:

                break;

        }

    })


}
Myjet.prototype.draw = function () {
    canvas.ctx.drawImage(myimage, this.dx, this.dy, this.w, this.h, this.jx, this.jy, this.w, this.h);
    canvas.ctx.drawImage(myimage, 70, 670, 32, 52, this.jx + 18, this.jy + this.h - 5, 32, 52);
}
Myjet.prototype.update = function () {


}


function Canvas() {
    this.body = document.querySelector("body");
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = innerWidth - 10;
    this.canvas.height = innerHeight - 10;

    this.myjet = new Myjet();
}
Canvas.prototype.draw = function () {
    this.myjet.draw();
}
Canvas.prototype.update = function () {
    this.myjet.update();
}
let canvas = new Canvas();






function anim() {
    canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
    canvas.draw();
    canvas.update();
    requestAnimationFrame(anim);
}
anim();