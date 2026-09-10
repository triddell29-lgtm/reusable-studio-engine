// Creates a HiDPI-scaled 2D canvas context.
// TODO: implement HiDPI resize + scale.
export function setupCanvas(canvas) {
  return canvas.getContext('2d');
}
