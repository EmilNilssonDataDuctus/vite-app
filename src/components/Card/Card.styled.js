import { styled } from "styled-components";
import { CommonLink } from "../../Shared/Links.styled";

export const CardContainer = styled.div`
  display: block;
  background-color: rgb(204, 204, 236);
  border-radius: 20px 60px 40px 5px;
  padding: 16px 20px;
  box-shadow: 0 0 15px 4px white;
  transition:
    box-shadow 100ms ease-in-out,
    border-radius 200ms ease-in-out;

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

    a {
      box-shadow: 0 0 15px 4px black;

      &:hover {
        box-shadow: 0 0 5px 4px grey;
      }
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

export const CardLink = styled(CommonLink)`
  background-color: white;

  &:hover {
    color: white;
  }
`;
