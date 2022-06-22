'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

ctx.fillStyle = 'green';
ctx.fillRect(canvasWidth/2, canvasHeight/2, 10, 10);