import React, { useEffect, useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { getRandomIntInclusive } from "../MemoryGame/MemoryGame";
import { Container, TextContainer } from "./HackerAnimation.styled";

const numbers = "0123456789";
const lowerCaseCharacters = "abcdefghijllmnopqrstuvxyzåäö";
const characters =
  numbers + lowerCaseCharacters + lowerCaseCharacters.toUpperCase();

const STRING_LENGTH = 900;

const createRandomString = () => {
  let randomStrings: string[] = [];
  do {
    const index = getRandomIntInclusive(0, characters.length);
    const randomValue = characters.substring(index, index + 1);
    randomStrings.push(randomValue);
  } while (randomStrings.length < STRING_LENGTH);
  const returnString = randomStrings.join("");
  console.log("last 10");
  console.log(returnString.slice(-10));
  console.log(returnString.length);

  return returnString;
};

export const HackerAnimation = () => {
  const [randomString, setRandomString] = useState(createRandomString);

  useEffect(() => {
    console.log("randomString last 10");
    console.log(randomString.slice(-10));
    console.log(randomString.length);
  }, [randomString]);

  const handleMouseMove = () => {
    setRandomString((prev) => createRandomString());
  };
  return (
    <MainWrapper>
      {/* <h1>Hacker animation</h1> */}
      <Container>
        <TextContainer onMouseMove={handleMouseMove}>
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
