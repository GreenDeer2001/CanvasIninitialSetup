const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
let colors = ["purple", "yellow", "orange", "grey"];
ctx.lineWidth = 5;

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    // this.velocity = {
    //   x: dx,
    //   y: dy,
    // };
    this.radius = radius;
    this.color = colors[Math.floor(Math.random() * colors.length)];

    this.draw = function () {
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

      ctx.strokeStyle = this.color;
      ctx.stroke();
      ctx.beginPath();
    };
  }
}

let circles = [];
init();
function init() {
  for (let i = 0; i < 10; i++) {
    const radius = 30;
    let x = randomNumber(radius, innerWidth - 2 * radius);
    let y = randomNumber(radius, innerHeight - 2 * radius);
    // const dx = randomNumber(-3,6);
    // const dy = randomNumber(-3,6);

    if (i !== 0)
      for (let j = 0; j < circles.length; j++) {
        if (
          distance(x, y, circles[j].x, circles[j].y) <
          radius + circles[j].radius
        ) {
          x = randomNumber(radius, innerWidth - radius);
          y = randomNumber(radius, innerHeight - radius);
          j = -1;
        }
      }

    const circle = new Circle(x, y, radius);
    // const circle = new Circle(x, y, dx, dy, radius);
    circle.draw();

    circles.push(circle);
  }
}

function distance(x1, y1, x2, y2) {
  const dist1 = x1 - x2;
  const dist2 = y1 - y2;
  return Math.sqrt(Math.pow(dist1, 2) + Math.pow(dist2, 2));
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}
addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
