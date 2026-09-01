# HANDOFF — cpf-masonry.com

**Written for an AI agent picking this project up.** If you started from the
original build prompt, read this first: several of its assumptions no longer
hold. Facts here supersede the build prompt wherever they conflict.

Last updated: 2026-09-01. 14 commits. Site builds clean, audit passes, demo is
deployed.

---

## 1. What this is

A new website for **CPF Custom Concrete and Masonry**, a masonry/concrete
contractor in Thousand Oaks, California. The original site at `cpfmasonry.com`
was lost when the hosting account was suspended — this is a brand-new domain
launch, **not** a migration, and there is no redirect from the old domain.

Every photograph on the site was salvaged from Google's cache, Yelp, the Google
Business Profile and Instagram. **Image resolution is the binding constraint on
the entire design** and is enforced in code — see §4.

---

## 2. Where everything lives

| | |
|---|---|
| Working dir | `C:\Users\mgiod\Projects\cpf-masonry` |
| Repo | `github.com/capuamedia/cpf-masonry` (**public**) |
| Live demo | `https://capuamedia.github.io/cpf-masonry/` (noindexed) |
| Production | `https://cpf-masonry.com` — **not launched yet** |
| Local dev | `npm run dev` → `http://localhost:4321` |

### Commands

```
npm run dev           # dev server
npm run build         # production build
npm run audit         # build + full post-build audit  <- run before every push
npm run deploy:demo   # build demo + push to gh-pages (Pages rebuilds in 60-90s)
npm run logo          # regenerate logo SVGs + favicons from the source JPEG
```

### Stack

Astro 5.18 (static) · Tailwind 4.3 (`@tailwindcss/vite`, tokens in
`src/styles/global.css` via `@theme`) · sharp 0.34 · `@astrojs/sitemap`.
No React. The before/after slider and the lightbox are vanilla.

---

## 3. What changed since the original build prompt

**Read this section carefully — these are the things most likely to trip you up.**

| Build prompt said | Reality now |
|---|---|
| Phone `(805) 498-4852` | **`(805) 402-4211`** — owner-confirmed 2026-09-01. Old numbers now fail the build. |
| Address `2996 Molly Ct, Newbury Park 91320` | **`1210 Calle Tulipan, Thousand Oaks, CA 91360`** — owner-confirmed. Molly Ct is superseded. |
| "Deploy to Netlify or Cloudflare Pages" | GitHub Pages for the demo, Cloudflare Pages for production. `netlify.toml` was deleted. |
| Address conflict is an open question | Resolved. Site is correct; the **Google Business Profile** is the stale one. |
| — | Elfsight reviews added: inline section (home + contact) and a floating badge (**desktop only**). |
| — | Hero carries a "replace with drone footage" placeholder, **demo build only**. |

Business facts are **single-sourced in `src/lib/site.ts`**. Nothing hardcodes
the phone, address, or license. Change it there.

Superseded values are deliberately kept in that file as `phoneFormer` and
`addressFormer`, so nobody "corrects" the site back to a stale listing.

---

## 4. The image policy — the most important thing here

`src/lib/images.ts` **throws at build time**. This is deliberate: a build that
fails loudly is worth far more than a page that quietly looks cheap.

Two limits, routinely confused:

1. **Display cap** — how large a source may be *laid out*. Hard limit **2×** the
   intrinsic width. Measured: 678px holds to ~1356px, disintegrates at 3×.
2. **Generation cap** — how large a file sharp may *emit*. Never above native.
   Upscaling in sharp adds bytes and zero detail.

Plus per-tier ceilings on CSS layout width:

| Tier | Dir | Count | Native | Rendered cap | Lightbox? |
|---|---|---|---|---|---|
| `large` | `src/assets/large/` | 5 | 822–2322px | 2× only | yes |
| `yelp` | `src/assets/yelp-finished/` | 19 | 1000px | 2× only | yes |
| `yelp` (before) | `src/assets/yelp-before/` | 11 | 1000px | 2× only | yes |
| `site` | `src/assets/site-photos/` | 22 | 678px | **500px** | **no** |
| `tiny` | 3 dugout frames | — | 320px | **300px** | **no** |
| `slider` | 2 crops | — | 738×264 | 738px | no |

### Rules you must not break

- **Never upscale past 2×.** The build enforces it.
- **Never sharpen after upscaling** — amplifies JPEG artifacts where detail used to be.
- **No AI upscaling, ever.** Invented stone texture reads as plastic to exactly
  the person evaluating a mason. This is the product.
- **No lightbox on the 678px set**, and don't style it to look clickable.
- **No stock photography.** If a slot can't be filled with a real CPF photo,
  **redesign the slot** — that is what the Viewpoint School page does (§7).

### How to use images

Never call `<Picture>` directly. Everything goes through `src/components/Img.astro`:

```astro
<Img asset={A.stampedDriveway} displayW={500} sizes="..." label="describe the slot" />
```

`label` appears in the build error if the guard trips. Assets and their alt text
live in `src/lib/assets.ts` — one catalog, keyed by meaningful names, with alt
text written from the contact sheets in `_docs/` describing the actual work
(local SEO, not a checkbox).

---

## 5. Deploy architecture

`astro.config.mjs` switches on `DEPLOY_TARGET`:

- **unset** (local + Cloudflare) → `base: '/'`, sitemap on, indexable
- **`github-pages`** → `base: '/cpf-masonry'`, sitemap off, `noindex`,
  `robots.txt` = `Disallow: /`

**Canonicals always point at `https://cpf-masonry.com`, from every target.** The
new domain starts with zero search equity; a `github.io` copy competing for the
brand name would actively hurt it. Three independent guards keep the demo out of
the index: generated `robots.txt`, `noindex` meta, and pinned canonicals.

**Every internal link must go through `withBase()`** from `src/lib/urls.ts`, or
it 404s on the demo subpath while working fine locally. Canonicals must use
`canonicalURL()`, not `new URL(Astro.url.pathname, Astro.site)` — `base` is
prefixed into `pathname` and has to be stripped.

### The demo deploy is a branch push, not Actions

`npm run deploy:demo` builds locally and force-pushes `dist/` to `gh-pages`.
It writes a `.nojekyll` file — **without it Pages runs Jekyll, which silently
skips any directory starting with an underscore, dropping the whole `/_astro/`
folder: every image and stylesheet, with no error.**

A proper Actions workflow exists at `deploy/github-pages.yml` but is **not
active** — it needs to move to `.github/workflows/`, which requires the
`workflow` OAuth scope the current token lacks:

```
gh auth refresh -h github.com -s workflow
```

Then `git mv`, push, and set Settings → Pages → Source → GitHub Actions.

---

## 6. Traps — things already learned the hard way

**Elfsight floating badge — do not try to reposition it in code.**
Three separate attempts failed. Facts:
- It mounts into `attachShadow({ mode: 'open' })`. Shadow DOM encapsulates
  styles, so **external CSS cannot reach it at all**, regardless of selector.
- Class names come from styled-components — build hashes that change per release.
- Elfsight's mobile/desktop toggle is **preview-only**. Settings are shared, and
  the widget hardcodes its mobile position:
  `re ? { position:'bottom', verticalOffset:20, horizontalOffset:0 } : i`
- A JS override that injects into the shadow root *would* also silently beat the
  Elfsight dashboard, making their settings appear broken.

**Current resolution:** badge is set to **desktop only** via
`badgeVisibilityOnDevices` in the Elfsight dashboard. On mobile the inline
reviews section covers it. The owner would like it controllable on mobile
eventually — that needs live DOM inspection (`/chrome` is now enabled), not
another blind attempt.

**The sticky mobile call bar is `data-cpf-callbar` and is `position: fixed;
bottom: 0`.** Any sweep for "fixed elements near the bottom" will catch it and
shove the call button up the screen. For a contractor the call is the
conversion — it always wins a conflict.

**`tools/audit.mjs` fails the build if a superseded phone number appears** in
any output, in formatted or `tel:` form. Verified to fire. Don't work around it.

---

## 7. Content decisions with reasons — don't silently undo these

- **Viewpoint School page has no header photograph.** Every image of that
  project is 678px; a 1400px header would need a 2.1× upscale or a borrowed
  residential patio photo on a school ballfield page. Type-led header instead.
  Fixed permanently by one drone pass.
- **`gbp-05` is used twice** — homepage hero and Triunfo YMCA header. It is
  genuinely a photo of that project and the only file that can fill a
  full-width hero.
- **One before/after pair is live**, `yelp-11 → yelp-07`, confirmed visually
  (same house, chimney, palms, cypresses, gazebo; new wall on the old fence
  line). Three candidates are staged with `confirmed: false` in
  `src/lib/pairs.ts` and **do not render**. Folder names are unreliable —
  `yelp-07` sits in `yelp-before/` but shows finished work.
- **No email is published.** Only a fragment ending `11@GMAIL.COM` survived.
  `BUSINESS.email` is `null` and the UI branches on it.
- **The contact form is built but dormant** behind `FORM_ENDPOINT = null` in
  `src/pages/contact.astro`. A form that silently drops enquiries is worse for a
  contractor than no form.
- **Brand restraint:** the logo's hot-rod flames stay *inside* the logo. Red is
  an accent on actions only; the ground is warm neutral and the photography
  carries the tone.

### The logo is a real trace

`tools/trace-logo.mjs` regenerates `logo.svg`, `logo-mark.svg`, `favicon.svg`
from `src/assets/logo/cpf-logo-1080.jpg`. The oval is drawn **parametrically**
from measured radii (`cx 545, cy 719, rx 523, ry 114`) so JPEG wobble isn't
baked in; flames and lettering are traced by marching squares → Douglas-Peucker
→ curve fitting with corner preservation. `tools/make-icons.mjs` hand-packs
`favicon.ico`.

---

## 8. What's outstanding

**Blocked on the owner** — full detail in `NOTES.md`, which is the
client-facing document:

1. Email address still unknown.
2. Listings cleanup: URL, phone **and** address all need correcting on Google
   Business Profile / Yelp / Houzz. GBP account access is currently blocked.
3. Confirm the three staged before/after pairings.
4. Check whether `cpfmasonry.com` can be re-registered and 301'd.

**Ready to build when assets arrive:**

5. **Drone footage for the hero** — shoot brief is in `NOTES.md` §2. Will
   autoplay muted + loop + `playsinline`, with the poster frame for
   `prefers-reduced-motion`. The placeholder overlay
   (`src/components/PlaceholderNote.astro`, demo-gated) comes out then.
6. Fresh photography — the single highest-value item. Would lift most of §4's
   constraints.
7. Elfsight badge on mobile, if a stable hook exists.
8. Activate the GitHub Actions workflow (§5).
9. Cloudflare Pages production deploy — configured in their dashboard, not in
   this repo. `sharp`'s Linux binaries are present in the lockfile; unverified
   on a real Linux build.

---

## 9. Working agreements

- Run `npm run audit` before every push. It checks JSON-LD parses on all 10
  pages, canonicals, `tel:` links, license number, alt text, dimensions, AVIF +
  WebP output, superseded phone numbers, and measures every generated image to
  prove nothing was upscaled.
- This machine is **Windows with PowerShell 5.1** — no `&&`, no `||`, no
  ternary. Use `;` + `if ($?) { }`, or the Bash tool.
- Deploy the demo after user-visible changes so the owner can review, then tell
  them to hard-refresh (Pages caches CSS aggressively).
- `_docs/` holds the contact sheets, the recovered site structure, and the
  resolution tests — read them before making claims about what a photo shows.
