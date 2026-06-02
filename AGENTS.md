# profile-website — Agent Guide

## Stack
Vanilla HTML5 / CSS3 / JavaScript (ES6) — **no build step, no package manager, no test framework.**

## Dependencies (all CDN, loaded in `index.html`)
- AOS 2.3.4 (scroll animations)
- Particles.js (background particle canvas)
- Font Awesome 6.5.0 (icons)
- Google Fonts: Poppins

## Dev workflow
- **Serve locally**: any static HTTP server (`npx serve .`, Live Server, Python `http.server`, etc.)
- **No build/lint/typecheck/test commands** exist.
- Just edit files and reload the browser.

## Project structure
```
index.html     — main page (Indonesian language throughout)
style.css      — all styles (dark theme, CSS custom properties)
script.js      — AOS init, typing effect, particles, scroll nav, hamburger, stats counter, toast
profiledio.jpeg — hero profile photo
```

## Conventions
- UI text is in **Bahasa Indonesia** (keep consistent).
- Contact form in `script.js:185` simply shows a toast — no backend submission.
- Scroll-triggered animations use `data-aos` attributes; skill bars and stat counters use `IntersectionObserver` in JS.
- CSS uses `:root` custom properties for theming (`--primary: #38bdf8`, `--bg-dark: #020617`, etc.).
- Mobile nav uses a hamburger menu (slide-in from right).

## Git
- Remote: `https://github.com/handispramudyo-hub/profile-website.git`
- Branch: `main`
