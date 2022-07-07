export abstract class Animal {
  name: string;
  age: number;
  gender: string;

  constructor(name:string, age?: number, gender?: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  abstract breed(): string;
}