class Player {
  constructor({ position, radius }) {
    this.position = position;
    this.radius = radius;
    this.style = { fillStyle: "blue" };
  }

  draw() {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.style.fillStyle;
    c.fill();
    c.closePath();
  }
}
