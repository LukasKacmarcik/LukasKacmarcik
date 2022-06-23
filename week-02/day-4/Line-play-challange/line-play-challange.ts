'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

let startX = 38;
let startY = 0;
let endX = 76;
let endY = 38;

function createSquare(startX,startY,endX,endY) {

  ctx.strokeStyle = 'green';

  for (let i = 0; i < 38; i +=1) {
    ctx.beginPath();
    ctx.moveTo(startX+i,startY);
    ctx.lineTo(endX,startY + i + 2)
    ctx.stroke();
  }

  ctx.strokeStyle = 'purple';
  for (let i = 0; i < 38; i +=1) {
    ctx.beginPath();
    ctx.moveTo(startX,startY+i);
    ctx.lineTo(startX + i + 2,endY)
    ctx.stroke();
  }
}


for(let i = 0; i <= 570; i += 38) {
  createSquare(i,i,i+38,i+38);
}

for(let m = 1; m < 16; m++){
  let j = 38*m;
  for(let i = 0; i <= 570; i += 38) {
    createSquare(i+j,i,i+38+j,i+38);
  }
}

for(let m = 1; m < 16; m++){
  let j = 38*m;
  for(let i = 0; i <= 570; i += 38) {
    createSquare(i,i+j,i+38,i+38+j);
  }
}