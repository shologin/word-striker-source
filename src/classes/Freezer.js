class Freezer {
  constructor({ scores, freezeTime, freezeCheckpointStep }) {
    this.__scores = scores;
    this.__freezeTime = freezeTime;
    this.__freezeCheckpointStep = freezeCheckpointStep;
    this.__freezeCheckpoint = freezeCheckpointStep;
    this.__isFreezed = false;
    this.__isFreezeReady = false;
    this.__notReadyAlert = false;
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
    this.#alertNotReady()
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

  // disable freeze when game over
  disableFreeze() {
    this.__isFreezeReady = false;
  }

  // not ready alert
  #drawNotReady() {
    c.save();

    c.beginPath();
    c.strokeStyle = "gray";
    c.lineWidth = 3;

    c.shadowColor = "gray";
    c.shadowBlur = 5;

    c.strokeRect(0, 0, canvas.width, canvas.height);
    c.stroke();
    c.closePath();

    c.restore();
  }

  #alertNotReady() {
    if (this.__notReadyAlert) {
      this.#drawNotReady();
      setTimeout(() => {
        this.__notReadyAlert = false;
      }, 300);
    }
  }

  notifyNotReady() {
    this.__notReadyAlert = true
  }
}
