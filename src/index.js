import "./style.css";
import { drawBackground } from "./drawBackground";
import { drawNet } from "./drawNet";
import { drawFish, catchFish, updateFishesPosition } from "./fish";
import {
  createPlastic,
  updatePlasticsPosition,
  catchPlastic,
  drawPlastic,
} from "./plastic";
import { drawScoreProgressBar } from "./scoreProgressBar";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const pauseScreen = document.getElementById("pauseScreen");

window.gameActive = false;
window.score = 0;
window.topBoundary = 325;
window.fishes = [];
window.plastics = [];
window.requestID = null; // Variable to store the ID of the requestAnimationFrame
window.topScore = 3;

let net = {
  x: canvas.width / 2 - 25,
  y: topBoundary,
  width: 50,
  height: 50,
};

// Pauses the game
function pauseGame() {
  gameActive = false;
  cancelAnimationFrame(requestID);
  pauseScreen.style.visibility = "visible";
}

// Main game loop
function gameLoop() {
  if (!gameActive) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fishes = updateFishesPosition({ fishes, canvas, topBoundary });
  plastics = updatePlasticsPosition({ plastics, canvas, topBoundary });
  const [newFishes, newScore1] = catchFish({ fishes, score, net, canvas });
  fishes = newFishes;
  score = newScore1;
  const [newPlastics, newScore] = catchPlastic({
    plastics,
    score,
    net,
    canvas,
  });
  plastics = newPlastics;
  score = newScore;

  drawBackground({ ctx, canvas });
  drawNet({ ctx, net });
  fishes.forEach((fish) => drawFish({ ctx, canvas, fish }));
  plastics.forEach((plastic) => drawPlastic({ ctx, canvas, plastic }));
  drawScoreProgressBar({ ctx, score, topScore, canvas });

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

    for (let i = 0; i < 5; i++) {
      plastics.push(createPlastic({ canvas, topBoundary }));
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
