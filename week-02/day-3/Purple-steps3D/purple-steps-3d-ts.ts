'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

var j = 5;
for(let i = 0; i < 500; i += j) {
    ctx.fillStyle = 'purple';
    var j = j*1.3;
    ctx.fillRect(i,i,j,j);
}

//  (30, 30, 30, 30,)
//  (60, 60, 45, 45,)
//  (90, 90, 67.5, 67.5,)
//  (120, 120, 101.25, 101.25,)
//  (150, 150, 30, 30,)