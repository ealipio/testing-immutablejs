import { Todo, TodoRecord } from './record';

import { List, is } from 'immutable';

describe('Immutable.Record() as data models', () => {
  test('should compare a native JavaScript class with an Immutable.Record', () => {
    let immutableTodo = new TodoRecord({
      title: 'Todo',
      items: List('Item1', 'Item2'),
      completed: true
    });

    let todo = new Todo('Todo', List('Item1', 'Item2'), true);

    const dataIsSame =
      immutableTodo.title === todo.title &&
      is(immutableTodo.items, todo.items) &&
      immutableTodo.completed === todo.completed;

    todo.title = null;

    try {
      immutableTodo.title = null;
    } catch (e) {
      expect(e).toBeDefined();
    }
  });

  test('should show default value in Immutable.Record', () => {
    let immutableTodo = new TodoRecord({
      completed: true
    });

    expect(immutableTodo.title).toBe('Default Title');
  });
});
