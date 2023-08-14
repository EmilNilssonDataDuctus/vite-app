import { createContext, useContext, useState } from "react";

const ClimberContext = createContext();

export const useClimberContext = () => useContext(ClimberContext);

export const ClimberProvider = ({ children }) => {
  const [climbers, setClimbers] = useState([]);

  const addClimber = (newClimber) => {
    console.log(newClimber);

    setClimbers(() => [...climbers, newClimber]);
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
