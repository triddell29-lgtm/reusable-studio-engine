// The animation loop and the sketch's one behavior: a ring of points that
// resolves from noise (scattered, jittery) into signal (clean, evenly
// spaced, pulsing) as the input signal — mouse X — moves left to right.

import { lerp, jitter } from '../utils/math.js';

const POINT_COUNT = 48;
const BASE_RADIUS = 140;

export function startLoop(ctx, canvas, input) {
  let lastTime = performance.now();
  let pulse = 0; // decays over time, spikes on mouse-down

  function frame(time) {
    const dt = time - lastTime;
    lastTime = time;

    const coherence = input.x;

    if (input.isDown) pulse = 1;
    pulse = Math.max(0, pulse - dt * 0.002);

    draw(ctx, canvas, time, coherence, pulse);
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function draw(ctx, canvas, time, coherence, pulse) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const cx = width / 2;
  const cy = height / 2;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#0b0b0f';
  ctx.fillRect(0, 0, width, height);

  const radius = BASE_RADIUS + pulse * 40;

  for (let i = 0; i < POINT_COUNT; i++) {
    const angle = (i / POINT_COUNT) * Math.PI * 2;

    const noiseAmount = lerp(60, 0, coherence);
    const jitterX = jitter(i, time, noiseAmount);
    const jitterY = jitter(i + 1000, time, noiseAmount);

    const x = cx + Math.cos(angle) * radius + jitterX;
    const y = cy + Math.sin(angle) * radius + jitterY;

    const size = lerp(1.5, 3, coherence);
    const alpha = lerp(0.25, 0.9, coherence);

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    ctx.fill();
  }

  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '12px monospace';
  ctx.fillText(`signal (mouse x): ${coherence.toFixed(2)}`, 16, height - 16);
}
