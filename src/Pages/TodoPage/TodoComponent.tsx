import React from "react";

export const TodoComponent = ({ id, task, completed, updateTodoStatus }) => {
  const handleChange = () => {
    updateTodoStatus(id, completed);
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
