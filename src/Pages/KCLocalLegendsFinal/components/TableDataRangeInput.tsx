import React, { useState } from "react";
import { TableDataNoAttemps } from "./TableDataNoAttemps";

export const TableDataRangeInput = ({
  color,
  boulderId,
  completed,
  points,
  attempts,
  handleBoulderPointsChange,
  handleNoAttemptsChange,
  climberId,
}) => {
  const colorA = color.includes("/") ? "white" : color;
  const [pointsGained, setPointsGained] = useState<string>(points);

  const handleRangeChange = (e) => {
    let newValue = e.target.value;
    if (newValue > 40) newValue = 65;
    setPointsGained((prev) => newValue.toString());
  };

  return (
    <td
      key={boulderId}
      style={{
        opacity: "0.9",
        fontWeight: 900,
        backgroundColor: completed ? "rgba(0, 255, 0, 0.3)" : "black",
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
          {pointsGained}p
          <input
            style={{
              accentColor: colorA,
              mixBlendMode: "difference",
              width: "80px",
              height: "40px",
            }}
            type="range"
            min="0"
            max="65"
            list="markers"
            value={pointsGained}
            onChange={(e) => handleRangeChange(e)}
            onMouseUp={() =>
              handleBoulderPointsChange(climberId, boulderId, pointsGained)
            }
          />
          <datalist id="markers">
            <option value="0"></option>
            <option value="10"></option>
            <option value="20"></option>
            <option value="30"></option>
            <option value="40"></option>
            <option value="65"></option>
          </datalist>
        </div>
      </label>
      with
      <TableDataNoAttemps
        color={color}
        attempts={attempts}
        handleNoAttemptsChange={handleNoAttemptsChange}
        climberId={climberId}
        boulderId={boulderId}
      />
    </td>
  );
};
