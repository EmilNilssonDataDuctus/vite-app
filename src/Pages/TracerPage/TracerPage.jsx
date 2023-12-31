import { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import {
  DisplayContainerReader,
  DisplayContainerSmall,
  DisplayContainerSmallCopy,
  DisplayContainerSmallCopyTopRight,
  DisplayContainerWrapper,
  ShowDivSmall,
  ShowDivSmallSmooth,
} from "./TracerPage.styled";

import { throttle } from "../../utils/throttle";

export const TracerPage = () => {
  const [mouseIsDown, setMouseIsDown] = useState(false);

  const [leftShift, setLeftShift] = useState("310px");
  const [topShift, setTopShift] = useState("160px");

  const [leftShiftSmall, setLeftShiftSmall] = useState("160px");
  const [topShiftSmall, setTopShiftSmall] = useState("10px");

  const [leftShiftSmallBot, setLeftShiftSmallBot] = useState("260px");
  const [topShiftSmallBot, setTopShiftSmallBot] = useState("50px");

  const detectMouseClick = () => {
    setMouseIsDown(() => !mouseIsDown);
  };

  const detectMouseLeave = () => {
    setMouseIsDown(false);
  };

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

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    let shake_offset = getRandomIntInclusive(10, 20);
    if (mouseIsDown) shake_offset = 2;

    setLeftShiftSmallBot(
      () =>
        pixelOffsetXSmall +
        getRandomIntInclusive(-shake_offset, shake_offset) +
        "px"
    );
    setTopShiftSmallBot(
      () =>
        pixelOffsetYSmall +
        getRandomIntInclusive(-shake_offset, shake_offset) +
        "px"
    );
  };

  return (
    <MainWrapper>
      <h1>Time to trace</h1>
      <section>
        <h2>Move mouse below to see effects on other outputs</h2>
        <DisplayContainerWrapper>
          <DisplayContainerReader
            onMouseMove={throttle(detectMouse, 200)}
            onMouseDown={detectMouseClick}
            onMouseUp={detectMouseClick}
            onMouseLeave={detectMouseLeave}
          ></DisplayContainerReader>
          <DisplayContainerSmall>
            <ShowDivSmallSmooth
              $left={leftShiftSmall}
              $top={topShiftSmall}
            ></ShowDivSmallSmooth>
          </DisplayContainerSmall>
          <DisplayContainerSmallCopy>
            <ShowDivSmall
              $left={leftShiftSmallBot}
              $top={topShiftSmallBot}
            ></ShowDivSmall>
          </DisplayContainerSmallCopy>
          <DisplayContainerSmallCopyTopRight>
            <ShowDivSmallSmooth
              $left={leftShiftSmallBot}
              $top={topShiftSmallBot}
            ></ShowDivSmallSmooth>
          </DisplayContainerSmallCopyTopRight>
          {/* <DisplayContainer>
            <ShowDiv $left={leftShift} $top={topShift}></ShowDiv>
          </DisplayContainer> */}
        </DisplayContainerWrapper>
      </section>
    </MainWrapper>
  );
};
