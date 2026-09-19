import type { ImageMetadata } from 'astro';

/**
 * IMAGE POLICY — enforced here, in code, not by eye.
 *
 * Two separate limits, often confused:
 *
 *   1. DISPLAY cap  - how large a source may be *laid out* on the page.
 *      Hard limit 2x the intrinsic width. Measured: a 678px source holds to
 *      ~1356px and visibly disintegrates at 3x.
 *
 *   2. GENERATION cap - how large a file Sharp may *emit*.
 *      Never above the source's intrinsic width. Upscaling in Sharp adds bytes
 *      and zero detail: the extra pixels are interpolated from data that is not
 *      there. So widths arrays are clamped to native, always.
 *
 * Sharpening after upscaling is never enabled: it amplifies the JPEG artifacts
 * sitting where the detail used to be, and measurably worsened every test in
 * _docs/test-*.jpg. No AI upscaling either — invented stone texture reads as
 * plastic to exactly the person evaluating a mason. That is the product.
 *
 * WHAT CHANGED, 2026-09-15
 *
 * This module used to carry a five-way `Tier` enum — large / yelp / site /
 * tiny / slider — naming which salvage operation each file came out of, with a
 * hand-maintained cap per tier. That existed because the originals were gone
 * and provenance was the only available proxy for quality.
 *
 * The originals are back (191 of them, 48 at 1900-1920px), so provenance no
 * longer predicts anything and the enum was a bookkeeping tax: every new file
 * had to be classified by hand, and a misfiled one silently got the wrong cap.
 *
 * The limits are now derived from the file itself. `img.width` is ground truth,
 * it cannot drift out of sync with the asset, and a better scan of the same
 * photograph relaxes its own limits the moment it lands. Same two hard rules,
 * no classification step.
 */

export const MAX_DISPLAY_UPSCALE = 2;

/**
 * RETIRED 2026-09-19. There used to be a 1000px floor here: below it, a file
 * was judged not worth opening because the lightbox would show the viewer
 * something no bigger than the thumbnail they clicked.
 *
 * Two things killed it. It tested `img.width`, so every PORTRAIT photograph —
 * 750x1000, 669x1000, a full 1000px on its long side — failed a test written
 * for landscape, and silently refused to open. And the premise is gone: the
 * originals came back with the domain, 24 assets were repointed at them, and
 * five files in the whole set are now under 1000px.
 *
 * Everything opens. The lightbox clamps to the source's natural size instead
 * (see Layout.astro), so a small file opens small and sharp rather than blown
 * up — which is the honest version of what the floor was protecting against.
 */

/**
 * Below this, a file is a thumbnail, not a photograph. The recovered media
 * library contains 250x150 category icons and 400x300 WordPress hard-crops
 * that will happily render into a feature slot and look like a mistake.
 */
export const FEATURE_MIN_NATIVE = 800;

export class ImagePolicyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ImagePolicyError';
  }
}

/**
 * Validate a slot and return a widths array safe to hand to <Picture>.
 *
 * @param img        the imported ImageMetadata
 * @param displayW   the largest CSS width this slot is ever laid out at
 * @param label      human-readable slot name, used in the error message
 * @param maxDisplay optional hard ceiling for a file known to be soft at its
 *                   own resolution — a heavily re-compressed source, say.
 *                   Rare: the 2x rule is the general case.
 */
export function plan(
  img: ImageMetadata,
  displayW: number,
  label: string,
  maxDisplay?: number,
): number[] {
  const native = img.width;
  const hardCap = native * MAX_DISPLAY_UPSCALE;

  if (displayW > hardCap) {
    throw new ImagePolicyError(
      `[${label}] asks for ${displayW}px from a ${native}px source ` +
        `(${(displayW / native).toFixed(2)}x). The cap is ${MAX_DISPLAY_UPSCALE}x ` +
        `= ${hardCap}px. Use a higher-resolution source or redesign the slot — ` +
        `do not raise this limit.`,
    );
  }

  if (maxDisplay !== undefined && displayW > maxDisplay) {
    throw new ImagePolicyError(
      `[${label}] lays out at ${displayW}px but this asset declares a ${maxDisplay}px ` +
        `ceiling. It is softer than its pixel count suggests — see src/lib/assets.ts.`,
    );
  }

  // Generation: 1x and 2x of the display width, clamped to native, deduped.
  const candidates = [displayW, displayW * 2].map((w) => Math.min(w, native));
  return [...new Set(candidates)].sort((a, b) => a - b);
}

/** Ratio of real pixels to CSS pixels at the given layout width. */
export function density(img: ImageMetadata, displayW: number): number {
  return img.width / displayW;
}
