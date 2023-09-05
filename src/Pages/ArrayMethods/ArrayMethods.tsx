import React, { useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MainWrapper } from "../../Shared/Page.styled";
import { getRandomIntInclusive } from "../MemoryGame/MemoryGame";
import {
  BeadHolder,
  ColoredBead,
  Container,
  ControlCenter,
  GameArea,
} from "./ArrayMethods.styled";

const initialState = [
  {
    id: 1,
    color: "yellow",
  },
  {
    id: 2,
    color: "yellow",
  },
  {
    id: 3,
    color: "blue",
  },
  {
    id: 4,
    color: "blue",
  },
  {
    id: 5,
    color: "yellow",
  },
  {
    id: 6,
    color: "red",
  },
];

const myReducer = (state, action) => {
  console.log("state: ", state);

  switch (action.type) {

    case "ADD_TO_LEFT": {
      return [action.payload, ...state];
    }

    case "ADD_TO_RIGHT": {
      return [...state, action.payload];
    }

    case "REMOVE_FROM_LEFT": {
      return [...state].filter((_, index) => index !== 0);
    }

    case "REMOVE_FROM_RIGHT": {
      return [...state].filter((_, index, array) => index !== array.length - 1);
    }

    default: {
      return state;
    }
  }
};

const COLORS = ["red", "green", "blue", "yellow"];

export const ArrayMethods = () => {
  const [beads, dispatch] = useReducer(myReducer, initialState);

  const [nextBeadColor, setNextBeadColor] = useState("yellow");
  const [score, setScore] = useState(0);

  const getNextBeadColor = () =>
    COLORS[getRandomIntInclusive(0, COLORS.length - 1)];

  const addToLeft = () => {
    dispatch({
      type: "ADD_TO_LEFT",
      payload: { id: uuidv4(), color: nextBeadColor },
    });
    setNextBeadColor(getNextBeadColor());
  };

  const addToRight = () => {
    dispatch({
      type: "ADD_TO_RIGHT",
      payload: { id: uuidv4(), color: nextBeadColor },
    });
    setNextBeadColor(getNextBeadColor());
  };

  const removeFromLeft = () => {
    dispatch({
      type: "REMOVE_FROM_LEFT",
    });
  };

  const removeFromRight = () => {
    dispatch({
      type: "REMOVE_FROM_RIGHT",
    });
  };

  useEffect(() => {
    const firstThreeBeadsAreTheSame = (beads) =>
      beads[0].color === beads[1].color && beads[2].color === beads[1].color;

    if (firstThreeBeadsAreTheSame(beads)) {
      // remove all these beads
      removeFromLeft();
      removeFromLeft();
      removeFromLeft();
      setScore(() => score + 1);
    }

    const lastThreeBeadsAreTheSame = (beads) =>
      beads[beads.length - 1].color === beads[beads.length - 2].color &&
      beads[beads.length - 3].color === beads[beads.length - 2].color;

    if (lastThreeBeadsAreTheSame(beads)) {
      // remove all these beads
      removeFromRight();
      removeFromRight();
      removeFromRight();
      setScore(() => score + 1);
    }
  }, [nextBeadColor, beads]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") addToLeft();
    if (e.key === "ArrowRight") addToRight();
  };

  return (
    <MainWrapper onKeyDown={(e) => handleKeyDown(e)}>
      <h1>Array methods</h1>
      <GameArea>
        <Container>
          <BeadHolder>
            {beads?.map(({ id, color }) => (
              <ColoredBead key={id} $color={color} />
            ))}
          </BeadHolder>
        </Container>
        <div style={{ margin: "0 auto" }}>
          <h2>Information</h2>
          <p>Current score: {score}</p>
          <p>Next bead: {nextBeadColor}</p>
        </div>
        <button style={{ height: "200px" }}></button>
        <ControlCenter>
          <button onClick={() => addToLeft()}>Add Left</button>
          <button onClick={() => addToRight()}>Add Right</button>
        </ControlCenter>
      </GameArea>
    </MainWrapper>
  );
};
