// The animation loop and the sketch's one behavior: a ring of points.
// This version proves the canvas + loop work on their own before any
// real input is wired in — coherence is driven by a slow time-based
// oscillation as a placeholder.

import { lerp, jitter } from '../utils/math.js';

const POINT_COUNT = 48;
const BASE_RADIUS = 140;

export function startLoop(ctx, canvas) {
  function frame(time) {
    const coherence = (Math.sin(time * 0.0005) + 1) / 2; // placeholder signal
    draw(ctx, canvas, time, coherence);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function draw(ctx, canvas, time, coherence) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const cx = width / 2;
  const cy = height / 2;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#0b0b0f';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < POINT_COUNT; i++) {
    const angle = (i / POINT_COUNT) * Math.PI * 2;

    const noiseAmount = lerp(60, 0, coherence);
    const jitterX = jitter(i, time, noiseAmount);
    const jitterY = jitter(i + 1000, time, noiseAmount);

    const x = cx + Math.cos(angle) * BASE_RADIUS + jitterX;
    const y = cy + Math.sin(angle) * BASE_RADIUS + jitterY;

    const size = lerp(1.5, 3, coherence);
    const alpha = lerp(0.25, 0.9, coherence);

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    ctx.fill();
  }
}
