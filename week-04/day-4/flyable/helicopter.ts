import { Flyable } from "./flyable";
import { Vehicle } from "./vehicle";

export class Helicopter extends Vehicle implements Flyable {
  land() {};
  fly() {};
  takeOff() {};
}