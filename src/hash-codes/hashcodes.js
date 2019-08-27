import { each, range } from 'lodash';
import { List, OrderedMap } from 'immutable';

export class Todo {
  constructor(title = '', items = List(), completed = false) {
    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.title = title;
    this.items = items;
    this.completed = completed;
  }
}

export function generateTodos() {
  const todos = [];

  each(range(5), index => {
    var todo = new Todo(`Todo ${index}`);

    todo.completed = Math.round(Math.random()) === 0;

    each(range(Math.floor(Math.random() * 100)), index => {
      todo.items = todo.items.push(`Item ${index}`);
    });

    todos.push(todo);
  });

  return todos;
}
export default { generateTodos, Todo };
