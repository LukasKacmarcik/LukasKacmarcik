

export class Plant {
  waterAmount: number = 0;
  color: string;
  type: string;

  constructor(color: string, type: string = 'Plant') {
    this.color = color;
    this.type = type;
  }
  
  public watering(amountOfWater: number) {
    this.waterAmount += amountOfWater * 1;
  }

  public needWatering(): boolean {
    let outcome;
    if (this.waterAmount < 5) {
      outcome = true;
    }else {
      outcome = false;
    }
    return outcome;
  }
}