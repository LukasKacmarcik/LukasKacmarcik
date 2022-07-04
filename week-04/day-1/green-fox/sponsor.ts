import { Person } from "./person";

export class Sponsor extends Person {
  company: string;
  hiredStudents: number = 0;

  constructor(name:string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
    super(name,age,gender);
    this.company = company;
  }

  public introduce(): void {
    console.log(`Hi I\'m ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far`);
  }

  public hire() {
    this.hiredStudents++;
  }

  public getGoal(): void {
    console.log('My goal is: Hire brilliant junior software developers.');
  }
}