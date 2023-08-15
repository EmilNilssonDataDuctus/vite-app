import { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import {
  GeneratorContainer,
  InputLabel,
  NestedDiv,
} from "./GeneratorPage.styled";

export const GeneratePage = () => {
  const [accentBg, setAccentBg] = useState(0.3);
  const [accentContent, setAccentContent] = useState(0.3);

  const updateRangeBg = (e) => {
    const newValue = e.target.value;
    setAccentBg(newValue);
  };

  const updateRangeContent = (e) => {
    const newValue = e.target.value;
    setAccentContent(newValue);
  };

  return (
    <MainWrapper>
      <h1>Time to generate</h1>
      <section>
        <InputLabel>
          Accent value bg: {accentBg}
          <input
            type="range"
            min="0.1"
            max="0.9"
            step="0.1"
            value={accentBg}
            onChange={(e) => updateRangeBg(e)}
          />
        </InputLabel>
        <br />
        <InputLabel>
          Accent value content: {accentContent}
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={accentContent}
            onChange={(e) => updateRangeContent(e)}
          />
        </InputLabel>
        <h2>Opaque div on div generator</h2>
        <GeneratorContainer $accent={accentBg}>
          <NestedDiv $accent={accentContent}></NestedDiv>
        </GeneratorContainer>
      </section>
    </MainWrapper>
  );
};
