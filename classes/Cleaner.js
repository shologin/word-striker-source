class Cleaner {
  constructor() {
    this.positionY = 0;
    this.velocityY = canvas.height * 2;
  }

  draw() {
    c.beginPath();
    c.fillStyle = "#05161a";
    c.fillRect(0, this.positionY, canvas.width, canvas.height);
    c.closePath();
  }

  update() {
    this.draw();
    if (this.positionY < canvas.height) {
      this.positionY += this.velocityY;
    }
  }
}
