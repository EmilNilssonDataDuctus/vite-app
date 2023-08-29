import React, { useEffect, useRef, useState } from "react";

export const ImageToggleOnScroll = ({ primaryImg = "", secondaryImg = "" }) => {
  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imageRef: null | any = useRef(null);

  const scrollHandler = () => {
    setInView(isInView());
  };

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    setIsLoading(false);
    // console.log("useEffect add window scroll handler");
    window.addEventListener("scroll", scrollHandler);

    // Set color to images in view
    setInView(isInView());

    console.log(`isLoading? ${isLoading}`);
    console.log(`inView? ${inView}`);

    return () => {
      // console.log("useEffect remove window scroll handler");
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <img
        ref={imageRef}
        src={
          isLoading
            ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            : inView
            ? primaryImg
            : secondaryImg
        }
      />
    </>
  );
};
