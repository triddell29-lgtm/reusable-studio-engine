// Entry point. This file's only job is to wire the pieces together —
// it contains no drawing logic or math of its own.
import { setupCanvas } from './src/canvas/setupCanvas.js';
import { setupInput } from './src/input/input.js';
import { startLoop } from './src/canvas/loop.js';

const canvas = document.getElementById('stage');
const ctx = setupCanvas(canvas);
const input = setupInput(canvas);
startLoop(ctx, canvas, input);
