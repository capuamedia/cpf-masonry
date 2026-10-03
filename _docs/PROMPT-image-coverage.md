# Task: close the image-coverage gap

The 191 recovered WordPress originals live in `new_assets/_old-site-media/` on the
owner's machine. That path is gitignored and outside `src/`, so Astro never
processed it, and an agent cloning this repo cannot see it at all. That is why
those photographs never rendered. Most were hand-copied into `src/assets/` and
renamed at some point; a remainder never made the trip.

**That remainder is committed to `src/assets/incoming/` on this branch**, so
everything you need is in the repo. Contact sheets are in `_docs/contact-sheets/`.

After deduplicating that remainder — byte hash, then perceptual hash, then a
human look at contact sheets, then a resolution check — **44 genuinely new
images** are left, of which **32 are usable photographs.** They are the work
order.

Two decisions are already settled. Do not revisit them, do not raise them:

- **The upscaled home hero stays.** `custom-stone-walls-and-veneer-features-1920w-upscaled`
  is a deliberate override of the no-AI-upscaling rule in `src/lib/images.ts`.
- **The review schema stays.** The `aggregateRating` block on `/reviews/` and in
  the sitewide `LocalBusiness` graph is intentional.

## The work order

`_docs/MISSING-ORIGINALS.tsv` — columns `page`, `original_path` (relative to
`new_assets/_old-site-media/`), `dimensions`, `status`, `job_group`,
`reviewer_note`, `wp_alt_text`.

Use the `status` column:

- **`KEEP`** — 44 rows. Distinct photographs not present in `src/assets` in any form.
- **`DROP — duplicate of X`** — 22 rows. Same photograph as something already in
  `src/assets`, or as another candidate, under a different filename. Verified by
  eye. Do not import these.
- **`VARIANT — crop/angle of X`** — 5 rows. Same scene as an image already in, at a
  slightly different crop. All five were reviewed and the version already in
  `src/assets` is the better frame. Do not import these either.

Contact sheets for all three groups are in `_docs/contact-sheets/`.

### Resolution tiers — read this before the page table

Five more were cut as below usable resolution (250x150 thumbnails). Of the 44 that
remain, the `tier` column sorts them:

| Tier | Count | What it is | Use |
|---|---|---|---|
| **A — gallery grade** | 7 | 1900-1920px full frames | Place freely |
| **B — small but real** | 25 | 640-1024px genuine photographs | Fine in grids and lightboxes; they sit inside the 2x display cap, do not stretch them |
| **C — theme crop** | 12 | 1400x500 slider banners and 600x240 featured-image crops | **Mostly skip.** These are WordPress theme derivatives, letterboxed to a band. Not gallery frames. Use only if a layout genuinely needs a wide decorative strip |

So the realistic ceiling is the 7 Tier A plus a curated cut of the 25 Tier B —
**roughly 20-25 images placed, not 44.**

### Where the 44 belong

| | Count |
|---|---|
| `/fireplaces-and-barbecues/` — on that page on the live WP site | **13** |
| `/masonry/` — same | 1 |
| Unassigned — old sliders, featured images, earlier jobs | 35 |

**Only `/fireplaces-and-barbecues/` is genuinely missing its own photographs.**
Earlier gaps on Dos Vientos, stonework, YMCA and Viewpoint turned out to be
differently-named copies of images already in the build. Start with fireplaces.
The other 35 are good material for the galleries and the `/featured-work/` hub,
but they are an editorial addition, not a restoration.

### Read the `job_group` column before you place anything

Most of the Tier B set is multiple angles of ten single jobs:

| Job group | Frames |
|---|---|
| `dos-vientos-tiled-outdoor-kitchen` | 6 |
| `white-stucco-outdoor-kitchen-build` | 4 |
| `viewpoint-outfield` | 4 |
| `ranch-house-driveway` | 3 |
| `cast-fireplace-and-pizza-oven` | 3 |
| `stone-villa-covered-patio` | 3 |
| `brick-patio-bbq-island`, `the-oaks-monument-sign`, `stainless-bbq-island`, `dos-vientos-side-yard-wall` | 2 each |

The other 18 are standalone. **Two or three frames of one job is a portfolio;
six is a contact sheet.** Pick the strongest from each group and leave the rest
out — except `cast-fireplace-and-pizza-oven`, where all three are different
structures and all three are worth having.

`white-stucco-outdoor-kitchen-build` reads as in-progress rather than finished —
check before putting it in a finished-work gallery. `brick-patio-bbq-island` has
"B4" in both filenames, which may mean "before"; both frames look finished to me,
but flag them for the owner rather than assuming.

### Frames flagged as weak

Five rows carry a `reviewer_note`. Skip them unless a layout specifically needs
them: a macro of a wet mottled surface that reads as a puddle at thumbnail size,
a washed-out counter edge, a frame that is mostly garage door, a backlit
chain-link shot with no clear subject, and a block-wall texture macro that works
as a detail inset but not as a gallery frame.

Between the tiering and the job grouping, this lands around **20-25 placed.**
That is the right outcome, not a shortfall. Do not pad to hit a number.

## How to import

1. The 44 KEEP files are in **`src/assets/incoming/`** (see the `committed_path`
   column). `git mv` each one you use into the set folder it belongs in
   (`recovered/`, `site-photos/`, or a new one) under its new name. Delete the ones
   you reject. `incoming/` must be empty when you are done — it is a staging area,
   not a home. Never reference `new_assets/`: it is gitignored and local-only.
2. **Rename to a descriptive kebab-case slug** matching `src/assets/recovered/`
   convention: `dos-vientos-built-in-pizza-oven.jpg`, not
   `cpf-cystom-bbq-dv-pizza-oven.jpg`. Several WP names misspell "custom" as
   "cystom".
3. Register in `src/lib/assets.ts` with real alt text.
4. Leave `src/lib/images.ts` alone — widths clamp to native, display cap 2×,
   derived from `img.width`. These files are 1024–1920px and sit inside the limits.

## Alt text

`wp_alt_text` is a starting point, not an answer. Many values are just the
filename with hyphens left in — `DTO-3`, `Kubota-Excavation-3`,
`cpf-stone-and-concrete-dv-wall`. Where it is a filename echo, write real alt
describing the work: material, element, setting. Where it is a human sentence,
keep it — that came from the owner.

## Also worth picking up

Three images already in `src/assets` render nowhere:
`large/gbp-06-brick-patio-FULL.jpg`, `current/tall-structural-retaining-wall-hillside.jpg`,
`site-photos/extra-slider-cpf-concrete-counter.jpg`. (`logo/cpf-logo-1080.jpg` is
also unrendered and probably correctly so.)

Eight more sit in `yelp-before/`, gated behind `src/lib/pairs.ts`, which requires
`confirmed: true` per pair and is waiting on the owner's eye. **Do not flip any
`confirmed` flag.** Narrowing the candidate pairs with written reasoning is useful;
publishing them is not yours to do.

## Placement judgment

- Keep in-progress and excavation imagery on `/grading-and-excavation/`. A muddy
  dig frame in a finished-stonework gallery reads as a mistake.
- Preserve the loading discipline: first content image `eager` + `fetchpriority="high"`,
  everything else `lazy`.
- If a gallery gets long, use the existing sectioning/load-more pattern rather than
  shipping 40 images.

## When you are done

1. `npm run audit` — must pass clean.
2. Per-page image counts, before and after.
3. How many of the 44 you placed, how many you left out, and a one-line reason for
   each omission. I want the editing decisions, not just the number.
4. Flag any row you think is assigned to the wrong page.
5. Deploy the demo.
