import leopardBw from "/leopard-bw.jpg";
import leopard from "/leopard.jpg";
import mountainBw from "/mountain-bw.jpg";
import mountain from "/mountain.jpg";

import React, { useRef, useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";

export const CodeAlong = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setHistory([e.target.value, ...history]);
  };

  return (
    <MainWrapper>
      <h1>Code along with pluralsight</h1>
      <section>
        <h2>Usestate hook</h2>
        <input
          value={value}
          onChange={(e) => handleChange(e)}
          placeholder="Enter some text"
        />
        <p>{value}</p>
        {history && history.length > 0 && (
          <div>
            History:
            <ul>
              {history.map((entry) => (
                <li>{entry}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <section>
        <h2>Useref hook</h2>
        <div style={{ display: "flex", gap: "16px", margin: "32px" }}>
          <div>
            <ImageToggleOnMouseOver
              primaryImg={leopard}
              secondaryImg={leopardBw}
            />
          </div>
          <div>
            <ImageToggleOnMouseOver
              primaryImg={mountain}
              secondaryImg={mountainBw}
            />
          </div>
        </div>
      </section>
    </MainWrapper>
  );
};

const ImageToggleOnMouseOver = ({ primaryImg = "", secondaryImg = "" }) => {
  const imageRef: null | any = useRef(null);
  return (
    <>
      <img
        ref={imageRef}
        src={primaryImg}
        onMouseOver={() => {
          imageRef.current.src = primaryImg;
        }}
        onMouseOut={() => {
          imageRef.current.src = secondaryImg;
        }}
      />
    </>
  );
};
