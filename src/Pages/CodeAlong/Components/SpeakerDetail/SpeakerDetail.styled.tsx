import { styled } from "styled-components";

export const FavoriteButton = styled.button`
  background-color: ${({ favorite }) => (favorite ? "red" : "white")};

  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid black;
`;
