const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const backgroundElement = document.getElementById("background");
const infoTableElement = document.getElementById("infoTable");
const scoresElement = document.getElementById("infoScores");
const livesElement = document.getElementById("lives");
const canvasMenuLinkBtnElement = document.getElementById("canvasMenuLinkBtn");
const playBtnElement = document.getElementById("playBtn");
const aboutBtnElement = document.getElementById("aboutBtn");
const mainMenuTableElement = document.getElementById("mainMenuTable");
const authorElement = document.getElementById("author");
const dictionarySelectElement = document.getElementById("dictionarySelect");
const aboutBadgeElement = document.getElementById("aboutBadge");
const closeAboutBtnElement = document.getElementById("closeAboutBtn");
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
const BUBBLES_SPAWN_FREQUENCY = 1000;
const BUBBLES_SPEED = 1;

// bubble hit effect        `
// bubble crash effect      `
// bubbles dropping effect  `
// missed bubble effect     `
// scores                   `
// lives                    `
// game over                `
// start game screen        `
// high record              `
// player                   `
// add info about author and credentials/sources              `
// standardize code: constants, separate classes, private     `
// various dictionaries                                       `
// add webpack/gulp

//establish dictionary manager
const dictionariesManager = new DictionariesManager(dictionaries);

// main menu - app launchpoint
function main() {
  canvas.style.display = "none";
  gameOverTableElement.style.display = "none";
  infoTableElement.style.display = "none";
  canvasMenuLinkBtnElement.style.display = "none";
  backgroundElement.style.display = "block";
  mainMenuTableElement.style.display = "flex";

  // handle dictionary choice
  dictionarySelectElement.innerHTML = dictionariesManager.renderDictionariesList();
  dictionarySelectElement.value = dictionariesManager.getDictionaryName();
}

// handle select dictionary
dictionarySelectElement.addEventListener("change", (event) => {
  if (!dictionariesManager.setChosenDictionary(event.target.value)) {
    console.log("Set wrong dictionary");
  }
});

// start game
function start() {
  // author check
  if (authorElement.innerHTML !== "Bogdan Shologin") return;

  // hide tables
  canvas.style.display = "block";
  backgroundElement.style.display = "none";
  mainMenuTableElement.style.display = "none";
  gameOverTableElement.style.display = "none";
  infoTableElement.style.display = "block";
  canvasMenuLinkBtnElement.style.display = "block";

  const interface = new Interface({ scores: 0, lives: 3, dictionaryName: dictionariesManager.getDictionaryName() });
  const player = new Player({ position: { x: canvas.width / 2, y: canvas.height }, radius: 125 });
  const cleaner = new Cleaner();

  // get chosen dictionary
  const words = dictionariesManager.getDictionary();

  // set info table
  scoresElement.innerHTML = interface.getScores();
  livesElement.innerHTML = interface.getLives();

  const bubbles = [];
  const projectiles = [];
  let animationFrameID;

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
  }, BUBBLES_SPAWN_FREQUENCY);

  // animate game
  function animate() {
    animationFrameID = window.requestAnimationFrame(animate);

    c.fillStyle = BACKGROUND_COLOR;
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();
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
      case "Digit0":
        findTarget("0");
        break;
      case "Digit5":
        findTarget("5");
        break;
      case "Space":
        console.log("Hello there!");
        break;
    }
  });

  // add click to the "home" button
  canvasMenuLinkBtnElement.addEventListener("click", function homepageClickHandle() {
    window.cancelAnimationFrame(animationFrameID);
    clearInterval(intervalID);
    main();
    return canvasMenuLinkBtnElement.removeEventListener("click", homepageClickHandle);
  });
}

main();

// game over
function gameOver(animationFrameID, intervalID, interface) {
  window.cancelAnimationFrame(animationFrameID);
  clearInterval(intervalID);
  gameOverTableElement.style.display = "flex";
  gameOverScoreElement.innerHTML = interface.getScores();
  gameOverHighestElement.innerHTML = interface.getHighScore();
  infoTableElement.style.display = "none";
  canvasMenuLinkBtnElement.style.display = "none";
}

// animate sliding
function fadeAnimation(block1, block2, time) {
  block1.classList.add("animation-fade");
  setTimeout(() => {
    // hide block 1
    block1.classList.remove("animation-fade");
    block1.style.display = "none";

    // make visible block 2
    block2.style.display = "flex";
    block2.classList.add("animation-appear");

    setTimeout(() => {
      block2.classList.remove("animation-appear");
    }, time);
  }, time);
}

// activate buttons
playBtnElement.addEventListener("click", start);
playAgainBtnElement.addEventListener("click", start);
gameOverMenuLinkBtnElement.addEventListener("click", main);
aboutBtnElement.addEventListener("click", () => fadeAnimation(mainMenuTableElement, aboutBadgeElement, 300));
closeAboutBtnElement.addEventListener("click", () => fadeAnimation(aboutBadgeElement, mainMenuTableElement, 300));

// canvasMenuLinkBtnElement.addEventListener("click", function sayHello() {
//   const name = "Bogdan";
//   alert(`hello, ${name}`);
//   return canvasMenuLinkBtnElement.removeEventListener("click", sayHello);
// });
