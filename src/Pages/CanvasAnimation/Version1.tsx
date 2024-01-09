import React, { useEffect, useState } from "react";

const MAX_DOTS = 1000;

export const Version1 = () => {
  const [noOfDots, setNoOfDots] = useState(10);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    function init() {
      window.requestAnimationFrame(draw);
    }

    function draw() {
      const canvas = document.getElementById(
        "canvas-january-2024"
      )! as HTMLCanvasElement;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      // Object to store dot's position and direction
      const dots = Array.from({ length: noOfDots }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 5,
        angle: Math.random() * (2 * Math.PI),
        color: getRandomColor(),
      }));

      // Function to generate a random color
      function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      // Function to draw a dot at a given position with a given color
      function drawDot(x, y, color) {
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
      }

      // Function to move the dot in a random direction
      function moveDot(dot) {
        if (isMouseDown) return;
        dot.x += dot.speed * Math.cos(dot.angle);
        dot.y += dot.speed * Math.sin(dot.angle);

        // Bounce logic
        if (dot.x < 0 || dot.x > canvas.width) {
          dot.angle =
            Math.PI -
            dot.angle +
            ((Math.random() * 20 - 10) * ((2 * Math.PI) / 180) + Math.PI / 180); // Reflect and change angle
        }

        if (dot.y < 0 || dot.y > canvas.height) {
          dot.angle =
            -dot.angle +
            ((Math.random() * 20 - 10) * ((2 * Math.PI) / 180) + Math.PI / 180); // Reflect and change angle
        }
      }

      // Function to update the canvas
      function updateCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dots.forEach((dot) => {
          moveDot(dot);
          drawDot(dot.x, dot.y, dot.color);
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
      }

      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mouseup", handleMouseUp);
      canvas.addEventListener("mouseleave", handleMouseLeave);

      updateCanvas(); // Start the animation

      return () => {
        // Cleanup event listeners when component unmounts
        canvas.removeEventListener("mousedown", handleMouseDown);
        canvas.removeEventListener("mouseup", handleMouseUp);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
    init();
  }, [noOfDots, isMouseDown]);
  return (
    <section>
      <label>
        <span>No of dots: {noOfDots}</span>
        <br />
        <input
          style={{ width: "100%" }}
          type="range"
          min="1"
          max={MAX_DOTS}
          value={noOfDots}
          onChange={(e) => setNoOfDots(parseInt(e.target.value, 10))}
        />
      </label>
      <br />
      <canvas
        style={{ border: "1px solid red" }}
        id="canvas-january-2024"
        width="300"
        height="300"
      ></canvas>
    </section>
  );
};
