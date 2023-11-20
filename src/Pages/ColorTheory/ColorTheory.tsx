import React, { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import {
  Container,
  ContainerGrid,
  ContainerSecond,
  GridItem,
  MyCustomCursor,
} from "./ColorTheory.styled";

const mixBlendModes = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
];

export const ColorTheory = () => {
  const [leftShift, setLeftShift] = useState(0);
  const [topShift, setTopShift] = useState(100);

  const [leftShift2, setLeftShift2] = useState(0);
  const [topShift2, setTopShift2] = useState(100);

  const [currentBlendMode, setCurrentBlendMode] = useState("normal");

  const handleMouseOverBlendMode = (e) => {
    setCurrentBlendMode(e.target.dataset.blendMode);
  };

  const handleMouseMove = (e) => {
    setLeftShift(e.screenX);
    setTopShift(e.screenY);
    setLeftShift2(e.pageX);
    setTopShift2(e.pageY);
  };

  return (
    <MainWrapper
      onMouseMove={(e) => handleMouseMove(e)}
      style={{ backgroundColor: "rgba(255,255,250,0.2)" }}
    >
      <h1>ColorTheory</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Container>
          <div style={{ mixBlendMode: "multiply" }}>1</div>
          <div style={{ mixBlendMode: "difference" }}>2</div>
          <div style={{ mixBlendMode: "exclusion" }}>3</div>
          <div style={{ mixBlendMode: "lighten" }}>4</div>
          <div style={{ mixBlendMode: "darken" }}>5</div>
        </Container>
        <ContainerSecond>
          <div>inner Div</div>
          <div>inner Div</div>
          <div>inner Div</div>
          <div>inner Div</div>
          <div>inner Div</div>
        </ContainerSecond>
        <ContainerGrid>
          {mixBlendModes.map((mode) => (
            <GridItem
              $mode={mode}
              data-blend-mode={mode}
              onMouseOver={(e) => handleMouseOverBlendMode(e)}
            >
              {mode}
            </GridItem>
          ))}
        </ContainerGrid>
      </div>
      <div
        style={{
          width: "900px",
          height: "900px",
          backgroundColor: "rgba(255,255,0,0.5)",
        }}
      >
        <br />
        e.screenX: {leftShift}
        <br />
        e.screenY: {topShift}
        <br />
        e.pageX: {leftShift2}
        <br />
        e.pageY: {topShift2}
      </div>

      {/* <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "999px",
          position: "absolute",
          backgroundColor: "rgba(255,0,0,0.5)",
          left: `${leftShift}px`,
          top: `${topShift}px`,
          mixBlendMode: "multiply",
        }}
      ></div> */}
      <MyCustomCursor
        $top={topShift2}
        $left={leftShift2}
        $blendMode={currentBlendMode}
      />
    </MainWrapper>
  );
};
