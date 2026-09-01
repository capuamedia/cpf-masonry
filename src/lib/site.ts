/** Verified business facts. Nothing here is invented — see _docs/ for provenance. */

export const SITE_URL = 'https://cpf-masonry.com';

export const BUSINESS = {
  name: 'CPF Custom Concrete and Masonry',
  shortName: 'CPF',
  legalMark: 'C.P.F.',
  tagline:
    'Your go-to provider of custom concrete, stonemasonry, backyard kitchens and more.',

  /** Primary — the number carried on the original cpfmasonry.com site. */
  phone: '(805) 498-4852',
  phoneHref: 'tel:+18054984852',

  /**
   * TODO(owner): VERIFY. A second number appears on the Houzz listing. Which of
   * the two is currently answered is unconfirmed, so it is deliberately NOT
   * rendered anywhere on the site yet. Confirm before publishing it.
   */
  phoneSecondary: '(805) 496-3766',

  /**
   * TODO_EMAIL — Google's index preserved only a fragment ending "11@GMAIL.COM".
   * Do not guess. Contact form and footer read from this; when it is null the
   * UI falls back to phone-only, which is the safe state.
   */
  email: null as string | null,

  license: '878989',
  licenseLabel: 'CA Contractor License #878989',

  /** Google Business Profile address. */
  address: {
    street: '2996 Molly Ct',
    locality: 'Newbury Park',
    region: 'CA',
    postal: '91320',
    country: 'US',
  },

  /**
   * TODO(owner): The Yelp listing shows a different address (1210 Calle Tulipan,
   * Thousand Oaks, CA). Only the GBP address is published here — one canonical
   * address is a ranking signal, two conflicting ones are a liability.
   */
  addressAlt: '1210 Calle Tulipan, Thousand Oaks, CA',

  serviceArea: [
    'Newbury Park',
    'Thousand Oaks',
    'Westlake Village',
    'Calabasas',
    'Camarillo',
    'Conejo Valley',
  ],

  ratings: {
    yelp: { value: 5.0, count: 26, approximate: true },
    google: { value: 5.0, count: 8, approximate: false },
  },
} as const;

/** Combined rating, honestly cited. 26 is approximate — see NOTES.md. */
export const AGGREGATE_RATING = {
  value: 5.0,
  count: BUSINESS.ratings.yelp.count + BUSINESS.ratings.google.count,
};

export const NAV = [
  { href: '/services/', label: 'Services' },
  { href: '/projects/', label: 'Projects' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;
