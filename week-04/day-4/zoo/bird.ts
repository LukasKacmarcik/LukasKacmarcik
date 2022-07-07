import { Animal } from "./animal";
import { Flyable } from "../flyable/flyable"

export class Bird extends Animal implements Flyable {

  constructor(name:string, age?: number, gender?: string) {
    super(name, age, gender)
  }

  breed() {
    return `laying eggs`
  }

  land() {};
  fly() {};
  takeOff() {};
}