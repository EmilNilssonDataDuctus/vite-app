import React from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { Version1 } from "./Version1";
import { Version2 } from "./Version2";

export const CanvasAnimation = () => {
  return (
    <MainWrapper>
      <h1>CanvasAnimation</h1>
      <Version1 />
      <Version2 />
    </MainWrapper>
  );
};
