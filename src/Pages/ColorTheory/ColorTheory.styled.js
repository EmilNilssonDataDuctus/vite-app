import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  background-color: rgba(159, 159, 159, 0.5);
  height: 120px;
  padding: 16px;
  div {
    border: 1px solid black;
    justify-self: stretch;
    background-color: rgba(159, 219, 159, 0.5);
    align-self: stretch;
  }
`;

export const ContainerSecond = styled(Container)`
  background-color: rgba(59, 59, 159, 0.5);
  text-align: center;
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 32px;
`;

export const GridItem = styled.div`
  mix-blend-mode: ${({ $mode }) => $mode};
  background-color: red;
  padding: 8px;
`;

export const MyCustomCursor = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 999px;
  position: absolute;
  background-color: rgba(0, 0, 255, 0.2);
  left: ${({ $left }) => `${$left}px`};
  top: ${({ $top }) => `${$top}px`};
  mix-blend-mode: ${({ $blendMode }) => $blendMode};
  /* transform: translate(-50%, -50%); */
`;
