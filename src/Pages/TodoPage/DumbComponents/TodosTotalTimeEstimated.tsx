import React from "react";
import { TodoType } from "../TodoPage";

type TodosStatusProps = {
  todos: TodoType[];
};

export const TodosTotalTimeEstimated = ({ todos }: TodosStatusProps) => {
  const onlyUncompletedTodos = (todo) => !todo.completed;
  const toTotalTimeToComplete = (accumulator, currentTodo) =>
    accumulator + currentTodo.timeToDeliver;

  const totalTimeToDoTasks = todos
    .filter(onlyUncompletedTodos)
    .reduce(toTotalTimeToComplete, 0);
  return <p>Total time to complete tasks: {totalTimeToDoTasks} hours</p>;
};
