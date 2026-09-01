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
 */
export interface Pair {
  before: Asset;
  after: Asset;
  confirmed: boolean;
  title: string;
  caption: string;
  /** Why this pairing is believed to be one job. Kept for the owner's review. */
  evidence: string;
}

export const PAIRS: Pair[] = [
  {
    before: A.beforePalmsDirt, // yelp-11
    after: A.beforeLongWall, // yelp-07
    confirmed: true,
    title: 'Block wall replacing a failing fence',
    caption:
      'An old timber fence on a bare property line, replaced with a tan split-face block wall on new footings.',
    evidence:
      'Same location, verified visually rather than by filename: identical tile-roofed house and chimney in the left-centre background, the same palm cluster and Italian cypresses to the right, the same white gazebo behind, and the same pine at far left. The new wall follows the exact line of the removed fence.',
  },

  // ---- candidates: NOT confirmed, NOT rendered -------------------------------
  {
    before: A.beforeYardDirt, // yelp-01
    after: A.beforeYardPoured, // yelp-02
    confirmed: false,
    title: 'Concrete flatwork on a bare lot',
    caption: 'Graded dirt yard through to finished concrete flatwork.',
    evidence:
      'Strong candidate. Same hills, same tile-roofed houses and the same fence line in both frames. Unconfirmed only because both frames are mid-job, so which is genuinely "after" needs the owner to say.',
  },
  {
    before: A.beforeFenceDirt, // yelp-09
    after: A.duringBlockWall, // yelp-10
    confirmed: false,
    title: 'Block wall along a side yard',
    caption: 'Side yard before work, and the block wall going in.',
    evidence:
      'Both portrait, both a narrow side yard with similar planting. Weaker: no single landmark appears in both frames.',
  },
  {
    before: A.duringBrickWall, // yelp-12
    after: A.brickWallTrees, // yelp-03
    confirmed: false,
    title: 'Brick garden wall',
    caption: 'Brick wall part-built, and the finished run.',
    evidence:
      'Both show a red brick wall of similar coursing with mature trees behind. Needs confirming that it is one job and not two brick walls at different addresses.',
  },
];

export const CONFIRMED_PAIRS = PAIRS.filter((p) => p.confirmed);
