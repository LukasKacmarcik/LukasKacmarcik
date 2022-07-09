import { Plant } from "./plant";
import { Flower } from "./flower";
import { Tree } from "./tree";

class Garden {
  garden: Plant[] = [];

  public gardenWatering(amountOfWaterToUse: number) {
    console.log(`Watering with ${amountOfWaterToUse}`);
    
    let plantsNeededToWater = 0;
    for(let i = 0; i < this.garden.length; i++) {
      if(this.garden[i].needWatering() === true) {
        plantsNeededToWater++;
      }
    }

    let waterWith = amountOfWaterToUse / plantsNeededToWater;
    for(let i = 0; i < this.garden.length; i++) {
      if(this.garden[i].needWatering() === true) {
        this.garden[i].watering(waterWith);
      }
    }
  }

  public gardenStatus() {
    for (let i = 0; i < this.garden.length; i++) {
      if(this.garden[i].needWatering() === true) {
        console.log(`The ${this.garden[i].color} ${this.garden[i].type} needs water`);
      } else {
        console.log(`The ${this.garden[i].color} ${this.garden[i].type} doesn\'t need water`);
      }
    }
  }
}
let garden1 = new Garden();

let yellowFlower = new Flower('yellow');
let blueFlower = new Flower('blue');

let purpleTree = new Tree('purple');
let orangeTree = new Tree('orange');

garden1.garden.push(yellowFlower);
garden1.garden.push(blueFlower);
garden1.garden.push(purpleTree);
garden1.garden.push(orangeTree);

garden1.gardenStatus();
garden1.gardenWatering(40);
garden1.gardenStatus();
garden1.gardenWatering(70);
garden1.gardenStatus();