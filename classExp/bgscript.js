let canvas;
let ctx;
let flowField;
let FlowFieldAnimation;

window.onload = function () {
  canvas = document.getElementById("canvas1");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  flowField.animate(0);
};
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  flowField.animate(0);
});

const mouse = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", function (e) {
  console.log(e);
  mouse.x = e.x;
  mouse.y = e.y;
});

class FlowFieldEffect {
  #ctx;
  #width;
  #height;
  constructor(ctx, width, height) {
    this.#ctx = ctx;
    //this.#ctx.strokeStyle = "white";
    this.#ctx.lineWidth = 1;
    this.#width = width;
    this.#height = height;
    this.x = 0;
    this.y = 0;
    //this.angle = 0;
    this.lastTime = 0;
    this.interval = 1000 / 60;
    this.timer = 0;
    this.cellSize = 10;
    //console.log("effect loaded");
    //this.#draw(100, 100);
    this.gradient;
    this.#createGradient();
    this.#ctx.strokeStyle = this.gradient;
    this.radius = 0;
    this.vr = 0.03;
  }

  #createGradient() {
    this.gradient = this.#ctx.createLinearGradient(
      0,
      0,
      this.#width,
      this.#height
    );
    this.gradient.addColorStop("0.1", "#0000ff");
    this.gradient.addColorStop("0.2", "#0040ff");
    this.gradient.addColorStop("0.5", "#0095ff");
    this.gradient.addColorStop("0.7", "#00aaff");
    this.gradient.addColorStop("0.9", "#000099");
  }
  #drawLine(angle, x, y) {
    let positionX = x;
    let positionY = y;
    let dx = mouse.x - positionX;
    let dy = mouse.y - positionY;
    let distance = dx * dx + dy * dy;
    if (distance > 300000) distance = 300000;

    let length = distance / 19000;
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);

    this.#ctx.lineTo(
      x + Math.cos(angle) * length,
      y + Math.sin(angle) * length
    );
    this.#ctx.stroke();
  }

  animate(timeStamp) {
    const deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;
    if (this.timer > this.interval) {
      //this.angle += 0.1;
      this.#ctx.clearRect(0, 0, this.#width, this.#height);
      this.radius += this.vr;

      if (this.radius > 5 || this.radius < -5) this.vr *= -1;
      for (let y = 0; y < this.#height; y += this.cellSize) {
        for (let x = 0; x < this.#width; x += this.cellSize) {
          const angle =
            (Math.cos(mouse.x * 0.0009) + Math.sin(mouse.y * 0.000005)) *
            this.radius;
          this.#drawLine(angle, x, y);
        }
      }
      this.timer = 0;
    } else {
      this.timer += deltaTime;
    }
    FlowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
  }
}
