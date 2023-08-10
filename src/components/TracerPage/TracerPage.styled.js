import { styled } from "styled-components";

export const DisplayContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 16px;
`;

export const DisplayContainer = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.4);
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
`;

export const ShowDivSmall = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  left: ${(props) => props.$left};
  top: ${(props) => props.$top};
`;
