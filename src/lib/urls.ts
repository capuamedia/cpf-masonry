import { SITE_URL } from './site';

/**
 * URL helpers that survive being served from a subpath.
 *
 * The GitHub Pages demo lives at capuamedia.github.io/cpf-masonry/, so every
 * internal href and every canonical tag has to account for a base prefix that
 * is absent on Cloudflare. Astro injects the base into import.meta.env.BASE_URL
 * ('/' or '/cpf-masonry/') and into Astro.url.pathname, but NOT into hrefs you
 * write by hand.
 */

/** '/' in production and locally; '/cpf-masonry/' on the Pages demo. */
export const BASE: string = import.meta.env.BASE_URL || '/';

/** True only on the GitHub Pages review build. Drives noindex. */
export const IS_DEMO: boolean =
  import.meta.env.DEPLOY_TARGET === 'github-pages' ||
  process.env.DEPLOY_TARGET === 'github-pages';

/**
 * Prefix an internal path with the deploy base.
 * Use for EVERY internal href, src and form action: withBase('/services/').
 */
export function withBase(path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return (BASE.endsWith('/') ? BASE : BASE + '/') + clean;
}

/**
 * Canonical URL for a page, always on the production origin and always with the
 * deploy base stripped.
 *
 * The demo must never present itself as a competing copy: cpf-masonry.com is a
 * brand-new domain with no accumulated equity (build brief section 8), and a
 * github.io duplicate ranking for "CPF masonry" would split what little there
 * is. So canonicals point at production from every target.
 *
 * Pass Astro.url.pathname.
 */
export function canonicalURL(pathname: string): string {
  let p = pathname;

  if (BASE !== '/' ) {
    const b = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
    if (p === b) p = '/';
    else if (p.startsWith(b + '/')) p = p.slice(b.length);
  }

  p = ('/' + p).replace(/\/{2,}/g, '/');
  if (!p.endsWith('/')) p += '/';

  return new URL(p, SITE_URL).href;
}
