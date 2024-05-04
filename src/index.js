import "./style.css";
import { drawBackground } from "./drawBackground";
import { drawNet } from "./drawNet";
import { drawFish } from "./drawFish";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const pauseScreen = document.getElementById("pauseScreen");

window.gameActive = false;
window.score = 0;
window.topBoundary = 325;
window.fishes = [];
window.requestID = null; // Variable to store the ID of the requestAnimationFrame
window.topScore = 3;

let net = {
  x: canvas.width / 2 - 25,
  y: topBoundary,
  width: 50,
  height: 50,
};

// Draws the score progress bar on the canvas
function drawScoreProgressBar() {
  const progressBarWidth = 200;
  const progressBarHeight = 20;
  const progress = (score / topScore) * progressBarWidth;

  ctx.fillStyle = "gray";
  ctx.fillRect(
    canvas.width / 2 - progressBarWidth / 2,
    30,
    progressBarWidth,
    progressBarHeight
  );
  ctx.fillStyle = "blue";
  ctx.fillRect(
    canvas.width / 2 - progressBarWidth / 2,
    30,
    progress,
    progressBarHeight
  );
  ctx.strokeStyle = "black";
  ctx.strokeRect(
    canvas.width / 2 - progressBarWidth / 2,
    30,
    progressBarWidth,
    progressBarHeight
  );
}

// Handles fish catching logic
function catchFish() {
  if (!gameActive) return;
  fishes.forEach((fish) => {
    if (
      fish.x < net.x + net.width &&
      fish.x + fish.width > net.x &&
      fish.y < net.y + net.height &&
      fish.y + fish.height > net.y
    ) {
      fish.x = -fish.width;
      fish.y =
        Math.random() * (canvas.height - topBoundary - fish.height) +
        topBoundary;
      score += 1;
    }
  });
}

// Pauses the game
function pauseGame() {
  gameActive = false;
  cancelAnimationFrame(requestID);
  pauseScreen.style.visibility = "visible";
}

// Updates the positions of the fish
function updateFishesPosition() {
  if (!gameActive) return;
  fishes.forEach((fish) => {
    fish.x += fish.speed;
    if (fish.x > canvas.width) {
      fish.x = -fish.width;
      fish.y =
        Math.random() * (canvas.height - topBoundary - fish.height) +
        topBoundary;
    }
  });
}

// Main game loop
function gameLoop() {
  if (!gameActive) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  updateFishesPosition();
  catchFish();

  drawBackground({ ctx, canvas });
  drawNet({ ctx, net });
  fishes.forEach((fish) => drawFish({ ctx, canvas, fish }));
  drawScoreProgressBar();

  console.log(score);

  if (score >= topScore) {
    pauseGame();
  } else {
    if (gameActive) {
      cancelAnimationFrame(requestID);
      requestID = requestAnimationFrame(gameLoop);
    }
  }
}

// Event listeners for game control
document.addEventListener("keydown", function (event) {
  if (!gameActive) return;
  if (event.key === "ArrowUp" && net.y > topBoundary) {
    net.y -= 10;
  } else if (event.key === "ArrowDown" && net.y < canvas.height - net.height) {
    net.y += 10;
  }
});

startButton.addEventListener("click", function () {
  if (!gameActive) {
    gameActive = true;
    startButton.style.display = "none";
    canvas.style.display = "block";
    score = 0; // Reset score when starting a new game session
    fishes = [];
    for (let i = 0; i < 10; i++) {
      fishes.push({
        x: 0,
        y: Math.random() * (canvas.height - topBoundary - 30) + topBoundary,
        width: 30,
        height: 30,
        speed: 2 + Math.random() * 2,
      });
    }
    gameLoop();
  }
});

continueButton.onclick = function () {
  pauseScreen.style.visibility = "hidden";
  gameActive = true;
  score = 0;
  requestAnimationFrame(gameLoop); // Ensure we restart the animation frame
};
