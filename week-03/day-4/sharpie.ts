export class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number, inkAmount:number = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }

  public use() {
    if(this.inkAmount >= 10){
      this.inkAmount -= 10;
    } else {
      throw new Error(`ink is out m8 ${this.inkAmount}`);
    }
  }
}

// let sharpie = new Sharpie('red', 10,);
// console.log(sharpie);
// sharpie.use();
// console.log(sharpie);
// sharpie.use();
// console.log(sharpie);
// console.log(sharpie);
// sharpie.use();
// console.log(sharpie);
// sharpie.use();
// console.log(sharpie);
// console.log(sharpie);
// sharpie.use();
// console.log(sharpie);
// sharpie.use();
// console.log(sharpie);
// console.log(sharpie);
// sharpie.use();
// console.log(sharpie);
// sharpie.use();
// console.log(sharpie);
// console.log(sharpie);
// sharpie.use();
// console.log(sharpie);
// sharpie.use();
// console.log(sharpie);
//  try {
//   sharpie.use();
// console.log(sharpie);
//  } catch (error: any) {
//   console.error(error.message);
//  }