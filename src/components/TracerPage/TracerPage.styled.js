import { styled } from "styled-components";

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

export const DisplayContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
`;
