# HANDOFF — cpfmasonry.com

**Written for an AI agent picking this project up.** If you started from the
original build prompt, read this first: several of its assumptions no longer
hold. Facts here supersede the build prompt wherever they conflict.

---

> ### ⚠️ SUPERSEDED IN PART — read `REBUILD-PLAN-v2.md` first (2026-09-15)
>
> The original site was recovered on 2026-09-07 and is live again. That
> overturns the three things this document is most emphatic about:
>
> | This doc says | Now |
> |---|---|
> | Publish `(805) 402-4211`; old numbers fail the build | **Publish `(805) 498-4852`** — the business line. 402-4211 is Pat's cell and appears on the contact page only. The audit guard is inverted. |
> | New domain, zero equity | **`cpfmasonry.com`** — recovered 2026-09-07. The rebuild replaces the old site in place and inherits its indexing. |
> | Image resolution is the binding constraint (§4) | **Largely lifted.** 191 recovered originals, 48 of them at 1900–1920px. The tier system and the 500px display cap are being retired. |
> | Email unknown (§7) | **`cpfman11@gmail.com`**, recovered from the live contact page. |
>
> Sections 5, 6 and 9 (deploy architecture, the Elfsight and call-bar traps,
> the working agreements) are all still accurate and still apply.

---

Last updated: 2026-09-24. Site builds clean, audit passes on both targets,
demo deploys from `main` on every push.

> **How to read this document.** It has been edited in layers, and the banner
> above corrects the 2026-09-15 layer. Sections 2, 4, 5, 7, 8 and 9 were
> corrected again on 2026-09-24. Where a section contradicts `src/lib/site.ts`,
> `src/lib/images.ts` or `DEPLOY.md`, **the code wins** — those are executable
> and this is not.
>
> Cautionary tale, 2026-09-24: an agent picked this project up against a clone
> 22 commits behind, read `src/lib/site.ts` *before* pulling, and then kept
> asserting the old phone number and the old domain after pulling. It reported
> a live page as publishing a dead number, and a live production domain as
> offline. Both were wrong. **Run `git pull` and then `git log --oneline -20`
> before trusting any date-stamped claim in here, including this one.**

---

## 1. What this is

A rebuilt website for **CPF Custom Concrete and Masonry**, a masonry/concrete
contractor in Thousand Oaks, California. The original site at `cpfmasonry.com`
went down when the hosting account was suspended; the domain was recovered on
2026-09-07, so this rebuilds on it in place and keeps its indexing. Every
legacy URL is preserved — see `REBUILD-PLAN-v2.md` section 6.

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
| Production | `https://cpfmasonry.com` — **not cut over yet**, still serving the old WordPress install |
| Local dev | `npm run dev` → `http://localhost:4321` |

### Commands

```
npm run dev           # dev server
npm run build         # production build
npm run audit         # build + full post-build audit  <- run before every push
npm run deploy:demo   # dispatch the Pages workflow (~10 min; see DEPLOY.md)
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
| — | **Founded 1991** — owner-confirmed. Now a first-class fact (`BUSINESS.founded`), surfaced in the hero, trust strip, About page, footer and `foundingDate` schema. |
| — | Elfsight reviews added: inline section (home + contact) and a floating badge (**desktop only**). |
| — | Hero carries a "replace with drone footage" placeholder, **demo build only**. |

Business facts are **single-sourced in `src/lib/site.ts`**. Nothing hardcodes
the phone, address, or license. Change it there.

Superseded values are deliberately kept in that file as `phoneFormer` and
`addressFormer`, so nobody "corrects" the site back to a stale listing.

`YEARS_IN_BUSINESS` is computed at build time from `BUSINESS.founded`. Prefer
the literal "since 1991" in body copy — it never goes stale. Use the count only
where the number itself is the point.

---

## 4. The image policy — the most important thing here

`src/lib/images.ts` **throws at build time**. This is deliberate: a build that
fails loudly is worth far more than a page that quietly looks cheap.

Two limits, routinely confused:

1. **Display cap** — how large a source may be *laid out*. Hard limit **2×** the
   intrinsic width. Measured: 678px holds to ~1356px, disintegrates at 3×.
2. **Generation cap** — how large a file sharp may *emit*. Never above native.
   Upscaling in sharp adds bytes and zero detail.

**The five-way tier enum is gone** (retired 2026-09-15). It classified files by
which salvage operation produced them, because the originals were missing and
provenance was the only proxy for quality. The originals came back — 191 of
them, 48 at 1900–1920px — so provenance stopped predicting anything, and the
enum became a tax: every new file hand-classified, a misfiled one silently
capped wrong.

Limits now derive from `img.width`, which is ground truth and cannot drift out
of sync with the asset. A better scan of the same photograph relaxes its own
limits the moment it lands. An asset may carry an optional `maxDisplay` for a
file softer than its pixel count suggests — rarely needed.

Current asset directories:

| Dir | Files | Notes |
|---|---|---|
| `src/assets/current/` | 19 | 2026 photography, up to 4284px |
| `src/assets/recovered/` | 70 | recovered originals, many at 1900–1920px |
| `src/assets/yelp-finished/` | 18 | 1000px |
| `src/assets/yelp-before/` | 11 | 1000px, before / in-progress |
| `src/assets/site-photos/` | 15 | the old 678px set |
| `src/assets/large/` | 3 | **legacy folder name.** It meant "tier 01 — above 1000px", not "big". `gbp-01` cleared that bar by 24 pixels and was the smallest file in it. Nothing infers anything from this folder now. |

### Rules you must not break

- **Never upscale past 2×.** The build enforces it.
- **Never sharpen after upscaling** — amplifies JPEG artifacts where detail used to be.
- **Never upscale an image yourself. An AI-upscaled file goes in only when the
  owner has both provided it and clearly authorized it.** Both conditions, every
  time. Not "ask first" — do not generate them at all. Finding an upscaled file
  on disk is not authorization either; he has to say to use it. If a slot needs
  more pixels than the source has, report that and stop.

  This replaces a blanket "no AI upscaling, ever", which came from Claude's own
  attempts coming back plastic — invented stone texture, which reads as fake to
  exactly the person evaluating a mason. That judgement was right about those
  outputs. It was wrong only in blaming the technique rather than the tool: a
  purpose-built upscaler produced an acceptable 1024→1920 of the hero
  photograph on 2026-09-24. The owner supplied it, the owner approved it, and
  that is the only route by which such a file arrives.

  **An owner-supplied upscale still earns no display headroom from its new
  pixel count.** 1920 interpolated pixels carry 1024 pixels of real detail, and
  the 2× rule is about detail. Pin `maxDisplay` to 2× the *true* resolution —
  see `stoneEntryHero` in `src/lib/assets.ts`, capped at 2048 rather than the
  3840 its file width would otherwise allow.
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

**Canonicals always point at `https://cpfmasonry.com`, from every target.** A
`github.io` copy competing with the real site for its own brand name would
actively hurt it. Three independent guards keep the demo out of the index:
generated `robots.txt`, `noindex` meta, and pinned canonicals.

**Every internal link must go through `withBase()`** from `src/lib/urls.ts`, or
it 404s on the demo subpath while working fine locally. Canonicals must use
`canonicalURL()`, not `new URL(Astro.url.pathname, Astro.site)` — `base` is
prefixed into `pathname` and has to be stripped.

### The demo deploys from Actions, on every push to `main`

Activated 2026-09-20. `.github/workflows/deploy-pages.yml` builds with
`DEPLOY_TARGET=github-pages` and publishes via `actions/deploy-pages`.

**Deploys used to take 47-51 seconds and now take minutes**, which surprises
anyone who used the old route. The old route built images on the laptop, where
`node_modules/.astro/assets` caches ~444MB of variants, and only published
remotely. A CI runner starts cold and regenerates all of them with sharp;
`cache: npm` caches the npm download cache, not the generated output. The
workflow restores `node_modules/.astro` via `actions/cache` (added 2026-09-24)
to claw most of that back. A run after a big photo drop will still be slow.

**The `gh-pages` branch is dead. Do not deploy to it.** Pages stopped reading it
the moment Source became "GitHub Actions", but `tools/deploy-demo.mjs` was left
force-pushing there — building, committing, pushing, printing the URL and
exiting 0 while deploying nothing at all. That cost a full debugging cycle on
2026-09-24. The only visible signal was `build_type: "workflow"` in
`gh api repos/capuamedia/cpf-masonry/pages`. **If a deploy reports success and
the site does not change, check that first.** `deploy:demo` now dispatches the
workflow and reports its real conclusion instead of the fact that it managed to
send a request.

**Only `main` and `gh-pages` may deploy.** The `github-pages` environment carries
a deployment branch policy. Dispatching from a feature branch **builds green and
then fails at the deploy step**, which reads as success until the page 404s.
Merge to `main`, or add the branch — command in `DEPLOY.md`.

Pushing again while a run is in flight **cancels it**: the workflow's concurrency
group sets `cancel-in-progress: true`.

The workflow runs `npm run build`, **not** `npm run audit`. Nothing gates a
deploy on the audit that exists to catch dead numbers and upscaled images. Open
question — §8.

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
- **The homepage hero is `A.stoneEntry`** — owner-confirmed 2026-09-24, chosen
  over a 1920×1278 alternative after seeing both in place. It is the file
  formerly called `gbp-01`, now
  `src/assets/recovered/custom-stone-walls-and-veneer-features.jpg`.
  **At 1024×682 it is the softest source on the page**, and no larger copy of it
  exists anywhere — verified against the repo and both photo drops in
  `~/Downloads`. It clears the 2× display guard at the slot's declared 1900px.
  This was a deliberate trade of resolution for composition, not an oversight;
  do not "fix" it by swapping the photograph. Replace it only with a better
  frame of comparable subject, or with the drone footage (§8).
  `Hero.astro` stays extracted — it is a clean component and the next hero
  change is a one-line prop swap. The `HeroSwitcher.astro` scaffolding used to
  make this decision has been deleted.
- **The drone-footage placeholder is gone** from the hero (2026-09-24, owner's
  call: the recovered photography now fills the slot without looking cheap).
  `PlaceholderNote.astro` still exists and still works, it is simply no longer
  mounted anywhere. Drone footage is still wanted eventually — §8.
- **One before/after pair is live**, `yelp-11 → yelp-07`, confirmed visually
  (same house, chimney, palms, cypresses, gazebo; new wall on the old fence
  line). Three candidates are staged with `confirmed: false` in
  `src/lib/pairs.ts` and **do not render**. Folder names are unreliable —
  `yelp-07` sits in `yelp-before/` but shows finished work.
  The three are laid out for the owner's verdict at **`/review/pairings/`**
  (`src/pages/review/[slug].astro`), demo build only: `getStaticPaths` returns
  `[]` off `IS_DEMO`, so production emits no such route at all. Each pair also
  carries a `sources` field naming its frames, so owner and code refer to the
  same photograph. Flip `confirmed` to `true` to publish one.
- **No email is published.** Only a fragment ending `11@GMAIL.COM` survived.
  `BUSINESS.email` is `null` and the UI branches on it. (The banner at the top
  of this file reports `cpfman11@gmail.com` recovered on 2026-09-15 — check
  `src/lib/site.ts` for which is actually true before acting on either.)
- **`/reviews/` is a dedicated page** (added 2026-09-24) carrying the two
  listings cited separately and the Elfsight widget, linked from the nav and
  from the reviews section on the home and contact pages. **No listing URL is
  published anywhere**, because no canonical Yelp or Google Business Profile URL
  survived the loss of the old site — see `TODO_LISTING_URLS` in
  `src/pages/reviews.astro`. Do not guess one. The Yelp review count is cited as
  "about 26" on purpose; Yelp filters some reviews and the visible count moves.
- **The contact form is built but dormant** behind `FORM_ENDPOINT = null` in
  `src/pages/contact-us.astro`. A form that silently drops enquiries is worse for a
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
3. Confirm the three staged before/after pairings — laid out at
   `/review/pairings/` on the review build.
   Also waiting on the owner: **pick hero option A or B** on the review build's
   home page, and supply the **Yelp and Google listing URLs** so `/reviews/`
   can link out.
4. Check whether `cpfmasonry.com` can be re-registered and 301'd.

**Ready to build when assets arrive:**

5. **Drone footage for the hero** — shoot brief is in `NOTES.md` §2. Will
   autoplay muted + loop + `playsinline`, with the poster frame for
   `prefers-reduced-motion`. The placeholder overlay
   (`src/components/PlaceholderNote.astro`, demo-gated) comes out then.
6. Fresh photography — the single highest-value item. Would lift most of §4's
   constraints.
7. Elfsight badge on mobile, if a stable hook exists.
8. ~~Activate the GitHub Actions workflow~~ — **done 2026-09-20** (§5).
   Still open: make the workflow run `npm run audit` rather than `npm run
   build`, so a deploy cannot ship what the audit would have caught.
9. Cloudflare Pages production deploy — configured in their dashboard, not in
   this repo. `sharp`'s Linux binaries are present in the lockfile; unverified
   on a real Linux build.

---

## 9. Working agreements

- Run `npm run audit` before every push. It checks JSON-LD parses on all 16
  production pages (17 on the demo target, which adds `/review/pairings/`), canonicals, `tel:` links, license number, alt text, dimensions, AVIF +
  WebP output, superseded phone numbers, and measures every generated image to
  prove nothing was upscaled.
- This machine is **Windows with PowerShell 5.1** — no `&&`, no `||`, no
  ternary. Use `;` + `if ($?) { }`, or the Bash tool.
- Deploy the demo after user-visible changes so the owner can review, then tell
  them to hard-refresh (Pages caches CSS aggressively).
- `_docs/` holds the contact sheets, the recovered site structure, and the
  resolution tests — read them before making claims about what a photo shows.
