import React, { useEffect, useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { TodosStatus } from "./DumbComponents/TodosStatus";
import { TodoComponent } from "./TodoComponent";

export type TodoType = {
  id: number;
  task: string;
  completed: boolean;
};

const initialTodos = [
  { id: 1, task: "begin creating app", completed: true },
  { id: 2, task: "create rest of app", completed: false },
];

const storedTodosFromLocalStorage = localStorage.getItem("storedTodos");

const initialseStateOfTodos = storedTodosFromLocalStorage
  ? JSON.parse(storedTodosFromLocalStorage)
  : initialTodos;

export const TodoPage = () => {
  const [todos, setTodos] = useState<Array<TodoType>>(initialseStateOfTodos);

  const updateTodoStatus = (todoId, oldStatus) => {
    const updatedTodo = todos.find((todo) => todo.id === todoId);
    if (updatedTodo) {
      updatedTodo.completed = !oldStatus;

      // this is a black box
      // setTodos([
      //   ...todos.map((todo) => {
      //     if (todo.id === todoId) {
      //       return {
      //         ...todo,
      //         complete: !oldStatus,
      //       };
      //     }
      //     return todo;
      //   }),
      // ]);

      // this is even more compact, but sursprisingly easier to read
      setTodos([
        ...todos.map((todo) =>
          todo.id === todoId ? { ...todo, completed: !oldStatus } : todo
        ),
      ]);
    }
  };

  // runs to sync the state of the react component with what was saved in localstorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("storedTodos")!);
    console.log("storedTodos", storedTodos);
    if (!storedTodos) {
      console.log("should never run");
      localStorage.setItem("storedTodos", JSON.stringify(todos));
    } else {
      console.log("should always run");
      setTodos(storedTodos);
    }
    console.log("use Effect called once on startup");
  }, []);

  // runs after the todo array has been altered
  useEffect(() => {
    localStorage.setItem("storedTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <MainWrapper>
      <h1>Todo list</h1>
      <TodosStatus todos={todos} />
      <ul>
        {todos.map((todo) => (
          <TodoComponent
            key={todo.id}
            {...todo}
            updateTodoStatus={updateTodoStatus}
          />
        ))}
      </ul>
    </MainWrapper>
  );
};
