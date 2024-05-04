import netImageSrc from './images/net.png';
const netImage = new Image();
netImage.src = netImageSrc;
export function drawNet({ctx, net}) {
    ctx.drawImage(netImage, net.x, net.y, net.width, net.height); // Draw the net image
  }