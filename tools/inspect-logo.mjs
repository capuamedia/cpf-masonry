import sharp from 'sharp';

const SRC = 'src/assets/logo/cpf-logo-1080.jpg';
const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
console.log('size', width, height, 'channels', channels);

// Quantise to a coarse grid and count, to find the dominant flat colors.
const counts = new Map();
for (let i = 0; i < width * height; i++) {
  const r = data[i * channels], g = data[i * channels + 1], b = data[i * channels + 2];
  const key = `${r >> 4}_${g >> 4}_${b >> 4}`;
  const e = counts.get(key) || { n: 0, r: 0, g: 0, b: 0 };
  e.n++; e.r += r; e.g += g; e.b += b;
  counts.set(key, e);
}
const top = [...counts.entries()]
  .sort((a, b) => b[1].n - a[1].n)
  .slice(0, 18)
  .map(([k, e]) => ({
    pct: ((e.n / (width * height)) * 100).toFixed(2) + '%',
    rgb: `${Math.round(e.r / e.n)},${Math.round(e.g / e.n)},${Math.round(e.b / e.n)}`,
    hex: '#' + [e.r, e.g, e.b].map((c) => Math.round(c / e.n).toString(16).padStart(2, '0')).join(''),
  }));
console.table(top);

// Row/column extents of non-white content, to locate the oval and flames.
const isWhite = (i) => data[i * channels] > 235 && data[i * channels + 1] > 235 && data[i * channels + 2] > 235;
let top0 = -1, bot0 = -1, left0 = -1, right0 = -1;
for (let y = 0; y < height && top0 < 0; y++)
  for (let x = 0; x < width; x++) if (!isWhite(y * width + x)) { top0 = y; break; }
for (let y = height - 1; y >= 0 && bot0 < 0; y--)
  for (let x = 0; x < width; x++) if (!isWhite(y * width + x)) { bot0 = y; break; }
for (let x = 0; x < width && left0 < 0; x++)
  for (let y = 0; y < height; y++) if (!isWhite(y * width + x)) { left0 = x; break; }
for (let x = width - 1; x >= 0 && right0 < 0; x--)
  for (let y = 0; y < height; y++) if (!isWhite(y * width + x)) { right0 = x; break; }
console.log('content bbox', { top: top0, bottom: bot0, left: left0, right: right0 });

// Where does the black oval start? Scan the vertical centre column for dark runs.
const cx = Math.floor(width / 2);
const runs = [];
let cur = null;
for (let y = 0; y < height; y++) {
  const i = y * width + cx;
  const dark = data[i * channels] < 80 && data[i * channels + 1] < 80 && data[i * channels + 2] < 80;
  if (dark && !cur) cur = { from: y };
  else if (!dark && cur) { cur.to = y - 1; runs.push(cur); cur = null; }
}
if (cur) { cur.to = height - 1; runs.push(cur); }
console.log('dark runs on centre column:', runs);
