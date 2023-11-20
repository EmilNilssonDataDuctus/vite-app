// Example todos
// Only ever used whenever a new client is using this application
const initialTodos = [
  { id: 1, task: "begin creating app", completed: true },
  { id: 2, task: "create rest of app", completed: false },
];

const storedTodosFromLocalStorage = localStorage.getItem("storedTodos");

export const initialseStateOfTodos = storedTodosFromLocalStorage
  ? JSON.parse(storedTodosFromLocalStorage)
  : initialTodos;
