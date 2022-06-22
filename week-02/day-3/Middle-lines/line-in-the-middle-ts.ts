'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(0, canvasHeight/2);
ctx.lineTo(canvasWidth, canvasHeight/2);
ctx.stroke();
console.log('heLOOOOO');

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(canvasWidth/2, 0);
ctx.lineTo(canvasWidth/2, canvasHeight);
ctx.stroke();