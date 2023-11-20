import React from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import { CanvasTestNovember } from "./CanvasTestNovember";

const sun = new Image();
const moon = new Image();
const earth = new Image();

function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  window.requestAnimationFrame(draw);
}

function draw() {
  // Create time constant
  const time = new Date();

  // Get canvas context from html
  const ctx = document.getElementById("canvas-oktober").getContext("2d");

  ctx.globalCompositeOperation = "destination-over";

  // clear canvas
  ctx.clearRect(0, 0, 300, 300);
  ctx.save();

  // Move anchorpoint to middle of canvas
  // origin is (0, 0) in top left corner
  ctx.translate(150, 150);

  // Earth
  // rotate around anchorpoint
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds()
  );

  // Move anchorpoint to right of sun (i.e set orbitradius for earth)
  ctx.translate(100, 0);
  ctx.drawImage(earth, -12, -12);
  // ctx.fillRect(0, -12, 40, 24); // Shadow
  // ctx.fillStyle = "rgba(255, 255, 255, 0.6)";

  // prepare to change anchorpoint
  // ctx.save();

  // Moon
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds()
  );
  // Start orbit above earth
  ctx.translate(0, -20);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

export const CanvasTestOktober = () => {
  init();
  return (
    <MainWrapper>
      {/* <h1>CanvasTestOktober</h1> */}
      {/* <div style={{display: "flex", gap: "32px", backgroundColor: "rgba(100,0,0,0.3)"}}> */}
        <canvas
          style={{ border: "1px solid red" }}
          id="canvas-oktober"
          width="300"
          height="300"
        ></canvas>
        <br />
        <CanvasTestNovember />
      {/* </div> */}
    </MainWrapper>
  );
};
