import { each, range } from 'lodash';
import { List, OrderedMap } from 'immutable';

class Todo {
  constructor(title = '', items = List(), completed = false) {
    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.title = title;
    this.items = items;
    this.completed = completed;
  }
}

export function generateTodos() {
  var todos = OrderedMap();

  each(range(5), index => {
    var todo = new Todo(`Todo ${index}`);

    todo.completed = Math.round(Math.random()) === 0;

    each(range(Math.floor(Math.random() * 100)), index => {
      todo.items = todo.items.push(`Item ${index}`);
    });

    todos = todos.set(todo.id, todo);
  });

  return todos;
}

export function transformTodos(initialValue, value, key, iter) {
  let list = initialValue.get(value.completed.toString()).push(value);
  return initialValue.set(value.completed.toString(), list);
}

export function filterCompleted(initialValue, value) {
  if (value.completed) {
    initialValue = initialValue.push(value);
  }

  return initialValue;
}
export default { transformTodos, filterCompleted, generateTodos, Todo };
