export class Todo {
  constructor(title = '', text = '', completed = false) {
    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.title = title;
    this.text = text;
    this.completed = completed;
  }
}

export function addTodo(todos, todo) {
  return todos.set(todo.id, todo);
}

export function retrieveFinalPair(todos) {
  return todos.slice(todos.size - 2, todos.size);
  // Alernatively, you can use this terser syntax
  //return todos.slice(-2);
}

export function removeLastEntry(todos) {
  return todos.slice(0, -1);
}

export function removeFirstEntry(todos) {
  return todos.slice(1, todos.size);
}

export function removeFirstFive(todos) {
  return todos.skip(5);
}

export function findMeMonkey(todos) {
  return todos.skipUntil(todo => todo.text === 'monkey');
}

export function stopAtMonkey(todos) {
  return todos.skipWhile(todo => todo.text === 'monkey');
}

export default {
  stopAtMonkey,
  findMeMonkey,
  removeFirstFive,
  removeFirstEntry,
  removeLastEntry,
  retrieveFinalPair,
  addTodo
};
