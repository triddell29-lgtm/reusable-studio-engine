// Small math helpers shared across the engine. No libraries — just the
// basics every sketch ends up needing.

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Maps a value from one range to another (defaults to a 0..1 output).
export function mapRange(value, inMin, inMax, outMin = 0, outMax = 1) {
  const t = (value - inMin) / (inMax - inMin);
  return lerp(outMin, outMax, clamp(t, 0, 1));
}

// Deterministic pseudo-random jitter, seeded by index + time, so points
// wobble consistently instead of flickering randomly every frame.
export function jitter(seed, time, amount) {
  const n = Math.sin(seed * 12.9898 + time * 0.001) * 43758.5453;
  const frac = n - Math.floor(n);
  return (frac - 0.5) * 2 * amount;
}
