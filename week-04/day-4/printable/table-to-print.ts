import { Printable } from "./printable";
import { Todo } from "./todo";
import { Domino } from "./domino";

let dominoes: Domino[] = [];
let todos: Todo[] = [];
let domino1 = new Domino(2,5);
let domino2 = new Domino(1,4);
let domino3 = new Domino(3,3);
dominoes.push(domino1,domino2,domino3);

let todo1 = new Todo('Buy milk','low',true);
let todo2 = new Todo('Sell cow','high',false);
let todo3 = new Todo('sleeeeep','medium',true);
todos.push(todo1,todo2,todo3);

for (let domino of dominoes) {
  domino.printAllFields();
}

for (let todo of todos) {
  todo.printAllFields();  
}