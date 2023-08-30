import React from "react";
import { TodoType } from "./TodoPage";

type TodoComponentProps = TodoType & {
  updateTodoStatus: (id: TodoType["id"]) => void;
  deleteTodo: (id: TodoType["id"]) => void;
};

export const TodoComponent = ({
  id,
  task,
  completed,
  updateTodoStatus,
  deleteTodo,
}: TodoComponentProps) => {
  const handleChange = () => {
    updateTodoStatus(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li>
      <label style={{ userSelect: "none" }}>
        {task}
        <input type="checkbox" checked={completed} onChange={handleChange} />
      </label>
      <button style={{ background: "red" }} onClick={() => handleDelete()}>
        x
      </button>
    </li>
  );
};
