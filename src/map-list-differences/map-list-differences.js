import { List } from 'immutable';

export class Todo {
  constructor(title = '', items = List(), completed = false) {
    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.title = title;
    this.items = items;
    this.completed = completed;
  }
}

export function addTodoToMap(todos, todo) {
  return todos.set(todo.id, todo);
}

export function addTodoToList(todos, todo) {
  return todos.push(todo);
}

export default { addTodoToMap, addTodoToList };
