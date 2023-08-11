import { useEffect, useRef, useState } from "react";
import { GameBoard, GameBoardContainer } from "./GameComponent.styled";
import { GameTile } from "./GameTile";

export const GameComponent = () => {
  const [activeSquare, setActiveSquare] = useState(0);
  const ref = useRef();

  const myArr = Array.apply(null, Array(9)).map(function () {});

  useEffect(() => {}, []);

  const keyPressed = (e) => {
    console.log(e.target);
  };

  return (
    <GameBoardContainer ref={ref} onKeyDown={keyPressed}>
      <h1>Game</h1>
      <GameBoard>
        {myArr.map((entry, index) => {
          return (
            <GameTile key={index} index={index} active={index === activeSquare}>
              {index}
            </GameTile>
          );
        })}
      </GameBoard>
    </GameBoardContainer>
  );
};
