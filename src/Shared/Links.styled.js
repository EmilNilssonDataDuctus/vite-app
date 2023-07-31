import { styled } from "styled-components";

export const CommonLink = styled.a`
  padding: 4px 8px;
  background-color: aqua;
  border-radius: 20px;
  color: black;
  font-weight: 900;
  padding: 8px 16px;
  text-decoration: none;

  transition: border-radius 400ms, background-color 400ms, color 400ms,
    box-shadow 400ms 100ms;

  &:hover {
    border-radius: 0;
    background-color: black;
    color: aqua;
    box-shadow: 0 0 10px white;
  }
`;
