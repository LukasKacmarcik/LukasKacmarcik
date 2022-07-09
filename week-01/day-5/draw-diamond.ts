'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

// function drawDiamond(lineCount: number) {
//   var starCount: number = 1;
//   var space: string = ' ';
//   var star: string = '*';
//   for( var i = lineCount; i > 0; i--) {
//     if(i <= Math.ceil(lineCount / 2)) {
//       let num:number = Math.floor(i / 2);
//       console.log(`${space.repeat(num)}${star.repeat(starCount)}`);
//       if(i === Math.ceil(lineCount / 2 )) {
//         starCount = starCount;
//       } else {
//         starCount += 2;
//       }
//     }else {
//       starCount -= 2;
//       let numb = Math.ceil(7 / 2) - i;
//       console.log(`${space.repeat(numb)}${star.repeat(starCount)}`);
//     }
//   }
// }
// drawDiamond(7)
let i = 3;
let numb = Math.ceil(7 / 2) - i;
console.log(numb);
