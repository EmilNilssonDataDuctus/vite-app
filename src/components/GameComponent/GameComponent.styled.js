import { styled } from "styled-components";

export const GameBoardContainer = styled.div`
  display: grid;
  place-items: center;
  margin: 0 auto;
`;

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0 auto;
  width: 300px;
  height: 300px;
`;
