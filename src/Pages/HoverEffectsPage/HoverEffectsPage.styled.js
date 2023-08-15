import { styled } from "styled-components";

export const HoverContainer = styled.div`
  background-color: rgba(59, 59, 59, 0.5);
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InnerDiv = styled.div`
  background-color: rgba(59, 59, 59, 0.4);
  width: 100px;
  height: 80px;
  position: relative;

  left: ${({ $offset }) => $offset + "px"};

  transition: left 100ms;
`;
