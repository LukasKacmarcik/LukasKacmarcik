'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

for(let i=0; i < 4; i++) {
    //
    ctx.fillStyle = '#'+ Math.floor(Math.random()*16777215).toString(16);
    ctx.fillRect(Math.random()* 600,Math.random()* 300,Math.random()* 30,Math.random()* 30);
}