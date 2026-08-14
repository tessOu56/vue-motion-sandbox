# AGENTS.md — vue-motion-sandbox

## Purpose

Vue 3 motion **mirror** sandbox. Experiments live in **nx-playground** `apps/vue-motion`.

**Tickets are not tracked in this repo.**

## Before coding

1. Prefer working in **nx-playground** `apps/vue-motion` instead of this repo.
2. This repo is for standalone `pnpm serve` preview and sync from nx hub only.
3. Read [`docs/PROJECT-PLAN.md`](docs/PROJECT-PLAN.md) for mirror rules.

## Quick start

```bash
pnpm install
pnpm run serve   # dev server
```

## Forbidden

- New features or effects in this repo (use nx-playground)
- Independent deploy
- Committing `docs/platform-inbox/` (gitignored local-only path)

## Integration

- Sync source: `nx-playground/apps/vue-motion`
- React promote path: nx `apps/profile` → ai-search-portal `labs/motion/`

## 開發環境（2026-07 統一）

- Node 22（`.nvmrc`）· pnpm 10.13.1（`packageManager`，與 nx-playground 對齊）
