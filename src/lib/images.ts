import type { ImageMetadata } from 'astro';

/**
 * IMAGE POLICY — enforced here, in code, not by eye.
 *
 * Every photo on this site was salvaged after the original hosting account was
 * suspended. Resolution is the binding constraint on the whole design, so the
 * rules below THROW at build time rather than degrading quietly. A build that
 * fails is recoverable; a shipped page full of mush is not.
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
 * _docs/test-*.jpg.
 */

export const MAX_DISPLAY_UPSCALE = 2;

export type Tier = 'large' | 'yelp' | 'site' | 'tiny' | 'slider';

/**
 * Per-tier ceiling on CSS layout width. `null` means the only limit is the
 * generic 2x display cap above.
 */
export const TIER_DISPLAY_CAP: Record<Tier, number | null> = {
  large: null,
  yelp: null,
  /** Section 4 rule 5 — keeps the 678px set genuinely sharp. */
  site: 500,
  /** The three 320x213 dugout frames. Triunfo YMCA page only. */
  tiny: 300,
  /** 738x264 slider crops — extreme aspect, only ever a thin band. */
  slider: 738,
};

/** Only these tiers may be opened full-size. Section 4 rule 4. */
export const LIGHTBOX_TIERS: readonly Tier[] = ['large', 'yelp'];

export function canLightbox(tier: Tier): boolean {
  return LIGHTBOX_TIERS.includes(tier);
}

export class ImagePolicyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ImagePolicyError';
  }
}

/**
 * Validate a slot and return a widths array safe to hand to <Picture>.
 *
 * @param img       the imported ImageMetadata
 * @param tier      which recovery tier the file came from
 * @param displayW  the largest CSS width this slot is ever laid out at
 * @param label     human-readable slot name, used in the error message
 */
export function plan(
  img: ImageMetadata,
  tier: Tier,
  displayW: number,
  label: string,
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

  const tierCap = TIER_DISPLAY_CAP[tier];
  if (tierCap !== null && displayW > tierCap) {
    throw new ImagePolicyError(
      `[${label}] lays out at ${displayW}px but tier "${tier}" is capped at ` +
        `${tierCap}px. See src/lib/images.ts for why.`,
    );
  }

  // Generation: 1x and 2x of the display width, clamped to native, deduped.
  const candidates = [displayW, displayW * 2].map((w) => Math.min(w, native));
  const widths = [...new Set(candidates)].sort((a, b) => a - b);

  return widths;
}

/** Ratio of real pixels to CSS pixels at the given layout width. */
export function density(img: ImageMetadata, displayW: number): number {
  return img.width / displayW;
}
