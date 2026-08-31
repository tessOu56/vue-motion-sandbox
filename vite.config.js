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
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
}))
