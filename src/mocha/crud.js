// https://jsbin.com/licejig/edit?js,output
// modifying an immutable
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

function addTodo(todos, todo) {
  return todos.set(todo.id, todo);
}

function removeTodo(todos, todo) {
  return todos.delete(todo.id, todo);
}

function updateTodo(todos, todo) {
  return todos.update(todo.id, todo => todo);
}

function clearAll(todos) {
  return todos.clear();
}

function mergeTodos(todos, todos2) {
  return todos.merge(todos2);
}
//-------------------------------------
function createTodos(numTodos = 10) {
  let todos = Immutable.Map();
  _.each(_.range(numTodos), index => {
    todos = addTodo(todos, new Todo('Todo ' + index, 'I am a todo!', false));
  });
  return todos;
}
//------------------------------------------
describe('Modifying an Immutable.js Map()', () => {
  it('should add todo to state', () => {
    const todo = new Todo('Todo 1', 'I am a todo !', false);
    let todos = Immutable.Map();
    todos = addTodo(todos, todo);
    expect(todos.get(todo.id)).to.equal(todo);
  });

  it('should remove todo from state', () => {
    const todo = new Todo('Todo 1', 'I am a todo !', false);
    let todos = Immutable.Map();
    todos = addTodo(todos, todo);
    todos = removeTodo(todos, todo);

    expect(todos.get(todo.id)).not.to.equal(todo);
  });

  it('should update a todo', () => {
    const todo = new Todo('Todo 1', 'I am a todo !', false);
    let todos = Immutable.Map();
    todos = addTodo(todos, todo);

    todo.title = 'new title';
    todos = updateTodo(todos, todo);

    expect(todos.get(todo.id).title).to.equal('new title');
  });

  it('should remove all todos', () => {
    let todos = Immutable.Map();
    todos = createTodos(10);
    // console.log(todos.toJS())
    todos = clearAll(todos);
    // console.log(todos.toJS())
    expect(todos.size).to.equal(0);
  });
  it('should merge todos', () => {
    let todos = Immutable.Map();
    let todos2 = Immutable.Map();
    todos = createTodos(10);
    todos2 = createTodos(10);
    todos = mergeTodos(todos, todos2);
    expect(todos.size).to.equal(20);
  });
});
mocha.run();
