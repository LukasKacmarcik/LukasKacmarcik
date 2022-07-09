export class Aircraft {
  maxAmmo: number;
  ammunition: number;
  baseDamage: number;
  typeOfAircraft: string;
  priority: boolean;

  constructor(maxAmmo:number,ammunition: number = 0, baseDamage: number, typeOfAircraft: string,priority: boolean) {
    this.maxAmmo = maxAmmo;
    this.ammunition = ammunition;
    this.baseDamage = baseDamage;
    this.typeOfAircraft = typeOfAircraft;
    this.priority = priority;
  }

  public fight(): number {
    let startAmmo = this.ammunition;
    this.ammunition = 0;
    return startAmmo * this.baseDamage;
  }

  public refillAmmo(ammoFromStation: number) {
    let ammoToReturn;
    let missingAmmo = this.maxAmmo - this.ammunition;
    if(ammoFromStation > missingAmmo) {
      this.ammunition += missingAmmo;
      ammoToReturn = ammoFromStation - missingAmmo;
    } else {
      this.ammunition = ammoFromStation;
      ammoToReturn = 0;
    }
    return ammoFromStation = ammoToReturn;
  }

  public getType() {
    return this.typeOfAircraft
  }

  public getStatus() {
    return `Type ${this.typeOfAircraft}, Ammo ${this.ammunition}, Base Damage ${this.baseDamage}, All Damage ${this.baseDamage * this.ammunition}`;
  }

  public isPriority(): boolean {
    return this.priority;
  }
}