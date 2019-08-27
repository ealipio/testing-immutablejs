mocha.setup('bdd');
const expect = chai.expect;

class Todo {
  constructor(title = '', items = Immutable.List(), completed = false) {
    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.title = title;
    this.items = items;
    this.completed = completed;
  }
}

function generateTodos() {
  const todos = [];

  _.each(_.range(5), index => {
    var todo = new Todo(`Todo ${index}`);

    todo.completed = Math.round(Math.random()) === 0;

    _.each(_.range(Math.floor(Math.random() * 100)), index => {
      todo.items = todo.items.push(`Item ${index}`);
    });

    todos.push(todo);
  });

  return todos;
}

describe('Lightning Fast Equality checks with Hash Codes', () => {
  it('should take separate lists with the same items and see equal hash codes', () => {
    var todos = generateTodos();
    let todos1 = Immutable.List.of(...todos);
    let todos2 = Immutable.List.of(...todos);

    expect(todos1).to.not.equal(todos2);
    expect(todos1.hashCode()).to.equal(todos2.hashCode());
  });
});

mocha.run();
