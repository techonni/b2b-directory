// Largeur et hauteur d'une image de /public (WebP, PNG ou JPEG), lues au moment du build.
// Elles vont dans les attributs width/height des <img> : le navigateur réserve la place
// avant le chargement et la page ne « saute » pas (Core Web Vitals : CLS).
import { readFileSync } from "node:fs";
import { join } from "node:path";

const cache = new Map<string, { width: number; height: number } | undefined>();

export function imageSize(src: string) {
  if (cache.has(src)) return cache.get(src);
  let size: { width: number; height: number } | undefined;
  try {
    const data = readFileSync(join(process.cwd(), "public", src));
    size = parse(data);
  } catch {
    size = undefined;
  }
  cache.set(src, size);
  return size;
}

function parse(data: Buffer) {
  // WebP
  if (data.toString("ascii", 0, 4) === "RIFF" && data.toString("ascii", 8, 12) === "WEBP") {
    const chunk = data.toString("ascii", 12, 16);
    if (chunk === "VP8X") return { width: 1 + data.readUIntLE(24, 3), height: 1 + data.readUIntLE(27, 3) };
    if (chunk === "VP8L") {
      const bits = data.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (chunk === "VP8 ") return { width: data.readUInt16LE(26) & 0x3fff, height: data.readUInt16LE(28) & 0x3fff };
  }
  // PNG
  if (data.readUInt32BE(0) === 0x89504e47) return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
  // JPEG
  if (data[0] === 0xff && data[1] === 0xd8) {
    let offset = 2;
    while (offset < data.length) {
      const marker = data[offset + 1];
      const length = data.readUInt16BE(offset + 2);
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { width: data.readUInt16BE(offset + 7), height: data.readUInt16BE(offset + 5) };
      }
      offset += 2 + length;
    }
  }
  return undefined;
}
