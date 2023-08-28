import leopardBw from "/leopard-bw.jpg";
import leopard from "/leopard.jpg";
import mountainBw from "/mountain-bw.jpg";
import mountain from "/mountain.jpg";
import skiLiftBw from "/ski-lift-bw.jpg";
import skiLift from "/ski-lift.jpg";
import trainTracksBw from "/train-tracks-bw.jpg";
import trainTracks from "/train-tracks.jpg";

import React, { useEffect, useRef, useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";

export const CodeAlong = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const [showScrollSection, setShowScrollSection] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
    setHistory([e.target.value, ...history]);
  };

  useEffect(() => {
    console.log("useEffect render");

    return () => {
      console.log("useEffect cleanup");
    };
  }, []);

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
          <div>
            <ImageToggleOnScroll
              primaryImg={trainTracks}
              secondaryImg={trainTracksBw}
            />
          </div>
          <div>
            <ImageToggleOnScroll
              primaryImg={skiLift}
              secondaryImg={skiLiftBw}
            />
          </div>
          <div>
            <ImageToggleOnScroll
              primaryImg={leopard}
              secondaryImg={leopardBw}
            />
          </div>
          <div>
            <ImageToggleOnScroll
              primaryImg={mountain}
              secondaryImg={mountainBw}
            />
          </div>
        </section>
      )}
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

const ImageToggleOnScroll = ({ primaryImg = "", secondaryImg = "" }) => {
  const [inView, setInView] = useState(false);
  const imageRef: null | any = useRef(null);

  const scrollHandler = () => {
    setInView(isInView());
  };

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    console.log("useEffect add window scroll handler");
    window.addEventListener("scroll", scrollHandler);

    return () => {
      console.log("useEffect remove window scroll handler");
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <img ref={imageRef} src={inView ? primaryImg : secondaryImg} />
    </>
  );
};
