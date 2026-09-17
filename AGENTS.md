# AGENTS.md — vue-motion-sandbox

## Purpose

Canonical Vue 3 sandbox: motion effects, `/vue-basics` lab, `/recipes` mock gallery.

**Tickets are not tracked in this repo.** Platform-command owns T-2026-225 and related tickets.

## Before coding

1. Work **here**, not in nx-playground `apps/vue-motion`.
2. Do not add a Vue event site or a second event-portal.
3. Never commit `docs/platform-inbox/` (gitignored local-only path).

## Quick start

```bash
pnpm install
pnpm run serve   # Vite dev server
pnpm test        # Vitest smoke
pnpm run build   # Pages base /vue-motion-sandbox/
```

## Integration

- Live: https://tessou56.github.io/vue-motion-sandbox/
- Completeness routes: `/particles` (effects) · `/vue-basics` (lab)

## 開發環境

- Node 22（`.nvmrc`）· pnpm 10.13.1（`packageManager`）
