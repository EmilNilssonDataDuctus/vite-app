import { useEffect } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import "./MyCanvas.css";

export const MyCanvas = () => {
  useEffect(() => {
    const paper = document.querySelector("#myPaper");
    console.log(paper);
    const pen = paper.getContext("2d");
    console.log(pen);
    console.log(paper.width);
    console.log(paper.height);
    paper.width = paper.clientWidth;
    paper.height = paper.clientHeight;

    const startTime = new Date().getTime();

    const draw = () => {
      console.log("drawing");
      const currentTime = new Date().getTime();
      const elapsedTime = (currentTime - startTime) / 1000;

      // Bottom line
      const lineStart = {
        x: paper.width * 0.1,
        y: paper.height * 0.9,
      };

      const lineEnd = {
        x: paper.width * 0.9,
        y: paper.height * 0.9,
      };

      const lineLength = lineEnd.x - lineStart.x;

      pen.strokeStyle = "white";
      pen.lineWidth = 6;

      pen.beginPath();
      pen.moveTo(lineStart.x, lineStart.y);
      pen.lineTo(lineEnd.x, lineEnd.y);
      pen.stroke();
      // Bottom line

      // Arc
      const arcRadius = lineLength * 0.05;
      const arcCenter = {
        x: paper.width * 0.5,
        y: paper.height * 0.9,
      };

      pen.beginPath();
      pen.arc(arcCenter.x, arcCenter.y, arcRadius, Math.PI, 2 * Math.PI);
      pen.stroke();
      // Arc

      // Dot on arc
      const velocity = 0.4;
      const maxAngle = Math.PI * 2;
      // Dot angle
      let distanceAlongArc = Math.PI + elapsedTime * velocity;
      let modDistance = distanceAlongArc % maxAngle;
      let adjustedDistance =
        modDistance >= Math.PI ? modDistance : maxAngle - modDistance;

      const smallDotArcCenter = {
        x: arcCenter.x + arcRadius * Math.cos(adjustedDistance),
        y: arcCenter.y + arcRadius * Math.sin(adjustedDistance),
      };

      pen.beginPath();
      pen.arc(
        smallDotArcCenter.x,
        smallDotArcCenter.y,
        arcRadius * 0.2,
        0,
        2 * Math.PI
      );
      pen.fillStyle = "white";
      pen.fill();
      pen.fillStyle = "black";
      pen.fill();
      // Dot on arc

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <MainWrapper>
      <h1>My canvas</h1>
      <canvas id="myPaper"></canvas>
    </MainWrapper>
  );
};
