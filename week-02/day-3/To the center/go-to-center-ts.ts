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

//drawToCenter(20,10)

let randomNum = Math.random() * 900; 



for(let i =0; i < 3; i++) {
    drawToCenter(Math.random()*1000, Math.random()*1000)
}