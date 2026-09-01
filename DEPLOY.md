# Deployment

Two targets, deliberately asymmetric.

| | Demo / review | Production |
|---|---|---|
| Host | GitHub Pages | Cloudflare Pages |
| URL | `capuamedia.github.io/cpf-masonry/` | `cpf-masonry.com` |
| Trigger | push to `main` (Actions) | push to `main` (Cloudflare) |
| Base path | `/cpf-masonry` | `/` |
| Indexable | **No** — `Disallow: /` + `noindex` | Yes |
| Sitemap | not generated | `/sitemap-index.xml` |

## Why the demo is noindexed

cpf-masonry.com is a brand-new domain. The old cpfmasonry.com was suspended and
its search equity is not recoverable, so the new domain starts from zero
(build brief section 8). A `github.io` copy of the same content ranking for
"CPF masonry" would compete with the real site for its own brand name.

Three independent guards, so no single mistake exposes the demo:

1. `src/pages/robots.txt.ts` emits `Disallow: /` when `DEPLOY_TARGET=github-pages`.
2. The layout emits `<meta name="robots" content="noindex,nofollow">` on the same flag.
3. Canonical tags point at `https://cpf-masonry.com` from **every** build.

## GitHub Pages — one-time setup

Settings → Pages → Source → **GitHub Actions**. Nothing else; the workflow at
`.github/workflows/deploy-pages.yml` handles the rest.

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
