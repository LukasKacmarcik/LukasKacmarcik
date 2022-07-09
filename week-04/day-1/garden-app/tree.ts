import { Plant } from "./plant";

export class Tree extends Plant {
  
  constructor(color: string, type: string = 'Tree') {
    super(color,type);
  }
  
  public watering(amountOfWater: number): void {
    this.waterAmount += amountOfWater * 0.4;
  }

  public needWatering(): boolean {
    if (this.waterAmount < 10) {
      return true;
    }else {
      return false;
    }
  }
}