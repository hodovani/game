export function createPlastic({ canvas, topBoundary }) {
  return {
    x: canvas.width,
    y: Math.random() * (canvas.height - topBoundary - 20) + topBoundary,
    width: 40,
    height: 20,
    speed: -1 - Math.random(), // Crabs move leftwards
  };
}

export function updatePlasticsPosition({ plastics, canvas, topBoundary }) {
  return plastics.map((plastic) => {
    plastic.x += plastic.speed;
    if (plastic.x < -plastic.width) {
      plastic.x = canvas.width;
      plastic.y =
        Math.random() * (canvas.height - topBoundary - plastic.height) +
        topBoundary;
    }
    return plastic;
  });
}

export function catchPlastic({ plastics, score, net, canvas }) {
  return [
    plastics.map((plastic) => {
      if (
        plastic.x < net.x + net.width &&
        plastic.x + plastic.width > net.x &&
        plastic.y < net.y + net.height &&
        plastic.y + plastic.height > net.y
      ) {
        plastic.x = canvas.width;
        plastic.y =
          Math.random() * (canvas.height - topBoundary - plastic.height) +
          topBoundary;
        score += 2; // Plastics could be worth more points due to environmental awareness
      }
      return plastic;
    }),
    score,
  ];
}

export function drawPlastic({ ctx, plastic }) {
  ctx.fillStyle = "grey"; // Typically, plastic might be depicted in grey
  ctx.fillRect(plastic.x, plastic.y, plastic.width, plastic.height);
}
