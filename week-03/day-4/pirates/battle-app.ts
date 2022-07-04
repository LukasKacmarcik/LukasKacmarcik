import { Captain, Pirate } from "./pirates";
import { Ship } from "./ship";

export class BattleApp {

  public fight(ship1:Ship, ship2: Ship): boolean {
    ship1.battle(ship2);
    if (ship1.score > ship2.score) {
      return true;
    } else {
      return false;
    }
  }
}

let ship1 = new Ship();
let ship2 = new Ship();
let myBattle = new BattleApp();

ship1.fillShip();
ship2.fillShip();

ship1.state();
ship2.state();

//myBattle.fight(ship1,ship2);
myBattle.fight(ship1, ship2);
ship1.state();
ship2.state();

