class Projectile {
  constructor({ position, velocity, rotation }) {
    this.position = position;
    this.velocity = velocity;
    this.rotation = rotation;
    this.width = 5;
    this.style = { fillStyle: "#6da5c0" };
  }

  draw() {
    c.save();

    c.translate(this.position.x, this.position.y);
    c.rotate(this.rotation);
    c.translate(-this.position.x, -this.position.y);

    c.beginPath();
    c.fillStyle = this.style.fillStyle;
    c.fillRect(this.position.x, this.position.y, this.width, canvas.height);
    c.closePath();

    c.restore();
  }

  update() {
    if (this.position.y < canvas.height / 2) this.width = 2;
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
