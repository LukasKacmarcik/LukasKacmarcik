import { StringedInstrument } from "./stringed-instrument";

export class BassGuitar extends StringedInstrument {

  constructor(name: string = 'Bass Guitar', numbersOfStrings:number = 4) {
    super(name, numbersOfStrings);
  }

  sound() {
    return 'Duum-duum-duum';
  }
}