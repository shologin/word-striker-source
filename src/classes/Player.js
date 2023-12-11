class Player {
  constructor({ position, radius }) {
    this.position = position;
    this.radius = radius;
    this.style = {
      fillStyle: "rgba(6, 88, 47, 0.02)",
      shadowColor: "rgba(6, 88, 47, 1)",
      strokeStyle: "#6da5c0",
      shootShadowColor: "#EC9704",
      shootStrokeStyle: "#EC9704",
    };
  }
  draw() {
    c.save();
    c.beginPath();
    c.arc(this.position.x, this.position.y + this.radius / 2, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.style.fillStyle;
    c.fill();

    c.shadowColor = this.style.shadowColor;
    c.shadowOffset = 2;
    c.shadowBlur = 16;

    c.strokeStyle = this.style.strokeStyle;
    c.lineWidth = 5;
    c.stroke();

    c.closePath();
    c.restore();
  }

  shootEffect() {
    c.save();
    c.beginPath();
    c.arc(this.position.x, this.position.y + this.radius / 2, this.radius * 1.25, 0, Math.PI * 2, false);
    c.fillStyle = this.style.fillStyle;
    c.fill();

    c.shadowColor = this.style.shootShadowColor;
    c.shadowOffset = 2;
    c.shadowBlur = 16;

    c.strokeStyle = this.style.shootStrokeStyle;
    c.lineWidth = 5;
    c.stroke();

    c.closePath();
    c.restore();
  }
}
