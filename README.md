# Aljaloui — Drive the Fleet

A static React + Vite marketing/configurator site for a fictional car
subscription service. Pure frontend — no backend API routes.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:3000

## Build

```bash
npm run build
```

Outputs the static site to `dist/public`.

## Deploy for free

This is a 100% static site (Express is only used to serve the built
files, it has no API routes), so you can deploy `dist/public` to any
static host:

- **Cloudflare Pages** — build command `npm run build` (or `vite build`),
  output directory `dist/public`
- **Netlify** / **Vercel** — same build command and output directory
- **Wrangler CLI** (no Git needed):
  ```bash
  npm install -g wrangler
  npx vite build
  wrangler pages deploy dist/public --project-name=aljaloui
  ```

## Notes

- `client/src/components/Map.tsx` and the `getLoginUrl()` helper in
  `client/src/const.ts` are unused scaffolding left over from the
  original template — not imported anywhere in the live app. Safe to
  delete or ignore.
- `patches/wouter@3.7.1.patch` is applied automatically by pnpm via
  the `pnpm.patchedDependencies` field in `package.json`. If you use
  npm or yarn instead of pnpm, that patch won't be applied
  automatically — check `wouter`'s behavior if you switch package
  managers.
