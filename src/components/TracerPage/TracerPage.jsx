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
  const [leftShift, setLeftShift] = useState("310px");
  const [topShift, setTopShift] = useState("160px");

  const [leftShiftSmall, setLeftShiftSmall] = useState("160px");
  const [topShiftSmall, setTopShiftSmall] = useState("10px");

  const detectMouse = (e) => {
    const offsetX = e.target.getBoundingClientRect().x;
    const offsetY = e.target.getBoundingClientRect().y;

    const localCoordX = e.clientX - offsetX;
    const localCoordY = e.clientY - offsetY;

    const pixelOffsetX = Math.floor(localCoordX);
    const pixelOffsetY = Math.floor(localCoordY);

    setLeftShift(() => pixelOffsetX + "px");
    setTopShift(() => pixelOffsetY + "px");

    const pixelOffsetXSmall = Math.floor(localCoordX / 2);
    const pixelOffsetYSmall = Math.floor(localCoordY / 2);

    setLeftShiftSmall(() => pixelOffsetXSmall + "px");
    setTopShiftSmall(() => pixelOffsetYSmall + "px");
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
