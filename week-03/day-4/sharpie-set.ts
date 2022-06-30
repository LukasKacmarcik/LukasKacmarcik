import { Sharpie } from "./sharpie";

class SharpieSet {
  listOfSharpies: Sharpie[] = [];

  public add(sharpie: Sharpie) {
    this.listOfSharpies.push(sharpie);
  }

  public countUsable(): number {
    let count = 0;
    for (let i = 0; i < this.listOfSharpies.length; i++) {
      if (this.listOfSharpies[i].inkAmount > 0) {
        count++;
      }
    }
    return count;
  }

  public removeTrash() {
    for (let i = 0; i < this.listOfSharpies.length; i++) {
      if (this.listOfSharpies[i].inkAmount === 0) {
        this.listOfSharpies.splice(i,1);
      }
    }
  }
}
let sharpie1: Sharpie = new Sharpie('black',10,100)
let sharpie2 = new Sharpie('black',10,20)
let sharpie3 = new Sharpie('black',10,0)


let myPencilCase = new SharpieSet();
console.log(myPencilCase);
myPencilCase.add(sharpie1)
console.log(myPencilCase);
myPencilCase.add(sharpie2)
console.log(myPencilCase);
myPencilCase.add(sharpie3)
console.log(myPencilCase);

myPencilCase.removeTrash();

console.log(myPencilCase);



