// Game State Variables
let hasGameStarted = false;
let level = 0;
let buttons = ["green", "red", "yellow", "blue"];
let series = [];
let clickNumber = 0;

// Cached DOM Elements
const titleHeading = $("h1.title-heading");
const body = $("body");
const boxes = $(".box");

// Start game when a key is pressed
$(document).keydown(function () {
  if (hasGameStarted) return;

  hasGameStarted = true;
  startNewLevel();
});

// Handle box clicks
boxes.click(function () {
  if (!hasGameStarted) return;

  const color = $(this).attr("class").split(" ")[1];
  blinkBox(color);
  playAudio(color);

  // Check if the clicked color matches the sequence
  if (series[clickNumber] === color) {
    if (++clickNumber === series.length) {
      // Player completed the current level
      setTimeout(startNewLevel, 1000);
    }
  } else {
    // Wrong click, reset the game
    resetGame();
  }
});

// Blink box effect
function blinkBox(color) {
  $(`.${color}`).addClass("blink");
  setTimeout(function () {
    $(`.${color}`).removeClass("blink");
  }, 100);
}

// Reset the game
function resetGame() {
  if (!hasGameStarted) return;

  series = [];
  hasGameStarted = false;
  clickNumber = 0;
  level = 0;
  updateTitleText();
  body.addClass("game-over");
  setTimeout(() => body.removeClass("game-over"), 200);
  playAudio("wrong");
}

// Update title text based on the current game state
function updateTitleText() {
  const text =
    level > 0 ? `Level ${level}` : "Game Over! Press any key to restart!";
  titleHeading.text(text);
}

// Start a new level
function startNewLevel() {
  if (!hasGameStarted) return;

  clickNumber = 0;
  level++;
  updateTitleText();

  // Add random color to the series
  const randomColor = buttons[Math.floor(Math.random() * 4)];
  series.push(randomColor);

  // Animate box and play audio for the new color
  $(`.${randomColor}`).fadeOut(100).fadeIn(100);
  playAudio(randomColor);
}

// Play sound based on the color or action
function playAudio(fileName) {
  const audio = new Audio(`./sounds/${fileName}.mp3`);
  audio.play();
}
