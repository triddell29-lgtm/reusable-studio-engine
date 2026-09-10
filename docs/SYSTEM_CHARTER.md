# System Charter — discernment.lab

**Intent:** This engine exists to make the difference between signal and noise visible and felt, not just described — every sketch built from it should let you watch order emerge from, or collapse into, chaos in real time.

**Constraints (rules I will not break):**
1. One clear signal drives the whole sketch — no decorative inputs that don't actually change behavior.
2. Every file has exactly one job; if I can't say what a file does in one sentence, it gets split or cut.
3. No sketch ships until it passes the 5-second readability test — a stranger has to "get it" with no explanation.

**Tensions the work should hold:**
- Order vs. chaos — the sketch should be able to fully collapse into noise and fully resolve into signal, not just wobble near the middle.
- Restraint vs. expression — the visual form stays minimal (one shape) while the *behavior* carries all the emotional weight.

**Taste vow:** I refuse to fake complexity with particle libraries, gradients, or glow filters — if it isn't legible in flat shapes and plain math, I haven't earned it yet.

## Template sketch definition
- **Signal:** horizontal mouse position (0 = far left, 1 = far right of the canvas), plus mouse-down as a pulse trigger
- **Parameter:** coherence (0–1) — how ordered vs. jittery the ring's motion is
- **Behavior:** a ring of points orbits the center; at low coherence they scatter and jitter like noise, at high coherence they snap into a clean, evenly-spaced, pulsing ring
- **Readability test:** sweep the mouse left to right — within 5 seconds the ring should visibly resolve from a chaotic scatter into a clean orbiting ring
