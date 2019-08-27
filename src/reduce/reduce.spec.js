import {
  transformTodos,
  filterCompleted,
  generateTodos
} from './reduce';

import { List, Map } from 'immutable';

describe('Transforming Immutable Data with Reduce', () => {
  test('should take list of todos and group them by completed with reduce()', () => {
    let todos = generateTodos();
    let groupedTodos = todos.reduce(
      transformTodos,
      new Map({ true: List(), false: List() })
    );

    const areAllTrue = groupedTodos
      .get('true')
      .every(val => val.completed === true);

    expect(areAllTrue).toBe(true);

    const areAllFalse = groupedTodos
      .get('false')
      .every(val => val.completed === false);

    expect(areAllFalse).toBe(true);
  });

  // Here we demonstrate the power of reduce. All other reduction operations are built
  // off this single, powerful operator.

  test('should reproduce same results as filter() with reduce()', () => {
    let todos = generateTodos();

    let completedTodos = todos.filter(val => val.completed === true);

    let areAllTrue = completedTodos.every(val => val.completed === true);

    expect(areAllTrue).toBe(true);

    let reducedTodos = todos.reduce(filterCompleted, new List());

    areAllTrue = reducedTodos.every(val => val.completed === true);

    expect(areAllTrue).toBe(true);
  });
});
