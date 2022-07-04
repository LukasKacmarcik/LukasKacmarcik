import { Ship } from "./ship";
import { Pirate } from "./pirates";
import { Captain } from "./pirates";
import { BattleApp } from "./battle-app";

export class Armada {
  army: Ship[] = [];

  public war(otherArmada: Armada): boolean | undefined {
    let counter1 = 0;
    let counter2 = 0;
    while (this.army.length !== counter1 || otherArmada.army.length !== counter2) {
      if(this.army[counter1].score() > otherArmada.army[counter2].score()) {
        counter2 += 1;
      } else {
        counter1 += 1;
      }
    }
    if (this.army.length === counter1) {
      return false;
    } else if (otherArmada.army.length === counter2) {
      return true;
    }
  }
}

let newArmy1 = new Armada();
let newArmy2 = new Armada();

let ship1 = new Ship();
ship1.fillShip();
let ship2 = new Ship();
ship2.fillShip();
let ship3 = new Ship();
ship3.fillShip();
let ship4 = new Ship();
ship4.fillShip();
let ship5 = new Ship();
ship5.fillShip();
let ship6 = new Ship();
ship6.fillShip();

newArmy1.army.push(ship1, ship2, ship3);
newArmy2.army.push(ship4, ship5, ship6);
// console.log(newArmy1.army);
// console.log(newArmy2.army);

console.log(newArmy1.war(newArmy2));