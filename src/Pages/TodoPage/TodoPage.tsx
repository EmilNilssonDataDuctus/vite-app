import React, { useEffect, useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { TodoComponent } from "./TodoComponent";

export const TodoPage = () => {
  const [todos, setTodos] = useState([
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
