/**
 * @class Service
 *
 * Manages the data of the application.
 */
class TodoServiceT {
  todos: TodoT[];
  public onTodoListChanged: Function | null = null;

  constructor() {
    // localStorage.getItem("todos") can return a string or null. 
    // handle the case where localStorage.getItem("todos") is null, if so it will default to an empty array
    const storedTodos = localStorage.getItem("todos");
    this.todos = (storedTodos ? JSON.parse(storedTodos) : []).map(
      (todo: any) => new TodoT(todo)
    );
    this.onTodoListChanged = null;
  }

  // // property with the appropriate function type.
  // private onTodoListChanged: Function;

  bindTodoListChanged(callback: Function) {
    this.onTodoListChanged = callback;
  }

  private _commit(todos: TodoT[]) {
    if (this.onTodoListChanged !== null) {
      this.onTodoListChanged(todos);
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string) {
    this.todos.push(new TodoT({ text }));
    this._commit(this.todos);
  }

  // Review id & text types
  editTodo(id: string, updatedText: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new TodoT({
          ...todo,
          text: updatedText
        })
        : todo
    );
    this._commit(this.todos);
  }
  // Review id type
  deleteTodo(_id: string) {
    this.todos = this.todos.filter(({ id }) => id !== _id);
    this._commit(this.todos);
  }
  // Review id type
  toggleTodo(_id: string) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new TodoT({ ...todo, complete: !todo.complete }) : todo
    );
    this._commit(this.todos);
  }
}