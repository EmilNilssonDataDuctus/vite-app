import { styled } from "styled-components";

/*
const animateBorder = keyframes`
 0% {
       border-radius: 20px 60px 40px 60px;
  }
 25% {
       border-radius: 10px 60px 40px 60px;
  }
40% {
      border-radius: 50px;
}
 50% {
       border-radius: 10px 10px 40px 60px;
  }
 75% {
       border-radius: 10px 10px 10px 60px;
  }
 100% {
       border-radius: 10px;
   }
`; 
*/

export const CardContainer = styled.a`
  display: block;
  background-color: rgb(204, 204, 236);
  border-radius: 20px 60px 40px 60px;
  padding: 8px 20px;
  cursor: pointer;
  box-shadow: 0 0 15px 4px white;
  transition: box-shadow 100ms ease-in-out, border-radius 200ms ease-in-out;

  &:hover {
    box-shadow: 0 0 5px 4px white;
    border-radius: 10px;

    .heading {
      background-color: white;
      color: black;
      letter-spacing: 5px;
    }
    .text {
      background-color: white;
      color: black;
    }
  }
`;

export const CardHeading = styled.h2`
  display: inline-block;
  background-color: blue;

  transition: all 100ms;
`;

export const CardCopy = styled.p`
  background-color: blue;
  transition: all 100ms 50ms;
`;
