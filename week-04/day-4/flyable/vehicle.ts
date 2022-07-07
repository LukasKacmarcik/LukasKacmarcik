export abstract class Vehicle {
  name: string;
  brand: string;
  numOfWheels: number;

  constructor(name: string, brand: string, numOfWheels: number) {
    this.name = name;
    this.brand = brand;
    this.numOfWheels = numOfWheels;
  }
}