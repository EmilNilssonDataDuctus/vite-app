import React, { useState } from "react";
import { TodoType } from "./TodoPage";

type TodoComponentProps = TodoType & {
  updateTodoStatus: (id: TodoType["id"]) => void;
  deleteTodo: (id: TodoType["id"]) => void;
  updateTodoTask: (id: TodoType["id"], task: TodoType["task"]) => void;
  updateTodoTimeToDeliver: (
    id: TodoType["id"],
    timeToDeliver: TodoType["timeToDeliver"]
  ) => void;
};

export const TodoComponent = ({
  id,
  task,
  timeToDeliver,
  completed,
  updateTodoStatus,
  deleteTodo,
  updateTodoTask,
  updateTodoTimeToDeliver,
}: TodoComponentProps) => {
  const [taskValue, setTaskValue] = useState(task);
  const [timeToDeliverValue, setTimeToDeliverValue] = useState(timeToDeliver);

  const handleToggleTodo = () => {
    updateTodoStatus(id);
  };

  const handleTaskChange = (e) => {
    setTaskValue(e.target.value);
  };
  const handleTimeToDeliverChange = (e) => {
    setTimeToDeliverValue(parseInt(e.target.value, 10));
  };

  const handleTaskDescription = () => {
    updateTodoTask(id, taskValue);
  };
  
  const handleUpdateTodoTimeToDeliver = () => {
    updateTodoTimeToDeliver(id, timeToDeliverValue);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li
      style={{
        display: "flex",
        gap: "24px",
        backgroundColor: "rgba(0, 0, 255, 0.4)",
        border: "1px solid rgba(0, 0, 255, 0.4)",
        padding: "16px 32px",
      }}
    >
      <button
        style={{
          background: "red",
          width: "24px",
          height: "24px",
          alignSelf: "center",
          cursor: "pointer",
        }}
        onClick={() => handleDelete()}
      >
        x
      </button>
      <label>
        Task description
        <br />
        <input
          value={taskValue}
          onChange={handleTaskChange}
          onBlur={handleTaskDescription}
        />
      </label>
      <label>
        Estimated time to deliver
        <br />
        <input
          type="number"
          min="1"
          value={timeToDeliverValue}
          onChange={handleTimeToDeliverChange}
          onBlur={handleUpdateTodoTimeToDeliver}
          style={{ width: "50px" }}
        />{" "}
        hours
      </label>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggleTodo}
        style={{ width: "48px", cursor: "pointer" }}
      />
    </li>
  );
};
