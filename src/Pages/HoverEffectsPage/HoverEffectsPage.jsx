import { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { throttle } from "../../utils/throttle";
import { HoverContainer, InnerDiv } from "./HoverEffectsPage.styled";

export const HoverEffectsPage = () => {
  const [offset, setOffset] = useState();
  const detectMousePostion = (e) => {
    console.log(e.movementX);
    console.log(e.target);

    setOffset(e.movementX);
  };

  const renderChildren = () => {
    const innerDivs = [];
    for (let i = 0; i < 5; i++) {
      innerDivs.push(<InnerDiv $offset={offset * i} key={i} />);
    }
    return innerDivs;
  };

  return (
    <MainWrapper>
      <h1>Hover effects</h1>
      <HoverContainer onMouseMove={throttle(detectMousePostion, 200)}>
        {renderChildren()}
      </HoverContainer>
    </MainWrapper>
  );
};
