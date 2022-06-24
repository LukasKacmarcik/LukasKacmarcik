'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

ctx.strokeStyle = 'green';

for (let i = 0; i < 300; i +=20) {
  ctx.beginPath();
  ctx.moveTo(0+i,300);
  ctx.lineTo(300,i+320)
  ctx.stroke();
}

ctx.strokeStyle = 'red';
for (let i = 0; i < 300; i +=20) {
  ctx.beginPath();
  ctx.moveTo(600-i,300);
  ctx.lineTo(300,i+320)
  ctx.stroke();
}

ctx.strokeStyle = 'purple';
for (let i = 0; i < 300; i +=20) {
  ctx.beginPath();
  ctx.moveTo(300,0+i);
  ctx.lineTo(i+320,300)
  ctx.stroke();
}

ctx.strokeStyle = 'blue';
for (let i = 0; i < 300; i +=20) {
  ctx.beginPath();
  ctx.moveTo(300,0+i);
  ctx.lineTo(280-i,300)
  ctx.stroke();
}

ctx.strokeStyle = 'yellow'
ctx.beginPath();
ctx.moveTo(300,0);
ctx.lineTo(300,600);
ctx.stroke();