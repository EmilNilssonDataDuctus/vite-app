import React from "react";
import { MainWrapper } from "../../Shared/Page.styled";

export const KCSummerLeaguePageSimplified = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleTextInputChange = () => {};

  return (
    <MainWrapper>
      <h1>KCSummerLeagueTracker</h1>
      <div>
        <h2>Table of climbers</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleTextInputChange} />
          <input type="submit" />
        </form>
      </div>
    </MainWrapper>
  );
};
