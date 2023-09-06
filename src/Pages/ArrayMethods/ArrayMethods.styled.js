import { styled } from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 0, 0, 0.4);
  display: flex;
  justify-content: center;
`;

export const BeadHolder = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  display: flex;
`;
export const ColoredBead = styled.li`
  display: flex;
  width: 20px;
  height: 60px;
  border: 1px solid black;
  border-radius: 999px;
  background-color: ${({ $color }) => $color};
`;

export const ControlCenter = styled.div`
  background-color: rgba(0, 0, 255, 0.5);
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
    width: 100%;
    height: 100px;
  }
`;

export const GameArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
`;
