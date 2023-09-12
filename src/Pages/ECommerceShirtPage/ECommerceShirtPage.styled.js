import { styled } from "styled-components";

export const SectionContainer = styled.section`
  background-color: rgba(159, 59, 159, 0.5);
  padding: 64px;
`;

export const OptionList = styled.ul`
  display: flex;
`;
export const OptionListItem = styled.li`
  display: flex;
`;

export const CustomButton = styled.a`
  padding: 4px 16px;
  border-radius: 999px;

  text-transform: capitalize;

  background-color: ${({ $isActive }) => ($isActive ? "black" : "white")};
  color: ${({ $isActive }) => ($isActive ? "white" : "black")};

  &:hover, &:focus-visible {
    mix-blend-mode: multiply;
    cursor: pointer;
  }
`;
