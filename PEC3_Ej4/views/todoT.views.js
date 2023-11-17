/**
 * @class TodoView
 *
 * Visual representation of the model.
 */
var TodoViewT = /** @class */ (function () {
    function TodoViewT() {
        this.app = this.getElement("#root");
        this.form = this.createElement("form");
        this.input = this.createElement("input");
        this.input.type = "text";
        this.input.placeholder = "Add todo";
        this.input.name = "todo";
        this.submitButton = this.createElement("button");
        this.submitButton.textContent = "Submit";
        this.form.append(this.input, this.submitButton);
        this.title = this.createElement("h1");
        this.title.textContent = "Todos";
        this.todoList = this.createElement("ul", "todo-list");
        this.app.append(this.title, this.form, this.todoList);
        this._temporaryTodoText = "";
        this._initLocalListeners();
    }
    Object.defineProperty(TodoViewT.prototype, "_todoText", {
        get: function () {
            return this.input.value;
        },
        enumerable: false,
        configurable: true
    });
    TodoViewT.prototype._resetInput = function () {
        this.input.value = "";
    };
    TodoViewT.prototype.createElement = function (tag, className) {
        var element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    };
    // private getElement(selector: string): HTMLElement | null {
    //     const element = document.querySelector(selector);
    //     return element;
    // }
    TodoViewT.prototype.getElement = function (selector) {
        // document.querySelector(selector) can return null
        var element = document.querySelector(selector);
        if (!element) { // check if the result is not null before returning
            // throw an error if the element is not found
            throw new Error("Element with selector '".concat(selector, "' not found."));
        }
        // ensure the returned value is an HTMLElement
        return element;
    };
    TodoViewT.prototype.displayTodos = function (todos) {
        var _this = this;
        // Delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }
        // Show default message
        if (todos.length === 0) {
            var p = this.createElement("p");
            p.textContent = "Nothing to do! Add a task?";
            this.todoList.append(p);
        }
        else {
            // Create nodes
            todos.forEach(function (todo) {
                var li = _this.createElement("li");
                li.id = todo.id;
                var checkbox = _this.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = todo.complete;
                var span = _this.createElement("span");
                // explicitly converting the boolean value to a string
                span.contentEditable = 'true';
                span.classList.add("editable");
                if (todo.complete) {
                    var strike = _this.createElement("s");
                    strike.textContent = todo.text.toString(); // Convert to string
                    span.append(strike);
                }
                else {
                    span.textContent = todo.text.toString(); // Convert to string
                }
                var deleteButton = _this.createElement("button", "delete");
                deleteButton.textContent = "Delete";
                li.append(checkbox, span, deleteButton);
                // Append nodes
                _this.todoList.append(li);
            });
        }
        // Debugging
        console.log(todos);
    };
    TodoViewT.prototype._initLocalListeners = function () {
        var _this = this;
        this.todoList.addEventListener("input", function (event) {
            if (event.target.className === "editable") {
                _this._temporaryTodoText = event.target.innerText;
            }
        });
    };
    // Acciones o handles que son funciones pasadas a la vista como parámetros
    TodoViewT.prototype.bindAddTodo = function (handler) {
        var _this = this;
        this.form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (_this._todoText) {
                handler(_this._todoText);
                _this._resetInput();
            }
        });
    };
    TodoViewT.prototype.bindDeleteTodo = function (handler) {
        this.todoList.addEventListener("click", function (event) {
            var _a;
            if (event.target.className === "delete") {
                var id = (_a = event.target.parentElement) === null || _a === void 0 ? void 0 : _a.id;
                if (id) {
                    handler(id);
                }
            }
        });
    };
    TodoViewT.prototype.bindEditTodo = function (handler) {
        var _this = this;
        this.todoList.addEventListener("focusout", function (event) {
            var _a;
            if (_this._temporaryTodoText) {
                var id = (_a = event.target.parentElement) === null || _a === void 0 ? void 0 : _a.id;
                if (id) {
                    handler(id, _this._temporaryTodoText);
                    _this._temporaryTodoText = "";
                }
            }
        });
    };
    // bindToggleTodo(handler: (id: string) => void): void {
    //     this.todoList.addEventListener("change", event => {
    //         if ((event.target as HTMLElement).type === "checkbox") {
    //             const id = (event.target as HTMLElement).parentElement?.id;
    //             if (id) {
    //                 handler(id);
    //             }
    //         }
    //     });
    // }
    TodoViewT.prototype.bindToggleTodo = function (handler) {
        this.todoList.addEventListener("change", function (event) {
            var _a;
            var target = event.target;
            //  checks if the target is an INPUT element and then casts target to HTMLInputElement to access the type property. 
            if (target.tagName === "INPUT" && target.type === "checkbox") {
                var id = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.id;
                if (id) {
                    handler(id);
                }
            }
        });
    };
    return TodoViewT;
}());
