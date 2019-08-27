mocha.setup('bdd');

const expect = chai.expect;

function createObjTodos(numTodos) {
  var obj = {};
  _.each(_.range(numTodos), index => {
    const todoSequence = String(index + 1);
    obj['todo' + todoSequence] = {
      title: 'Todo ' + todoSequence,
      value: `Make ${todoSequence} happen`
    };
  });
  return obj;
}

describe('Creating an Immutable Object Graph with Immutable.js Map()', () => {
  it('should create Map() with matching keys', () => {
    const data = {
      todo1: {
        title: 'Todo 1',
        value: 'Make it happen'
      },
      todo2: {
        title: 'Todo 2',
        value: 'Make it happen'
      }
    };
    let map = Immutable.Map(data);
    // map.getIn(['todo1']).title
    expect(map.get('todo1').title).to.equal('Todo 1');
  });

  it('should create Map() with keys from array tuples', () => {
    let map = Immutable.Map([['todo1', { title: 'Todo 1' }]]);
    expect(map.getIn(['todo1']).title).to.equal('Todo 1');
  });

  it('should create Map() with matching size to number of keys', () => {
    let map = Immutable.Map(createObjTodos(10));
    expect(map.size).to.equal(10);
  });

  it('should create Map() withMutations', () => {
    const map1 = Immutable.Map();
    const map2 = map1.withMutations(map =>
      map
        .set('a', 1)
        .set('b', 2)
        .set('c', 3)
    );
    expect(map1.size).to.equal(0);
    expect(map2.size).to.equal(3);
  });
});

mocha.run();
