'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

export function drawPyramid(lineCount: number) {
  let dotCount = 1;
  for(let i = lineCount; i > 0; i--) {
    let line = '';
    line = ' '.repeat(i - 1) + '*'.repeat(dotCount);
    console.log(line);
    dotCount += 2;
  }
}