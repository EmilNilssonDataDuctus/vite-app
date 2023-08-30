import React, { useEffect, useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";

export const TodoPage = () => {
  const [todos, setTodos] = useState([{ task: "create rest of app" }]);

  useEffect(() => {
    console.log("use Effect called");
    console.log("todos array updated");
  }, [todos]);

  return (
    <MainWrapper>
      <h1>Todo list</h1>
      <ul>
        {todos.map((todo) => (
          <li>{todo.task}</li>
        ))}
      </ul>
    </MainWrapper>
  );
};
