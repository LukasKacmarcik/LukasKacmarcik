'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

ctx.fillRect((canvasWidth/2)-50, canvasHeight/2 - 50, 100, 100);

ctx.strokeStyle = 'green';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(canvasWidth/2-50, canvasHeight/2+50);
ctx.lineTo(canvasWidth/2-50, canvasHeight/2-50);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(canvasWidth/2-50, canvasHeight/2-50);
ctx.lineTo(canvasWidth/2+50, canvasHeight/2-50);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(canvasWidth/2+50, canvasHeight/2-50);
ctx.lineTo(canvasWidth/2+50, canvasHeight/2+50);
ctx.stroke();

ctx.strokeStyle = 'yellow';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(canvasWidth/2+50, canvasHeight/2+50);
ctx.lineTo(canvasWidth/2-50, canvasHeight/2+50);
ctx.stroke();

