import model from './Model';
import view from './View';

class Controller {
  constructor(model, view) {
    model;
    view;
    view.displayTodos(model.allTodos);
    view.listenAddTodo(this.handleAddTodo, model.allTodos);
    view.listenEditTodo(this.handleEditTodo);
    view.listenToggleTodo(this.handleToggleTodo);
    view.listenDeleteTodo(this.handleDeleteTodo, model.allTodos);
  }

  handleAddTodo(todoText) {
    model.addTodo(todoText);
    view.displayTodos(model.allTodos);
  }

  handleEditTodo(id, todoText) {
    model.editTodo(id, todoText);
  }

  handleToggleTodo(id) {
    model.toggleTodo(id);
  }

  handleDeleteTodo(id) {
    model.deleteTodo(id);
    view.displayTodos(model.allTodos);
  }
}

export default new Controller(model, view);
