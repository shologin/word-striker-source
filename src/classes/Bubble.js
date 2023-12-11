class Bubble {
  constructor({ position, velocity, text }) {
    this.position = position;
    this.velocity = velocity;
    this.text = text;
    this.radius = {
      x: c.measureText(this.text).width + 10,
      y: c.measureText(this.text).width / 1.5 > 20 ? c.measureText(this.text).width / 1.5 : 20,
    };
    this.letterIndex = 0;
    this.style = {
      fillStyle: "#294d61",
      shadowColor: "white",
      shadowOffsetY: 2,
      shadowBlur: 8,
      strokeStyle: "#6da5c0",
      lineWidth: 2,
      font: "bold 18px Arial",
      hitText: "#EC9704",
      normalText: "#6da5c0",

      // dynamic styles for changeColor()
      normalShadowColor: "white",
      normalStrokeStyle: "#6da5c0",
      hitShadowColor: "#EC9704",
      hitStrokeStyle: "#fbe4d8",
      destroyedShadowColor: "red",
      destroyedStrokeStyle: "#b51a2b",
    };
  }

  draw() {
    //  body
    c.save();
    c.beginPath();
    c.fillStyle = this.style.fillStyle;
    c.ellipse(this.position.x, this.position.y, this.radius.x, this.radius.y, 0, Math.PI * 2, 360);
    c.fill();

    c.shadowColor = this.style.shadowColor;
    c.shadowOffsetY = this.style.shadowOffsetY;
    c.shadowBlur = this.style.shadowBlur;

    c.strokeStyle = this.style.strokeStyle;
    c.lineWidth = this.style.lineWidth;
    c.stroke();

    c.closePath();
    c.restore();

    //   text
    c.save();
    c.font = this.style.font;
    let currentX = this.position.x - this.radius.x + 10;

    // color letters that have been hit
    for (let i = 0; i < this.text.length; i++) {
      const letter = this.text[i];

      if (i < this.letterIndex) {
        c.fillStyle = this.style.hitText;
      } else {
        c.fillStyle = this.style.normalText;
      }
      c.fillText(letter, currentX, this.position.y + 5);
      currentX += c.measureText(letter).width;
    }
    c.restore();
  }

  update() {
    this.draw();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  increaseLetterIndex() {
    this.letterIndex++;
  }

  changeColor() {
    if (this.letterIndex === this.text.length) {
      // when destroyed
      this.style.fillStyle = "gray";
      this.style.shadowColor = this.style.destroyedShadowColor;
      this.style.strokeStyle = this.style.destroyedStrokeStyle;
    } else {
      // when get hit
      this.style.shadowColor = this.style.hitShadowColor;
      this.style.strokeStyle = this.style.hitStrokeStyle;
    }

    setTimeout(() => {
      // get back to normal
      this.style.shadowColor = this.style.normalShadowColor;
      this.style.strokeStyle = this.style.normalStrokeStyle;
    }, 300);
  }
}
