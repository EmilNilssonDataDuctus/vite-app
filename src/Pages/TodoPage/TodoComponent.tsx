import React from "react";

export const TodoComponent = ({ id, task, completed, updateTodoStatus }) => {
  const handleChange = () => {
    updateTodoStatus(id, completed);
  };
  return (
    <li>
      {task}{" "}
      <input type="checkbox" checked={completed} onChange={handleChange} />
    </li>
  );
};
