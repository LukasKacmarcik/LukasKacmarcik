'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

ctx.strokeStyle = 'green';

for (let i = 0; i < 600; i +=20) {
  ctx.beginPath();
  ctx.moveTo(100+i,0);
  ctx.lineTo(600,i+20)
  ctx.stroke();
}

ctx.strokeStyle = 'purple';
for (let i = 0; i < 600; i +=20) {
  ctx.beginPath();
  ctx.moveTo(0,100+i);
  ctx.lineTo(i+20,600)
  ctx.stroke();
}
