const assert = require('assert');
const { Todo, TodoManagement } = require('./main');

// Test cases for Todo class
describe('Todo', () => {
  it('should create a new Todo object with a valid ID and description', () => {
    const todo = new Todo('Sample description');
    assert.strictEqual(typeof todo.id, 'string');
    assert.strictEqual(todo.description, 'Sample description');
  });

  it('should set a new description for a Todo object', () => {
    const todo = new Todo('Old description');
    todo.setDescription('New description');
    assert.strictEqual(todo.description, 'New description');
  });
});

// Test cases for TodoManagement functions
describe('TodoManagement', () => {
  let todoManagement;

  beforeEach(() => {
    todoManagement = new TodoManagement();
  });

  it('should add a new Todo to the list', () => {
    todoManagement.addTodo('Sample todo');
    assert.strictEqual(todoManagement.getTodos().length, 1);
  });

  it('should find a specific Todo from the list', () => {
    todoManagement.addTodo('Todo 1');
    const todo = todoManagement.getTodos()[0];
    const foundTodo = todoManagement.findTodo(todo.id);
    assert.deepStrictEqual(todo, foundTodo);
  });

  it('should find the index of a specific Todo in the list', () => {
    todoManagement.addTodo('Todo 1');
    const todo = todoManagement.getTodos()[0];
    const index = todoManagement.findIndexTodo(todo.id);
    assert.strictEqual(index, 0);
  });

  it('should remove a specific Todo from the list', () => {
    todoManagement.addTodo('Todo 1');
    const todo = todoManagement.getTodos()[0];
    todoManagement.removeTodo(todo.id);
    assert.strictEqual(todoManagement.getTodos().length, 0);
  });
});
