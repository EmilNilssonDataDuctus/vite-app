import React, { useRef } from "react";

export const ImageToggleOnMouseOver = ({
  primaryImg = "",
  secondaryImg = "",
}) => {
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
