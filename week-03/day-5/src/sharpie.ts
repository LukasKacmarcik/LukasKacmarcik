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

let sharpie2 = new Sharpie('green', 3, 65);

console.log(sharpie2.inkAmount);
