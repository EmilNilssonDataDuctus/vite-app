import { useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { GeneratorContainer, NestedDiv } from "./GeneratorPage.styled";

export const GeneratePage = () => {
  const [accent, setAccent] = useState(0.3);

  const updateRange = (e) => {
    const newValue = e.target.value;
    console.log(newValue);
    setAccent(newValue);
  };

  return (
    <MainWrapper>
      <h1>Time to generate</h1>
      <section>
        <label>
          Accent value: {accent}
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={accent}
            onChange={(e) => updateRange(e)}
          />
        </label>
        <h2>Opaque div on div generator</h2>
        <GeneratorContainer $accent={accent}>
          <NestedDiv $accent={accent}></NestedDiv>
        </GeneratorContainer>
      </section>
    </MainWrapper>
  );
};
