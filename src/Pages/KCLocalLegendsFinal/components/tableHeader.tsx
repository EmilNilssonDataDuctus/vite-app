import React from "react";

export const TableHeader = ({ boulderId, color, wall }) => {
  const colorA = color.includes("/") ? "white" : color;
  return (
    <th
      key={boulderId}
      style={{
        backgroundColor: colorA,
      }}
    >
      <span style={{ mixBlendMode: "difference" }}>
        {boulderId}: {wall}
      </span>
    </th>
  );
};
