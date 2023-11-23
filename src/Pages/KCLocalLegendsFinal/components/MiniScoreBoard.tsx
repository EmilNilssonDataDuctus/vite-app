import React from "react";
import { MiniScoreBoardList } from "./MiniScoreBoardList";

export const MiniScoreBoard = ({ climbersData }) => {
  return (
    <div className="miniscoreboard">
      <MiniScoreBoardList climbersData={climbersData} gender="female" />
      <MiniScoreBoardList climbersData={climbersData} gender="male" />
    </div>
  );
};
