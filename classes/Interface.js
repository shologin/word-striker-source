class Interface {
  constructor({ scores, lives, dictionaryName }) {
    this.style = { fillStyle: "red", shadowColor: "red" };
    this.__isBubbleMissed = false;
    this.__scores = scores;
    this.__lives = lives;
    this.__dictionaryName = dictionaryName;
    this.__highScore = localStorage.getItem(`${this.__dictionaryName}_high_score`) || 0;
  }

  #draw() {
    c.save();

    c.beginPath();
    c.strokeStyle = this.style.fillStyle;
    c.lineWidth = 3;

    c.shadowColor = this.style.shadowColor;
    c.shadowBlur = 5;

    c.strokeRect(0, 0, canvas.width, canvas.height);
    c.stroke();
    c.closePath();

    c.restore();
  }

  update() {
    this.#alert();
  }

  #alert() {
    if (this.__isBubbleMissed) {
      this.#draw();

      setTimeout(() => {
        this.__isBubbleMissed = false;
      }, 500);
    }
  }

  bubbleMissed() {
    this.__isBubbleMissed = true;
    this.#alert();
  }

  // handle scores
  setScores(scores) {
    this.__scores += scores;
  }

  getScores() {
    return this.__scores;
  }

  // handle lives
  setLives(amount) {
    this.__lives += amount;
  }

  getLives() {
    if (this.__lives === -1) {
      return false;
    }

    let str = " ";

    for (let i = 0; i < this.__lives; i++) {
      str += `<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#EC9704"
          class="info-fire-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          />
        </svg>`;
    }
    return str;
  }

  // manage scores
  getHighScore() {
    if (this.__scores > this.__highScore) {
      this.#setHighScore(this.__scores);
      return `${this.__highScore} <span class="new-record-badge">New record!</span>`;
    }
    return this.__highScore;
  }

  #setHighScore(newHighScore) {
    localStorage.setItem(`${this.__dictionaryName}_high_score`, newHighScore);
    this.__highScore = newHighScore;
  }
}
