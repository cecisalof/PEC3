var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @class Service
 *
 * Manages the data of the application.
 */
var TodoServiceT = /** @class */ (function () {
    function TodoServiceT() {
        this.onTodoListChanged = null;
        // localStorage.getItem("todos") can return a string or null. 
        // handle the case where localStorage.getItem("todos") is null, if so it will default to an empty array
        var storedTodos = localStorage.getItem("todos");
        this.todos = (storedTodos ? JSON.parse(storedTodos) : []).map(function (todo) { return new TodoT(todo); });
        this.onTodoListChanged = null;
    }
    // // property with the appropriate function type.
    // private onTodoListChanged: Function;
    TodoServiceT.prototype.bindTodoListChanged = function (callback) {
        this.onTodoListChanged = callback;
    };
    TodoServiceT.prototype._commit = function (todos) {
        if (this.onTodoListChanged !== null) {
            this.onTodoListChanged(todos);
        }
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    TodoServiceT.prototype.addTodo = function (text) {
        this.todos.push(new TodoT({ text: text }));
        this._commit(this.todos);
    };
    // Review id & text types
    TodoServiceT.prototype.editTodo = function (id, updatedText) {
        this.todos = this.todos.map(function (todo) {
            return todo.id === id
                ? new TodoT(__assign(__assign({}, todo), { text: updatedText }))
                : todo;
        });
        this._commit(this.todos);
    };
    // Review id type
    TodoServiceT.prototype.deleteTodo = function (_id) {
        this.todos = this.todos.filter(function (_a) {
            var id = _a.id;
            return id !== _id;
        });
        this._commit(this.todos);
    };
    // Review id type
    TodoServiceT.prototype.toggleTodo = function (_id) {
        this.todos = this.todos.map(function (todo) {
            return todo.id === _id ? new TodoT(__assign(__assign({}, todo), { complete: !todo.complete })) : todo;
        });
        this._commit(this.todos);
    };
    return TodoServiceT;
}());
