# profile-website — Agent Guide

## Stack
Vanilla HTML5 / CSS3 / JavaScript (ES6) — **no build step, no package manager, no test framework.**

## Dependencies (all CDN, loaded in `index.html`)
- AOS 2.3.4 (scroll animations)
- Particles.js (background particle canvas)
- Font Awesome 6.5.0 (icons)
- Google Fonts: Inter

## Dev workflow
- **Serve locally**: any static HTTP server (`npx serve .`, Live Server, Python `http.server`, etc.)
- **No build/lint/typecheck/test commands** exist.
- Just edit files and reload the browser.

## Project structure
```
index.html     — main page (Indonesian language throughout)
style.css      — all styles (light theme, CSS custom properties)
script.js      — AOS init, typing effect, particles, scroll nav, hamburger, stats counter, toast
profiledio.jpeg — hero profile photo
```

## Conventions
- UI text is in **Bahasa Indonesia** (keep consistent).
- Contact form in `script.js:185` simply shows a toast — no backend submission.
- Scroll-triggered animations use `data-aos` attributes; skill bars and stat counters use `IntersectionObserver` in JS.
- CSS uses `:root` custom properties for theming (`--primary: #6366f1`, `--secondary: #06b6d4`, `--bg-dark: #ffffff`, `--text: #0f172a`, etc.).
- Particles color matches `--primary` (`#6366f1`) in `script.js:54` / `script.js:61`.
- Mobile nav uses a hamburger menu (slide-in from right).

## Design Style
- **Modern Minimalist** (inspiration: Apple × Linear × Vercel)
- **Light theme** — white background, dark slate text
- **Color palette:**
  - Primary `#6366f1` (indigo) — accents, buttons, links
  - Accent `#06b6d4` (cyan) — gradient partner, secondary highlights
  - Background `#ffffff`, text `#0f172a`, muted `#64748b`
- **Typography:** Inter (heading ExtraBold 800, body Regular 400)
- **Animations:** AOS scroll reveals (fade-up, fade-right/left, zoom-in), CSS transitions on hover

## Git
- Remote: `https://github.com/handispramudyo-hub/profile-website.git`
- Branch: `main`
