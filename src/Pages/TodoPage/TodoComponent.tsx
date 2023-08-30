import React from "react";
import { TodoType } from "./TodoPage";

type TodoComponentProps = TodoType & {
  updateTodoStatus: (id: TodoType["id"]) => void;
};

export const TodoComponent = ({
  id,
  task,
  completed,
  updateTodoStatus,
}: TodoComponentProps) => {
  const handleChange = () => {
    updateTodoStatus(id);
  };
  return (
    <li>
      <label style={{ userSelect: "none" }}>
        {task}
        <input type="checkbox" checked={completed} onChange={handleChange} />
      </label>
    </li>
  );
};
