// Creates a HiDPI-scaled 2D canvas context. Every sketch calls this once
// at startup; nothing else in the engine needs to know about
// devicePixelRatio.

export function setupCanvas(canvas) {
  const ctx = canvas.getContext('2d');

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    // Reset then scale so all drawing code can work in plain CSS pixels.
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  resize();
  window.addEventListener('resize', resize);

  return ctx;
}
