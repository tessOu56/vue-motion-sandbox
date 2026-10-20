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
    // Bind loopback only. Vite 5.4.x has no patch for CVE-2026-53571
    // (Windows server.fs.deny bypass); that advisory requires --host / server.host.
    host: "127.0.0.1",
    strictPort: true,
    fs: { strict: true },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
}))
