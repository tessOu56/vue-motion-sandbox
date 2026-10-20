#!/usr/bin/env node
/**
 * GitHub Pages SPA fallbacks for project-site base /vue-motion-sandbox/
 */
import { copyFileSync, mkdirSync } from "node:fs"
import { join } from "node:path"

import { SPA_FALLBACK_DIRS } from "../src/data/demos.js"

const dist = "dist"
const index = join(dist, "index.html")

copyFileSync(index, join(dist, "404.html"))

for (const dir of SPA_FALLBACK_DIRS) {
  mkdirSync(join(dist, dir), { recursive: true })
  copyFileSync(index, join(dist, dir, "index.html"))
}

console.log(
  `postbuild-pages: wrote 404.html + ${SPA_FALLBACK_DIRS.join("/")} index.html`
)
