import sharp from 'sharp';

const { data, info } = await sharp('src/assets/logo/cpf-logo-1080.jpg')
  .raw().toBuffer({ resolveWithObject: true });
const { width, channels: ch } = info;
const px = (x, y) => [data[(y * width + x) * ch], data[(y * width + x) * ch + 1], data[(y * width + x) * ch + 2]];
const isBlack = (x, y) => { const [r, g, b] = px(x, y); return r < 80 && g < 80 && b < 80; };
const isWhite = (x, y) => { const [r, g, b] = px(x, y); return r > 232 && g > 232 && b > 232; };
const isRed = (x, y) => { const [r, g, b] = px(x, y); return r > 170 && g < 90 && b < 90; };

// --- horizontal scan through the oval's vertical centre ---------------------
const cy = 719;
const row = [];
let state = null, start = 0;
for (let x = 0; x < width; x++) {
  const s = isBlack(x, cy) ? 'K' : isWhite(x, cy) ? 'W' : isRed(x, cy) ? 'R' : '?';
  if (s !== state) { if (state) row.push(`${state}:${start}-${x - 1}`); state = s; start = x; }
}
row.push(`${state}:${start}-${width - 1}`);
console.log('row y=719 :', row.join('  '));

// --- vertical scan through the oval's horizontal centre ---------------------
const cx = 540;
const col = [];
state = null; start = 0;
for (let y = 560; y < 900; y++) {
  const s = isBlack(cx, y) ? 'K' : isWhite(cx, y) ? 'W' : isRed(cx, y) ? 'R' : '?';
  if (s !== state) { if (state) col.push(`${state}:${start}-${y - 1}`); state = s; start = y; }
}
col.push(`${state}:${start}-899`);
console.log('col x=540 :', col.join('  '));

// --- a column clear of the lettering, to read the ring cleanly ---------------
for (const testX of [120, 200, 900, 960]) {
  const c = [];
  state = null; start = 0;
  for (let y = 560; y < 900; y++) {
    const s = isBlack(testX, y) ? 'K' : isWhite(testX, y) ? 'W' : isRed(testX, y) ? 'R' : '?';
    if (s !== state) { if (state) c.push(`${state}:${start}-${y - 1}`); state = s; start = y; }
  }
  c.push(`${state}:${start}-899`);
  console.log(`col x=${testX} :`, c.join('  '));
}

// --- extremes of the black oval ---------------------------------------------
let minX = 9e9, maxX = -1, minY = 9e9, maxY = -1;
for (let y = 560; y < 900; y++)
  for (let x = 0; x < width; x++)
    if (isBlack(x, y)) { if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y; }
console.log('black-in-oval-band bbox', { minX, maxX, minY, maxY });
console.log('=> cx', (minX + maxX) / 2, 'cy', (minY + maxY) / 2, 'rx', (maxX - minX) / 2, 'ry', (maxY - minY) / 2);
