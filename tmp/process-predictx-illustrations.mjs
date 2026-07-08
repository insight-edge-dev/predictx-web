import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.resolve("tmp/predictx-illustrations");
const outDir = path.resolve("public/illustrations");

const names = [
  "prediction-intelligence",
  "global-tournament",
  "ai-confidence",
  "league-network",
  "prediction-flow",
  "data-mesh",
  "radar-sphere",
];

const canvasSize = 2400;
const maxArtworkSize = 1520;
const trimPadding = 96;

function distance(a, b) {
  const dr = a[0] - b[0];
  const dg = a[1] - b[1];
  const db = a[2] - b[2];
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

function sampleBorderKey(data, width, height) {
  const samples = [];
  const push = (x, y) => {
    const i = (y * width + x) * 4;
    samples.push([data[i], data[i + 1], data[i + 2]]);
  };

  for (let x = 0; x < width; x += Math.max(1, Math.floor(width / 32))) {
    push(x, 0);
    push(x, height - 1);
  }
  for (let y = 0; y < height; y += Math.max(1, Math.floor(height / 32))) {
    push(0, y);
    push(width - 1, y);
  }

  return [0, 1, 2].map((channel) =>
    Math.round(
      samples.reduce((total, color) => total + color[channel], 0) /
        samples.length,
    ),
  );
}

function removeKey(data, width, height, key) {
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  for (let i = 0; i < data.length; i += 4) {
    const color = [data[i], data[i + 1], data[i + 2]];
    const dist = distance(color, key);
    let alpha = data[i + 3];

    if (dist < 34) {
      alpha = 0;
    } else if (dist < 132) {
      alpha = Math.round(alpha * ((dist - 34) / 98));
    }

    if (alpha > 0) {
      const greenSpill = Math.max(0, data[i + 1] - Math.max(data[i], data[i + 2]));
      data[i + 1] = Math.max(0, data[i + 1] - Math.round(greenSpill * 0.72));
    }

    data[i + 3] = alpha;

    if (alpha > 12) {
      const pixel = i / 4;
      const x = pixel % width;
      const y = Math.floor(pixel / width);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }

  if (minX > maxX || minY > maxY) {
    return { left: 0, top: 0, width, height };
  }

  const left = Math.max(0, minX - trimPadding);
  const top = Math.max(0, minY - trimPadding);
  const right = Math.min(width - 1, maxX + trimPadding);
  const bottom = Math.min(height - 1, maxY + trimPadding);

  return {
    left,
    top,
    width: right - left + 1,
    height: bottom - top + 1,
  };
}

await fs.mkdir(outDir, { recursive: true });

const files = (await fs.readdir(sourceDir))
  .filter((file) => file.endsWith(".png"))
  .sort();

if (files.length !== names.length) {
  throw new Error(`Expected ${names.length} source images, found ${files.length}.`);
}

for (const [index, file] of files.entries()) {
  const input = path.join(sourceDir, file);
  const baseName = `${String(index + 1).padStart(2, "0")}-${names[index]}`;
  const image = sharp(input).ensureAlpha();
  const metadata = await image.metadata();
  const { data, info } = await image
    .raw()
    .toBuffer({ resolveWithObject: true });

  const key = sampleBorderKey(data, info.width, info.height);
  const crop = removeKey(data, info.width, info.height, key);

  const transparentBuffer = await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .extract(crop)
    .resize({
      width: maxArtworkSize,
      height: maxArtworkSize,
      fit: "inside",
      withoutEnlargement: false,
    })
    .png()
    .toBuffer();

  const normalized = sharp({
    create: {
      width: canvasSize,
      height: canvasSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  }).composite([{ input: transparentBuffer, gravity: "center" }]);

  await normalized
    .clone()
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(outDir, `${baseName}.png`));

  await normalized
    .clone()
    .webp({ quality: 96, alphaQuality: 100, effort: 6 })
    .toFile(path.join(outDir, `${baseName}.webp`));

  console.log(
    `${baseName}: ${metadata.width}x${metadata.height}, key rgb(${key.join(
      ", ",
    )}), crop ${crop.width}x${crop.height}`,
  );
}
