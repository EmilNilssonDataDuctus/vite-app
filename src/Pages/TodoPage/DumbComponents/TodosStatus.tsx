import React from "react";
import { TodoType } from "../TodoPage";

type TodosStatusProps = {
  todos: TodoType[];
};

export const TodosStatus = ({ todos }: TodosStatusProps) => {
  return (
    <>
      {todos.some((todo) => !todo.completed) ? (
        <>
          <p>
            You still have todos to check off!
            {todos.some((todo) => todo.completed) ? (
              <>
                {" "}
                <span>
                  You are well on your way to complete your list off todos, keep
                  up the good work!
                </span>
              </>
            ) : (
              <>
                {" "}
                <span>You have yet to begin completing your tasks</span>
              </>
            )}
          </p>
        </>
      ) : (
        <p>You have completed all your todos</p>
      )}
    </>
  );
};
