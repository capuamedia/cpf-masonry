// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * DEPLOY TARGETS
 *
 *   Cloudflare Pages (production)  -> cpf-masonry.com, served from root.
 *   GitHub Pages     (demo/review) -> capuamedia.github.io/<repo>/, served
 *                                     from a subpath, and deliberately noindexed.
 *
 * The Pages base path is derived from GITHUB_REPOSITORY at build time rather
 * than hardcoded, so creating the repo under any name Just Works with no code
 * change. Locally and on Cloudflare, DEPLOY_TARGET is unset and base stays '/'.
 */
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

/** "owner/repo" -> "repo". Undefined outside Actions. */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];

/**
 * A custom domain on GitHub Pages serves from root, so allow the workflow to
 * opt out of the subpath by setting PAGES_CUSTOM_DOMAIN=true.
 */
const usesSubpath =
  isGitHubPages && repoName && process.env.PAGES_CUSTOM_DOMAIN !== 'true';

export default defineConfig({
  /**
   * Canonical origin stays the production domain on EVERY target. Section 8 of
   * the build brief: cpf-masonry.com starts from zero search equity, so a
   * github.io copy must never compete with it for the brand name. The demo is
   * additionally noindexed via src/pages/robots.txt.ts and the <Layout> meta.
   *
   * NOTE: because `base` is prefixed onto Astro.url.pathname, canonical tags
   * must be built with canonicalURL() from src/lib/urls.ts, which strips it.
   * Do not use `new URL(Astro.url.pathname, Astro.site)` directly.
   */
  site: 'https://cpf-masonry.com',

  base: usesSubpath ? `/${repoName}` : undefined,

  trailingSlash: 'always',
  build: { format: 'directory' },

  // The demo build is noindexed, so keep it out of the sitemap entirely.
  integrations: isGitHubPages ? [] : [sitemap()],

  vite: { plugins: [tailwindcss()] },

  image: {
    // Astro's sharp service does NOT sharpen by default, and it must stay that
    // way. Sharpening after an upscale amplifies the JPEG artifacts sitting
    // where the detail used to be - see src/lib/images.ts.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
