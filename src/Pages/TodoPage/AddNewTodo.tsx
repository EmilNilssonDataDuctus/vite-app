import React, { useState } from "react";

export const AddNewTodo = ({ addNewTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addNewTodo(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Task description
        <input value={value} onChange={(e) => handleChange(e)} />
      </label>
    </form>
  );
};
