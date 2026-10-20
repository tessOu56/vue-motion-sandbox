# Vue Motion Sandbox

[![CI & Pages](https://github.com/tessOu56/vue-motion-sandbox/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/tessOu56/vue-motion-sandbox/actions/workflows/deploy-pages.yml)

Vue 3 motion lab — GSAP, Three.js, Lottie, VueUse Motion — published on GitHub Pages. This is a **labelled sandbox**, not a product.

**Live demo:** <https://tessou56.github.io/vue-motion-sandbox/>  
**Source:** <https://github.com/tessOu56/vue-motion-sandbox>

<p>
  <img src="docs/screenshots/home-desktop.png" alt="Desktop home page: labelled-sandbox intro, three what’s-here notes, and the demo gallery" width="800">
</p>
<p>
  <img src="docs/screenshots/home-mobile.png" alt="Home page at a 390px-wide viewport, with the header menu control visible" width="360">
</p>

## What this is

| Surface | Honest bound |
|---------|----------------|
| **Hosted Vue motion** | Pages demo is real. Effects run in the browser (GSAP / Three.js / Lottie / VueUse Motion). |
| **Vue 3 lab** | `/vue-basics` is a labelled Composition API / Pinia lab. |
| **Recipes gallery** | `/recipes` is **mock JSON**, not a shop or CMS. |
| **Not claimed** | Not a production app. Not the event-stack C-end (that is [nx-playground](https://github.com/tessOu56/nx-playground) event-portal). |

> **Canonical Vue slice.** This repo is the Vue 3 lab (motion + `/vue-basics`). It is **not** a second event-portal. nx `apps/vue-motion` is leftover until mirror inversion — do not double-write.

**GitHub About:** `Vue 3 motion lab (GSAP / Three / Lottie) on GitHub Pages. Labelled sandbox — mock recipes, not a product.`  
**Topics:** `vue` · `gsap` · `threejs` · `lottie` · `vite` · `animation`

## What's on the live site

- **Particles** — Canvas 2D particle system with mouse interaction and sliders
- **GSAP** — tween, timeline, text, and motion-path demos
- **Three.js** — cube / sphere / torus with rotation and scale
- **Lottie** — lottie-web playback of JSON clips (loading, success, error, custom)
- **VueUse Motion** — declarative enter / hover / sequence demos
- **Interactive** — mouse follow, ripples, hover, keyboard, touch
- **Vue 3 lab** — Composition API, component communication, composables, Pinia
- **Recipes** — static mock JSON gallery

Unknown routes render an in-app 404 with links back to the gallery and to GitHub.

## Technologies

- Vue 3, Vue Router 4, Pinia, Vite, Vitest, Tailwind CSS
- GSAP, Three.js, lottie-web, VueUse Motion, Tween.js

## Installation

```bash
git clone git@github.com:tessOu56/vue-motion-sandbox.git
cd vue-motion-sandbox
pnpm install
```

## Development

```bash
pnpm run dev      # Vite dev server
pnpm run build    # production build (GitHub Pages base /vue-motion-sandbox/)
pnpm test         # unit smoke tests
pnpm run lint
```

Public Pages routes:

- Home / gallery: `/` → https://tessou56.github.io/vue-motion-sandbox/
- Effects: `/particles` → https://tessou56.github.io/vue-motion-sandbox/particles
- Vue basics lab: `/vue-basics` → https://tessou56.github.io/vue-motion-sandbox/vue-basics
- Recipe gallery (mock JSON): `/recipes` → https://tessou56.github.io/vue-motion-sandbox/recipes

Each demo page has an **All demos** link and a **Source** link to the matching file on `master`.

## Customization

- Colors and type live in `src/assets/tailwind.css` (`:root` tokens)
- Tailwind content paths: `tailwind.config.cjs`
- New effect views: `src/views/effects/` (register them in `src/data/demos.js` and `src/router/index.js`)

## License

MIT — see [LICENSE](LICENSE).

## Acknowledgments

- [Vue.js](https://vuejs.org/)
- [GSAP](https://greensock.com/gsap/)
- [Three.js](https://threejs.org/)
- [Lottie](https://airbnb.io/lottie/)
- [VueUse](https://vueuse.org/)
- [Tailwind CSS](https://tailwindcss.com/)
