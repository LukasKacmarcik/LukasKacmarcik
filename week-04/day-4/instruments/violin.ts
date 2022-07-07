import { StringedInstrument } from "./stringed-instrument";

export class Violin extends StringedInstrument {
  numberOfStrings: number = 4;

  constructor(name: string = 'Violin', numbersOfStrings:number = 4) {
    super(name, numbersOfStrings);
  }

  sound() {
    return 'Screech';
  }
}