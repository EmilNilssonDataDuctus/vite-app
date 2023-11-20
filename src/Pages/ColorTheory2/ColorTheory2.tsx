import React from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { FullHeightPage } from "./ColorTheory2.styled";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export const ColorTheory2 = () => {
  return (
    <MainWrapper>
      <h1>ColorTheory 2</h1>
      <FullHeightPage $bgColor="black" $topMargin={106 + 48 + 24}>
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            left: "50%",
            transform: "translate(-50%,-50%)",
            mixBlendMode: "difference",
          }}
        >
          <FontAwesomeIcon
            icon={faCoffee}
            style={{
              height: "500px",
            }}
          />
        </div>
      </FullHeightPage>
      <FullHeightPage $bgColor="white" $topMargin={0}></FullHeightPage>
    </MainWrapper>
  );
};
