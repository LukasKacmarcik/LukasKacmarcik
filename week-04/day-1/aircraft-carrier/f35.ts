import { Aircraft } from "./aircraft";

export class F35 extends Aircraft {


  constructor(maxAmmo:number = 12,ammunition: number = 0, baseDamage: number = 50, typeOfAircraft: string = 'F35',priority: boolean = true) {
    super(maxAmmo,ammunition,baseDamage,typeOfAircraft,priority)
  }
}