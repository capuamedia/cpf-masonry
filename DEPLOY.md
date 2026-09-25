# Deployment

Two targets, deliberately asymmetric.

| | Demo / review | Production |
|---|---|---|
| Host | GitHub Pages | Cloudflare Pages |
| URL | `capuamedia.github.io/cpf-masonry/` | `cpfmasonry.com` |
| Trigger | **push to `main`**, or `npm run deploy:demo` | not cut over yet |
| Base path | `/cpf-masonry` | `/` |
| Indexable | **No** — `Disallow: /` + `noindex` | Yes |
| Sitemap | not generated | `/sitemap-index.xml` |

> **The demo deploys on every push to `main`.** This changed on 2026-09-20,
> when the Actions workflow was activated and Pages Source was switched to
> "GitHub Actions". Before that date nothing deployed on push and the only
> route was `npm run deploy:demo`; that is no longer true, and any instruction
> saying otherwise is stale.
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

`.github/workflows/deploy-pages.yml` builds with `DEPLOY_TARGET=github-pages`
and publishes through `actions/deploy-pages`. It runs on every push to `main`,
and on `workflow_dispatch`. A run takes roughly ten minutes, nearly all of it
generating image variants.

`npm run deploy:demo` (`tools/deploy-demo.mjs`) dispatches that workflow. It no
longer builds or pushes anything itself.

### The gh-pages branch is dead — do not deploy to it

Until 2026-09-20 Pages served the `gh-pages` branch and `deploy:demo`
force-pushed `dist/` there. Switching Source to "GitHub Actions" stopped Pages
reading that branch, but the old script was left in place and carried on
pushing to it: building, committing, force-pushing, printing the URL and
exiting 0, while deploying nothing at all.

That cost a full debugging cycle before anyone thought to doubt the tool. The
only visible signal was `build_type: "workflow"` in
`gh api repos/capuamedia/cpf-masonry/pages`. If a deploy ever seems to
succeed while the site does not change, check that first.

### Only `main` and `gh-pages` may deploy

The `github-pages` environment carries a deployment branch policy naming those
two. Dispatching the workflow against a feature branch **builds successfully
and then fails at the deploy step** — the build job goes green, which makes it
look like it worked. To publish a branch, either merge it to `main` or add it:

```
gh api repos/capuamedia/cpf-masonry/environments/github-pages/deployment-branch-policies   -f name='<branch>'
```

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
