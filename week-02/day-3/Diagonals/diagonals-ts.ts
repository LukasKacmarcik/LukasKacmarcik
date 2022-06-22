'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

function drowLine() {
    ctx.strokeStyle= 'green';
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.stroke();

    ctx.strokeStyle= 'red';
    ctx.beginPath();
    ctx.moveTo(canvasWidth,0);
    ctx.lineTo(0, canvasHeight);
    ctx.stroke();
}
drowLine();
