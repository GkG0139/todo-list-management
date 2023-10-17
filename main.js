const crypto = require('crypto');

class Todo {
  constructor(description) {
    this.id = crypto.randomUUID();
    this.description = description;
  }

  getTodo() {
    return {
      id: this.id,
      description: this.description,
    };
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }
}

function TodoManagement() {
  let todos = [];

  function addTodo(description) {
    const newTodo = new Todo(description);
    todos.push(newTodo);
    return todos.length;
  }

  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId);
  }

  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => todo.id === searchId);
  }

  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId);
  }

  function getTodos() {
    return todos;
  }

  return {
    addTodo,
    findTodo,
    findIndexTodo,
    removeTodo,
    getTodos,
  };
}

module.exports = { Todo, TodoManagement };
