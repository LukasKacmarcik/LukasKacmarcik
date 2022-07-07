import { StringedInstrument } from "./stringed-instrument";

export class ElectricGuitar extends StringedInstrument {
  
  constructor(name: string = 'Electric Guitar', numbersOfStrings:number = 6) {
    super(name, numbersOfStrings);
  }

  sound() {
    return 'Twang';
  }
}