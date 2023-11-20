import React from "react";

const boxes = [...Array(6)].map((box, boxIndex) => {
  return {
    ...box,
    index: boxIndex,
    x: 0,
    y: boxIndex * 50,
    speed: 2,
    width: (boxIndex + 1) * 10,
    height: 50, // Height of the box
    direction: 1, // 1 for right, -1 for left
    bounces: 0,
    hue: 630,
    sat: 30,
    lig: 50,
  };
});

function init() {
  window.requestAnimationFrame(draw);
}

function draw() {
  const canvas = document.getElementById(
    "canvas-november"
  ) as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;

  ctx.clearRect(0, 0, canvas!.width, canvas!.height);

  for (const box of boxes) {
    box.x += box.speed * box.direction;

    if (box.x + box.width >= canvas!.width || box.x <= 0) {
      console.table(
        boxes.map((box) => {
          return {
            bounces: box.bounces,
            speed: box.speed,
          };
        })
      );

      box.direction *= -1;
      box.speed *= 1.5;
      if (box.speed > 4) {
        box.speed = 2;
      }
      box.bounces++;
    }
    ctx.fillStyle = `hsl(${box.hue}, ${box.sat}%, ${box.lig}%)`;
    ctx.fillRect(box.x, box.y, box.width, box.height);
  }

  requestAnimationFrame(draw);
}

export const CanvasTestNovember = () => {
  init();
  return (
    <canvas
      height="300"
      style={{ border: "1px solid red", width: "100%" }}
      id="canvas-november"
    ></canvas>
  );
};
