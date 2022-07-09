import { Aircraft } from "./aircraft";

export class F16 extends Aircraft {


  constructor(maxAmmo:number = 8,ammunition: number = 0, baseDamage: number = 30, typeOfAircraft: string = 'F16',priority: boolean = false) {
    super(maxAmmo,ammunition,baseDamage,typeOfAircraft,priority)
  }
}