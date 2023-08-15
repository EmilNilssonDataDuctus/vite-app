import { createContext, useContext, useEffect, useState } from "react";

const ClimberContext = createContext();

export const useClimberContext = () => useContext(ClimberContext);

export const ClimberProvider = ({ children }) => {
  const [climbers, setClimbers] = useState(
    JSON.parse(localStorage.getItem("climbersdata")) || []
  );

  useEffect(() => {
    localStorage.setItem("climbersdata", JSON.stringify(climbers));
  }, [climbers]);

  const addClimber = (newClimber) => {
    console.log(newClimber);

    setClimbers(() => [
      ...climbers,
      { name: newClimber, completedBoulders: [] },
    ]);
  };

  const deleteClimber = (climberId) => {
    setClimbers(() =>
      [...climbers].filter((climber) => climber.id === climberId)
    );
  };
  const toggleRemoveBoulder = (climberId, boulderId) => {};
  const toggleAddBoulder = (climberId, boulderId) => {};

  const climberContextValue = {
    climbers,
    addClimber,
    deleteClimber,
    toggleAddBoulder,
    toggleRemoveBoulder,
  };

  return (
    <ClimberContext.Provider value={climberContextValue}>
      {children}
    </ClimberContext.Provider>
  );
};
