# profile-website — Agent Guide

## Stack
Vanilla HTML5 / CSS3 / JavaScript (ES6) — **no build step, no package manager, no test framework.**

## Dependencies (all CDN, loaded in `index.html`)
- AOS 2.3.4 (scroll animations)
- Font Awesome 6.5.0 (icons)
- Google Fonts: Inter

## Dev workflow
- **Serve locally**: any static HTTP server (`npx serve .`, Live Server, Python `http.server`, etc.)
- **No build/lint/typecheck/test commands** exist.
- Just edit files and reload the browser.

## Project structure
```
index.html     — main page (Indonesian language throughout)
style.css      — all styles (light theme, Apple-inspired, CSS custom properties)
script.js      — AOS init, typing effect, scroll nav, hamburger, stats counter, toast
profiledio.jpeg — hero profile photo
```

## Conventions
- UI text is in **Bahasa Indonesia** (keep consistent).
- Contact form in `script.js:185` simply shows a toast — no backend submission.
- Scroll-triggered animations use `data-aos` attributes; skill bars and stat counters use `IntersectionObserver` in JS.
- CSS uses `:root` custom properties for theming (`--primary: #6366f1`, `--bg: #ffffff`, `--text: #1d1d1f`, etc.).
- Mobile nav uses a hamburger menu (slide-in from right).

## Design Style
- **Modern Minimalist** (inspiration: Apple × Linear × Vercel)
- **Light theme** — white background, dark slate text
- **Color palette:**
  - Primary `#6366f1` (indigo) — accents, buttons, links
  - Background `#ffffff`, text `#1d1d1f`, muted `#6e6e73`
- **Typography:** Inter (heading SemiBold 600, body Regular 400)
- **Animations:** AOS scroll reveals (fade-up, fade-right/left), CSS transitions on hover, no particles

## Git
- Remote: `https://github.com/handispramudyo-hub/profile-website.git`
- Branch: `main`
