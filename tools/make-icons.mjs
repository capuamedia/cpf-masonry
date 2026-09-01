/**
 * Rasterises favicon.svg into the formats browsers still insist on.
 * favicon.ico is hand-packed: the ICO container is a 6-byte header plus one
 * 16-byte directory entry per image, and PNG payloads are legal inside it.
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';

const svg = readFileSync('public/favicon.svg');

// Apple touch icon needs an opaque background — iOS does not composite alpha.
await sharp(svg, { density: 600 })
  .resize(180, 180, { fit: 'contain', background: '#ffffff' })
  .flatten({ background: '#ffffff' })
  .png()
  .toFile('public/apple-touch-icon.png');

await sharp(svg, { density: 600 }).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png().toFile('public/icon-512.png');

const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((s) =>
    sharp(svg, { density: 600 })
      .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toBuffer(),
  ),
);

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);            // reserved
header.writeUInt16LE(1, 2);            // type: icon
header.writeUInt16LE(sizes.length, 4); // image count

let offset = 6 + 16 * sizes.length;
const entries = sizes.map((s, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(s >= 256 ? 0 : s, 0);   // width  (0 means 256)
  e.writeUInt8(s >= 256 ? 0 : s, 1);   // height
  e.writeUInt8(0, 2);                  // palette size
  e.writeUInt8(0, 3);                  // reserved
  e.writeUInt16LE(1, 4);               // colour planes
  e.writeUInt16LE(32, 6);              // bits per pixel
  e.writeUInt32LE(pngs[i].length, 8);  // payload size
  e.writeUInt32LE(offset, 12);         // payload offset
  offset += pngs[i].length;
  return e;
});

writeFileSync('public/favicon.ico', Buffer.concat([header, ...entries, ...pngs]));
console.log('wrote apple-touch-icon.png, icon-512.png, favicon.ico (' + sizes.join('/') + ')');
