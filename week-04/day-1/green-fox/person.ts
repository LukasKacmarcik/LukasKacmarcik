export class Person {
  name:string;
  age: number;
  gender: string;

  constructor(name:string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public getGoal() {
    console.log('My goal is: Live for the moment!');
  }

  public introduce() {
    console.log(`Hi I\'m ${this.name}, a ${this.age} year old ${this.gender}`);
  }
}