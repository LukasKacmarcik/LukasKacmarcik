import { Aircraft } from "./aircraft";
import { F16 } from "./f16";
import { F35 } from "./f35";

class Carrier {
  aircrafts: Aircraft[] = [];
  carrierAmmo: number;
  carierHealth: number;
  totalDamage: number;

  constructor(carrierAmmo:number, carrierHealth:number, totalDamage: number = 0) {
    this.carrierAmmo = carrierAmmo;
    this.carierHealth = carrierHealth;
    this.totalDamage = totalDamage;
  }

  public add(typeOfAircraft: string) {
    if(typeOfAircraft === 'F16') {
      this.aircrafts.push(new F16());
    }else if (typeOfAircraft === 'F35') {
      this.aircrafts.push(new F35());
    }
  }

  public fill() {
    if(this.carrierAmmo === 0) {
      //return console.log('There is no more ammo in the carrier');
      throw new Error('There is no more ammo in the carrier');
    }

    
    for(let i = 0; i < this.aircrafts.length; i++) {
      if (this.aircrafts[i].priority === true) {
        this.aircrafts[i].refillAmmo(this.carrierAmmo);
      }
    }
    for(let i = 0; i < this.aircrafts.length; i++) {
      if (this.aircrafts[i].priority === false) {
        this.aircrafts[i].refillAmmo(this.carrierAmmo);
      }
    }
  }

  public fight(otherCarrier: Carrier) {
    let totalDamage:number = 0;
    for (let i = 0; i < this.aircrafts.length; i++) {
      totalDamage += this.aircrafts[i].fight();
    }
    otherCarrier.carierHealth -= totalDamage;
    this.totalDamage += totalDamage;
  }

  public getStatus() {
    if(this.carierHealth < 1) {
      console.log("It's dead Jim :(");
    }
    console.log(`HP: ${this.carierHealth}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.carrierAmmo}, Total Damage: ${this.totalDamage}`);
    console.log('Aircrafts:');
    for (let i = 0; i < this.aircrafts.length; i++) {
      console.log(`Type ${this.aircrafts[i].getType()}, Ammo ${this.aircrafts[i].ammunition}, Base Damage ${this.aircrafts[i].baseDamage}, All Damage ${this.aircrafts[i].ammunition * this.aircrafts[i].baseDamage}`);
    }
  }
}

let carrier1 = new Carrier(3000,5000,);

carrier1.add('F16');
carrier1.add('F16');
carrier1.add('F16');
carrier1.add('F35');
carrier1.add('F35');
carrier1.fill();
carrier1.getStatus();
let carrier2 = new Carrier(3200,4800,);
carrier2.add('F16');
carrier2.add('F16');
carrier2.add('F16');
carrier2.add('F35');
carrier2.fill();
carrier2.getStatus();

carrier1.fight(carrier2);
carrier2.fight(carrier1);

carrier1.getStatus();
carrier2.getStatus();

