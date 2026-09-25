# NOTES — for the owner

Things the build could not decide on its own, in the order they are worth doing.
Items 1–6 were requested in the build brief; 7–10 came up during the build.

---

## 1. The published number and email — both RESOLVED

**Email: `cpfman11@gmail.com`**, recovered from the live contact page on
2026-09-15 and set in `src/lib/site.ts` → `BUSINESS.email`. The footer and
contact page branch on it and show it automatically. Nothing to do.

**Phone: `(805) 498-4852` is the standard**, confirmed by the user on
2026-09-19. It is the business line, it is what the listings already carry, and
it is published sitewide.

| Number | What it is | Rule |
|---|---|---|
| **(805) 498-4852** | the business line | **the one published number**, everywhere |
| (805) 402-4211 | Pat's direct cell | contact page **only** — never a second NAP number |
| (805) 885-8269 / 496-3766 / 214-1705 | genuinely dead | `phoneFormer`; the build fails if any reappears |

> **This reverses an earlier note in this file** that had 402-4211 as the
> published number and 498-4852 as superseded. That was wrong and is what the
> listings pass in section 5 was built on — do not restore it from `HANDOFF.md`
> or from any older draft.

`tools/audit.mjs` enforces both halves: it fails the build if a dead number
appears anywhere, and if the cell appears on any route other than
`/contact-us/`. Two published numbers split the name-address-phone signal,
which is a direct local ranking input.

To change the number later, edit `BUSINESS.phone` and `BUSINESS.phoneHref` in
`src/lib/site.ts`. Nothing else hardcodes it.

---

## 2. Fifteen fresh photographs would transform this site

This is the single highest-value thing on the list, and it is bigger than
everything else combined.

Every image here was salvaged after the hosting account was suspended. The best
photograph of finished work in the entire set is **1900px**, and there is exactly
one of it. Most of the good *subjects* — the Viewpoint School field, the Triunfo
YMCA fields, the Dos Vientos retaining walls, the outdoor kitchens — survive only
at **678×452**, which is why they are shown small. They all still physically
exist, and a current phone shoots 4000px.

Shoot for the layout, not for the album:

- **Wide establishing shots**, landscape, plenty of room around the subject — these
  become page headers and the homepage hero. This is the biggest gap: there is
  currently one usable hero image on the whole site.
- **Corner and edge details** — where a wall meets a step, where flatwork meets a
  drain. This is what a homeowner evaluating a mason actually looks at.
- **Close-ups of surface texture** — stamp pattern, brick pitting, stone grain,
  aggregate. Fill the frame.
- **A few portraits** — tall walls, columns, fireplaces. The layout has slots for
  portrait images that are currently thin.
- **Shoot in the morning or late afternoon.** Almost every salvaged photo is
  midday sun, which flattens exactly the texture that sells masonry.

Drop new files into `src/assets/`, add them to `src/lib/assets.ts` with a real
alt description, and raise the `displayW` at the call site. The build guard will
tell you immediately if a slot asks for more than the file can carry.

### Fiber-optic tops — what to shoot to earn a gallery

There are exactly **two** photographs of the lit work, both of the same kitchen,
both shot hand-held at night. They carry the band on the countertops page and
they carry it well, but two frames of one job is not a gallery, and it is not
enough to justify a feature on the homepage pointing at one.

That is the plan once there are more: **a lit-work gallery of its own, with a
homepage feature pointing into it.** Six to eight frames across at least two
jobs would do it. What to bring back:

- **Both states of the same top, from the same spot.** Lights on, then lights
  off, tripod or phone braced on something so the framing does not shift. This
  is the single most valuable shot on the list — it is the whole pitch in two
  images, and there is currently no daylight frame of either lit top.
- **Shoot at dusk, not in a blacked-out room.** A little ambient light keeps the
  kitchen readable around the slab, so it reads as a countertop in a home rather
  than an abstract. Both existing frames had to be cropped hard and shaded off
  to hide a lit doorway.
- **Brace the phone.** Both current frames are soft. Night mode on a modern
  phone holds a 1–3 second exposure — anything resting on the counter edge or a
  chair back beats hand-held, and sharp fiber ends are the entire subject.
- **Get the edge and the corner in.** A frame that shows the slab edge, the
  cabinet and the floor proves it is a countertop. Straight down at the surface
  is a beautiful abstract and tells a buyer nothing.
- **One frame per color state**, if the illuminators can be switched — the
  three-color shot is the one that makes people realize it is configurable.
- **Landscape, and leave room around the slab.** A homepage feature needs width.

Do not clean up the room first at the cost of the shot; a real kitchen with a
bowl on the counter sells better than a staged one. But move the power cords.

### Drone footage for the hero — what to bring back

**Update, 2026-09-24:** the placeholder note has been taken off the hero. The
recovered photography fills the slot well enough that flagging it on every visit
was costing more than it was buying. The hero now carries the stone veneer entry
photograph — your pick, after seeing it against a higher-resolution alternative.

None of that closes this item. A still photograph is still the weakest thing on
an otherwise strong page, and drone footage is still the single biggest
available upgrade. A few things decide whether the footage actually works there,
and they are cheap to get right on the day and impossible to fix afterwards:

- **Shoot landscape, 4K, 24 or 30fps.** Delivered at ~1920px wide. Vertical
  footage cannot fill a full-width hero.
- **Slow moves only.** A gentle push-in or a lateral drift. Fast motion falls
  apart at the bitrate a web hero can afford, and looks cheap in a way a still
  photograph never does.
- **10–20 seconds, and make it loop.** Start and end on near-identical framing
  so the cut is invisible. One continuous move beats three cuts.
- **Keep the lower third calm.** The headline, the phone number and two buttons
  sit over the bottom of the frame under a dark scrim. Busy or bright detail
  down there fights the text. Sky, roofline or open ground low in frame is ideal.
- **Golden hour, not midday.** Every salvaged photo in this set is harsh midday
  sun, which flattens the surface texture that actually sells masonry. Low sun
  rakes across stamped concrete and stone and is the single biggest quality
  difference available.
- **Best subjects:** a pull-back reveal off a finished driveway or patio; a slow
  rise over the Dos Vientos retaining walls; an orbit of an outdoor kitchen or
  fireplace. The ballfields are worth a pass too — they are the institutional
  credibility and there is currently no wide shot of Viewpoint School at all.
- **Grab full-resolution stills while up there.** They solve item 2 in the same
  trip, and a hero needs a poster frame regardless.

On the build side, a video hero will autoplay muted, loop, and carry
`playsinline`, with the poster frame shown to anyone on `prefers-reduced-motion`
or a slow connection — so the still photograph stays part of the design rather
than being thrown away.

---

## 3. Check phone camera rolls and Google Photos backups

The 678px files are downscaled copies Google cached. **The originals may still
exist** on whatever phone took them, or in a Google Photos / iCloud backup from
around 2016. Filenames in `_docs/_MANIFEST.txt` map to the original WordPress
upload paths and are grouped by month (2016/01, 2016/02, 2016/05, 2016/10), which
gives you date ranges to search.

Recovering those originals would be worth as much as a new photo shoot for the
ballfield projects, which cannot be re-shot as they were.

---

## 4. Confirm the before/after pairings

> **Look at them here:**
> `https://capuamedia.github.io/cpf-masonry/review/pairings/`
>
> Each candidate shows both photographs at full size — click either one to open
> it at full resolution — then the slider exactly as it would appear on the
> site. That page exists only on the review build; it is not on the live site
> and never will be.

The comparison slider is built and working. **One pair is live; three more are
staged but switched off.**

Pairings are in `src/lib/pairs.ts`. Only entries with `confirmed: true` render —
a mismatched pair makes a contractor look like he is passing off someone else's
job, so the default is off.

**Live now:**

- `yelp-11` → `yelp-07` — old timber fence replaced by a tan block wall. Verified
  visually, not by filename: identical tile-roofed house and chimney behind, same
  palm cluster and cypresses, same white gazebo, same pine at far left, and the
  new wall follows the exact line of the removed fence.

**Staged, needs your eye** (flip `confirmed: true` to publish):

- `yelp-01` → `yelp-02` — strong. Same hills, houses and fence line. Unclear which
  frame is genuinely the finished state.
- `yelp-09` → `yelp-10` — weak. Similar side yard, but no landmark appears in both.
- `yelp-12` → `yelp-03` — plausible brick wall progression. Needs confirming it is
  one job and not two walls at different addresses.

Note that **folder names are not reliable**: `yelp-07` sits in `03-yelp-before-during/`
but shows completed work.

---

## 5. Listings cleanup — URL, phone and address, all three

> **Now live on the site:** trading since **1991**, and the arithmetic
> (35 years) is computed at build time so it stays current. It appears in the
> hero, the trust strip, the About page headline, the footer and the
> `foundingDate` structured data. It is the strongest single trust signal
> available — and unlike a review count, a visitor can verify it against the
> CSLB license record.


Do this **at cutover, the same day**. cpfmasonry.com was recovered on
2026-09-07 and the rebuild replaces the old site in place, so the indexing
survives — but the listings below still disagree with the site on at least one
field each, and that inconsistency is its own ranking problem.

**Three separate corrections have accumulated. Do them in one pass per listing:**

| | Google Business Profile | Yelp | Houzz |
|---|---|---|---|
| Website URL → cpfmasonry.com | needed | needed | needed |
| Phone → (805) 498-4852 | check | check | check |
| Address → 1210 Calle Tulipan, Thousand Oaks 91360 | needed | already correct | check |

Consistent name/address/phone across the web is a direct local ranking factor.
The phone is likely already correct on all three — (805) 498-4852 is what the
listings carry and, as of 2026-09-19, what the site publishes — so this is a
verification pass on that field, not a rewrite. The URL and the address are the
two that actually need changing.

1. **Google Business Profile → cpfmasonry.com.** Highest value single action on
   this list. It is a direct authoritative signal and it feeds the local pack.
   **Fix the address in the same visit** — it still shows the old Newbury Park
   one (item 8). Two corrections, one login, and access is currently blocked, so
   this is the item to unblock first.
2. **Yelp** — the listing already outranks the dead site for the brand name.
3. **Houzz** — same, and check which phone number it shows while you are in
   there. Houzz historically carried (805) 496-3766, which is dead.
4. **Search Console** — add cpfmasonry.com and submit
   `https://cpfmasonry.com/sitemap-index.xml` on day one.

---

## 6. cpfmasonry.com — RESOLVED, recovered 2026-09-07

The hosting account had been suspended; the domain registration had not lapsed.
It is back, and it is the only domain this project uses. There is no second
domain and no 301 bridge to build.

What that changes:

- The rebuild goes onto cpfmasonry.com **in place**, inheriting the indexing
  rather than starting from zero.
- Every legacy URL must keep working. They are listed in
  `_docs/_SITE-STRUCTURE.txt` (`/masonry/`, `/custom-concrete/`, `/services/`,
  `/contact-us/`, and the two featured-project pages) and the rebuild already
  matches them — see `REBUILD-PLAN-v2.md` section 6.
- **Still outstanding:** the domain serves the old WordPress install to this
  day (checked 2026-09-17). Cutting it over to the Astro build is the open
  task; until then the rebuild is visible only at the noindexed demo URL.

---

## 7. The Yelp review count is approximate

The site publishes a combined 5.0 rating across 34 reviews (26 Yelp + 8 Google)
in the `LocalBusiness` structured data. **The Yelp figure of ~26 came from the
listing header and was not counted individually.** Check it and correct
`BUSINESS.ratings.yelp.count` in `src/lib/site.ts` if it is off — structured data
that overstates a review count is the kind of thing that gets rich results
suppressed.

---

## 8. The Google Business Profile address is out of date

**Resolved on the site; still outstanding on the listing.**

The current trading address is **1210 Calle Tulipan, Thousand Oaks, CA 91360**,
confirmed by the owner on 2026-09-01. The site publishes that everywhere — footer,
contact page, `LocalBusiness` structured data and the `geo.placename` meta.

| Source | Address | State |
|---|---|---|
| This website | 1210 Calle Tulipan, Thousand Oaks, CA 91360 | correct |
| Yelp | 1210 Calle Tulipan, Thousand Oaks, CA | already correct |
| Google Business Profile | 2996 Molly Ct, Newbury Park, CA 91320 | **stale — needs changing** |

**Why this one matters more than it looks.** Google Business Profile is the
single strongest local ranking signal a contractor has, and it is the address
Google Maps will navigate a customer to. Right now the GBP address and the
website disagree, and consistent name/address/phone across the web is a direct
ranking factor. Until the profile is corrected, expect the local pack to
under-perform for Thousand Oaks searches.

The site is **not** going to mirror the stale address to match the listing — a
website sending someone to the wrong house is worse than a listing that
disagrees, because the listing can be fixed and a drive cannot be un-driven.

Access to the Google Business Profile is being sorted out. Two things worth
knowing while that happens:

- If the profile cannot be recovered through the normal login, Google has a
  **claim / ownership-request flow** for exactly this situation: request access
  as a new owner and Google contacts the current listed owner. If they do not
  respond within seven days, ownership can transfer. Start it early — the clock
  only runs once the request is filed.
- The **address change itself may trigger re-verification** (postcard or video).
  Budget a couple of weeks between regaining access and the corrected address
  going live.

Both addresses are recorded in `src/lib/site.ts` — the former one is kept there
deliberately, labeled as superseded, so nobody restores it later from the old
listing thinking the site is wrong.

---

## 9. The Viewpoint School page has no header photograph. That is deliberate.

Every surviving image of that project is 678×452, and the tier ceiling is 500px
rendered. A 1400px page header would have meant either a 2.1× upscale or
borrowing a residential patio photo from the Yelp set — and putting somebody's
backyard at the top of a school ballfield page is a misrepresentation.

So it uses a type-led header instead. **Fifteen minutes at the field with a phone
fixes this permanently** (see item 2).

Related: `gbp-05-brick-wall-railing.jpg` is used twice — as the homepage hero and
as the Triunfo YMCA header. It is genuinely a photograph of that project and it
is the only file in the set that can fill a full-width hero, so the reuse is
deliberate. One more wide ballfield shot would let them differ.

---

## 10. The contact form is built but switched off

`src/pages/contact.astro` contains a complete form behind
`FORM_ENDPOINT = null`. It renders nothing until an endpoint exists, because a
form that silently drops enquiries is worse for a contractor than no form.

To enable: set `FORM_ENDPOINT` to a Cloudflare Pages Function, Formspree or Basin
URL, and confirm the email address in item 1.

---

## Image rules, if anyone else works on this

Enforced in code at `src/lib/images.ts`, and the build **fails** rather than
degrading quietly:

- **Never display above 2× the source width.** Measured: 678px holds to ~1356px
  and disintegrates at 3×.
- **The 678px set is capped at 500px rendered** and is never clickable.
- **The three dugout frames (320px) cap at 300px** and appear on one page only.
- **No sharpening after upscaling.** It amplifies the JPEG artifacts sitting where
  the detail used to be, and made every test image worse.
- **No AI upscaling, ever.** Upscalers invent replacement texture, and invented
  stone reads as plastic to precisely the person evaluating a mason.
- **No stock photography.** If a slot cannot be filled with a real CPF photo, the
  slot gets redesigned — as on the Viewpoint School page.

Try to break these and you get a build error naming the slot, the source size and
the ratio you asked for.
