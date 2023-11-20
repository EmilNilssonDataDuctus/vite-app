import { styled } from "styled-components";

export const Tile = styled.div`
  background-color: ${({ $activeSquare }) =>
    $activeSquare ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"};
`;
