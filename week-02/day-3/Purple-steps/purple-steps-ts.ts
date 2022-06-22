'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

for(let i = 0; i < 500; i += 30) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(i,i,30,30);
}