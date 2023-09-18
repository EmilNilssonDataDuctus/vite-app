import React, { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { getRandomIntInclusive } from "../MemoryGame/MemoryGame";

const goatsAndCar = () => {
  let returnArr = ["Goat", "Goat", "Goat"];
  const slotWithCar = getRandomIntInclusive(0, 2);
  returnArr.map((_, index, array) => {
    if (index === slotWithCar) return (array[index] = "Car");
    return _;
  });
  return returnArr;
};

type arrayW3Numbers = [number, number, number];
type arrayW4Numbers = [number, number, number, number];

export const GoatCar = () => {
  const [simulationResults, setSimulationResults] = useState<arrayW3Numbers>([
    0, 0, 0,
  ]);

  const [simulationResults2, setSimulationResults2] = useState<arrayW4Numbers>([
    0, 0, 0, 0,
  ]);

  const [deviationToTestFor, setDeviationToTestFor] = useState(33);

  const handleClick = (e) => {
    console.log(e.target.dataset.index);
  };

  const handleClickSimulation = () => {
    let carInDoor1 = 0;
    let carInDoor2 = 0;
    let carInDoor3 = 0;

    for (let i = 0; i < 100; i++) {
      const doorWithCar = goatsAndCar().findIndex((entry) => entry === "Car");

      if (doorWithCar === 0) carInDoor1++;
      if (doorWithCar === 1) carInDoor2++;
      if (doorWithCar === 2) carInDoor3++;
    }
    setSimulationResults([carInDoor1, carInDoor2, carInDoor3]);
  };

  const handleClickSimulation2 = () => {
    let carInDoor1 = 0;
    let carInDoor2 = 0;
    let carInDoor3 = 0;

    let noOfSimulations = 0;
    let result: arrayW3Numbers;

    const runSimulation100Times = (): arrayW3Numbers => {
      for (let i = 0; i < 100; i++) {
        const doorWithCar = goatsAndCar().findIndex((entry) => entry === "Car");
        if (doorWithCar === 0) carInDoor1++;
        if (doorWithCar === 1) carInDoor2++;
        if (doorWithCar === 2) carInDoor3++;
      }
      return [carInDoor1, carInDoor2, carInDoor3];
    };

    do {
      carInDoor1 = 0;
      carInDoor2 = 0;
      carInDoor3 = 0;

      result = runSimulation100Times();
      noOfSimulations++;
    } while (
      carInDoor1 < deviationToTestFor &&
      carInDoor2 < deviationToTestFor &&
      carInDoor3 < deviationToTestFor
    );

    setSimulationResults2([...result, noOfSimulations]);
  };

  return (
    <MainWrapper>
      {/* <h1>GoatCar</h1> */}
      <section>
        <h2>Pick 1 of 3 doors</h2>
        Door: {JSON.stringify(goatsAndCar())}
        <div>
          <button data-index={1} onClick={(e) => handleClick(e)}>
            Door 1
          </button>
          <button data-index={2} onClick={(e) => handleClick(e)}>
            Door 2
          </button>
          <button data-index={3} onClick={(e) => handleClick(e)}>
            Door 3
          </button>
        </div>
      </section>
      <section>
        <h2>Reveal</h2>
        <p>Open doors</p>
        <button>Switch</button>
        <button>Dont switch</button>
      </section>
      <section>
        <details>
          <summary>Simulation 1</summary>
          <h2>3 doors 100 times</h2>
          <button onClick={handleClickSimulation}>Switch</button>
          {simulationResults.length > 0 && (
            <>
              <p>Number of times door 1 has car: {simulationResults[0]}</p>
              <p>Number of times door 2 has car: {simulationResults[1]}</p>
              <p>Number of times door 3 has car: {simulationResults[2]}</p>
            </>
          )}
        </details>
      </section>
      <section>
        <details open>
          <summary>Simulation 2</summary>
          <h2>
            3 doors 100 times, how many times until one door has the car over{" "}
            <input
              style={{ width: "40px" }}
              type="number"
              value={deviationToTestFor}
              onChange={(e) =>
                setDeviationToTestFor(parseInt(e.target.value, 10))
              }
            />
            times
          </h2>
          <button onClick={handleClickSimulation2}>Switch</button>
          {simulationResults2.length > 0 && (
            <>
              <p>Number of times door 1 has car: {simulationResults2[0]}</p>
              <p>Number of times door 2 has car: {simulationResults2[1]}</p>
              <p>Number of times door 3 has car: {simulationResults2[2]}</p>
              <p>After this many simulations: {simulationResults2[3]}</p>
            </>
          )}
        </details>
      </section>
    </MainWrapper>
  );
};
