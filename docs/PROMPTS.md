# Prompts — How I Talk to Copilot

## Context block (paste this first, every time)
I'm working in `reusable-studio-engine`. The entry point is `main.js`, which wires together:
- `src/canvas/setupCanvas.js` — HiDPI canvas setup
- `src/canvas/loop.js` — animation loop + drawing
- `src/input/input.js` — signal capture
- `src/utils/math.js` — shared math helpers

No external libraries — pure Canvas 2D only. I already know what I want the sketch to do; I'm asking for implementation help inside that plan, not for ideas.

## Reusable prompt templates

**1. Canvas draw loop**
"Inside `loop.js`, I have a `draw(ctx, canvas, time, ...)` function that runs every frame via requestAnimationFrame. Given [describe the specific visual, e.g. 'a ring of N points around a center'], write the drawing math for one frame. Don't add libraries or restructure other files."

**2. Input mapping**
"Inside `input.js`, I'm capturing [signal, e.g. mouse X] and need it normalized to [range, e.g. 0–1] and exposed as `state.<name>`. Show me just the event listener and the normalization math."

**3. Debugging**
"Here's the function: [paste]. Here's the exact bug: [describe the symptom]. Explain what's wrong before you show me a fix — I want to understand the cause, not just get corrected code."

## Rule
Every AI response gets a one-line explanation from me, in my own words, of what changed and why — written as a code comment or a `process/changelog.md` entry. If I can't explain it, I don't ship it.
