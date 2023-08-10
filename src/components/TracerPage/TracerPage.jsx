import { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import {
  DisplayContainer,
  DisplayContainerSmall,
  DisplayContainerWrapper,
  ShowDiv,
  ShowDivSmall,
} from "./TracerPage.styled";

export const TracerPage = () => {
  const [leftShift, setLeftShift] = useState(0);
  const [topShift, setTopShift] = useState(0);

  const [leftShiftSmall, setLeftShiftSmall] = useState(0);
  const [topShiftSmall, setTopShiftSmall] = useState(0);

  const detectMouse = (e) => {
    const offsetX = e.target.getBoundingClientRect().x;
    const offsetY = e.target.getBoundingClientRect().y;

    const coordX = Math.floor(e.clientX - offsetX);
    const coordY = Math.floor(e.clientY - offsetY);

    setLeftShift(() => coordX + "px");
    setTopShift(() => coordY + "px");

    const coordXSmall = Math.floor((e.clientX - offsetX) / 2);
    const coordYSmall = Math.floor((e.clientY - offsetY) / 2);

    setLeftShiftSmall(() => coordXSmall + "px");
    setTopShiftSmall(() => coordYSmall + "px");
  };

  return (
    <MainWrapper>
      <h1>Time to trace</h1>
      <section>
        <h2>Opaque div on div generator</h2>
        <DisplayContainerWrapper>
          <DisplayContainer onMouseMove={detectMouse}></DisplayContainer>
          <DisplayContainerSmall>
            <ShowDivSmall
              $left={leftShiftSmall}
              $top={topShiftSmall}
            ></ShowDivSmall>
          </DisplayContainerSmall>
          <DisplayContainer>
            <ShowDiv $left={leftShift} $top={topShift}></ShowDiv>
          </DisplayContainer>
        </DisplayContainerWrapper>
      </section>
    </MainWrapper>
  );
};
