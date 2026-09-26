/** Verified business facts. Nothing here is invented — see _docs/ for provenance. */

/**
 * The original domain, recovered 2026-09-07 and rebuilt on in place.
 *
 * This is NOT a new-domain launch. The site carries twenty years of indexing
 * and every legacy URL is preserved (see REBUILD-PLAN-v2 section 6), so the
 * rebuild inherits that equity rather than starting from zero. This is the one
 * production domain; there is no second one.
 */
export const SITE_URL = 'https://cpfmasonry.com';

export const BUSINESS = {
  name: 'CPF Custom Concrete and Masonry',
  shortName: 'CPF',
  legalMark: 'C.P.F.',
  tagline:
    'Your go-to provider of custom concrete, stonemasonry, backyard kitchens and more.',

  /**
   * THE BUSINESS LINE. The single published number, sitewide.
   *
   * Resolved 2026-09-15 from the recovered site (REBUILD-PLAN-v2 section 2):
   * this is what the old contact page led with and what every directory
   * listing carries. Name-address-phone consistency is a direct local ranking
   * input, so exactly one number is published here, and it must match the
   * Google Business Profile, Yelp and Houzz.
   *
   * Change it here and it updates the header, footer, every CTA band, the
   * contact page, the meta description and the LocalBusiness structured data.
   * There are no hardcoded copies — tools/audit.mjs fails the build if a
   * superseded number reappears in the output.
   */
  phone: '(805) 498-4852',
  phoneHref: 'tel:+18054984852',

  /**
   * Pat's direct cell. Deliberately NOT a second NAP number.
   *
   * It gets exactly one appearance: a line on the contact page offering direct
   * owner access. Keep it out of the header, the footer, the schema and every
   * tel: link in the nav — publishing two numbers splits the NAP signal.
   */
  phoneOwnerCell: '(805) 402-4211',
  phoneOwnerCellHref: 'tel:+18054024211',

  /**
   * Dead numbers. Recorded so nobody restores one from a stale listing, and so
   * NOTES.md has the full set to correct across the web.
   *
   *   (805) 885-8269 — appeared once on the old home page; dead
   *   (805) 496-3766 — the Houzz listing; never published by this site
   *   (805) 214-1705 — on the Google Business Profile; belongs to nobody here
   *
   * Pat's cell (805) 402-4211 is NOT listed here — it is live, just not the
   * published NAP number. See phoneOwnerCell.
   */
  phoneFormer: ['(805) 885-8269', '(805) 496-3766', '(805) 214-1705'],

  /**
   * Recovered from the live contact page, 2026-09-15. This resolves the old
   * TODO: Google's index had preserved only a fragment ending "11@GMAIL.COM",
   * which this matches.
   *
   * The UI branches on this being non-null; the phone-only fallback stays in
   * place as the safe state if it is ever cleared.
   */
  email: 'cpfman11@gmail.com' as string | null,

  /** The owner, named in his own copy. */
  owner: 'Pat Flaherty',

  license: '878989',
  licenseLabel: 'CA Contractor License #878989',

  /**
   * Dual classification, from the owner's own copy. C-29 is masonry, C-8 is
   * concrete — holding both is the substantive version of "concrete AND
   * masonry" and is independently checkable against the CSLB record.
   */
  licenseClasses: 'C-29 Masonry / C-8 Concrete',
  licenseClassesShort: 'C-29 / C-8',
  bonded: 'Licensed, insured & bonded',

  /**
   * CONFIRMED BY THE OWNER, 2026-09-01. Trading in the Conejo Valley since 1991.
   *
   * The strongest trust signal the business has, and now doubly earned: the
   * domain itself carries twenty years of history. "Since 1991" is what tells a
   * homeowner the business is not new, and it is independently checkable
   * against the CSLB license record.
   */
  founded: 1991,

  /**
   * CONFIRMED BY THE OWNER, 2026-09-01. This is the current trading address,
   * and it matches what Yelp already shows.
   *
   * The Google Business Profile still carries the old Newbury Park address; it
   * is out of date, not an alternative. The site publishes the correct address
   * only. A website showing a stale address is worse than disagreeing with a
   * listing — the listing can be corrected, a customer already driving to the
   * wrong house cannot.
   *
   * See NOTES.md item 8. The GBP listing needs updating to match; account
   * access is being resolved.
   */
  address: {
    street: '1210 Calle Tulipan',
    locality: 'Thousand Oaks',
    region: 'CA',
    postal: '91360',
    country: 'US',
  },

  /** Superseded. Recorded only so nobody restores it from the stale GBP listing. */
  addressFormer: '2996 Molly Ct, Newbury Park, CA 91320',

  /**
   * The owner's own list, from the recovered home page copy. Wider than the
   * Conejo-Valley-only list we had been working from.
   */
  serviceArea: [
    'Thousand Oaks',
    'Newbury Park',
    'Westlake Village',
    'Camarillo',
    'Oxnard',
    'Ventura',
    'Moorpark',
    'Simi Valley',
    'Agoura Hills',
    'Calabasas',
    'the San Fernando Valley',
  ],

  /**
   * NOT FOR DISPLAY. These counts are a dated snapshot and they go stale on
   * their own: reviews arrive whenever a customer writes one, and nothing here
   * finds out.
   *
   * `value` (5.0 on both) is stable and safe to publish. `count` exists only to
   * satisfy schema.org, which requires a reviewCount on an AggregateRating.
   * **Do not put a count in page copy.** Owner's call, 2026-09-26: "34 reviews"
   * undersells thirty-five years of work, and a hardcoded number that drifts is
   * worse than no number. Both pages that used to print these now say simply
   * "five stars on Yelp and Google" and let the live widget carry the volume.
   *
   * Last checked against the listings: 2026-09-15. See NOTES.md.
   */
  ratings: {
    yelp: { value: 5.0, count: 26, approximate: true },
    google: { value: 5.0, count: 8, approximate: false },
  },
} as const;

/**
 * Years trading, computed at build time.
 *
 * Prefer the literal "since 1991" in body copy — it never goes stale. Use this
 * only where the count itself is the point ("35 years"), and be aware it is
 * only correct as of the last build. The site is static and rebuilt on every
 * deploy, so in practice it rolls over within a deploy cycle of New Year.
 */
export const YEARS_IN_BUSINESS = new Date().getFullYear() - BUSINESS.founded;

/**
 * Structured-data only — consumed by the LocalBusiness node in Layout.astro and
 * rendered on no page. `count` is a snapshot and will lag reality; see the note
 * on BUSINESS.ratings. If you want it in copy, you want the live widget instead.
 */
export const AGGREGATE_RATING = {
  value: 5.0,
  count: BUSINESS.ratings.yelp.count + BUSINESS.ratings.google.count,
};

/**
 * THESE SLUGS ARE THE ONES THE OLD SITE USED. DO NOT "TIDY" THEM.
 *
 * The rebuild replaces cpfmasonry.com in place, and those URLs carry twenty
 * years of indexing and inbound links. `/about-us/` rather than `/about/`, and
 * `/featured-work/` rather than `/projects/`, are deliberate: a prettier slug
 * here costs a page its history. Every legacy URL is listed in
 * REBUILD-PLAN-v2.md section 3, and the full set is asserted by tools/audit.mjs.
 */
export const NAV = [
  { href: '/services/', label: 'Services' },
  { href: '/featured-work/', label: 'Featured Work' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/about-us/', label: 'About' },
  { href: '/contact-us/', label: 'Contact' },
] as const;
