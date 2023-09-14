import React, { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";

export const KCSummerLeaguePageSimplified = () => {
  const [climbersData, setClimbersData] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setClimbersData([...climbersData, inputValue]);
    setInputValue("");
  };

  const handleDelete = (target) => {
    setClimbersData([...climbersData].filter((climber) => climber !== target));
  };

  const handleTextInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
    console.log(typeof e.target.value);
  };

  return (
    <MainWrapper>
      <h1>KCSummerLeagueTracker</h1>
      <div>
        <h2>Table of climbers</h2>
        <section>
          <h3>Add a new climber</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleTextInputChange}
            />
            <input type="submit" />
          </form>
        </section>
        <section>
          <h3>Current standings</h3>
          <ul>
            {climbersData?.map((climber) => (
              <li key={climber}>
                climber: {climber}{" "}
                <button onClick={() => handleDelete(climber)}>Delete</button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </MainWrapper>
  );
};
