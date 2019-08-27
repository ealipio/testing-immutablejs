// https://jsbin.com/licejig/edit?js,output
mocha.setup('bdd');
const expect = chai.expect;

function mutateValue(iterable, pos, value) {
  iterable[pos] = value;
}

function updateState(immutable, pos, value) {
  return immutable.set(pos, value);
}

describe('Manage Applications State with immutable.js', () => {
  it('should see side effect when mutatin original array', () => {
    const state = ['todo1', 'todo2'];
    const mutatedState = state;

    mutateValue(mutatedState, 0, 'newTodo');
    expect(state[0]).to.equal('newTodo');
  });

  it('should avoid side effects when mutating original array', () => {
    const immutableState = Immutable.List(['todo1', 'todo2']);
    const immutablestate2 = immutableState;
    updateState(immutablestate2, 0, 'newTodo');
    expect(immutableState.get(0)).to.equal('todo1');
  });
});

mocha.run();
