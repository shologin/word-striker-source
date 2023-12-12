class Freezer {
  constructor({ scores, freezeTime, freezeCheckpointStep }) {
    this.__scores = scores;
    this.__freezeTime = freezeTime;
    this.__freezeCheckpointStep = freezeCheckpointStep;
    this.__freezeCheckpoint = freezeCheckpointStep;
    this.__isFreezed = false;
    this.__isFreezeReady = false;
  }

  #draw() {
    c.save();

    c.beginPath();
    c.strokeStyle = "blue";
    c.lineWidth = 3;

    c.shadowColor = "blue";
    c.shadowBlur = 5;

    c.strokeRect(0, 0, canvas.width, canvas.height);
    c.stroke();
    c.closePath();

    c.restore();
  }

  update(scores) {
    this.#alert();
    this.#checkIsReady();
    this.__scores = scores;

    if (this.__isFreezeReady) {
      return true;
    }

    return false;
  }

  #checkIsReady() {
    if (this.__scores >= this.__freezeCheckpoint) {
      this.__isFreezeReady = true;
      this.__freezeCheckpoint += this.__freezeCheckpointStep;
    }
  }

  getIsFreezeReady() {
    return this.__isFreezeReady;
  }

  setFreezed() {
    this.__isFreezed = true;
    this.__isFreezeReady = false;
    this.#alert();
  }

  #alert() {
    if (this.__isFreezed) {
      this.#draw();

      setTimeout(() => {
        this.__isFreezed = false;
      }, this.__freezeTime);
    }
  }

  disableFreeze() {
    this.__isFreezeReady = false;
  }
}
