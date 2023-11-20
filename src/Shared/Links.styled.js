import { styled } from "styled-components";

const transitionDuration = "400ms";
const transitionDelay = "150ms";

export const CommonLink = styled.a`
  color: black;
  background-color: ${(props) => props.$featured ? "gold" : "aqua"};
  
  text-decoration: none;
  font-weight: 900;
  border-radius: 20px;
  padding: 8px 16px;

  white-space: nowrap;
  transition: border-radius ${transitionDuration},
    background-color ${transitionDuration}, color ${transitionDuration},
    box-shadow ${transitionDuration} ${transitionDelay};

  &:hover {
    border-radius: 0;
    background-color: black;
    color: aqua;
    box-shadow: 0 0 10px white;
  }
`;
