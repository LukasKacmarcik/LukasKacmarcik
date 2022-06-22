const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

function drawEmptySquares(x) {
    ctx.strokeRect(canvasWidth/2-x/2 , canvasHeight/2-x/2, x, x);
}

for(let i = 0; i < 3; i++) {
    drawEmptySquares(Math.random()*300);
}
//