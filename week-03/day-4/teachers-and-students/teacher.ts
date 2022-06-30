
import { Student } from './student';
class Teacher {

  public giveAnswer() {
    console.log('the teacher is answering a question'); 
  }
  public teach(sucker: Student) {
    sucker.learn();
  }
}

export { Teacher };