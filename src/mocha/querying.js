// Querying an immutableJS Map
// Methods: get has includes first last find

mocha.setup('bdd');
const expect = chai.expect;

class Todo {
  constructor(title = '', text = '', completed = false) {
    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.title = title;
    this.text = text;
    this.completed = completed;
  }
}

function findTodo(todos, todo) {
  return todos.find(
    t => {
      return t.id === todo.id;
    },
    null,
    null
  );
}

function addTodo(todos, todo) {
  return todos.set(todo.id, todo);
}

function createTodos(numTodos = 10) {
  let todos = Immutable.Map();
  _.each(_.range(numTodos), index => {
    todos = addTodo(todos, new Todo('Todo ' + index, 'I am a todo!', false));
  });
  return todos;
}
//------------------------------------------
describe('querying an Immutable.js Map()', () => {
  it('should properly report keys', () => {
    const todo = new Todo('Todo 1', 'I am a todo !', false);

    let todos = Immutable.Map();
    todos = addTodo(todos, todo);

    expect(todos.has(todo.id)).to.equal(true);
  });

  it('should properly report included values', () => {
    const todo = new Todo('Todo 1', 'I am a todo !', false);

    let todos = Immutable.Map();
    todos = addTodo(todos, todo);

    expect(todos.includes(todo)).to.equal(true);
  });

  it('should properly find nested keys', () => {
    let todos = Immutable.Map();
    let todos2 = Immutable.Map();

    todos = createTodos(10);
    todos2 = createTodos(10);

    let multipleTodoStates = Immutable.Map({
      todo1: todos,
      todo2: todos2
    });
    const todoID = todos.first().id;
    expect(multipleTodoStates.getIn(['todo1', todoID], null)).to.equal(
      todos.first()
    );
  });

  it('should find todo', () => {
    const todo = new Todo('Todo 1', 'I am a todo!', false);
    const todo2 = new Todo('Todo 2', 'I am a todo!', false);

    let todos = Immutable.Map();

    todos = addTodo(todos, todo);
    todos = addTodo(todos, todo2);

    expect(findTodo(todos, todo)).to.equal(todo);
  });
});
mocha.run();
