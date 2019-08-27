import { addTodoToMap, addTodoToList, Todo } from './map-list-differences';
import { Map, List } from 'immutable';
import each from 'lodash';

describe('Differences between the Immutable.js Map() and List()', () => {
  test('should find same todo in List() and Map()', () => {
    const todo = new Todo('Todo 1');

    let todosMap = Map();
    todosMap = addTodoToMap(todosMap, todo);

    let todosList = List();
    todosList = addTodoToList(todosList, todo);

    expect(todosMap.get(todo.id)).toBe(todo);
    expect(todosList.get(0)).toBe(todo);
  });

  test('should create List() from series of values', () => {
    const todoItems = ['Milk', 'Eggs', 'Detergent', 'Bread', 'Steak'];
    // const list = List.of('Milk', 'Eggs', 'Detergent', 'Bread', 'Steak');
    const list = List.of(...todoItems);

    var count = 0;
    each(todoItems, item => {
      expect(list.get(count)).toBe(item);
      count++;
    });
  });

  test('should create List() from array using the rest operator', () => {
    const todoItems = ['Milk', 'Eggs', 'Detergent', 'Bread', 'Steak'];
    const list = List.of(...todoItems);

    var count = 0;
    each(todoItems, item => {
      expect(list.get(count)).toBe(item);
      count++;
    });
  });

  test('should remove last element from List()', () => {
    const todoItems = ['Milk', 'Eggs', 'Detergent', 'Bread', 'Steak'];
    let list = List.of(...todoItems);

    list = list.pop(); // Just like Array

    var count = 0;
    each(todoItems, item => {
      if (count < 4) expect(list.get(count)).toBe(item);
      else expect(list.get(count)).not.toBe(item);

      count++;
    });
  });
});
