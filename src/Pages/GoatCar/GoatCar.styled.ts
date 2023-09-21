import { styled } from "styled-components";

export const TabList = styled.ul`
  padding-top: 16px;
  padding-bottom: 16px;
`;
export const TabListItem = styled.li`
  display: inline-flex;
  /* margin: 10px; */
  /* background-color: ${({ $active }) =>
    $active ? `rgba(0,60,0,0.9)` : "black"}; */
  &:first-child {
    button {
      border-radius: 10px 0 0 0;
    }
  }
  &:last-child {
    button {
      border-radius: 0 10px 0 0;
    }
  }
`;

export const TabListButton = styled.button`
  padding: 10px;
  background-color: ${({ $active }) =>
    $active ? `rgba(0,60,0,0.9)` : "black"};
  font-family: monospace;
  cursor: pointer;
  position: relative;
  /* left: ${({ $index }) => `-${8 * $index}px`}; */
  /* bottom: ${({ $index }) => `-${20 * $index}px`}; */
`;
