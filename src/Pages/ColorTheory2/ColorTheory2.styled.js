import { styled } from "styled-components";

export const FullHeightPage = styled.div`
  height: ${({ $topMargin }) => `calc(100vh - ${$topMargin}px)`};
  width: 100%;
  background-color: ${({ $bgColor }) => $bgColor};
  background-blend-mode: difference;

  svg {
    mix-blend-mode: difference;
    path{
      /* fill: red; */
    }
  }
`;

export const LogoImage = styled.svg`
  mix-blend-mode: difference;
  position: absolute;
  path {
    stroke: red;
  }
`;
