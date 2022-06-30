import { Animal } from "./animal";

class Farm {
  listOfAnimals: Animal[] = [];
  limit: number;

  constructor(limit: number) {
    this.limit = limit;
  }
  // creating mathods//
  public breed() {
    if (this.listOfAnimals.length < this.limit) {
      this.listOfAnimals.push(new Animal(Math.floor(Math.random() * 100 +1)));
    }else {
      console.log('it is full m8');
    }
  }

  public sell() {
    let valueOfLeastHungry = 100;
    let indexOfLeastHungry: number = 0;
    for (let i = 0; i < this.listOfAnimals.length; i++) {
      if(this.listOfAnimals[i].hunger <= valueOfLeastHungry) {
        valueOfLeastHungry = this.listOfAnimals[i].hunger;
        indexOfLeastHungry = i;
      }
    }
    this.listOfAnimals.splice(indexOfLeastHungry,1);
  }
}

let farm1 = new Farm(5);
console.log(farm1.listOfAnimals);
farm1.breed();
farm1.breed();
farm1.breed();
farm1.breed();
farm1.breed();
farm1.breed();
console.log(farm1.listOfAnimals);
farm1.sell();
console.log(farm1.listOfAnimals);


//console.log(farm1.listOfAnimals);