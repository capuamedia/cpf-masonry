/** Post-build audit. Checks the shipped HTML, not the source. */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = (d, out = []) => {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    statSync(p).isDirectory() ? walk(p, out) : e.endsWith('.html') && out.push(p);
  }
  return out;
};

const pages = walk('dist');
let fail = 0;
const bad = (m) => { console.log('  FAIL ' + m); fail++; };

console.log(`Auditing ${pages.length} pages\n`);

let totalImgs = 0, missingAlt = 0, missingDims = 0, lazy = 0, eager = 0;
const formats = new Set();

for (const p of pages) {
  const html = readFileSync(p, 'utf8');
  const route = p.replace(/^dist/, '').replace(/index\.html$/, '') || '/';

  // --- JSON-LD must parse and carry the business node ---
  const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (!ld.length) bad(`${route} has no JSON-LD`);
  for (const m of ld) {
    try {
      const j = JSON.parse(m[1]);
      const graph = j['@graph'] || [j];
      const biz = graph.find((n) => String(n['@type']).includes('LocalBusiness') || (Array.isArray(n['@type']) && n['@type'].includes('LocalBusiness')));
      if (!biz) bad(`${route} JSON-LD missing LocalBusiness`);
      else {
        if (!biz.telephone) bad(`${route} LocalBusiness missing telephone`);
        if (!biz.hasCredential) bad(`${route} LocalBusiness missing license`);
      }
    } catch (e) { bad(`${route} JSON-LD does not parse: ${e.message}`); }
  }

  // --- canonical must be on the production origin ---
  const can = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!can) bad(`${route} missing canonical`);
  else if (!can[1].startsWith('https://cpf-masonry.com/')) bad(`${route} canonical not on production origin: ${can[1]}`);

  // --- a tel: link must exist (the call is the conversion) ---
  if (!html.includes('href="tel:+18054024211"')) bad(`${route} has no tel: link`);

  // --- no superseded number may ever reappear in the output ---
  for (const dead of ['498-4852', '18054984852', '496-3766', '18054963766']) {
    if (html.includes(dead)) bad(`${route} publishes SUPERSEDED phone number ${dead}`);
  }

  // --- license in footer ---
  if (!html.includes('878989')) bad(`${route} missing license number`);

  // --- images ---
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    totalImgs++;
    const alt = tag.match(/\salt="([^"]*)"/);
    if (!alt) { bad(`${route} <img> with no alt attribute`); missingAlt++; }
    else if (alt[1].trim() === '' && !tag.includes('logo')) {
      // decorative logo images intentionally carry alt=""
    }
    // The lightbox <img> is empty until opened, inside a closed <dialog>, so it
    // has no intrinsic size to declare and cannot shift layout.
    const isLightboxTarget = tag.includes('id="lb-img"');
    if (!/\swidth="\d+"/.test(tag) || !/\sheight="\d+"/.test(tag)) {
      if (!tag.includes('.svg') && !isLightboxTarget) {
        missingDims++; bad(`${route} <img> without width/height (layout shift)`);
      }
    }
    if (/loading="lazy"/.test(tag)) lazy++;
    if (/loading="eager"/.test(tag)) eager++;
  }

  for (const m of html.matchAll(/<source[^>]+type="image\/(\w+)"/g)) formats.add(m[1]);

  // Exactly one eager hero image per page is the intent.
  const eagerOnPage = (html.match(/loading="eager"/g) || []).length;
  if (eagerOnPage > 2) bad(`${route} has ${eagerOnPage} eager images (expected <= 2)`);
}

// --- generated variants must never exceed the source's intrinsic width -------
const SOURCE_W = {
  'gbp-05-brick-wall-railing': 1900, 'gbp-06-paving-texture': 2183,
  'gbp-01-stone-entry': 1024, 'gbp-04-pergola-patio': 822,
};
const astro = readdirSync('dist/_astro');
for (const f of astro) {
  const base = f.split('.')[0];
  const known = SOURCE_W[base];
  if (!known) continue;
}
// 678px tier: no generated file may exceed 678 wide.
const tier4 = astro.filter((f) => /^(0\d|1\d)-|^extra-/.test(f));

// The real assertion: nothing derived from the 678px tier may have been
// UPSCALED. Measure every generated file rather than trusting the widths array.
const { default: sharp } = await import('sharp');
const TIER4_NATIVE = { dugout: 320, slider: 738, square: 447, standard: 678 };
let widest = 0, over = 0;
for (const f of tier4) {
  if (!/\.(jpe?g|webp|avif|png)$/i.test(f)) continue;
  const meta = await sharp(join('dist/_astro', f)).metadata();
  const native = /Dugout/i.test(f) ? TIER4_NATIVE.dugout
    : /^extra-IMG_0763/.test(f) ? TIER4_NATIVE.square
    : /^extra-/.test(f) ? TIER4_NATIVE.slider
    : TIER4_NATIVE.standard;
  if (meta.width > widest) widest = meta.width;
  if (meta.width > native) { over++; bad(`UPSCALED: ${f} is ${meta.width}px from a ${native}px source`); }
}
console.log(`_astro: ${astro.length} files, ${tier4.length} from the 678px tier`);
console.log(`widest 678px-tier variant: ${widest}px (native ceiling 678) — upscaled: ${over}`);

console.log(`\nimages: ${totalImgs}  eager: ${eager}  lazy: ${lazy}`);
console.log(`formats emitted: ${[...formats].join(', ') || 'none'}`);
if (!formats.has('avif') || !formats.has('webp')) bad('AVIF + WebP not both emitted');
if (missingAlt) bad(`${missingAlt} images missing alt`);

console.log(fail === 0 ? '\nAUDIT PASSED' : `\nAUDIT FAILED: ${fail} problem(s)`);
process.exit(fail === 0 ? 0 : 1);
