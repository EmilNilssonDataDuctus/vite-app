import { styled } from "styled-components";

export const CardsWrapper = styled.div`
  margin: 0 auto;
  background-color: rgba(255, 0, 0, 0.3);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  width: 1600px;
  height: 80vh;

  &:hover {
    background-color: rgba(255, 0, 0, 0.6);
  }
`;

export const Card = styled.div`
  background-color: rgba(0, 255, 0, 0.3);
  background-image: ${({ $imageSrc }) => `url("${$imageSrc}")`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-radius: 10px;
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.9;
  }
`;

export const ImageHover = styled.div`
  background-image: ${({ $imageSrc }) => `url("${$imageSrc}")`};
  background-position: ${({ $indexOfCard }) =>
    $indexOfCard === 0
      ? "left center"
      : $indexOfCard === 1
      ? "center center"
      : "right center"};

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  /* transform: translateX(-50%); */
`;
