import fishImageSrc from "./images/fish-1.png";

const image = new Image();

image.src = fishImageSrc;

export function drawFish({ ctx, fish }) {
  ctx.drawImage(image, fish.x, fish.y, fish.width, fish.height);
}
