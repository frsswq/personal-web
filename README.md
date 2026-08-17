# Personal Web

A Bun-managed React and TypeScript site built with Vite, React Router, and StyleX.

## Commands

```bash
bun install
bun run dev
bun run test
bun run test:run
bun run build
bun run preview
bun run check
bun run fix
```

## Cloudflare Pages

Create a Pages project named `personal-web`, then configure it with these values:

- Build command: `bun run build`
- Build output directory: `dist`
- Root directory: this project directory

For a direct deployment after authentication, run:

```bash
bun run deploy
```

The `public/_redirects` fallback supports client-side React Router routes on Cloudflare Pages.
