import React, { useEffect, useState } from "react";
import { getRandomColor } from "./helperFunctions";

const MAX_DOTS = 1000;
const squigglyLineWidth = 10;

export const Version2 = () => {
  const [noOfDots, setNoOfDots] = useState(10);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false);

  useEffect(() => {
    function init() {
      window.requestAnimationFrame(draw);
    }

    function draw() {
      const canvas = document.getElementById(
        "canvas-january-2024-v2"
      )! as HTMLCanvasElement;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      // Object to store dot's position and direction
      const dots = Array.from({ length: noOfDots }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 5,
        angle: Math.random() * (2 * Math.PI),
        color: getRandomColor(),
        trail: [],
      }));

      // Function to draw a dot at a given position with a given color
      function drawDot(x, y, color) {
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
      }

      function drawTrail(dot) {
        ctx.beginPath();
        ctx.moveTo(dot.trail[0].x, dot.trail[0].y);

        for (let i = 1; i < dot.trail.length; i++) {
          ctx.lineTo(
            dot.trail[i].x +
              Math.random() * squigglyLineWidth -
              squigglyLineWidth / 2,
            dot.trail[i].y +
              Math.random() * squigglyLineWidth -
              squigglyLineWidth / 2
          );
        }

        ctx.strokeStyle = getRandomColor() + "20";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
      }

      // Function to move the dot in a random direction
      function moveDot(dot) {
        if (isMouseDown) return;

        dot.trail.push({ x: dot.x, y: dot.y });

        if (dot.trail.length > 20) {
          dot.trail.shift(); // Keep only the last 10 trail points
        }

        dot.x += dot.speed * Math.cos(dot.angle);
        dot.y += dot.speed * Math.sin(dot.angle);

        // Bounce logic
        if (dot.x < 0 || dot.x > canvas.width) {
          dot.angle =
            Math.PI -
            dot.angle +
            (Math.random() * ((2 * Math.PI) / 180) + Math.PI / 180); // Reflect and change angle
        }

        if (dot.y < 0 || dot.y > canvas.height) {
          dot.angle =
            -dot.angle +
            (Math.random() * ((2 * Math.PI) / 180) + Math.PI / 180); // Reflect and change angle
        }
      }

      // Function to update the canvas
      function updateCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dots.forEach((dot) => {
          moveDot(dot);
          drawDot(dot.x, dot.y, dot.color);
          drawTrail(dot);
        });

        requestAnimationFrame(updateCanvas);
      }

      function handleMouseDown() {
        setIsMouseDown(true);
      }

      function handleMouseUp() {
        setIsMouseDown(false);
      }

      function handleMouseLeave() {
        setIsMouseDown(false);
        setIsMouseInCanvas(false);
      }

      function handleMouseEnter() {
        setIsMouseInCanvas(true);
      }

      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mouseup", handleMouseUp);
      canvas.addEventListener("mouseleave", handleMouseLeave);
      canvas.addEventListener("mouseenter", handleMouseEnter);

      updateCanvas(); // Start the animation

      return () => {
        // Cleanup event listeners when component unmounts
        canvas.removeEventListener("mousedown", handleMouseDown);
        canvas.removeEventListener("mouseup", handleMouseUp);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
        canvas.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
    init();
  }, [noOfDots, isMouseDown]);
  return (
    <section>
      <details>
        <summary>Debug details</summary>
        <table style={{ width: "200px" }}>
          <tbody>
            <tr>
              <td>MouseIn?</td>
              <td>{isMouseInCanvas.toString()}</td>
            </tr>
            <tr>
              <td>MouseDown?</td>
              <td>{isMouseDown.toString()}</td>
            </tr>
          </tbody>
        </table>
      </details>

      <br />
      <canvas
        style={{ border: "1px solid red" }}
        id="canvas-january-2024-v2"
        width="300"
        height="300"
      ></canvas>
    </section>
  );
};
