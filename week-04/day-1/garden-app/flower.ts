import { Plant } from "./plant";

export class Flower extends Plant {
  
  constructor(color: string, type: string = 'Flower') {
    super(color,type);
  }
  
  public watering(amountOfWater: number): void {
    this.waterAmount += amountOfWater * 0.75;
  }

  public needWatering(): boolean {
    if (this.waterAmount < 5) {
      return true;
    }else {
      return false;
    }
  }
}