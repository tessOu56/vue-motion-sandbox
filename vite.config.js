import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath, URL } from "node:url"

// GitHub Pages serves under /vue-motion-sandbox/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/vue-motion-sandbox/" : "/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 8080,
    // Loopback only. Vite 6.4.4 patches CVE-2026-53571 (Windows
    // server.fs.deny bypass via ADS / 8.3 names) and later 6.4.x
    // path-serving advisories; those still require --host to matter.
    host: "127.0.0.1",
    strictPort: true,
    fs: { strict: true },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
}))
