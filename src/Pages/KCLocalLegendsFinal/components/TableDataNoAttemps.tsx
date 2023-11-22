import React, { useEffect, useState } from "react";

export const TableDataNoAttemps = ({
  color,
  attempts,
  handleNoAttemptsChange,
  climberId,
  boulderId,
}) => {
  const [attemptsValue, setAttemptsValue] = useState(attempts);
  const colorA = color.includes("/") ? "white" : color;

  useEffect(() => {
    handleNoAttemptsChange(climberId, boulderId, attemptsValue);
  }, [attemptsValue]);

  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        style={{
          accentColor: colorA,
          width: "40px",
        }}
        min="1"
        type="number"
        value={attemptsValue}
        onChange={(e) => setAttemptsValue(() => parseInt(e.target.value, 10))}
      />
      attempts
    </label>
  );
};
