import { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import {
  DisplayContainer,
  DisplayContainerWrapper,
  ShowDiv,
} from "./TracerPage.styled";

export const TracerPage = () => {
  const [leftShift, setLeftShift] = useState(0);
  const [topShift, setTopShift] = useState(0);

  const detectMouse = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.getBoundingClientRect());
    const offsetX = e.target.getBoundingClientRect().x;
    const offsetY = e.target.getBoundingClientRect().y;

    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.clientY - offsetY);
    console.log(e.clientX - offsetX);
    const coordX = Math.floor(e.clientX - offsetX);
    const coordY = Math.floor(e.clientY - offsetY);
    setLeftShift(() => coordX + "px");
    setTopShift(() => coordY + "px");
  };

  return (
    <MainWrapper>
      <h1>Time to trace</h1>
      <section>
        <h2>Opaque div on div generator</h2>
        <DisplayContainerWrapper>
          <DisplayContainer onMouseMove={detectMouse}></DisplayContainer>
          <DisplayContainer>
            <ShowDiv $left={leftShift} $top={topShift}></ShowDiv>
          </DisplayContainer>
        </DisplayContainerWrapper>
      </section>
    </MainWrapper>
  );
};
