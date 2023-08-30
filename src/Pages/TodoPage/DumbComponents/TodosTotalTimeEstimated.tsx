import React from "react";
import { TodoType } from "../TodoPage";

type TodosStatusProps = {
  todos: TodoType[];
};

export const TodosTotalTimeEstimated = ({ todos }: TodosStatusProps) => {
  const totalTimeToDoTasks = todos.reduce(
    (accumulator, currentTodo) => accumulator + currentTodo.timeToDeliver,
    0
  );
  return <p>Total time to complete tasks: {totalTimeToDoTasks}</p>;
};
