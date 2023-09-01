import React, { useEffect, useRef, useState } from "react";

const randomd = Math.random() >= 0.5;

export const ImageToggleOnMouseOver = ({
  primaryImg = "",
  secondaryImg = "",
}) => {
  const imageRef: null | any = useRef(null);
  // OK
  const [t, a] = useState(randomd === true);

  // Not OK
  // if (randomd) {
  //   const [t, a] = useState(true);
  // } else {
  //   const [t, a] = useState(false);
  // }

  useEffect(() => {
    setTimeout(() => {
      a(false);
    }, 2000);
  });

  return (
    <>
      {t ? (
        <div>Loading...</div>
      ) : (
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
      )}
    </>
  );
};
