import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MainWrapper } from "../../Shared/Page.styled";
import { boulders } from "../KCSummerLeaguePage/data/boulders";

export const KCSummerLeaguePageSimplified = () => {
  const [climbersData, setClimbersData] = useState<Array<any>>([]);
  const [inputValue, setInputValue] = useState("");

  let iterator = climbersData.length;

  const handleSubmit = (e) => {
    const newClimber = {
      climberName: inputValue,
      climberId: uuidv4(),
      completedBoulders: boulders.map((boulder) => ({
        ...boulder,
        completed: false,
      })),
      orderAdded: ++iterator,
    };
    e.preventDefault();
    setClimbersData([...climbersData, newClimber]);
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

  const renderNumbers = () => {
    let arr: any = [];
    for (let i = 0; i < 16; i++) {
      arr.push(<li></li>);
    }
    return arr;
  };

  const handleBoulderToggle = (climberId, boulderId) => {
    const copyOfClimbersArr = [...climbersData];
    const selectedClimber = copyOfClimbersArr.find(
      (climber) => climber.climberId === climberId
    );
    const copyOfClimbersBoulderArr = [...selectedClimber.completedBoulders];
    const selectedBoulder = copyOfClimbersBoulderArr.find(
      (boulder) => boulder.boulderId === boulderId
    );

    const changedBoulderStatus = {
      ...selectedBoulder,
      completed: !selectedBoulder.completed,
    };

    const newBoulderArr = [
      ...copyOfClimbersBoulderArr.filter(
        (boudler) => boudler.boulderId !== selectedBoulder.boulderId
      ),
    ];
    newBoulderArr.push(changedBoulderStatus);
    const updatedClimberObject = {
      ...selectedClimber,
      completedBoulders: newBoulderArr,
    };

    const updatedArrayofClimbers = [
      ...[...climbersData].filter((climber) => climber.climberId !== climberId),
      updatedClimberObject,
    ];

    // climbersData
    //   .find((climber) => climber.climberId === climberId)
    //   .completedBoulders.find((boulder) => boulder.boulderId === boulderId);

    setClimbersData(updatedArrayofClimbers);
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
          {/* <ol>{renderNumbers()}</ol> */}
          <ul>
            {climbersData
              ?.sort((climberA, climberB) =>
                climberA.orderAdded < climberB.orderAdded ? -1 : 1
              )
              .map(
                ({ climberId, climberName, completedBoulders, orderAdded }) => (
                  <li key={climberId}>
                    climber: {climberName} , id: {climberId}, orderAdded:{" "}
                    {orderAdded}
                    <button onClick={() => handleDelete(climberId)}>
                      Delete
                    </button>
                    <ul style={{ display: "flex" }}>
                      {completedBoulders
                        .sort((boulderA, boulderB) =>
                          boulderA.boulderId < boulderB.boulderId ? 1 : -1
                        )
                        .map(({ boulderId, completed, wall, color }) => (
                          <li
                            style={{ backgroundColor: color }}
                            key={boulderId}
                          >
                            <label>
                              <p>
                                {wall}:{completed.toString()}
                              </p>
                              <div>
                                <input
                                  type="checkbox"
                                  checked={completed}
                                  onChange={() =>
                                    handleBoulderToggle(climberId, boulderId)
                                  }
                                />
                              </div>
                            </label>
                          </li>
                        ))}
                    </ul>
                  </li>
                )
              )}
          </ul>
        </section>
      </div>
    </MainWrapper>
  );
};
