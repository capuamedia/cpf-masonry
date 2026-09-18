# Deployment

Two targets, deliberately asymmetric.

| | Demo / review | Production |
|---|---|---|
| Host | GitHub Pages | Cloudflare Pages |
| URL | `capuamedia.github.io/cpf-masonry/` | `cpfmasonry.com` |
| Trigger | **`npm run deploy:demo`, by hand** | not cut over yet |
| Base path | `/cpf-masonry` | `/` |
| Indexable | **No** — `Disallow: /` + `noindex` | Yes |
| Sitemap | not generated | `/sitemap-index.xml` |

> **Nothing here deploys on push.** Pushing to `main` updates the source and
> changes no published page. The demo goes out only when someone runs
> `npm run deploy:demo`, which force-pushes `dist/` to the `gh-pages` branch.
> The Actions workflow that *would* make it automatic is parked, inactive, at
> `deploy/github-pages.yml` — see below.
>
> As of 2026-09-17 `cpfmasonry.com` is still served by the old WordPress
> install. The Astro build is published only to the noindexed demo URL;
> cutting the domain over to Cloudflare Pages has not been done.

## Why the demo is noindexed

cpfmasonry.com was recovered on 2026-09-07 and the rebuild replaces the old
site in place, so it inherits twenty years of indexing rather than starting
from zero. A `github.io` copy of the same content ranking for "CPF masonry"
would compete with the real site for its own brand name.

Three independent guards, so no single mistake exposes the demo:

1. `src/pages/robots.txt.ts` emits `Disallow: /` when `DEPLOY_TARGET=github-pages`.
2. The layout emits `<meta name="robots" content="noindex,nofollow">` on the same flag.
3. Canonical tags point at `https://cpfmasonry.com` from **every** build.

## GitHub Pages — how it publishes today

Pages serves the `gh-pages` branch, and `npm run deploy:demo` (see
`tools/deploy-demo.mjs`) builds with the demo flags and force-pushes `dist/`
there. No OAuth `workflow` scope needed, which is the whole reason it exists.
Pages takes 60–90s to rebuild after the push.

**To make it automatic instead**, which is the better setup:

1. `gh auth refresh -h github.com -s workflow` (needs a human at a terminal)
2. move `deploy/github-pages.yml` to `.github/workflows/`
3. Settings → Pages → Source → **GitHub Actions**

The base path is derived from `GITHUB_REPOSITORY` at build time, not hardcoded.
If the repo is ever renamed, the demo URL follows automatically.

If a custom domain is later pointed at Pages, set `PAGES_CUSTOM_DOMAIN=true` in
the workflow env so the site serves from root instead of `/cpf-masonry`.

## Cloudflare Pages — one-time setup

Connect the repo, then:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `24` (also pinned in `.nvmrc`) |
| Environment variables | none — `DEPLOY_TARGET` must stay **unset** |

Leaving `DEPLOY_TARGET` unset is what makes it the production build: root base
path, sitemap generated, fully crawlable.

Headers are in `public/_headers` (immutable caching for `/_astro/*`, plus
`nosniff` and a referrer policy sitewide).

### sharp on Linux

`package-lock.json` was generated on Windows but carries every platform's
optional binaries — `@img/sharp-linux-x64` and `@img/sharp-libvips-linux-x64`
are both present and verified. `npm ci` resolves them on Ubuntu and on
Cloudflare's container. Use `npm ci`, never `npm install`, in CI.

## Local

```bash
npm install
npm run dev      # base '/', production-shaped
npm run build
```

To reproduce the demo build locally:

```bash
DEPLOY_TARGET=github-pages GITHUB_REPOSITORY=capuamedia/cpf-masonry npm run build
```

## Internal links

Because the demo serves from a subpath, **every** internal href, src and form
action must go through `withBase()` from `src/lib/urls.ts`. A bare `/services/`
404s on the demo. Canonical tags must use `canonicalURL()` from the same module,
which strips the base and pins the production origin.
