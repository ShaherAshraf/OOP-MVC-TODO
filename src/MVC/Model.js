class Model {
  constructor() {
    this.allTodos = JSON.parse(window.localStorage.getItem('todos')) || [];
  }

  saveTodos(todos) {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }

  addTodo(todoText) {
    const todo = { id: this.allTodos.length > 0 ? this.allTodos[this.allTodos.length - 1].id + 1 : 1, text: todoText, complete: false };
    this.allTodos.push(todo);
    this.saveTodos(this.allTodos);
  }

  editTodo(id, todoText) {
    const editedTodo = this.allTodos.find((todo) => todo.id === id);
    editedTodo.text = todoText;
    this.saveTodos(this.allTodos);
  }

  toggleTodo(id) {
    const editedTodo = this.allTodos.find((todo) => todo.id === id);
    editedTodo.complete = !editedTodo.complete;
    this.saveTodos(this.allTodos);
  }

  deleteTodo(id) {
    this.allTodos = this.allTodos.filter((todo) => todo.id !== id);
    this.saveTodos(this.allTodos);
  }
}

export default new Model();
