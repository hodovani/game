import fishImageSrc from "./images/fish-1.png";

const image = new Image();

image.src = fishImageSrc;

export function drawFish({ ctx, fish }) {
  ctx.drawImage(image, fish.x, fish.y, fish.width, fish.height);
}

export function catchFish({ fishes, score, net, canvas }) {
  return [
    fishes.map((fish) => {
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
      return fish;
    }),
    score,
  ];
}

export function updateFishesPosition({ fishes, canvas, topBoundary }) {
  return fishes.map((fish) => {
    fish.x += fish.speed;
    if (fish.x > canvas.width) {
      fish.x = -fish.width;
      fish.y =
        Math.random() * (canvas.height - topBoundary - fish.height) +
        topBoundary;
    }
    return fish;
  });
}
