'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

const length = 28;
const heigth = 24;

function drawTriangle(x,y) {
  // ORIGINAL values x+14,y+24
  //                 x-14,y+24
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x+14,y+24);
  ctx.lineTo(x-14,y+24);
  ctx.closePath();
  ctx.stroke();
}

function drawlineOfTriangles(arrCenter,lines) {
  let myX = length;
  for(let i = 0; i < lines; i++) {
    for(let j = 0; j < arrCenter[i][2]; j++){
      drawTriangle(arrCenter[i][0]+myX*j,arrCenter[i][1]);
    }
  }
}

function getBigTriangle(x: number,y: number,amountOfLines: number) {
  let centers: any [][]=[];
  let center: number[] = [];
  for(let i = 0; i < amountOfLines; i++) {
    center = [x-(14*i), y+(24*i)];
    center.push(i+1);
    centers.push(center);
  }
  drawlineOfTriangles(centers,amountOfLines);
}
getBigTriangle(300,100,10);