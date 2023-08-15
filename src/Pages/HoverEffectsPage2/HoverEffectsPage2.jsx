import { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { throttle } from "../../utils/throttle";
import { HoverContainerInherited, InnerDiv } from "./HoverEffectsPage2.styled";

export const HoverEffectsPage2 = () => {
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
      <HoverContainerInherited onMouseMove={throttle(detectMousePostion, 200)}>
        {renderChildren()}
      </HoverContainerInherited>
    </MainWrapper>
  );
};
