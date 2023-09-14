import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MainWrapper } from "../../Shared/Page.styled";
import { boulders } from "../KCSummerLeaguePage/data/boulders";
import "./myCss.css";
import { initialseStateOfClimbers } from "./utils/initialseClimberData";

export const KCSummerLeaguePageSimplified = () => {
  const [climbersData, setClimbersData] = useState<Array<any>>(
    initialseStateOfClimbers
  );
  const [inputValue, setInputValue] = useState("");

  const [shouldSortByCompletions, setShouldSortByCompletions] = useState(false);
  const [shouldSortAlphabetically, setShouldSortAlphabetically] =
    useState(false);

  let iterator = climbersData.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClimber = {
      climberName: inputValue,
      climberId: uuidv4(),
      completedBoulders: boulders.map((boulder) => ({
        ...boulder,
        completed: false,
      })),
      orderAdded: ++iterator,
    };
    setClimbersData([...climbersData, newClimber]);
    setInputValue("");
  };

  const handleDelete = (climberId) => {
    setClimbersData(
      [...climbersData].filter((climber) => climber.climberId !== climberId)
    );
  };

  const handleTextInputChange = (e) => setInputValue(e.target.value);

  // runs after the climbers array has been altered
  useEffect(() => {
    localStorage.setItem("storedClimbers", JSON.stringify(climbersData));
  }, [climbersData]);

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

  const reduceBoulders = (accumulator, currentBoulder) => {
    if (currentBoulder.completed) accumulator++;
    return accumulator;
  };

  const sortClimbersData = (array) => {
    const shouldSortByOrderAdded = true;

    const arrAfterFirstSort = shouldSortByOrderAdded
      ? [...array].sort((climberA, climberB) =>
          climberA.orderAdded > climberB.orderAdded ? 1 : -1
        )
      : [...array];

    const arrAfterSecondSort = shouldSortAlphabetically
      ? [...arrAfterFirstSort].sort((climberA, climberB) => {
          return climberA.climberName.toLowerCase() <
            climberB.climberName.toLowerCase()
            ? -1
            : 1;
        })
      : arrAfterFirstSort;

    const arrAfterThirdSort = shouldSortByCompletions
      ? [...arrAfterSecondSort].sort((climberA, climberB) => {
          return climberA.completedBoulders.reduce(reduceBoulders, 0) >
            climberB.completedBoulders.reduce(reduceBoulders, 0)
            ? -1
            : 1;
        })
      : arrAfterSecondSort;

    return arrAfterThirdSort;
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
          <form>
            <label>
              Sort the climbers by boulders completed
              <input
                type="checkbox"
                checked={shouldSortByCompletions}
                onChange={() =>
                  setShouldSortByCompletions(!shouldSortByCompletions)
                }
              />
            </label>
            <br />
            <label>
              Sort the climbers by name
              <input
                type="checkbox"
                checked={shouldSortAlphabetically}
                onChange={() =>
                  setShouldSortAlphabetically(!shouldSortAlphabetically)
                }
              />
            </label>
          </form>
          <ul>
            <li>
              <ul style={{ display: "flex", alignItems: "center" }}>
                {boulders
                  .sort((boulderA, boulderB) =>
                    boulderA.boulderId > boulderB.boulderId ? 1 : -1
                  )
                  .map(({ wall, color }) => (
                    <li
                      style={{
                        backgroundColor: color,
                        width: "90px",
                        padding: "4px",
                        display: "inline-block",
                      }}
                    >
                      <span className="mix-me">
                        Wall: <br />
                        {wall}
                      </span>
                    </li>
                  ))}
              </ul>
            </li>
            {sortClimbersData(climbersData).map(
              ({ climberId, climberName, completedBoulders, orderAdded }) => (
                <li
                  key={climberId}
                  style={{
                    backgroundColor: "rgba(255, 0, 0, 0.3)",
                    maxWidth: "fit-content",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "rgba(0, 0, 120, 0.3)",
                    }}
                  >
                    <span>
                      climber: {climberName} , id: {climberId}, orderAdded:
                      {orderAdded}
                    </span>
                    <button onClick={() => handleDelete(climberId)}>
                      Delete
                    </button>
                  </div>
                  <ul style={{ display: "flex", alignItems: "center" }}>
                    {completedBoulders
                      ?.sort((boulderA, boulderB) =>
                        boulderA.boulderId > boulderB.boulderId ? 1 : -1
                      )
                      .map(({ boulderId, completed, color }) => (
                        <li
                          style={{
                            backgroundColor: color,
                            opacity: `${completed ? "1" : "0.4"}`,
                            width: "90px",
                            padding: "4px",
                            display: "inline-block",
                          }}
                          key={boulderId}
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
                                  accentColor: color,
                                  width: "40px",
                                  height: "40px",
                                }}
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
                    <span style={{ marginLeft: "auto", padding: "16px" }}>
                      Total Boulders completed:{" "}
                      {completedBoulders.reduce(reduceBoulders, 0)}
                    </span>
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
