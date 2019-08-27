import {
  groupTodosByCompleted,
  addTodo,
  getCompletedTodos,
  markAllTodosAsComplete,
  getTodoTexts,
  Todo
} from './querying';
import { Map } from 'immutable';
import { each, range } from 'lodash';

describe('Iterating over an Immutable.js Map()', () => {
  test('should convert all todos into a map() of titles', () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(todos, new Todo('Todo' + index, "I'm a todo!", false));
    });

    const todoTexts = getTodoTexts(todos);

    expect(todoTexts.first()).toBe("I'm a todo!");
  });

  test('should filter todos', () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(
        todos,
        new Todo('Todo' + index, "I'm a todo!", index % 2 == 0)
      );
    });

    const filteredTodos = getCompletedTodos(todos);

    expect(filteredTodos.size).toBe(5);
  });

  test('should mark all todos completed', () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(todos, new Todo('Todo' + index, "I'm a todo!", false));
    });

    // This has the chance for side effects
    markAllTodosAsComplete(todos);
    // console.log(todos.toArray());
    each(todos.toArray(), todo => {
      // expect(todo.completed).toBe(true);
      // console.log(todo[1].completed);
      expect(todo[1].completed).toBe(true);
    });
  });

  test('should group todos by completed boolean', () => {
    let todos = Map();

    each(range(10), index => {
      todos = addTodo(
        todos,
        new Todo('Todo' + index, "I'm a todo!", index % 2 == 0)
      );
    });

    const groupedTodos = groupTodosByCompleted(todos);

    expect(groupedTodos.get(true).size).toBe(5);
    expect(groupedTodos.get(false).size).toBe(5);
  });
});
