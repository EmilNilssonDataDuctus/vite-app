import { styled } from "styled-components";

export const MyContainerWrapper = styled.div`
  background-color: rgba(255, 0, 0, 0.3);
  padding: 8px;
`;
export const MyContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  width: 80vw;
  justify-content: center;
`;
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
`;
export const MyH3 = styled.h3`
  text-align: center;
`;

export const MyContainer2 = styled(MyContainer)`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  width: 80vw;
  justify-content: center;
`;

export const MyBox2 = styled(MyBox)`
  &:first-child {
    margin-right: unset;
  }
  &:last-child {
    margin-left: unset;
  }
`;

export const MyContainer3 = styled(MyContainer)`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  width: 80vw;
  justify-content: center;
`;

export const MyBox3 = styled(MyBox)`
  background-color: red;

  &:first-child {
    margin-right: auto;
  }

  &:nth-child(3) {
    margin-left: auto;
  }

  &:last-child {
    margin-left: unset;
  }
`;

export const MyContainer4 = styled(MyContainer)`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  width: 80vw;
  justify-content: center;
`;

export const MyBox4 = styled(MyBox)`
  background-color: red;

  &:first-child {
    margin-right: auto;
  }

  &:last-child {
    margin-right: auto;
  }
`;

export const MyContainer5 = styled(MyContainer)`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  width: 80vw;
  justify-content: center;
`;
export const MyBox5 = styled(MyBox)`
  background-color: red;

  &:first-child {
    margin-right: auto;
  }
`;
