const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const backgroundElement = document.getElementById("background");
const infoTableElement = document.getElementById("infoTable");
const scoresElement = document.getElementById("infoScores");
const livesElement = document.getElementById("lives");
const playBtnElement = document.getElementById("playBtn");
const mainMenuTableElement = document.getElementById("mainMenuTable");
const gameOverTableElement = document.getElementById("gameOverTable");
const gameOverScoreElement = document.getElementById("gameOverScore");
const gameOverHighestElement = document.getElementById("gameOverHighest");
const playAgainBtnElement = document.getElementById("playAgainBtn");
const gameOverMenuLinkBtnElement = document.getElementById("gameOverMenuLinkBtn");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const BACKGROUND_COLOR = "rgba(5, 22, 26, 0.2)"; // trails (need to use call cleaner.update() in bubbles loop)
// const BACKGROUND_COLOR = "#05161a";           // no trails
const PROJECTILE_SPEED = 700;
const BUBBLES_SPAWN_SPEED = 1000;
const BUBBLES_SPEED = 1;

const words = [
  "cs50",
  "array",
  "code",
  "C",
  "python",
  "HTTP",
  "TCP",
  "IP",
  "flask",
  "memory",
  "scratch",
  "fiftyville",
  "mario",
  "django",
  "AI",
  "queue",
  "stack",
  "heap",
  "sort",
  "bubble",
  "merge",
  "git",
  "bootstrap",
  "HTML",
  "CSS",
  "javascript",
  "science",
  "pointer",
  "halloween",
  "dracula",
  "duck",
  "debug",
  "finance",
  "tideman",
  "SQL",
  "ninja",
];

// bubble hit effect        `
// bubble crash effect      `
// bubbles dropping effect  `
// missed bubble effect     `
// scores                   `
// lives                    `
// game over                `
// start game screen        `
// high record              `
// player
// radio
// add info about author and credentials/sources
// standardize code: constants, separate classes, private
// various dictionaries
// add webpack/gulp

function main() {
  canvas.style.display = "none";
  gameOverTableElement.style.display = "none";
  infoTableElement.style.display = "none";
  backgroundElement.style.display = "block";
  mainMenuTableElement.style.display = "flex";
}

// start game
function start() {
  // hide tables
  canvas.style.display = "block";
  backgroundElement.style.display = "none";
  mainMenuTableElement.style.display = "none";
  gameOverTableElement.style.display = "none";
  infoTableElement.style.display = "block";

  const interface = new Interface({ scores: 0, lives: 3 });
  const player = new Player({ position: { x: canvas.width / 2, y: canvas.height }, radius: 125 });
  const target = new Bubble({ position: { x: 900, y: 200 }, velocity: { x: 0, y: 0 }, text: "cat" });
  const cleaner = new Cleaner();

  // set info table
  scoresElement.innerHTML = interface.getScores();
  livesElement.innerHTML = interface.getLives();

  const bubbles = [];
  const projectiles = [];
  let isPaused = false;

  // spawning bubbles
  const intervalID = window.setInterval(() => {
    const positionX = Math.random() * canvas.width;
    const wordIndex = Math.floor(Math.random() * words.length);

    const currentWords = [];

    // prevent from rendering similar words
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const bubble = bubbles[i];
      if (!currentWords.includes(bubble.text)) {
        currentWords.push(bubble.text);
      }
    }
    // create bubbles
    if (!currentWords.includes(words[wordIndex]) && positionX > 50 && positionX < canvas.width - 70) {
      bubbles.push(
        new Bubble({
          position: {
            x: positionX,
            y: -50,
          },
          velocity: {
            x: 0,
            y: 1 * BUBBLES_SPEED,
          },
          text: words[wordIndex],
        })
      );
    }
  }, BUBBLES_SPAWN_SPEED);

  // animate game
  function animate() {
    const animationFrameID = window.requestAnimationFrame(animate);

    c.fillStyle = BACKGROUND_COLOR;
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();
    target.draw();
    interface.update();

    // handle projectiles
    for (let i = projectiles.length - 1; i >= 0; i--) {
      const projectile = projectiles[i];
      projectile.update();
      player.draw();
      player.shootEffect();

      //  collect projectiles garbage
      if (projectile.position.y < 0) {
        projectiles.splice(i, 1);
      }
    }

    // handle bubbles
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const bubble = bubbles[i];
      bubble.update();

      // clear trails
      cleaner.update();

      // destroy bubble when hit the bottom and decrease lives
      if (bubble.position.y > canvas.height - 30) {
        interface.bubbleMissed();
        bubbles.splice(i, 1);
        interface.setLives(-1);

        if (interface.getLives()) {
          livesElement.innerHTML = interface.getLives();
        } else {
          gameOver(animationFrameID, intervalID, interface);
        }
      }

      //  destroy bubble if all letters were hit and update count
      if (bubble.letterIndex === bubble.text.length) {
        bubbles.splice(i, 1);
        interface.setScores(bubble.text.length);

        scoresElement.innerHTML = interface.getScores();
      }
    }
  }

  animate();

  // handle shooting
  function findTarget(letter) {
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const bubble = bubbles[i];

      if (bubble.text[bubble.letterIndex].toLowerCase() === letter.toLowerCase()) {
        shoot(bubble);
        bubble.increaseLetterIndex();
        bubble.changeColor();
      }
    }
  }

  function shoot(target) {
    projectiles.push(
      new Projectile({
        position: { x: player.position.x, y: player.position.y },
        velocity: {
          x: getCos({ x: player.position.x, y: player.position.y }, target) * PROJECTILE_SPEED,
          y: getSin({ x: player.position.x, y: player.position.y }, target) * PROJECTILE_SPEED,
        },
        rotation: getCos({ x: player.position.x, y: player.position.y }, target),
      })
    );
  }

  // helpers to get sin and cos
  function getCos(position, target) {
    const xDifference = target.position.x - position.x;
    const yDifference = target.position.y - position.y;
    const distance = Math.sqrt(xDifference * xDifference + yDifference * yDifference);

    return xDifference / distance;
  }

  function getSin(position, target) {
    const xDifference = target.position.x - position.x;
    const yDifference = target.position.y - position.y;
    const distance = Math.sqrt(xDifference * xDifference + yDifference * yDifference);

    return yDifference / distance;
  }

  // applying keys
  const keys = [
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
  ];
  window.addEventListener("keydown", (e) => {
    if (keys.includes(e.code)) {
      findTarget(e.code[3]);
    }

    // additional keys
    switch (e.code) {
      case "Space":
        shoot(target);
        console.log(bubbles);
        interface.bubbleMissed();
        break;
      case "Digit0":
        findTarget("0");
        break;
      case "Digit5":
        findTarget("5");
        break;
    }
  });
}

// main();
start();

// game over
function gameOver(animationFrameID, intervalID, interface) {
  window.cancelAnimationFrame(animationFrameID);
  clearInterval(intervalID);
  gameOverTableElement.style.display = "flex";
  gameOverScoreElement.innerHTML = interface.getScores();
  gameOverHighestElement.innerHTML = interface.getHighScore();
  infoTableElement.style.display = "none";
}

playBtnElement.addEventListener("click", start);
playAgainBtnElement.addEventListener("click", start);
gameOverMenuLinkBtnElement.addEventListener("click", main);
