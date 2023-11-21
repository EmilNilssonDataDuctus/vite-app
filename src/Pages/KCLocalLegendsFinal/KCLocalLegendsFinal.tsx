import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MainWrapper } from "../../Shared/Page.styled";
import "./KCLocalLegendsFinal.css";
import { TableDataCheckbox } from "./components/TableDataCheckbox";
import { TableDataRangeInput } from "./components/TableDataRangeInput";
import TableHeader from "./components/TableHeader";
import { boulders } from "./data/boulders";
import {
  Climber,
  PrettyBoulderOnClimber,
  initialseStateOfClimbers,
} from "./utils/initialseClimberData";

export const KCLocalLegendsFinal = () => {
  const [climbersData, setClimbersData] = useState<Array<Climber>>(
    initialseStateOfClimbers
  );
  const [inputValue, setInputValue] = useState("");
  const [inputValueGender, setInputValueGender] = useState("male");

  const [shouldSortByCompletions, setShouldSortByCompletions] = useState(false);
  const [shouldSortAlphabetically, setShouldSortAlphabetically] =
    useState(false);
  const [hideDeletedClimbers, hideShowDeletedClimbers] = useState(true);

  // @TODO: fix this
  let iterator = climbersData.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    const newClimber: Climber = {
      climberName: inputValue,
      climberGender: inputValueGender,
      climberId: uuidv4(),
      completedBoulders: boulders.map((boulder) => ({
        ...boulder,
        completed: false,
        points: 0,
        attempts: 0,
      })),
      deleted: false,
      // @TODO: fix this
      orderAdded: ++iterator,
    };
    setClimbersData([...climbersData, newClimber]);
    setInputValue("");
  };

  const handleDeletePermanent = (climberId) => {
    setClimbersData(
      [...climbersData].filter((climber) => climber.climberId !== climberId)
    );
  };

  const handleDeleteWithOptionToRestore = (climberId) => {
    // Clone the climbersData array to avoid mutations
    const updatedClimbersData = [...climbersData];

    // Find the climber by climberId
    const selectedClimber = updatedClimbersData.find(
      (climber) => climber.climberId === climberId
    );

    if (selectedClimber) {
      const copyOfSelectedClimber = { ...selectedClimber, deleted: true };

      const climberIndex = updatedClimbersData.findIndex(
        (climber) => climber.climberId === climberId
      );
      if (climberIndex !== -1) {
        updatedClimbersData[climberIndex] = copyOfSelectedClimber;

        // Set the updated climbersData state
        setClimbersData(updatedClimbersData);
      }
    }
  };

  const handleRestoreDeletedClimber = (climberId) => {
    // Clone the climbersData array to avoid mutations
    const updatedClimbersData = [...climbersData];

    // Find the climber by climberId
    const selectedClimber = updatedClimbersData.find(
      (climber) => climber.climberId === climberId
    );

    if (selectedClimber) {
      const copyOfSelectedClimber = { ...selectedClimber, deleted: false };

      const climberIndex = updatedClimbersData.findIndex(
        (climber) => climber.climberId === climberId
      );
      if (climberIndex !== -1) {
        updatedClimbersData[climberIndex] = copyOfSelectedClimber;

        // Set the updated climbersData state
        setClimbersData(updatedClimbersData);
      }
    }
  };

  const handleTextInputChange = (e) => setInputValue(e.target.value);
  const handleRadioInputChange = (e) => setInputValueGender(e.target.value);

  // runs after the climbers array has been altered
  useEffect(() => {
    localStorage.setItem(
      "storedClimbersLocalLegendsFinal",
      JSON.stringify(climbersData)
    );
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

  const handleBoulderPointsChange = (climberId, boulderId, points) => {
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
        updatedBoulders[selectedBoulderIndex].points = points;

        if (points == 65) {
          updatedBoulders[selectedBoulderIndex].completed = true;
        } else {
          updatedBoulders[selectedBoulderIndex].completed = false;
        }

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

  const handleNoAttemptsChange = (climberId, boulderId, attempts) => {
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
        updatedBoulders[selectedBoulderIndex].attempts = attempts;

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
      ? array.toSorted((climberA, climberB) =>
          climberA.orderAdded > climberB.orderAdded ? 1 : -1
        )
      : array;

    const arrAfterSecondSort = shouldSortAlphabetically
      ? arrAfterFirstSort.toSorted((climberA, climberB) => {
          return climberA.climberName.toLowerCase() <
            climberB.climberName.toLowerCase()
            ? -1
            : 1;
        })
      : arrAfterFirstSort;

    const arrAfterThirdSort = shouldSortByCompletions
      ? arrAfterSecondSort.toSorted((climberA, climberB) => {
          return climberA.completedBoulders.reduce(reduceBoulders, 0) >
            climberB.completedBoulders.reduce(reduceBoulders, 0)
            ? -1
            : 1;
        })
      : arrAfterSecondSort;

    const arrAfterFiltering = hideDeletedClimbers
      ? [...arrAfterThirdSort].filter((climber) => !climber.deleted)
      : arrAfterThirdSort;

    return arrAfterFiltering;
  };

  return (
    <MainWrapper>
      {/* <h1>KCSummerLeagueTracker</h1> */}
      <div>
        {/* <h2>Table of climbers</h2> */}
        <section>
          <h3>Add a new climber</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleTextInputChange}
            />
            <br />
            <label>
              Male
              <input
                type="radio"
                value="male"
                checked={inputValueGender === "male"}
                onChange={handleRadioInputChange}
              />
            </label>
            <br />
            <label>
              Female
              <input
                type="radio"
                value="female"
                checked={inputValueGender === "female"}
                onChange={handleRadioInputChange}
              />
            </label>
            <br />
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
            <br />
            <label>
              Hide deleted climbers
              <input
                type="checkbox"
                checked={hideDeletedClimbers}
                onChange={() => hideShowDeletedClimbers(!hideDeletedClimbers)}
              />
            </label>
          </form>
          <table>
            <thead>
              <tr>
                <th>Female Climber</th>
                <th style={{ textAlign: "right" }}>Wall</th>
                {boulders
                  .filter((boulder) => boulder.boulderId.includes("W"))
                  .map(({ boulderId, wall, color }) => (
                    <TableHeader
                      key={boulderId}
                      boulderId={boulderId}
                      wall={wall}
                      color={color}
                    />
                  ))}
              </tr>
            </thead>
            <tbody>
              {sortClimbersData(climbersData)
                .filter((climber) => climber.climberGender !== "male")
                .map(
                  ({
                    climberId,
                    climberName,
                    completedBoulders,
                    deleted,
                  }: Climber) => (
                    <tr key={climberId} style={{ mixBlendMode: "difference" }}>
                      <td>{climberName}</td>
                      <td>
                        <span style={{ marginLeft: "auto", padding: "16px" }}>
                          Total Boulders completed:{" "}
                          {completedBoulders.reduce(reduceBoulders, 0)}
                        </span>
                      </td>
                      {completedBoulders
                        .filter((boulder) => boulder.boulderId.includes("W"))
                        .map(
                          ({
                            boulderId,
                            color,
                            completed,
                            points,
                            attempts,
                          }: PrettyBoulderOnClimber) => (
                            <TableDataRangeInput
                              key={boulderId}
                              color={color}
                              boulderId={boulderId}
                              completed={completed}
                              points={points}
                              attempts={attempts}
                              handleBoulderPointsChange={
                                handleBoulderPointsChange
                              }
                              handleNoAttemptsChange={handleNoAttemptsChange}
                              climberId={climberId}
                            />
                          )
                        )}
                      <>
                        {deleted ? (
                          <td>
                            <button
                              onClick={() =>
                                handleRestoreDeletedClimber(climberId)
                              }
                            >
                              Restore
                            </button>
                            <button
                              onClick={() => handleDeletePermanent(climberId)}
                            >
                              Delete permanently
                            </button>
                          </td>
                        ) : (
                          <td>
                            <button
                              onClick={() =>
                                handleDeleteWithOptionToRestore(climberId)
                              }
                            >
                              Delete
                            </button>
                          </td>
                        )}
                      </>
                    </tr>
                  )
                )}
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Male Climber</th>
                <th style={{ textAlign: "right" }}>Wall</th>
                {boulders
                  .filter((boulder) => boulder.boulderId.includes("M"))
                  .map(({ boulderId, wall, color }) => (
                    <TableHeader
                      key={boulderId}
                      boulderId={boulderId}
                      wall={wall}
                      color={color}
                    />
                  ))}
              </tr>
            </thead>
            <tbody>
              {sortClimbersData(climbersData)
                .filter((climber) => climber.climberGender !== "female")
                .map(
                  ({
                    climberId,
                    climberName,
                    completedBoulders,
                    deleted,
                  }: Climber) => (
                    <tr key={climberId} style={{ mixBlendMode: "difference" }}>
                      <td>{climberName}</td>
                      <td>
                        <span style={{ marginLeft: "auto", padding: "16px" }}>
                          Total Boulders completed:{" "}
                          {completedBoulders.reduce(reduceBoulders, 0)}
                        </span>
                      </td>
                      {completedBoulders
                        .filter((boulder) => boulder.boulderId.includes("M"))
                        .map(
                          ({
                            boulderId,
                            color,
                            completed,
                          }: PrettyBoulderOnClimber) => (
                            <TableDataCheckbox
                              key={boulderId}
                              color={color}
                              boulderId={boulderId}
                              completed={completed}
                              handleBoulderToggle={handleBoulderToggle}
                              climberId={climberId}
                            />
                          )
                        )}
                      <>
                        {deleted ? (
                          <td>
                            <button
                              onClick={() =>
                                handleRestoreDeletedClimber(climberId)
                              }
                            >
                              Restore
                            </button>
                            <button
                              onClick={() => handleDeletePermanent(climberId)}
                            >
                              Delete permanently
                            </button>
                          </td>
                        ) : (
                          <td>
                            <button
                              onClick={() =>
                                handleDeleteWithOptionToRestore(climberId)
                              }
                            >
                              Delete
                            </button>
                          </td>
                        )}
                      </>
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
