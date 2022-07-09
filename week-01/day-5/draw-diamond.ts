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

function drawDiamond(lineCount: number): void {
  var starCount: number = 1;
  var space: string = ' ';
  var star: string = '*';
  for( var i = lineCount; i > 0; i--) {
    
    if(i <= Math.ceil(lineCount / 2)) {
      let num:number = i / 2;
      console.log(`${space.repeat(num)}${star.repeat(starCount)}`);
      if(i === Math.ceil(lineCount / 2 )) {
        starCount = starCount;
      } else {
        starCount += 2;
      }
    }else {
      starCount -= 2;
      let numb = (7 / 2) - i;
      console.log(`${space.repeat(4)}${star.repeat(4)}`);
    }
  }
}
drawDiamond(7)