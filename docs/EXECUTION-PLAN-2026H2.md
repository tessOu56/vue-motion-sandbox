# vue-motion-sandbox — 執行計畫 2026 H2（動效展品 · 鏡像）

> 策略 SSOT：[platform-command/planning/EXECUTION-PLAN-2026H2.md](https://github.com/tessOu56/platform-command/blob/main/planning/EXECUTION-PLAN-2026H2.md)
> 開發源頭：**nx-playground `apps/vue-motion`**（本 repo 為 mirror，不開新功能）
> 技術雷達：platform-command `planning/EXECUTION-PLAN-2026H2-tech-radar.md`

本 repo 角色不變（mirror + `pnpm serve` 預覽）。本計畫只定義「動效如何成為產品線的一個展品」與「促進到 portal 的路徑」，**新功能一律在 nx-playground 開發**。

## 1. 在產品線中的角色

**動效展品**。提供 portal `labs/motion/` 的視覺素材來源，並作為「可互動動效 gallery」對外展示前端表現力。

## 2. 互動作品里程碑（實作在 nx，本 repo 只 sync 預覽）

| 里程碑 | 內容（在 nx-playground 實作） |
|--------|------------------------------|
| M1 motion gallery 頁 | 一頁集合 GSAP 時間軸、Three.js 3D、dotLottie、motion-v 進場/手勢，可即時調參。 |
| M2 視覺套用共用 token | gallery 用 **DTCG → Style Dictionary → Tailwind v4 `@theme`** 共用 token，與 portal 視覺統一。 |
| M3 promote 一個效果進 portal | 選一個穩定效果，promote path：nx `apps/vue-motion` → portal `labs/motion/`（promote 前勿破壞 v1 契約）。 |

## 3. 技術選型（趨勢對齊）

- **Vue 3.5**（穩定）；Vapor Mode 僅 nx 內隔離實驗。
- 動效：**GSAP（2025-04 起全套含商用免費）** 做主時間軸 + **Three.js r18x（WebGPU/TSL）** 做 3D + **dotLottie（`@lottiefiles/dotlottie-vue`）** 取代舊 lottie-web + **motion-v** 做進場/手勢。
- 構建：**Vite 8（內建 Rolldown）**。
- 設計：與 portal 共用 token，確保 React 線/Vue 線一致。

## 4. 串接點

- **上游**：nx-playground `apps/vue-motion`（唯一開發源）。
- **下游**：portal `labs/motion/`（promote 目標）。
- **設計**：共用 DTCG token。
- **登錄**：作為 capability 在 registry 標記為動效展品。

## 5. 不做（維持 mirror 規則）

- 不在本 repo 開新功能或效果（用 nx-playground）。
- 不獨立部署。
- 本 repo 僅 `pnpm serve` 預覽 + 從 nx hub sync。
