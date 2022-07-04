import { Person } from "./person";
import { Student } from "./student";
import { Mentor } from "./mentor";
import { Sponsor } from "./sponsor";

class Cohort {
  name: string;
  students: Student[] = [];
  mentors: Mentor[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public addStudent(student: Student) {
    this.students.push(student);
  }

  public addMentor(mentor: Mentor) {
    this.mentors.push(mentor);
  }

  public info() {
    console.log(`${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors`);
  }
}

let people: Person[] = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();

// Hi, I'm Mark, a 46 year old male.
// My goal is: Live for the moment.
// Hi, I'm Jane Doe, a 30 year old female.
// My goal is: Live for the moment.
// Hi, I'm John Doe, a 20 year old male from BME who skipped 0 days from the course already.
// My goal is: Be a junior software developer.
// Hi, I'm Jane Doe, a 30 year old female from The School of Life who skipped 3 days from the course already.
// My goal is: Be a junior software developer.
// Hi, I'm Gandhi, a 148 year old male senior mentor.
// My goal is: Educate brilliant junior software developers.
// Hi, I'm Jane Doe, a 30 year old female intermediate mentor.
// My goal is: Educate brilliant junior software developers.
// Hi, I'm Elon Musk, a 46 year old male who represents SpaceX and hired 6 students so far.
// My goal is: Hire brilliant junior software developers.
// Hi, I'm Jane Doe, a 30 year old female who represents Google and hired 4 students so far.
// My goal is: Hire brilliant junior software developers.
// The AWESOME cohort has 2 students and 2 mentors.