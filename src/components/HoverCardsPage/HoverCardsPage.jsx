import { useEffect, useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { Card, CardsWrapper } from "./HoverCardsPage.styled";

export const HoverCardsPage = () => {
  const previewImageSources = [
    "https://images.unsplash.com/photo-1690269973172-fd3d592a476b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    "https://images.unsplash.com/photo-1660376745562-cf3c466d8bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1690476072350-be1db216a0b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
  ];

  const hoverImageSources = [
    "https://images.unsplash.com/photo-1690729484632-ec4c14b35018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    "https://images.unsplash.com/photo-1688118274836-e287fafd57e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1690398252262-6359056cf1b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ];

  const [currentHoveredImage, setCurrentHoveredImage] = useState();

  const showHoverImage = (e) => {
    console.log("event target: ", e.target);
    console.log("event target data: ", e.target.dataset);
    console.log("event target data id: ", e.target.dataset.cardid);
    setCurrentHoveredImage(e.target.dataset.cardid);
  };

  useEffect(() => {
    document.querySelectorAll(".hover-card").forEach((card) => {
      card.addEventListener("mouseover", showHoverImage);
    });

    // return () => {
    //   document.querySelectorAll(".hover-card").forEach((card) => {
    //     card.removeEventListener("mouseover", showHoverImage);
    //   });
    // };
  }, []);
  return (
    <MainWrapper>
      <h1>Hover cards showcase page</h1>
      <CardsWrapper>
        <Card
          className="hover-card"
          $imageSrc={previewImageSources[0]}
          data-cardid="1"
        >
          <h2>Thing to do</h2>
          {/* <ImageHover
            $imageSrc={hoverImageSources[currentHoveredImage]}
            $indexOfCard={0}
          /> */}
        </Card>
        <Card
          className="hover-card"
          $imageSrc={previewImageSources[1]}
          data-cardid="2"
        >
          <h2>Thing to do</h2>
          {/* <ImageHover
            $imageSrc={hoverImageSources[currentHoveredImage]}
            $indexOfCard={1}
          /> */}
        </Card>
        <Card
          className="hover-card"
          $imageSrc={previewImageSources[2]}
          data-cardid="3"
        >
          <h2>Thing to do</h2>
          {/* <ImageHover
            $imageSrc={hoverImageSources[currentHoveredImage]}
            $indexOfCard={2}
          /> */}
        </Card>
      </CardsWrapper>
    </MainWrapper>
  );
};
