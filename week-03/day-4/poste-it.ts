class PostIt {
  backGroundColor: string;
  text: string;
  colorOfText: string;

 constructor(backCol:string, text:string, colorOfText:string) {
  this.backGroundColor = backCol;
  this.text = text;
  this.colorOfText = colorOfText;
 }
}

let con1 = new PostIt('orange', 'Idea1', 'blue');
let con2 = new PostIt('pink', 'Awesome', 'black');
let con3 = new PostIt('orange', 'Superb!', 'green');
console.log(con1);
console.log(con2);
console.log(con3);
