'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

function drawSquare(x,y) {
    ctx.fillRect(x,y, 50, 50);
}

for(let i =0; i < 3; i++) {
    drawSquare(Math.random()*500,Math.random()*300);
}
