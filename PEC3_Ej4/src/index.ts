// Importa las dependencias necesarias
import { Todo } from './models/todo'; // Ajusta la ruta según la estructura de tu proyecto
import { TodoTService } from './services/todoT.service'; // Ajusta la ruta según la estructura de tu proyecto
import { TodoViewT } from './views/todoViewT'; // Ajusta la ruta según la estructura de tu proyecto

// Crea instancias de las clases principales
const todoService = new TodoTService();
const todoView = new TodoViewT();

// Configura el servicio para notificar a la vista cuando cambia la lista de tareas
todoService.onTodoListChanged = (todos: Todo[]) => {
  todoView.displayTodos(todos);
};

// Ejemplo de cómo agregar tareas al servicio
todoService.addTodo(new Todo('Hacer ejercicio'));
todoService.addTodo(new Todo('Estudiar TypeScript'));

// ... más lógica de la aplicación según sea necesario

// Llama a la función principal para inicializar o ejecutar tu aplicación
function initializeApp() {
  // Lógica de inicialización aquí
}

// Inicia la aplicación
initializeApp();