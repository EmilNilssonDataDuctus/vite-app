import { useState } from "react";

export const ClimberForm = ({ addClimber }) => {
  const [newClimberName, setNewClimberName] = useState("");

  const updateClimberName = (e) => {
    setNewClimberName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addClimber(newClimberName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Add new climber</button>
      <input
        type="text"
        id="climberName"
        onChange={updateClimberName}
        value={newClimberName}
        placeholder="instagram @name"
      />
    </form>
  );
};
