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

// export function drawDiamond(lineCount: number): void {
//   var starCount: number = 1;
//   var space: string = ' ';
//   var star: string = '*';
//   let line = '';
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
///////////////////DONT WORK BECAUSE REPEAT CANT WORK WITH NEGATIV NUMBERS///////////////////IT CAN BE FIXED/////////////

export function drawDiamond(lineCount: number) {
  let dotCount: number = 1;
  for(let i = Math.ceil(lineCount / 2); i > 0; i--) {
    let line = '';
    line = ' '.repeat(i - 1) + '*'.repeat(dotCount);
    console.log(line);
    dotCount += 2;
  }
  dotCount -= 4;
  for(let i = 1; i < Math.ceil(lineCount / 2); i++) {
    let line = '';
    line = ' '.repeat(i ) + '*'.repeat(dotCount);
    console.log(line);
    dotCount -= 2;
  }
}