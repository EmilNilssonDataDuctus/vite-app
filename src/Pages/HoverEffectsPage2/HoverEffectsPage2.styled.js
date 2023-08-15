import { styled } from "styled-components";
import { HoverContainer } from "../HoverEffectsPage/HoverEffectsPage.styled";

export const HoverContainerInherited = styled(HoverContainer)`
  background-color: rgba(159, 59, 159, 0.5);
`;

export const InnerDiv = styled.div`
  background-color: rgba(159, 59, 159, 0.4);
  width: 100px;
  height: 80px;
  position: relative;

  left: ${({ $offset }) => $offset + "px"};

  transition: left 100ms;
`;
