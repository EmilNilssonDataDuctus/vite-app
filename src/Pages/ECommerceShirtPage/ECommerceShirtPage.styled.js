import { styled } from "styled-components";

export const SectionContainer = styled.section`
  background-color: rgba(159, 59, 159, 0.5);
  padding: 64px;
`;

export const CustomButton = styled.button`
  padding: 4px 16px;
  border-radius: 999px;

  background-color: ${({ $isActive }) => ($isActive ? "black" : "white")};
  color: ${({ $isActive }) => ($isActive ? "white" : "black")};

  &:hover {
    mix-blend-mode: multiply;
    cursor: pointer;
  }
`;
