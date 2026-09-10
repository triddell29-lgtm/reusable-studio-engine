# Reusable Studio Engine

A reusable Canvas starter I copy every time a new assignment drops, so I can go from "assignment posted" to "intent written, sketch running, link live" in under 15 minutes.

## What this is for
A signal → parameter → behavior sketch (see `docs/SYSTEM_CHARTER.md`) built on a tiny, dependency-free Canvas engine: a HiDPI-scaled canvas, an animation loop, and one captured input signal — organized so the next project only means editing `src/`, not rebuilding scaffolding.

## How to run it locally
Just open `index.html` in a browser — no build step, no dependencies.
If your browser blocks local module scripts, run a simple local server instead: `python3 -m http.server` from this folder, then visit `http://localhost:8000`.

## How to deploy
Deployed with **GitHub Pages**: repo Settings → Pages → Deploy from branch `main`, folder `/ (root)`. Every push to `main` updates the live link automatically.

**Live link:** https://triddell29-lgtm.github.io/reusable-studio-engine/

## How I use this to start projects
1. Use this repo as a GitHub template (or duplicate it) for the new assignment.
2. Rewrite `docs/SYSTEM_CHARTER.md` first — intent, constraints, tensions, taste vow — before touching code.
3. Adjust `docs/ROADMAP.md` if this project needs a different sequence.
4. Build the new sketch inside `src/`, keeping `main.js` as the thin entry point.
5. Commit at real thresholds — scaffold, canvas runs, input wired, deploy live, polish — not randomly.
6. Log direction changes in `process/changelog.md` as they happen.
