import { styled } from "styled-components";

export const MyContainer = styled.div`
  display: flex;
  gap: 10px;
  /* width: 100px; */
  margin: 0 auto;
  width: 80vw;
  justify-content: center;
`
export const MyBox = styled.div`
  background-color: red;

  pre {
    padding: 32px;
  }

  &:first-child {
    margin-right: auto;
  }
  &:last-child {
    margin-left: auto;
  }
`