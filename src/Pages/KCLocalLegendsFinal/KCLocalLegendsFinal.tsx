import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MainWrapper } from "../../Shared/Page.styled";
import "./KCLocalLegendsFinal.css";
import { TableOfClimbers } from "./components/TableOfClimbers";
import { boulders } from "./data/boulders";
import {
  Climber,
  initialseStateOfClimbers,
} from "./utils/initialseClimberData";

const categories = {
  male: {
    title: "Male Climbers",
    identifier: "M",
    gender: "male",
  },
  female: {
    title: "Female Climbers",
    identifier: "W",
    gender: "female",
  },
};

export const KCLocalLegendsFinal = () => {
  const [climbersData, setClimbersData] = useState<Array<Climber>>(
    initialseStateOfClimbers
  );
  const [inputValue, setInputValue] = useState("");
  const [inputValueGender, setInputValueGender] = useState("male");

  const [shouldSortByCompletions, setShouldSortByCompletions] = useState(false);
  const [shouldSortByPoints, setShouldSortByPoints] = useState(true);
  const [shouldSortAlphabetically, setShouldSortAlphabetically] =
    useState(false);
  const [hideDeletedClimbers, setHideDeletedClimbers] = useState(true);

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

  const callbacks = {
    handleBoulderPointsChange,
    handleNoAttemptsChange,
    handleRestoreDeletedClimber,
    handleDeletePermanent,
    handleDeleteWithOptionToRestore,
  };

  const modifiers = {
    shouldSortByCompletions,
    shouldSortByPoints,
    shouldSortAlphabetically,
    hideDeletedClimbers,
  };

  return (
    <MainWrapper>
      <h1>KC Local Legends Standings</h1>
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
          <br />
          <h3>Filter and sort</h3>
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
              Sort the climbers by total points
              <input
                type="checkbox"
                checked={shouldSortByPoints}
                onChange={() => setShouldSortByPoints(!shouldSortByPoints)}
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
                onChange={() => setHideDeletedClimbers(!hideDeletedClimbers)}
              />
            </label>
          </form>
          <br />
          <h3>Current standings</h3>
          <TableOfClimbers
            climbersData={climbersData}
            category={categories.female}
            modifiers={modifiers}
            callbacks={callbacks}
          />
          <TableOfClimbers
            climbersData={climbersData}
            category={categories.male}
            modifiers={modifiers}
            callbacks={callbacks}
          />
        </section>
      </div>
    </MainWrapper>
  );
};
