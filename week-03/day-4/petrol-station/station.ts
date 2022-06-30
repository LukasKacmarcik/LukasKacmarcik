import { Car } from './car';

class Station {
  gasAmount:number = 3000;

  public refill(car: Car) {
    this.gasAmount -= car.capacity;
    car.gasAmount = car.capacity;
  }
}

let newCar = new Car();
let newStation = new Station();
console.log(newCar);
newStation.refill(newCar);
console.log(newCar);
console.log(newStation);