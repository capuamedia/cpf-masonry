import type { APIRoute } from 'astro';

/**
 * robots.txt is generated rather than static so the GitHub Pages demo can be
 * locked out of search while production stays fully crawlable.
 *
 * A duplicate of this site ranking on github.io would compete with
 * cpfmasonry.com for its own brand name, which carries twenty years of indexing.
 */
const isDemo = process.env.DEPLOY_TARGET === 'github-pages';

const PRODUCTION = `User-agent: *
Allow: /

Sitemap: https://cpfmasonry.com/sitemap-index.xml
`;

const DEMO = `# Review build - not the live site.
# The live site is https://cpfmasonry.com
User-agent: *
Disallow: /
`;

export const GET: APIRoute = () =>
  new Response(isDemo ? DEMO : PRODUCTION, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
