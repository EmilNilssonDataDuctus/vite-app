import React from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { MyBox, MyContainer } from "./FlexBoxTest.styled";

export const FlexBoxTest = () => {
  return (
    <MainWrapper>
      <h1>Flexbox testing</h1>
      <MyContainer>
        <MyBox>
          <pre>{`
&:first-child {
  margin-right: auto;
}
          `}</pre>
        </MyBox>
        <MyBox>
          <pre>{`
justify-content: center;
          `}</pre>
        </MyBox>
        <MyBox>
          <pre>{`
justify-content: center;
          `}</pre>
        </MyBox>
        <MyBox>
          <pre>{`
&:last-child {
  margin-left: auto;
}
`}</pre>
        </MyBox>
      </MyContainer>
    </MainWrapper>
  );
};
