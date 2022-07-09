export class Block {
  type: string;
  color: string;
  lightTransmission: number; //percentage
  canBeCrossed: string;
  adjecentTo: string [];

  constructor(type: string,color: string, lightTransmission: number, canBecrossed: string, adjecentTo: string[]) {
    this.type = type;
    this.color = color;
    this.lightTransmission = lightTransmission;
    this.canBeCrossed = canBecrossed;
    this.adjecentTo = adjecentTo;
  }

  canPlaceAfter(blockNextTo: Block) {
    if (blockNextTo.adjecentTo.includes(this.type)) {
      return true;
    } else {
      return false;
    }
  }

  getTransmission() {
    return this.lightTransmission / 100;
  }

  printStatus() {
    console.log(`Block of type: ${this.type}`);
    console.log(`Has light transmission: ${this.lightTransmission}`);
    console.log(`${this.canBeCrossed} crossed`);
  }
}