import { generateTodos } from './hashcodes';

import { List } from 'immutable';

describe('Lightning Fast Equality checks with Hash Codes', () => {
  test('should take separate lists with the same items and see equal hash codes', () => {
    var todos = generateTodos();
    console.log(todos);
    let todos1 = List.of(...todos);
    let todos2 = List.of(...todos);

    expect(todos1).not.toBe(todos2);
    expect(todos1.hashCode()).toBe(todos2.hashCode());
  });
});
