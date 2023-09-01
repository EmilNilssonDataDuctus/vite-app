import { styled } from "styled-components";

export const SpeakersNav = styled.nav`
  background-color: rgba(159, 59, 159, 0.4);
  width: 100%;
  height: 120px;
  padding-left: 32px;
  display: flex;
  align-items: center;

  a {
    display: inline-block;
    padding: 10px;
    margin-right: 16px;
    background-color: black;
    color: white;

    transition: all 300ms;

    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
export const SpeakersUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
