import { useEffect } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import "./MyCanvas.css";

export const MyCanvas = () => {
  const handleClick = () => {};
  useEffect(() => {
    const paper = document.querySelector("#myPaper");
    const pen = paper.getContext("2d");

    const drawBottomLine = (lineStart, lineEnd) => {
      pen.strokeStyle = "white";
      pen.lineWidth = 6;

      pen.beginPath();
      pen.moveTo(lineStart.x, lineStart.y);
      pen.lineTo(lineEnd.x, lineEnd.y);
      pen.stroke();
    };

    const drawArc = (
      arcCenter,
      arcRadius,
      start = Math.PI,
      end = 2 * Math.PI,
      style = "stroke",
      fillStyle = "white"
    ) => {
      pen.beginPath();
      pen.arc(arcCenter.x, arcCenter.y, arcRadius, start, end);
      if (style === "stroke") {
        pen.stroke();
      } else {
        pen.fillStyle = fillStyle;
        pen.fill();
      }
    };

    const positionOnArc = (center, radius, angle) => ({
      x: center.x + radius + Math.cos(angle),
      y: center.y + radius + Math.sin(angle),
    });

    const drawCircleOnArc = (arcCenter, arcRadius) => {
      const position = positionOnArc(arcCenter, arcRadius, angle);
      console.log(arcRadius);
      drawArc(arcCenter, arcRadius, Math.PI, Math.PI * 2, "fill");
    };

    paper.width = paper.clientWidth;
    paper.height = paper.clientHeight;

    const startTime = new Date().getTime();

    const draw = () => {
      const currentTime = new Date().getTime();
      const elapsedTime = (currentTime - startTime) / 1000;
      console.log(elapsedTime);

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

      drawBottomLine(lineStart, lineEnd);
      // Bottom line

      // Arcs
      const center = {
        x: paper.width * 0.5,
        y: paper.height * 0.9,
      };

      // const arcData = [
      //   { radius: lineLength * 0.05 },
      //   { radius: lineLength * 0.1 },
      //   { radius: lineLength * 0.15 },
      //   { radius: lineLength * 0.2 },
      //   { radius: lineLength * 0.25 },
      //   { radius: lineLength * 0.3 },
      //   { radius: lineLength * 0.35 },
      // ];

      // Arcs

      // Dot on arc
      const velocity = 0.4;
      const maxAngle = Math.PI * 2;
      // Dot angle
      let distanceAlongArc = Math.PI + elapsedTime * velocity;
      let modDistance = distanceAlongArc % maxAngle;
      let adjustedDistance =
        modDistance >= Math.PI ? modDistance : maxAngle - modDistance;

      const smallDotCoordinates = {
        x: center.x + radius * Math.cos(adjustedDistance),
        y: center.y + 10 * Math.sin(adjustedDistance),
      };

      const NUMBER_OF_ARCS = 5;
      const RADIUS_SPACING = lineLength / NUMBER_OF_ARCS / 2;
      for (let i = 0; i < NUMBER_OF_ARCS; i++) {
        const radius = i * RADIUS_SPACING;
        const radiusDot = lineLength * 0.01;
        drawArc(center, radius);
        drawCircleOnArc(smallDotCoordinates, radiusDot);
      }
      // const smallDotArcCenter = {
      //   x: elapsedTime * 10,
      //   y: elapsedTime * 20,
      // };

      // pen.beginPath();
      // pen.arc(
      //   smallDotArcCenter.x,
      //   smallDotArcCenter.y,
      //   arcData[0] * 0.2,
      //   0,
      //   2 * Math.PI
      // );
      // Dot on arc

      // // pen.clearRect(100, 100, paper.width, paper.height);
      // requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <MainWrapper>
      <h1>My canvas</h1>
      <button onClick={handleClick}>Click me</button>
      <canvas id="myPaper"></canvas>
    </MainWrapper>
  );
};
