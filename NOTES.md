# NOTES — for the owner

Things the build could not decide on its own, in the order they are worth doing.
Items 1–6 were requested in the build brief; 7–10 came up during the build.

---

## 1. Confirm the email address and which phone number is current

**Email is not published anywhere on the site.** Google's index preserved only a
fragment ending `11@GMAIL.COM`, and a guessed address on a contractor's site is
worse than none — enquiries would vanish silently and the sender would think they
had made contact.

- Set it in `src/lib/site.ts` → `BUSINESS.email`. The footer and contact page
  already branch on it and will start showing it automatically.

**The phone number is settled. The listings are not.**

Current number, confirmed by the owner 2026-09-01 and published sitewide:
**(805) 402-4211**.

| Number | Where it still appears | Action |
|---|---|---|
| **(805) 402-4211** | this website | correct — nothing to do |
| (805) 498-4852 | Google Business Profile, Yelp, Houzz | **superseded — replace** |
| (805) 496-3766 | Houzz | **superseded — replace** |

Every listing on the web currently points at a number the business no longer
uses. That is worse than a stale address: an address sends someone to the wrong
street, a dead phone number loses the enquiry outright, and paid or organic
traffic that finds CPF through the local pack will hit the old line first.

Both superseded numbers are recorded in `src/lib/site.ts` as `phoneFormer`, and
`tools/audit.mjs` now **fails the build** if either reappears anywhere in the
output — so a stale number cannot creep back in from an old listing or a
copy-paste. Verified: reinstating the old number breaks the build on all ten
pages.

To change the number again, edit `BUSINESS.phone` and `BUSINESS.phoneHref` in
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

### Drone footage for the hero — what to bring back

The homepage hero is flagged with a placeholder on the review build. A few
things decide whether the footage actually works there, and they are cheap to
get right on the day and impossible to fix afterwards:

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

Do this **at launch, the same day**. Section 8 of the brief is right: the old
domain is gone and its search equity is not recoverable, so cpf-masonry.com
starts from zero. These three listings are the fastest route back.

**Three separate corrections have accumulated. Do them in one pass per listing:**

| | Google Business Profile | Yelp | Houzz |
|---|---|---|---|
| Website URL → cpf-masonry.com | needed | needed | needed |
| Phone → (805) 402-4211 | needed | needed | needed |
| Address → 1210 Calle Tulipan, Thousand Oaks 91360 | needed | already correct | check |

Consistent name/address/phone across the web is a direct local ranking factor,
and right now all three fields disagree with the site on at least one listing.
The phone is the most urgent of the three — a wrong address costs a visit, a
wrong number costs the enquiry entirely.

1. **Google Business Profile → cpf-masonry.com.** Highest value single action on
   this list. It is a direct authoritative signal and it feeds the local pack.
   **Fix the address in the same visit** — it still shows the old Newbury Park
   one (item 8). Two corrections, one login, and access is currently blocked, so
   this is the item to unblock first.
2. **Yelp** — the listing already outranks the dead site for the brand name.
3. **Houzz** — same, and check which phone number it shows while you are in there
   (see item 1).
4. **Search Console** — add cpf-masonry.com and submit
   `https://cpf-masonry.com/sitemap-index.xml` on day one.

---

## 6. Check whether cpfmasonry.com can be re-registered

Worth ten minutes before assuming it is gone. **The hosting account was
suspended — that is not the same as the domain registration lapsing.**

- Run a WHOIS on `cpfmasonry.com` and look at the expiry date and registrar.
- If it is still registered to the business, it may just need the registrar
  login — no purchase at all.
- If it has lapsed and is buyable, buying it back and 301-redirecting every URL
  to cpf-masonry.com would recover most of the lost equity for the price of a
  domain. That is the cheapest SEO available here by a wide margin.
- Old URLs worth redirecting are listed in `_docs/_SITE-STRUCTURE.txt`
  (`/masonry/`, `/custom-concrete/`, `/services/`, `/contact-us/`, and the two
  featured-project pages).

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
