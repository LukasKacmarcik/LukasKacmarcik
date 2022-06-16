//cuboid.ts
let a = 50;
let b = 30;
let c = 20;

let Top = a*b;
let bottom = Top;
let front = a*c;
let back = front;
let rightSide = b*c;
let leftSide = rightSide;

let surfaceArea = Top+bottom+front+back+rightSide+leftSide;

let volume = a*b*c;

console.log("Surface area is " + surfaceArea);
console.log("Volume is " + volume);



