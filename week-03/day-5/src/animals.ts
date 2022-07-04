export class Animal {
  hunger: number;
  thirst: number;

  constructor (hunger: number = 50, thirst: number = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }

  public eat() {
    return this.hunger -= 1;
  }
  public drink() {
    return this.thirst -= 1;
  }
  public play() {
   this.hunger += 1;
   this.thirst += 1;
  }
}