export class Todo {
  constructor(title = '', text = '', completed = false) {
    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.title = title;
    this.text = text;
    this.completed = completed;
  }
}

export function getTodoTexts(todos) {
  return todos.map(todo => todo.text);
}

export function markAllTodosAsComplete(todos) {
  return todos.forEach(todo => (todo.completed = true));
}

export function getCompletedTodos(todos) {
  return todos.filter(todo => todo.completed);
}

export function groupTodosByCompleted(todos) {
  return todos.groupBy(todo => todo.completed);
}

export function addTodo(todos, todo) {
  return todos.set(todo.id, todo);
}

export default {
  groupTodosByCompleted,
  addTodo,
  getCompletedTodos,
  markAllTodosAsComplete,
  getTodoTexts
};
