import React, { useEffect, useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { TodoComponent } from "./TodoComponent";
import { TodosStatus } from "./TodosStatus";

export type TodoType = {
  id: number;
  task: string;
  completed: boolean;
};

export const TodoPage = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([
    { id: 1, task: "begin creating app", completed: true },
    { id: 2, task: "create rest of app", completed: false },
  ]);

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
          todo.id === todoId ? { ...todo, complete: !oldStatus } : todo
        ),
      ]);
    }
  };

  useEffect(() => {
    console.log("use Effect called");
    console.log("todos array updated");
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
