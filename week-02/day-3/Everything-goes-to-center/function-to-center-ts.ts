'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

function drawToCenter(x,y) {
    
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(canvasWidth/2, canvasHeight/2);
    ctx.stroke();

}
//drawToCenter(90,0)

function drawFromTop() {
    for(let i = 0; i < 620; i += 20) {
        drawToCenter(i,0);
    }
}

drawFromTop();

function drawFromLeft() {
    for(let i = 0; i < 420; i += 20) {
        drawToCenter(0,i);
    }
}

drawFromLeft();
////////////////////////////////////////////////
function drawFromBottom() {
    for(let i = 600; i > 0; i -= 20) {
        drawToCenter(i,400);
    }
}

drawFromBottom();

function drawFromRight() {
    for(let i = 400; i > 0; i -= 20) {
        drawToCenter(600,i);
    }
}

drawFromRight();