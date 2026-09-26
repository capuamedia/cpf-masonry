import { A, type Asset } from './assets';

/**
 * TODO_PAIRING — before/after pairs.
 *
 * Filename order does NOT reliably match: yelp-07 sits in the "before-during"
 * folder but shows a completed block wall. A mismatched pair is worse than no
 * section at all — it makes a contractor look like he is passing off someone
 * else's job — so ONLY pairs with `confirmed: true` are rendered. Everything
 * else waits for the owner's eye.
 *
 * To publish a candidate: verify it is one job, then flip `confirmed` to true.
 * Candidates awaiting that call are laid out on the demo-only page at
 * /review/pairings/ — see src/pages/review/[slug].astro.
 *
 * Both current pairs are owner-confirmed (2026-09-26). Two further candidates,
 * yelp-09 -> yelp-10 and yelp-12 -> yelp-03, were reviewed and REJECTED: he
 * looked at them and did not want them. Do not reinstate them from the git
 * history on the assumption they were merely unfinished.
 */
export interface Pair {
  before: Asset;
  after: Asset;
  confirmed: boolean;
  title: string;
  caption: string;
  /** Why this pairing is believed to be one job. Kept for the owner's review. */
  evidence: string;
  /**
   * Source filenames, so the owner and the code refer to the same frame. These
   * were trailing comments; they are data now because the review page at
   * /review/pairings/ prints them for the owner to quote back.
   */
  sources: { before: string; after: string };
}

export const PAIRS: Pair[] = [
  {
    before: A.beforePalmsDirt,
    after: A.beforeLongWall,
    sources: { before: 'yelp-11', after: 'yelp-07' },
    confirmed: true,
    title: 'Block wall replacing a failing fence',
    caption:
      'An old timber fence on a bare property line, replaced with a tan split-face block wall on new footings.',
    evidence:
      'Same location, verified visually rather than by filename: identical tile-roofed house and chimney in the left-centre background, the same palm cluster and Italian cypresses to the right, the same white gazebo behind, and the same pine at far left. The new wall follows the exact line of the removed fence.',
  },

  {
    before: A.yardFenceFailing,
    after: A.yardWallFinished,
    sources: { before: 'yelp-02', after: 'yelp-01' },
    confirmed: true,
    title: 'Block wall on a back property line',
    caption:
      'A leaning timber fence along the rear boundary, replaced with a tan block wall built on the same line.',
    evidence:
      'Owner-confirmed 2026-09-26. Same property in both frames: identical tile-roofed house and brick chimney, the same ridge line behind, the same shed at left. The order was originally reversed, and the job was originally described as concrete flatwork -- wrong on both counts. The concrete slab appears in BOTH frames, so it is not the work; the wall is. yelp-02 has the failing fence, yelp-01 has the wall on the same line.',
  },
];

export const CONFIRMED_PAIRS = PAIRS.filter((p) => p.confirmed);

/** Still awaiting the owner's verdict. Rendered on the review build only. */
export const CANDIDATE_PAIRS = PAIRS.filter((p) => !p.confirmed);
