/**
 * Traces cpf-logo-1080.jpg to SVG.
 *
 * The logo is a flat, vector-origin design that only survives as a 1080px JPEG
 * off the company Instagram. Tracing restores crisp edges at any size and, more
 * importantly, transparency — the JPEG has white baked in and looks wrong on
 * any tinted surface.
 *
 * Approach:
 *   - The oval is near-perfect geometry, so it is drawn PARAMETRICALLY from
 *     measured radii rather than traced. Tracing JPEG-wobbled ellipse edges
 *     would bake compression noise into the mark.
 *   - The flames and lettering are genuinely irregular, so they ARE traced:
 *     marching squares -> contour chaining -> Douglas-Peucker -> curve fitting
 *     with corner preservation (sharp vertices stay sharp, flame tips stay smooth).
 */
import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'node:fs';

const W = 1080, H = 1080;
const { data } = await sharp('src/assets/logo/cpf-logo-1080.jpg')
  .raw().toBuffer({ resolveWithObject: true });

const at = (x, y) => {
  const i = (y * W + x) * 3;
  return [data[i], data[i + 1], data[i + 2]];
};

// --- measured oval geometry (see tools/probe-oval.mjs) -----------------------
const OVAL = {
  cx: 545, cy: 719,
  black: { rx: 523, ry: 114 },
  white: { rx: 448, ry: 99.5 },
  red:   { rx: 443, ry: 94.5 },
};
const inEllipse = (x, y, rx, ry) =>
  ((x - OVAL.cx) / rx) ** 2 + ((y - OVAL.cy) / ry) ** 2 <= 1;

// --- pixel classification ----------------------------------------------------
const isWarm  = (r, g, b) => r > 140 && r - b > 55;
const isBlack = (r, g, b) => r < 85 && g < 85 && b < 85;
const isChrome = (r, g, b) => {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
  return mx - mn < 48 && r > 85 && r < 215;
};

function buildMask(fn) {
  const m = new Uint8Array(W * H);
  for (let y = 0; y < H; y++)
    for (let x = 0; x < W; x++) {
      const [r, g, b] = at(x, y);
      if (fn(x, y, r, g, b)) m[y * W + x] = 1;
    }
  return m;
}

/** Remove specks and fill pinholes — JPEG noise, not design intent. */
function despeckle(mask, minArea) {
  const seen = new Uint8Array(W * H);
  const out = new Uint8Array(W * H);
  const stack = new Int32Array(W * H);
  for (let s = 0; s < W * H; s++) {
    if (!mask[s] || seen[s]) continue;
    let sp = 0, n = 0;
    const comp = [];
    stack[sp++] = s; seen[s] = 1;
    while (sp) {
      const p = stack[--sp];
      comp.push(p); n++;
      const x = p % W, y = (p / W) | 0;
      if (x > 0     && mask[p - 1] && !seen[p - 1]) { seen[p - 1] = 1; stack[sp++] = p - 1; }
      if (x < W - 1 && mask[p + 1] && !seen[p + 1]) { seen[p + 1] = 1; stack[sp++] = p + 1; }
      if (y > 0     && mask[p - W] && !seen[p - W]) { seen[p - W] = 1; stack[sp++] = p - W; }
      if (y < H - 1 && mask[p + W] && !seen[p + W]) { seen[p + W] = 1; stack[sp++] = p + W; }
    }
    if (n >= minArea) for (const p of comp) out[p] = 1;
  }
  return out;
}

// --- marching squares --------------------------------------------------------
const KEY = (x, y) => `${x.toFixed(1)},${y.toFixed(1)}`;

function contours(mask) {
  const v = (x, y) => (x < 0 || y < 0 || x >= W || y >= H ? 0 : mask[y * W + x]);
  const segs = new Map(); // start -> [end]

  const add = (a, b) => {
    const k = KEY(a[0], a[1]);
    if (!segs.has(k)) segs.set(k, []);
    segs.get(k).push(b);
  };

  for (let y = -1; y < H; y++) {
    for (let x = -1; x < W; x++) {
      const tl = v(x, y), tr = v(x + 1, y), bl = v(x, y + 1), br = v(x + 1, y + 1);
      const code = (tl << 3) | (tr << 2) | (br << 1) | bl;
      if (code === 0 || code === 15) continue;
      const T = [x + 0.5, y], R = [x + 1, y + 0.5], B = [x + 0.5, y + 1], L = [x, y + 0.5];
      switch (code) {
        case 1:  add(L, B); break;
        case 2:  add(B, R); break;
        case 3:  add(L, R); break;
        case 4:  add(R, T); break;
        case 5:  add(L, T); add(R, B); break;
        case 6:  add(B, T); break;
        case 7:  add(L, T); break;
        case 8:  add(T, L); break;
        case 9:  add(T, B); break;
        case 10: add(T, R); add(B, L); break;
        case 11: add(T, R); break;
        case 12: add(R, L); break;
        case 13: add(R, B); break;
        case 14: add(B, L); break;
      }
    }
  }

  const loops = [];
  while (segs.size) {
    const [startKey] = segs.keys();
    let curKey = startKey;
    const loop = [];
    while (true) {
      const outs = segs.get(curKey);
      if (!outs || !outs.length) break;
      const next = outs.pop();
      if (!outs.length) segs.delete(curKey);
      loop.push(next);
      curKey = KEY(next[0], next[1]);
      if (curKey === startKey) break;
    }
    if (loop.length > 7) loops.push(loop);
  }
  return loops;
}

// --- Douglas-Peucker ---------------------------------------------------------
function rdp(pts, eps) {
  if (pts.length < 3) return pts;
  let maxD = 0, idx = 0;
  const [ax, ay] = pts[0], [bx, by] = pts[pts.length - 1];
  const dx = bx - ax, dy = by - ay;
  const len = Math.hypot(dx, dy) || 1;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = Math.abs((pts[i][0] - ax) * dy - (pts[i][1] - ay) * dx) / len;
    if (d > maxD) { maxD = d; idx = i; }
  }
  if (maxD <= eps) return [pts[0], pts[pts.length - 1]];
  return [...rdp(pts.slice(0, idx + 1), eps).slice(0, -1), ...rdp(pts.slice(idx), eps)];
}

/**
 * Emit a path. Vertices whose interior angle is sharper than `cornerDeg` are
 * kept as hard corners; everything else becomes a quadratic through segment
 * midpoints, which is what keeps flame tips smooth and letter corners crisp.
 */
function toPath(loop, eps, cornerDeg) {
  let pts = rdp(loop, eps);
  if (pts.length > 2) {
    const f = pts[0], l = pts[pts.length - 1];
    if (Math.hypot(f[0] - l[0], f[1] - l[1]) < 0.01) pts = pts.slice(0, -1);
  }
  const n = pts.length;
  if (n < 3) return '';

  const cosLimit = Math.cos((cornerDeg * Math.PI) / 180);
  const sharp = pts.map((p, i) => {
    const a = pts[(i - 1 + n) % n], b = pts[(i + 1) % n];
    const v1 = [a[0] - p[0], a[1] - p[1]], v2 = [b[0] - p[0], b[1] - p[1]];
    const m1 = Math.hypot(...v1) || 1, m2 = Math.hypot(...v2) || 1;
    const cos = (v1[0] * v2[0] + v1[1] * v2[1]) / (m1 * m2);
    return cos > cosLimit; // angle tighter than the limit => real corner
  });

  const r = (v) => Math.round(v * 10) / 10;
  const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  let d = '';
  const startPt = sharp[0] ? pts[0] : mid(pts[n - 1], pts[0]);
  d += `M${r(startPt[0])} ${r(startPt[1])}`;
  for (let i = 0; i < n; i++) {
    const cur = pts[i], nxt = pts[(i + 1) % n];
    if (sharp[i]) d += `L${r(cur[0])} ${r(cur[1])}`;
    const end = sharp[(i + 1) % n] ? nxt : mid(cur, nxt);
    if (sharp[i]) d += `L${r(end[0])} ${r(end[1])}`;
    else d += `Q${r(cur[0])} ${r(cur[1])} ${r(end[0])} ${r(end[1])}`;
  }
  return d + 'Z';
}

function tracePaths(mask, { eps = 0.9, corner = 100, minArea = 40 } = {}) {
  const clean = despeckle(mask, minArea);
  return contours(clean).map((l) => toPath(l, eps, corner)).filter(Boolean).join('');
}

// --- build the layers --------------------------------------------------------
console.log('tracing flames...');
const flames = tracePaths(
  buildMask((x, y, r, g, b) => isWarm(r, g, b) && !inEllipse(x, y, OVAL.black.rx + 1, OVAL.black.ry + 1)),
  { eps: 0.85, corner: 95, minArea: 120 },
);

// Split the inner black into the big letter outlines and the small tagline.
// Find the horizontal gap between them by row density.
const innerBlack = buildMask((x, y, r, g, b) => isBlack(r, g, b) && inEllipse(x, y, OVAL.red.rx - 2, OVAL.red.ry - 2));
const rowCount = new Array(H).fill(0);
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (innerBlack[y * W + x]) rowCount[y]++;
let split = 770;
for (let y = 740; y < 800; y++) if (rowCount[y] < rowCount[split]) split = y;
console.log('letter/tagline split row =', split, '(density', rowCount[split] + ')');

console.log('tracing letter outlines...');
const letterOutline = tracePaths(
  buildMask((x, y, r, g, b) => isBlack(r, g, b) && inEllipse(x, y, OVAL.red.rx - 2, OVAL.red.ry - 2) && y < split),
  { eps: 0.7, corner: 115, minArea: 60 },
);
console.log('tracing tagline...');
const tagline = tracePaths(
  buildMask((x, y, r, g, b) => isBlack(r, g, b) && inEllipse(x, y, OVAL.red.rx - 2, OVAL.red.ry - 2) && y >= split),
  { eps: 0.45, corner: 125, minArea: 12 },
);
console.log('tracing chrome faces...');
const chrome = tracePaths(
  buildMask((x, y, r, g, b) => isChrome(r, g, b) && inEllipse(x, y, OVAL.red.rx - 2, OVAL.red.ry - 2)),
  { eps: 0.7, corner: 115, minArea: 60 },
);

const defs = `<defs>
<linearGradient id="cpf-flame" gradientUnits="userSpaceOnUse" x1="0" y1="52" x2="0" y2="648">
<stop offset="0" stop-color="#FEF202"/><stop offset=".28" stop-color="#FBC343"/>
<stop offset=".5" stop-color="#F58747"/><stop offset=".72" stop-color="#F2673C"/>
<stop offset="1" stop-color="#E01B22"/></linearGradient>
<linearGradient id="cpf-chrome" gradientUnits="userSpaceOnUse" x1="0" y1="655" x2="0" y2="775">
<stop offset="0" stop-color="#D3D7DC"/><stop offset=".45" stop-color="#9AA0A6"/>
<stop offset=".62" stop-color="#6E747C"/><stop offset="1" stop-color="#AEB4BA"/></linearGradient>
</defs>`;

const ovalSvg =
  `<ellipse cx="${OVAL.cx}" cy="${OVAL.cy}" rx="${OVAL.black.rx}" ry="${OVAL.black.ry}" fill="#111111"/>` +
  `<ellipse cx="${OVAL.cx}" cy="${OVAL.cy}" rx="${OVAL.white.rx}" ry="${OVAL.white.ry}" fill="#FFFFFF"/>` +
  `<ellipse cx="${OVAL.cx}" cy="${OVAL.cy}" rx="${OVAL.red.rx}" ry="${OVAL.red.ry}" fill="#E01B22"/>`;

const flameSvg = `<path d="${flames}" fill="url(#cpf-flame)" fill-rule="evenodd"/>`;
const outlineSvg = `<path d="${letterOutline}" fill="#111111" fill-rule="evenodd"/>`;
const chromeSvg = `<path d="${chrome}" fill="url(#cpf-chrome)" fill-rule="evenodd"/>`;
const taglineSvg = `<path d="${tagline}" fill="#111111" fill-rule="evenodd"/>`;

const VB = '0 44 1080 800';
const wrap = (title, body, vb = VB) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" role="img" aria-label="${title}">` +
  `<title>${title}</title>${defs}${body}</svg>\n`;

mkdirSync('public', { recursive: true });

writeFileSync('public/logo.svg',
  wrap('CPF Custom Concrete and Masonry',
    flameSvg + ovalSvg + outlineSvg + chromeSvg + taglineSvg));

// Mark: everything except the small tagline, which is illegible below ~80px.
writeFileSync('public/logo-mark.svg',
  wrap('CPF Custom Concrete and Masonry',
    flameSvg + ovalSvg + outlineSvg + chromeSvg));

// Favicon: the mark, cropped square around the oval so it reads in a 16px tab.
writeFileSync('public/favicon.svg',
  wrap('CPF', flameSvg + ovalSvg + outlineSvg + chromeSvg, '8 -90 1066 1066'));

const kb = (s) => (Buffer.byteLength(s) / 1024).toFixed(1) + 'KB';
console.log('flames  ', kb(flames), flames.length, 'chars');
console.log('outline ', kb(letterOutline));
console.log('chrome  ', kb(chrome));
console.log('tagline ', kb(tagline));
console.log('wrote public/logo.svg, logo-mark.svg, favicon.svg');
