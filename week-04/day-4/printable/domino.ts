import { Printable } from "./printable";

export class Domino implements Printable {
  Aside: number;
  Bside: number;

  constructor(Aside: number, Bside:number) {
    this.Aside = Aside;
    this.Bside = Bside;
  }

  printAllFields() {
    console.log(`Domino A side: ${this.Aside}, B side: ${this.Bside}`);
  }
}