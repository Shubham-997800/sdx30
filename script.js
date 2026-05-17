const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

/* canvas size */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* stars array */
let stars = [];

/* star class */
class Star {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;

    this.y = Math.random() * canvas.height;

    this.size = Math.random() * 3;

    this.speed = Math.random() * 0.7 + 0.2;

    const colors = ["#E8FF3B", "#5CFF4A", "#FFFFFF"];

    this.color = colors[Math.floor(Math.random() * colors.length)];

    this.opacity = Math.random();
  }

  update() {
    this.y += this.speed;

    if (this.y > canvas.height) {
      this.y = -10;

      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();

    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

    ctx.fillStyle = this.color;

    ctx.globalAlpha = this.opacity;

    ctx.shadowBlur = 20;

    ctx.shadowColor = this.color;

    ctx.fill();
  }
}

/* create stars */
for (let i = 0; i < 40; i++) {
  stars.push(new Star());
}

/* animation */
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    star.update();

    star.draw();
  });

  requestAnimationFrame(animate);
}

animate();

/* resize canvas */
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;

  canvas.height = window.innerHeight;
});

/* mouse glow effect */
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");

  document.body.style.setProperty("--y", e.clientY + "px");
});