import { Map, fromJS, List } from 'immutable';

describe('Using fromJS() to Convert Plain JavaScript Objects into Immutable Data', () => {
  test('should create deeply nested Map() from a plain javascript object', () => {
    const plainJSObject = {
      title: 'Go to grocery',
      text: 'I need milk and eggs',
      completed: false,
      category: { title: 'House Duties', priority: 10 }
    };

    const immutableTodo = fromJS(plainJSObject);

    expect(Map.isMap(immutableTodo)).toBe(true);
    expect(immutableTodo.getIn(['category', 'title'])).toBe('House Duties');
  });

  test('should create deeply nested List() from a plain javascript array', () => {
    const plainJSArray = [
      'Go to grocery',
      'Buy milk and eggs',
      'Help kids with homework',
      ['Buy Lemons', 'Make Lemonade']
    ];

    const immutableTodoList = fromJS(plainJSArray);

    expect(List.isList(immutableTodoList)).toBe(true);
    expect(immutableTodoList.getIn([3, 1])).toBe('Make Lemonade');
  });

  test('should use reviver to generate Map() instead of List() from a plain javascript array', () => {
    const plainJSArray = [
      'Go to grocery',
      'Buy milk and eggs',
      'Help kids with homework',
      ['Buy Lemons', 'Make Lemonade']
    ];

    const immutableTodo = fromJS(plainJSArray, (key, value) => {
      return value.toMap();
    });

    expect(Map.isMap(immutableTodo)).toBe(true);
    expect(immutableTodo.getIn([3, 1])).toBe('Make Lemonade');
  });
});
