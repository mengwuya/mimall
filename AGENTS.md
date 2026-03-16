# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

MiMall (小米商城 clone) — a Vue 2 SPA e-commerce storefront. Single `package.json`, no monorepo, no backend in this repo. The app depends on an external REST API (`*.springboot.cn` / `*.imooc.com`). See `README.md` for standard commands.

### Critical: Node.js version

This project uses `node-sass@4.13.1` which requires **Node 12** (v12.x). The pre-built binary for `node-sass` is only available for Node 12's ABI (72). Node 14+ will fail to download the binary and fall back to native compilation which requires Python 2. Use `nvm use 12` before running any npm commands.

### Running the dev server

```
source ~/.nvm/nvm.sh && nvm use 12
npm run serve
```

Dev server runs at `http://localhost:8080/`. API calls are proxied via `vue.config.js` to `https://www.imooc.com`.

### Available npm scripts

- `npm run serve` — dev server with hot-reload (development mode)
- `npm run lint` — ESLint check
- `npm run test` — production build in test mode
- `npm run build` — production build in product mode

### Notes

- Vue components are currently in placeholder/skeleton state (display text labels only). This is the expected state of the codebase.
- The app relies on external APIs at `*.springboot.cn` / `*.imooc.com` which may be unreachable. This does not indicate a local setup problem.
- No automated test suite (unit/integration tests) exists in this project; `npm run test` is actually a build command (`vue-cli-service build --mode=test`).
