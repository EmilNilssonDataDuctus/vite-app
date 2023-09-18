import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MainWrapper } from "../../Shared/Page.styled";
import { boulders } from "../KCSummerLeaguePage/data/boulders";
import "./myCss.css";
import {
  BoulderOnClimber,
  Climber,
  initialseStateOfClimbers,
} from "./utils/initialseClimberData";

export const KCSummerLeaguePageSimplified = () => {
  const [climbersData, setClimbersData] = useState<Array<Climber>>(
    initialseStateOfClimbers
  );
  const [inputValue, setInputValue] = useState("");

  const [shouldSortByCompletions, setShouldSortByCompletions] = useState(false);
  const [shouldSortAlphabetically, setShouldSortAlphabetically] =
    useState(false);

  // @TODO: fix this
  let iterator = climbersData.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClimber: Climber = {
      climberName: inputValue,
      climberId: uuidv4(),
      completedBoulders: boulders.map((boulder) => ({
        ...boulder,
        completed: false,
      })),
      // @TODO: fix this
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
    // Clone the climbersData array to avoid mutations
    const updatedClimbersData = [...climbersData];

    // Find the climber by climberId
    const selectedClimber = updatedClimbersData.find(
      (climber) => climber.climberId === climberId
    );

    if (selectedClimber) {
      // Clone the completedBoulders array of the selected climber
      const updatedBoulders = [...selectedClimber.completedBoulders];

      // Find the selected boulder within the completedBoulders array
      const selectedBoulderIndex = updatedBoulders.findIndex(
        (boulder) => boulder.boulderId === boulderId
      );

      if (selectedBoulderIndex !== -1) {
        // Toggle the completed status of the selected boulder
        updatedBoulders[selectedBoulderIndex].completed =
          !updatedBoulders[selectedBoulderIndex].completed;

        // Update the completedBoulders array of the selected climber
        selectedClimber.completedBoulders = updatedBoulders;

        // Update the climbersData array with the modified climber object
        const climberIndex = updatedClimbersData.findIndex(
          (climber) => climber.climberId === climberId
        );

        if (climberIndex !== -1) {
          updatedClimbersData[climberIndex] = selectedClimber;

          // Set the updated climbersData state
          setClimbersData(updatedClimbersData);
        }
      }
    }
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
          <table style={{border: "1px solid grey"}}>
            <thead>
              <tr>
                <th>Climber</th>
                <th style={{ textAlign: "right" }}>Wall</th>
                {boulders.map(({ boulderId, wall, color }) => (
                  <th
                    key={boulderId}
                    style={{
                      backgroundColor: color,
                    }}
                  >
                    <span style={{ mixBlendMode: "difference" }}>{wall}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortClimbersData(climbersData).map(
                ({ climberId, climberName, completedBoulders }: Climber) => (
                  <tr key={climberId} style={{ mixBlendMode: "difference" }}>
                    <td>{climberName}</td>
                    <td>
                      <span style={{ marginLeft: "auto", padding: "16px" }}>
                        Total Boulders completed:{" "}
                        {completedBoulders.reduce(reduceBoulders, 0)}
                      </span>
                    </td>
                    {completedBoulders.map(
                      ({ boulderId, color, completed }: BoulderOnClimber) => (
                        <td
                          key={boulderId}
                          style={{
                            backgroundColor: color,
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
                        </td>
                      )
                    )}
                    <td>
                      <button onClick={() => handleDelete(climberId)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </section>
      </div>
    </MainWrapper>
  );
};
