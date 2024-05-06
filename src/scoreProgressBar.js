// Draws the score progress bar on the canvas
export function drawScoreProgressBar({ ctx, score, topScore, canvas }) {
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
