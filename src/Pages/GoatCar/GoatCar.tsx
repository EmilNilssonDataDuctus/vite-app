import React, { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { getRandomIntInclusive } from "../MemoryGame/MemoryGame";
import { TabList, TabListButton, TabListItem } from "./GoatCar.styled";

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
    console.log("Start sim 1");
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
    console.log("Start sim 2");

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
    return true; // Fix bugs below
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
  const [activeTab, setActiveTab] = useState<any>(0);
  const changeTab = (e) => {
    const newTab = e.target.dataset.index;
    console.log("newTab");
    console.log(newTab);
    console.log("activeTab");
    console.log(activeTab);

    setActiveTab(() => parseInt(newTab, 10));
  };
  return (
    <MainWrapper>
      <h1>GoatCar</h1>
      <div style={{ backgroundColor: "rgba(0,0,40,0.9)" }}>
        <nav>
          <TabList>
            <TabListItem $active={activeTab === 0}>
              <TabListButton
                data-index={0}
                $active={activeTab === 0}
                $index={0}
                onClick={(e) => changeTab(e)}
              >
                Interactive
              </TabListButton>
            </TabListItem>
            <TabListItem $active={activeTab === 1}>
              <TabListButton
                data-index={1}
                $active={activeTab === 1}
                $index={1}
                onClick={(e) => changeTab(e)}
              >
                Simulation 1
              </TabListButton>
            </TabListItem>
            <TabListItem $active={activeTab === 2}>
              <TabListButton
                data-index={2}
                $active={activeTab === 2}
                $index={2}
                onClick={(e) => changeTab(e)}
              >
                Simulation 2
              </TabListButton>
            </TabListItem>
          </TabList>
        </nav>
      </div>

      {activeTab === 0 ? (
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
      ) : activeTab === 1 ? (
        <section>
          <h2>Simulation 1</h2>
          <p>3 doors 100 times</p>
          <button onClick={handleClickSimulation}>Re-run simulation</button>
          {simulationResults.length > 0 && (
            <>
              <p>
                Odds Door 1 contains car: {simulationResults[0]}%{" "}
                <sup>{simulationResults[0]}</sup>/<sub>100</sub>
              </p>
              <p>
                Odds Door 2 contains car: {simulationResults[1]}%{" "}
                <sup>{simulationResults[1]}</sup>/<sub>100</sub>
              </p>
              <p>
                Odds Door 3 contains car: {simulationResults[2]}%{" "}
                <sup>{simulationResults[2]}</sup>/<sub>100</sub>
              </p>
            </>
          )}
        </section>
      ) : (
        <section>
          <h2>Simulation 2</h2>
          <p>
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
          </p>
          <button onClick={handleClickSimulation2}>Re-run simulation</button>
          {simulationResults2.length > 0 && (
            <>
              <p>After this many simulations: {simulationResults2[3]}</p>
              <p>After randomly choosing 1 of 3 doors to place the car behind</p>
              <details>
                <summary>The final simulation (where the given wanted threshhold was reached)</summary>
              <p>
                Odds Door 1 contains car: {simulationResults2[0]}%{" "}
                <sup>{simulationResults2[0]}</sup>/
                <sub>100</sub>
              </p>
              <p>
                Odds Door 2 contains car: {simulationResults2[1]}%{" "}
                <sup>{simulationResults2[1]}</sup>/
                <sub>100</sub>
              </p>
              <p>
                Odds Door 3 contains car: {simulationResults2[2]}%{" "}
                <sup>{simulationResults2[2]}</sup>/
                <sub>100</sub>
              </p>
              </details>
            </>
          )}
        </section>
      )}
    </MainWrapper>
  );
};
