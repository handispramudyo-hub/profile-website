# profile-website — Agent Guide

Vanilla HTML5 / CSS3 / JavaScript (ES6) — **no build step, no package manager, no test framework.**

## Dependencies (CDN in `index.html`)
- AOS 2.3.4, Font Awesome 6.5.0, Google Fonts: Inter

## Dev workflow
- Serve with any static HTTP server (`npx serve .`, Live Server, Python `http.server`).
- No build/lint/typecheck/test commands — just edit and reload.

## Conventions
- Contact form (`script.js:158`) shows a toast — **no backend**.
- "Download CV" opens `cv.html` in a new tab; page auto-triggers Print dialog (600ms delay) for Save-as-PDF.
- Scroll animations: `data-aos` attributes; skill bars and stat counters use `IntersectionObserver`.
- Mobile nav: hamburger slide-in from right (`< 768px`).
- CSS theming via `:root` vars (`--primary: #6366f1`, `--bg: #ffffff`, `--text: #1d1d1f`).
- Hero photo: `profiledio.jpeg` (not `.jpg`).

## Git
- Remote: `https://github.com/handispramudyo-hub/profile-website.git` — branch: `main`
