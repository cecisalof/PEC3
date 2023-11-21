/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class TodoController {
  // service & view cannot be accessed from outside of its containing class
  private service: TodoServiceT;
  private view: TodoViewT;

  constructor(service: TodoServiceT, view: TodoViewT) {
      this.service = service;
      this.view = view;

      // Explicit this binding
      this.service.bindTodoListChanged(this.onTodoListChanged);
      this.view.bindAddTodo(this.handleAddTodo);
      this.view.bindEditTodo(this.handleEditTodo);
      this.view.bindDeleteTodo(this.handleDeleteTodo);
      this.view.bindToggleTodo(this.handleToggleTodo);

      // Display initial todos
      this.onTodoListChanged(this.service.todos);
  }

  private onTodoListChanged = (todos: any[]): void => {
      this.view.displayTodos(todos);
  };

  private handleAddTodo = (todoText: string): void => {
      this.service.addTodo(todoText);
  };

  private handleEditTodo = (id: string, todoText: string): void => {
      this.service.editTodo(id, todoText);
  };

  private handleDeleteTodo = (id: string): void => {
      this.service.deleteTodo(id);
  };

  private handleToggleTodo = (id: string): void => {
      this.service.toggleTodo(id);
  };
}
