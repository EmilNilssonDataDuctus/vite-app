import { MainWrapper } from "../../Shared/Page.styled";
import "./MyCanvas.css";

export const MyCanvas = () => {
  return (
    <MainWrapper>
      <h1>My canvas</h1>
      <canvas id="myPaper"></canvas>
    </MainWrapper>
  );
};
