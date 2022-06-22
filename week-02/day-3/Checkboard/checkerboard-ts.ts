'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

// for(let i = 0; i < 500; i += 30) {
//     ctx.fillStyle = 'purple';
//     ctx.fillRect(i,i,30,30);
// }

function changeStartPositionY(changeby) {
    for(let i = 0; i < 500; i += 30) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(i,i+changeby,30,30);
    }
}

// for(let i = 60; i < 1000; i += 60) {
//     changeStartPositionY(i);
// }

function changeStartPositionX(changeby) {
    for(let i = 0; i < 500; i += 30) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(i+changeby,i,30,30);
    }
}

// for(let j = 60; j < 1000; j += 60) {
//     changeStartPositionX(j);
//}

function createCheckboard() {
    for(let i = 0; i < 500; i += 30) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(i,i,30,30);
    }
    for(let z = 60; z < 1000; z += 60) {
    changeStartPositionX(z);
    changeStartPositionY(z);
    }    
}

 createCheckboard()