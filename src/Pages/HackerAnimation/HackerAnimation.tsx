import React, { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { throttle } from "../../utils/throttle";
import { getRandomIntInclusive } from "../MemoryGame/MemoryGame";
import { Container, TextContainer } from "./HackerAnimation.styled";

const numbers = "0123456789";
const lowerCaseCharacters = "abcdefghijllmnopqrstuvxyzåäö";
const characters =
  numbers + lowerCaseCharacters + lowerCaseCharacters.toUpperCase();

const STRING_LENGTH = 900;

const createRandomString = () => {
  let randomString = "";
  for (let i = 0; i < STRING_LENGTH; i++) {
    const index = getRandomIntInclusive(0, characters.length);
    const randomValue = characters.substring(index, index + 1);
    randomString += randomValue;
  }
  console.log(randomString.length);
  return randomString;
};

export const HackerAnimation = () => {
  const [randomString, setRandomString] = useState(createRandomString);

  const handleMouseMove = () => {
    setRandomString(createRandomString());
  };
  return (
    <MainWrapper>
      <h1>Hacker animation</h1>
      <Container>
        <TextContainer onMouseMove={throttle(handleMouseMove, 1000)}>
          {randomString}
        </TextContainer>
      </Container>
      {/* 
        container
        centered square
          random string
      */}
    </MainWrapper>
  );
};
