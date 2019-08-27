import { List, Record } from 'immutable';
import { each, range } from 'lodash';

let TodoRecord = Record({
  id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
  title: 'Default Title',
  items: List(),
  completed: false
});

class Todo {
  constructor(title = '', items = List(), completed = false) {
    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.title = title;
    this.items = items;
    this.completed = completed;
  }
}

each(range(10), index => {
  let immutableTodo = new TodoRecord({
    title: 'Todo',
    items: List('Item1', 'Item2'),
    completed: true
  });

  console.log(immutableTodo.id);
});

export { TodoRecord, Todo };
