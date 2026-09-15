# cpfmasonry.com — rebuild plan v2

**This supersedes every earlier plan.** The original WordPress site was recovered
on 2026-09-07 and is live again. Everything below comes from the real site via
its REST API, not from Google's cache. Where this conflicts with anything
previous, this wins.

Companion files:
- `cpfmasonry-SITE-CAPTURE.md` — all 15 pages of copy, per-page image lists, full media manifest
- `cpfmasonry-ORIGINAL-media-198.zip` — 198 original media files, 105 MB

---

## 1. What changed, and why it matters

We spent weeks building against 57 salvaged images capped at 678px and 6 known
pages. The live site has **198 media files up to 1920px and 15 pages.** The
constraint the entire previous design was built around is gone.

| | Before | Now |
|---|---|---|
| Pages known | 6–7 | **15** |
| Media files | 57 salvaged | **198 originals** |
| Max image width | 678px (Google cache) | **1920px** |
| Images ≥1500px | 1 | **54** |
| Images 1000–1499px | ~30 | **85** |
| Home page copy | reconstructed from snippets | **the owner's own text** |
| Email address | unknown | **cpfman11@gmail.com** |

**Retire the tier system in the old build prompt.** The `04-site-photos-678px`
folder, the 500px display cap, the no-lightbox rule on Tier C — all of that
existed to work around damage that no longer applies. Rebuild the image
inventory from the zip.

## 2. Corrected business facts

| Field | Value |
|---|---|
| Owner | Pat Flaherty |
| Email | **cpfman11@gmail.com** |
| Phone — published number | **(805) 498-4852** |
| Phone — Pat's direct cell | (805) 402-4211 |
| License | CA #878989, **C-29 Masonry / C-8 Concrete** |
| Status | Licensed, insured & bonded |
| Address | 1210 Calle Tulipan, Thousand Oaks, CA 91360 |

**Phone — resolved. Use (805) 498-4852 as the single published number.**

It is the business line, it is what the header and contact page have always led
with, and it is what the directory listings carry. **(805) 402-4211 is Pat's
direct cell.** A third number that appears once on the old home page,
(805) 885-8269, is dead — do not carry it over.

One number sitewide, and it must be the same string in all four places: the
site, the `LocalBusiness` schema, the Google Business Profile, and Yelp/Houzz.
Name-address-phone consistency is a direct local ranking input, and publishing
two numbers splits it.

The cell has one legitimate use: a single line on the contact page along the
lines of "or reach Pat directly at (805) 402-4211." That is a deliberate
owner-access touch, not a second NAP number — keep it out of the header, the
footer, the schema and every `tel:` link in the nav.

**Service area, in his own words:** Thousand Oaks, Newbury Park, Westlake
Village, Camarillo, Oxnard, Ventura, Moorpark, Simi Valley, Agoura Hills,
Calabasas, and the San Fernando Valley. Wider than what we had.

## 3. The 15 pages

Preserve every URL — the site has twenty years of indexing behind it and the new
build replaces it **on the same domain**, so a changed slug is a lost page.

| URL | Page | Notes |
|---|---|---|
| `/` | Home | Real owner copy. Use it. |
| `/services/` | Services | Icon grid, 6 icons, near-zero copy |
| `/custom-concrete/` | Custom Concrete | 33 images |
| `/custom-concrete-driveways/` | Custom Concrete Driveways | 32 images |
| `/concrete-countertops/` | Concrete Countertops | 23 images |
| `/masonry/` | Masonry | 19 images |
| `/stonework/` | Stonework | 19 images |
| `/fireplaces-and-barbecues/` | Outdoor Kitchens and Fireplaces | 43 images — biggest gallery |
| `/grading-and-excavation/` | Grading and Excavation | 25 images |
| `/featured-work/` | Featured Work | Index page, 48 chars — rebuild as a real hub |
| `/featured-project-dos-vientos-villa/` | **Dos Vientos Villa** | NEW — see below |
| `/featured-project-triunfo-ymca-baseball-fields/` | Triunfo YMCA | 24 images |
| `/featured-project-robertson-family-field-viewpoint-school/` | Viewpoint School | 63 images |
| `/about-us/` | About Us | Same copy as home |
| `/contact-us/` | Contact Us | Phone + email only |

**Seven of these were invisible to us before:** custom-concrete-driveways,
concrete-countertops, stonework, fireplaces-and-barbecues, grading-and-excavation,
featured-work, and the Dos Vientos Villa project.

### The Dos Vientos Villa page is the most valuable find

The old site had **three** featured projects, not two. Dos Vientos Villa is a
full residential exterior remodel — front yard, patio, outdoor kitchen — written
up in three sections with 11 images. It is exactly the residential showcase the
previous build lacked, and it balances the two institutional ballfield projects.
Give it equal weight to the YMCA and Viewpoint pages.

## 4. Content direction

**Use the home page copy.** It is the owner's voice and it is better than
anything we wrote. Key lines worth keeping:

- "family owned & operated"
- "We are the first in and the last out when starting a brand new home."
- "Each project is Owner supervised"
- "old-fashioned hard work and superior customer service"
- "We look forward to doing business with you and making friends along the way."

**Drop the guaranteed-completion-date angle** — Pat rejected it, and it came from
a third-party marketing company, not him. The replacement is already in his own
copy: **owner-supervised, family owned, C-29 + C-8 dual licensed, first in and
last out.** Build the positioning on those.

**Note:** `/about-us/` and `/` currently carry identical text. Differentiate them
in the rebuild — home gets the pitch, about gets the story.

## 5. Images

The zip preserves the original `YYYY/MM/` paths, so the per-page image lists in
`cpfmasonry-SITE-CAPTURE.md` map directly onto it.

- 198 files: 14 from 2015, 182 from 2016, 1 from 2020, 1 from 2025
- Widths: 54 at 1500px+, 85 at 1000–1499px, 59 under 1000px
- Largest: `2020/08/IMG_4481-2-scaled.jpg` at 1920×2560 (polished stone countertops)
- Many carry real alt text already — reuse it, it describes the actual work

The page image lists include WordPress's generated sizes (`-1024x682`, `-150x150`
etc.) alongside originals. **Always use the original**, and let Astro's image
pipeline generate the sizes.

Keep these rules from the old plan, now for different reasons:
- **No AI upscaling.** Not needed any more, and still wrong for masonry texture.
- **One image component** owning all sizing.
- Alt text describing the work, not the category.

## 6. Redirect map

Same domain, so this is a straight slug-for-slug carryover. Every URL in section
3 must resolve — either at the same path or via a 301. Crawl the live site and
diff against the new build before cutover; a missing page here is lost search
equity, not a cosmetic bug.

## 7. Security — read before touching wp-content

While pulling the media I found clear signs the site has been through a malware
infection and remediation:

- `text.php.suspected` in `wp-content` — the `.suspected` extension is what a
  scanner appends to a quarantined infected file
- Zero-byte PHP files with dropper-style names: `ibizfdkv.php`, `pictur.php`,
  `uploader.php`
- `.sucuriquarantine`, `.quarantine`, and `_CloudTech` folders in the account root
- `wp-content/uploads` has year folders for 2017–2019 and 2021–2024 that contain
  **no media library entries at all**

**This is probably why the hosting account was suspended in the first place** —
GoDaddy suspends for malware, not only for billing.

Consequences for this project:

1. **The media zip is clean.** It was built by fetching the 198 files WordPress
   itself registers as media, over HTTPS, not by copying the uploads directory.
   No PHP, no unknown year folders, no quarantined files.
2. **Do not copy anything from `wp-content` into the new build** — not the theme,
   not plugins, not the uploads folder wholesale.
3. The old site should be treated as compromised-until-proven-otherwise for as
   long as it stays up. Get a malware scan run on it, and make the new site's
   launch a priority rather than a someday.

## 8. Still open

1. Google Business Profile still shows (805) 214-1705 — a number belonging to
   nobody in this project — plus a stale Newbury Park address. Ownership appeal
   was in progress. Correcting it to (805) 498-4852 is the priority.
2. Yelp and Houzz also need the phone corrected to match.
3. Drone footage for the hero — the shot brief still stands, but the urgency is
   lower now that 54 images clear 1500px.
4. Malware scan and cleanup on the live WordPress install.
