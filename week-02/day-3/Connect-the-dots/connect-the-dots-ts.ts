'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

let arrPoints = [[10, 10], [290,  10], [290, 290], [10, 290]];
ctx.strokeStyle = 'green';
function connectingPoints(arr: any[]) {
    ctx.beginPath()
    let firstPoint: number[] = arr[0];
    ctx.moveTo(firstPoint[0],firstPoint[1]);
    for(let i = 1; i < arr.length; i++){
        let point: number[] = arr[i];
        ctx.lineTo(point[0], point[1]);
        ctx.stroke();
        if(i == arr.length -1) {
            ctx.closePath();
            ctx.stroke();
        }
    }
}

connectingPoints(arrPoints);

let newArr = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
 [120, 100], [85, 130], [50, 100]];

 connectingPoints(newArr);
