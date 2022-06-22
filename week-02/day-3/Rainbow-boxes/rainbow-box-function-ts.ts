'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

//ctx.fillStyle = '#'+ Math.floor(Math.random()*16777215).toString(16);
function createSquare(size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(canvasWidth/2 - size/2, canvasHeight/2 - size/2, size, size);
}

for(let i= 600; i > 0; i -= 30) {
    createSquare(i,'#'+ Math.floor(Math.random()*16777215).toString(16))
}//