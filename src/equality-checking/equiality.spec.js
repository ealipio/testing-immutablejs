import { Map, is, List } from 'immutable';

describe('Equality Checking with .is() and More', () => {
  test('should find different maps equal if keys and values are the same', () => {
    const map1 = Map({ a: 1, b: 1, c: List.of(1) });
    const map2 = Map({ a: 1, b: 1, c: List.of(1) });

    expect(map1).not.toBe(map2);
    expect(is(map1, map2)).toBe(true);
  });

  test('should be equal if subset is equal', () => {
    const map1 = Map({ a: 1, b: 1 });
    const map2 = Map({ a: 1, b: 1, c: 3 });

    expect(map1.isSubset(map2)).toBe(true);
    expect(map2.isSubset(map1)).not.toBe(true);
  });

  test('should be equal if superset is equal', () => {
    const map1 = Map({ a: 1, b: 1 });
    const map2 = Map({ a: 1, b: 1, c: 3 });

    expect(map2.isSuperset(map1)).toBe(true);
    expect(map1.isSuperset(map2)).not.toBe(true);
  });
});
