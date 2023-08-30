import React, { useState } from "react";
import { TodoType } from "./TodoPage";

type TodoComponentProps = TodoType & {
  updateTodoStatus: (id: TodoType["id"]) => void;
  deleteTodo: (id: TodoType["id"]) => void;
  updateTodoTask: (id: TodoType["id"], task: TodoType["task"]) => void;
};

export const TodoComponent = ({
  id,
  task,
  completed,
  updateTodoStatus,
  deleteTodo,
  updateTodoTask,
}: TodoComponentProps) => {
  const [taskValue, setTaskValue] = useState(task);

  const handleToggleTodo = () => {
    updateTodoStatus(id);
  };

  const handleTaskChange = (e) => {
    setTaskValue(e.target.value);
  };

  const handleTaskSubmitChange = () => {
    updateTodoTask(id, taskValue);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        width: "200px",
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggleTodo}
        style={{ width: "24px", height: "24px" }}
      />
      <input
        value={taskValue}
        onChange={handleTaskChange}
        onBlur={handleTaskSubmitChange}
      />
      <button
        style={{ background: "red", justifySelf: "flex-end" }}
        onClick={() => handleDelete()}
      >
        x
      </button>
    </li>
  );
};
