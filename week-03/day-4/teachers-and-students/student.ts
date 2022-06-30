//teachers-and-students
//import { Teacher } from './teacher'
import {Teacher} from './teacher';
export class Student {

  public learn() {
    console.log('Student is actually learning');
  }

  public question(dick: Teacher) {
    dick.giveAnswer();
  }
}