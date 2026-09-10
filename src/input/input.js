// Captures the sketch's one signal: horizontal mouse position (normalized
// 0..1 across the canvas), plus whether the mouse button is held down.
// Everything else in the engine reads from the `state` object returned
// here — it never touches the DOM directly.

import { mapRange, clamp } from '../utils/math.js';

export function setupInput(canvas) {
  const state = {
    x: 0.5,       // normalized 0..1 mouse X — the signal
    isDown: false // mouse held — triggers a pulse
  };

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = mapRange(e.clientX - rect.left, 0, rect.width);
    state.x = clamp(x, 0, 1);
  });

  canvas.addEventListener('mousedown', () => { state.isDown = true; });
  window.addEventListener('mouseup', () => { state.isDown = false; });

  canvas.addEventListener('touchmove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    if (!touch) return;
    const x = mapRange(touch.clientX - rect.left, 0, rect.width);
    state.x = clamp(x, 0, 1);
  }, { passive: true });

  return state;
}
