import React, { useEffect, useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { ImageToggleOnMouseOver } from "./Components/ImageToggleOnMouseOver";
import { ImageToggleOnScroll } from "./Components/ImageToggleOnScroll";

import leopardBw from "/leopard-bw.jpg";
import leopard from "/leopard.jpg";
import mountainBw from "/mountain-bw.jpg";
import mountain from "/mountain.jpg";
import skiLiftBw from "/ski-lift-bw.jpg";
import skiLift from "/ski-lift.jpg";
import trainTracksBw from "/train-tracks-bw.jpg";
import trainTracks from "/train-tracks.jpg";

const images = [
  leopardBw,
  leopard,
  mountainBw,
  mountain,
  skiLiftBw,
  skiLift,
  trainTracksBw,
  trainTracks,
];

export const CodeAlong = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const [showScrollSection, setShowScrollSection] = useState(true);

  const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
  const [mouseEventCount, setMouseEventCount] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
    setHistory([e.target.value, ...history]);
  };

  useEffect(() => {
    window.document.title = `SpeakerId: ${currentSpeakerId}`;
    console.log(`useEffect: setting title to ${currentSpeakerId}`);
  }, [currentSpeakerId]);

  return (
    <MainWrapper>
      <h1>Code along with pluralsight</h1>
      <button onClick={() => setShowScrollSection(!showScrollSection)}>
        Show scroll section
      </button>
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
      {showScrollSection && (
        <section>
          <h2>Useeffect hook</h2>
          <div>mouseEventCount: {mouseEventCount}</div>
          {images.map((imageId, index, array) => {
            if (index % 2 === 0) return;

            return (
              <div
                key={imageId}
                onMouseOver={() => {
                  setCurrentSpeakerId(imageId);
                  setMouseEventCount(mouseEventCount + 1);
                  console.log(`onMouseOver:${imageId}`);
                }}
              >
                <ImageToggleOnScroll
                  primaryImg={imageId}
                  secondaryImg={array[index - 1]}
                />
              </div>
            );
          })}
        </section>
      )}
    </MainWrapper>
  );
};
