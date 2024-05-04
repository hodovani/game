import backgroundImageSrc from './images/background.png';

const backgroundImage = new Image();

backgroundImage.src = backgroundImageSrc;

export function drawBackground({ctx, canvas}) {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  }