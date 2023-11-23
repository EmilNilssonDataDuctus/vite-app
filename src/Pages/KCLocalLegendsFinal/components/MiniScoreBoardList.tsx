import React from "react";
import { reduceBouldersToPoints } from "./TableOfClimbers";

export const MiniScoreBoardList = ({ climbersData, gender }) => {
  return (
    <ol style={{ padding: "20px" }}>
      {climbersData
        .sort((a, b) =>
          a.completedBoulders.reduce(reduceBouldersToPoints, 0.0) >
          b.completedBoulders.reduce(reduceBouldersToPoints, 0.0)
            ? -1
            : 1
        )
        .filter((climber) => climber.climberGender === gender)
        .filter((climber) => !climber.deleted)
        .map((climber) => (
          <li>
            {climber.climberName}:{" "}
            {climber.completedBoulders
              .reduce(reduceBouldersToPoints, 0.0)
              .toFixed(1)}
            p
          </li>
        ))}
    </ol>
  );
};
