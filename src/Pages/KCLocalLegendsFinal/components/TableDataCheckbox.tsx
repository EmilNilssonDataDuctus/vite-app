import React from "react";

export const TableDataCheckbox = ({
  color,
  boulderId,
  completed,
  handleBoulderToggle,
  climberId,
}) => {
  const colorA = color.includes("/") ? "white" : color;

  return (
    <td
      key={boulderId}
      style={{
        backgroundColor: colorA,
        opacity: completed ? "0.9" : "0.4",
      }}
    >
      <label>
        <div
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
              height: "40px",
            }}
            type="checkbox"
            checked={completed}
            onChange={() => handleBoulderToggle(climberId, boulderId)}
          />
        </div>
      </label>
    </td>
  );
};
