import React, { useEffect } from "react";
import { MainWrapper } from "../../Shared/Page.styled";

export const CanvasGame = () => {
  useEffect(() => {
    function init() {
      window.requestAnimationFrame(draw);
    }

    function draw() {
      const canvas = document.getElementById(
        "canvas-january-2-2024"
      )! as HTMLCanvasElement;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      const dot_initialposition = {
        x: canvas.width / 2,
        y: canvas.height,
      };

      // Object to store dot's position and direction
      var dot = {
        x: dot_initialposition.x,
        y: dot_initialposition.y,
        size: 50,
        color: "red",
        speed: 2,
        direction: { x: 0, y: -1 }, // Initial direction (right)
        angleStart: 0,
        angleEnd: 0,
      };

      function drawDot() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI, true);
        ctx.fillStyle = dot.color;
        ctx.fill();
      }

      function drawArc(startDeg, endDeg) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(
          dot.x,
          dot.y,
          dot.size,
          ang(startDeg - dot.angleStart),
          ang(endDeg - dot.angleEnd),
          false
        );
        ctx.fillStyle = dot.color;
        ctx.fill();
      }

      function ang(angle) {
        // 0 to 360
        // 0 to 2 * PI ~ 3.1415926535
        // 2 * PI (radians) = 360 (degrees)
        // PI (radians) = 180 (degrees)
        // PI / 180 (radians) = 1 (degree)
        return (angle * Math.PI) / 180;
      }

      function moveDot() {
        dot.x += dot.speed * dot.direction.x;
        dot.y += dot.speed * dot.direction.y;

        dot.angleEnd = -1;

        // Bounce logic
        if (
          dot.x < 0 ||
          dot.x > canvas.width ||
          dot.y < 0 ||
          dot.y > canvas.height
        ) {
          dot.x = dot_initialposition.x;
          dot.y = dot_initialposition.y;
        }

        // drawDot();
        drawArc(-180, 90);
      }

      // Function to update the canvas
      function updateCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        moveDot();
        // drawDot();
        // drawArc(-180, 90);

        requestAnimationFrame(updateCanvas);
      }
      updateCanvas();
    }
    init();
  }, []);
  return (
    <MainWrapper>
      <h1>Canvas Game</h1>
      <section>
        <br />
        <canvas
          style={{ border: "1px solid red" }}
          id="canvas-january-2-2024"
          width="500"
          height="600"
        ></canvas>
      </section>
    </MainWrapper>
  );
};
