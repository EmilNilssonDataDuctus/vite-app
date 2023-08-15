import { styled } from "styled-components";

export const DisplayContainerWrapper = styled.div`
  margin: 0 64px;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
  grid-template-areas:
    "reader top topright"
    "reader bot botright";
`;

export const DisplayContainer = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.4);
  /* grid-area: right; */
`;

export const DisplayContainerReader = styled(DisplayContainer)`
  background-color: rgba(0, 0, 0, 0.2);
  grid-area: reader;
`;

export const ShowDiv = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  left: ${(props) => props.$left};
  top: ${(props) => props.$top};
`;

export const DisplayContainerSmall = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.4);
  grid-area: top;

  justify-self: center;
`;

export const DisplayContainerSmallCopy = styled(DisplayContainerSmall)`
  grid-area: bot;
`;

export const DisplayContainerSmallCopyTopRight = styled(DisplayContainerSmall)`
  transform: rotate(180deg);
  grid-area: topright;
`;

export const DisplayContainerSmallCopyBotRight = styled(DisplayContainerSmall)`
  grid-area: botright;
`;

export const ShowDivSmall = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  left: ${(props) => props.$left};
  top: ${(props) => props.$top};
`;

export const ShowDivSmallSmooth = styled(ShowDivSmall)`
  transition: left 100ms, top 100ms;
`;
