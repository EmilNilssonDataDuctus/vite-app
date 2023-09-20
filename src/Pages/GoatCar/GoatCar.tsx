import React, { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { getRandomIntInclusive } from "../MemoryGame/MemoryGame";

type DoorInGame = {
  content: "Goat" | "Car";
  open: boolean;
  picked: boolean;
};

const createSetOfGoatsAndDoors = (noOfDoors) => {
  const doorsArray: string[] = [];
  const doorIndex = getRandomIntInclusive(0, noOfDoors - 1);

  for (let i = 0; i < noOfDoors; i++) {
    if (i === doorIndex) {
      doorsArray.push("Car");
    } else {
      doorsArray.push("Goat");
    }
  }

  const indexOfDoorWithCarPrize = doorsArray.findIndex(
    (door) => door === "Car"
  );
  return [doorsArray, indexOfDoorWithCarPrize];
};

const initialiseGoatsAndCar = () => {
  const returnArr: DoorInGame["content"][] = ["Goat", "Goat", "Goat"];
  const slotWithCar = getRandomIntInclusive(0, 2);
  returnArr.map((_, index, array) => {
    if (index === slotWithCar) return (array[index] = "Car");
    return _;
  });
  const newArr = returnArr.map((door) => ({
    content: door,
    open: false,
    picked: false,
  }));
  // console.log("newArr");
  // console.log(newArr);

  return newArr;
};

type arrayW3Numbers = [number, number, number];
type arrayW4Numbers = [number, number, number, number];

const revealDoor = (arrayOfDoors, pickedDoor) => {
  // ["Goat", "Goat", "Car"];
  // user picked a door pickedDoor
  // reveal one of the other doors
  // reveal a door that is
  // not the door the user picked
  // not the door with the car
};

export const GoatCar = () => {
  const [simulationResults, setSimulationResults] = useState<arrayW3Numbers>([
    0, 0, 0,
  ]);
  const [simulationResults2, setSimulationResults2] = useState<arrayW4Numbers>([
    0, 0, 0, 0,
  ]);
  const [deviationToTestFor, setDeviationToTestFor] = useState(33);

  const [firstSetOfDoors, setFirstSetOfDoors] = useState<Array<DoorInGame>>(
    initialiseGoatsAndCar()
  );
  // console.log(firstSetOfDoors);

  const [secondSetOfDoors, setSecondSetOfDoors] = useState([]);
  const [secondChoice, setSecondChoice] = useState(null);

  const handleClickSimulation = () => {
    let carInDoor1 = 0;
    let carInDoor2 = 0;
    let carInDoor3 = 0;

    for (let i = 0; i < 100; i++) {
      const doorWithCar = initialiseGoatsAndCar().findIndex(
        (entry) => entry.content === "Car"
      );

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
        const doorWithCar = initialiseGoatsAndCar().findIndex(
          (entry) => entry.content === "Car"
        );
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

  const [doors, setDoors] = useState<any>(null);
  const [doorWCar, setDoorWCar] = useState<any>(null);

  const handleClickStartGame = (e) => {
    // Reset prev game
    setFirstChoice(null);

    const [doorsInGame, doorWithCar] = createSetOfGoatsAndDoors(e);
    setDoors(doorsInGame);
    setDoorWCar(doorWithCar);
  };

  const [playingWithHint, setPlayingWithHint] = useState<any>(false);
  const [firstChoice, setFirstChoice] = useState<any>(null);

  const handleSelectDoor = (e) => {
    const doorPicked = e.target.dataset.index;
    setFirstChoice(doorPicked);
  };

  const shouldBeDisabled = (currentIndex) => {
    const pickedDoor = parseInt(firstChoice, 10);
    const indexOfDoorWithCar = doors.findIndex((door) => door === "Car");
    const pickedCorrectDoorOnFirstTry = pickedDoor === indexOfDoorWithCar;

    let forbiddenIndex = NaN;
    if (pickedCorrectDoorOnFirstTry) {
      do {
        getRandomIntInclusive();
      } while (forbiddenIndex !== indexOfDoorWithCar);
      // console.log("You picked the car the first time");
    } else {
      // console.log("You didnt pick the car on your first try");
    }

    // DONT Disable the door if it contains the car
    const thisIndexContainsTheCar =
      currentIndex === doors.findIndex((door) => door === "Car");

    // if this is not the door the player clicked
    const thisIndexWasClickedByPlayer =
      currentIndex === parseInt(firstChoice, 10);

    // disable all buttons that were not clicked by the player and does not contain the car
    const disableTheButton =
      !thisIndexContainsTheCar && !thisIndexWasClickedByPlayer;

    return disableTheButton;
  };

  return (
    <MainWrapper>
      {/* <h1>GoatCar</h1> */}
      <p>
        <label>
          Play with hints enabled
          <input
            type="checkbox"
            checked={playingWithHint}
            onChange={() => setPlayingWithHint(!playingWithHint)}
          />
        </label>
      </p>
      <section>
        <h2>Pick difficulty mode</h2>
        <div>
          <button onClick={() => handleClickStartGame(3)}>
            Start game with 3 doors
          </button>
        </div>
        <div>
          <button onClick={() => handleClickStartGame(10)}>
            Start game with 10 doors
          </button>
        </div>
        <div>
          <button onClick={() => handleClickStartGame(100)}>
            Start game with 100 doors
          </button>
        </div>
        {doors && doors.length > 0 && (
          <section>
            <h2>Pick door you think has the prize</h2>
            {playingWithHint && (
              <p>Hint: the door with a car is door number {doorWCar + 1}</p>
            )}
            {doors.map((_, index) => (
              <button
                key={index}
                data-index={index}
                onClick={(e) => handleSelectDoor(e)}
              >
                Door {index + 1}
              </button>
            ))}
          </section>
        )}
        {firstChoice && (
          <section>
            <p>First choice: door {parseInt(firstChoice, 10) + 1}</p>
            <p>Disabled doors were revealed to contain goats</p>
            {doors.map((_, index) => (
              <button
                key={index}
                data-index={index}
                disabled={shouldBeDisabled(index)}
                onClick={(e) => handleSelectDoor(e)}
              >
                Door {index + 1}
              </button>
            ))}
          </section>
        )}
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
