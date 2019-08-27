import { Map, List } from 'immutable';

describe('Converting Immutable.js Structures to Javascript and other Immutable Types', () => {
  test('should convert Map() to List()', () => {
    const map = Map({
      key1: 'First Item',
      key2: 'Second Item'
    });

    const convertedList = map.toList();

    expect(List.isList(convertedList)).toBe(true);

    // Keys are discarded
    expect(convertedList.first()).toBe('First Item');
    expect(convertedList.last()).toBe('Second Item');
  });

  test('should convert List() to Map()', () => {
    const list = List.of('First Item', 'Second Item');

    const convertedMap = list.toMap();

    // Converted keys ascend numerically
    let keys = convertedMap.keys();
    expect(keys.next().value).toBe(0);
    expect(keys.next().value).toBe(1);

    expect(Map.isMap(convertedMap)).toBe(true);

    expect(convertedMap.first()).toBe('First Item');
    expect(convertedMap.last()).toBe('Second Item');
  });

  test('should convert Map() to Javascript Array', () => {
    const map = Map({
      key1: 'First Item',
      key2: 'Second Item',
      key3: { key4: 'Nested Item' }
    });

    const arr = map.toArray();

    // Keys are discarded
    //arr[0] = ["key1", "First Item"]
    expect(arr[0][1]).toBe('First Item');
    expect(arr[1][1]).toBe('Second Item');
    //arr[2] = ['key3', { key4: 'Nested Item' }];
    expect(arr[2][1].key4).toBe('Nested Item');
  });

  test('should convert Map() to JSON', () => {
    const map = Map({
      key1: 'First Item',
      key2: 'Second Item',
      key3: { key4: 'Nested Item' }
    });

    const json = map.toJSON();

    expect(json.key1).toBe('First Item');
    expect(json.key2).toBe('Second Item');
    expect(json.key3.key4).toBe('Nested Item');
  });
});
