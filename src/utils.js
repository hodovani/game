export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}
