const MASK_ROOT = "https://assets.electro-mech.com/masks";

const LAYERS = ["Frame", "Face", "Accent-Striping", "Masks", "LED-Glow", "Captions"] as const;
type LayerName = (typeof LAYERS)[number];

const PAINT: Record<string, [number, number, number]> = {
  navy_blue: [16, 43, 78],
  egyptian_blue: [35, 60, 136],
  royal_blue: [36, 98, 167],
  icy_blue: [117, 190, 233],
  shamrock_green: [0, 159, 72],
  jolly_green: [0, 114, 59],
  hunter_green: [14, 69, 42],
  silver_gray: [201, 199, 199],
  matte_black: [45, 42, 43],
  indigo_purple: [94, 46, 134],
  power_purple: [104, 28, 91],
  merchant_maroon: [116, 17, 46],
  cardinal_red: [182, 31, 61],
  racing_red: [227, 50, 38],
  tiger_orange: [244, 121, 32],
  golden_yellow: [255, 212, 0],
  metallic_gold: [180, 151, 90],
  white: [255, 255, 255],
  red: [236, 27, 36],
  amber: [249, 165, 25],
  none: [255, 255, 255],
};

/** Indoor / mixed-LED cabinets keep the authored LED-Glow (red+amber+green). */
const MIXED_LED = /2180|2330|2350|2370|2550|2555|2556|2570|2575|2576|2655|2665|2770|8350|8650|8750|8850|lx8440|^lx2/i;

export type LedTone = "red" | "amber";

export type ComposeOpts = {
  modelId: string;
  leds: LedTone;
  etn?: boolean;
  primary?: string;
  accent?: string;
  caption?: string;
};

const dirCache = new Map<string, string | null>();
const blobCache = new Map<string, string>();

function slug(modelId: string): string {
  return modelId.toLowerCase().replace(/[^a-z0-9].*$/, "");
}

function clamp(n: number): number {
  return Math.max(0, Math.min(255, n));
}

function contrast(t: number): number {
  const n = (259 * (255 + 255)) / (255 * (259 - 255));
  return clamp(n * (t - 128) + 128);
}

function paint(name: string): [number, number, number] {
  return PAINT[name] ?? PAINT.white;
}

function layerUrl(dir: string, layer: LayerName): string {
  return `${MASK_ROOT}/${encodeURIComponent(dir)}/${encodeURIComponent(layer)}.png`;
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    const t = window.setTimeout(() => reject(new Error(`timeout ${url}`)), 15000);
    img.onload = () => {
      window.clearTimeout(t);
      resolve(img);
    };
    img.onerror = () => {
      window.clearTimeout(t);
      reject(new Error(`missing ${url}`));
    };
    img.src = url;
  });
}

async function exists(url: string): Promise<boolean> {
  try {
    const img = await loadImage(url);
    return img.width > 0;
  } catch {
    return false;
  }
}

function dirCandidates(modelId: string, etn: boolean): string[] {
  const s = slug(modelId);
  const bases = [s];
  for (const x of ["s", "f", "b", "v", "w"]) bases.push(`${s}${x}`);
  const out: string[] = [];
  for (const b of bases) {
    out.push(etn ? `${b}-etn` : b);
    if (!etn) out.push(`${b}.ai`);
  }
  if (etn) out.push(`${s}-etn`);
  return [...new Set(out)];
}

export async function resolveMaskDir(modelId: string, etn = false): Promise<string | null> {
  const key = `${slug(modelId)}:${etn ? "etn" : "base"}`;
  if (dirCache.has(key)) return dirCache.get(key) ?? null;
  for (const dir of dirCandidates(modelId, etn)) {
    if (await exists(layerUrl(dir, "Face"))) {
      dirCache.set(key, dir);
      return dir;
    }
  }
  dirCache.set(key, null);
  return null;
}

function toCanvas(img: HTMLImageElement | HTMLCanvasElement): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = img.width;
  c.height = img.height;
  const ctx = c.getContext("2d");
  if (!ctx) throw new Error("canvas");
  ctx.drawImage(img, 0, 0);
  return c;
}

function recolor(src: HTMLCanvasElement, colorName: string): HTMLCanvasElement {
  const [pr, pg, pb] = paint(colorName);
  const c = toCanvas(src);
  const ctx = c.getContext("2d");
  if (!ctx) return c;
  const id = ctx.getImageData(0, 0, c.width, c.height);
  const d = id.data;
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] === 0) continue;
    const w = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    const u = 255 - contrast(w);
    d[i] = clamp(u + pr);
    d[i + 1] = clamp(u + pg);
    d[i + 2] = clamp(u + pb);
  }
  ctx.putImageData(id, 0, 0);
  return c;
}

function composite(
  layers: Partial<Record<LayerName, HTMLCanvasElement>>,
  modelId: string,
  colors: { primary: string; accent: string; leds: string; caption: string },
): HTMLCanvasElement {
  const face = layers.Face;
  if (!face) throw new Error("no face");
  const c = document.createElement("canvas");
  c.width = face.width;
  c.height = face.height;
  const ctx = c.getContext("2d");
  if (!ctx) throw new Error("canvas");
  const draw = (img?: HTMLCanvasElement) => {
    if (img) ctx.drawImage(img, 0, 0, c.width, c.height);
  };
  draw(layers.Frame);
  draw(recolor(face, colors.primary));
  if (layers["Accent-Striping"]) {
    const accent = colors.accent === "none" ? colors.primary : colors.accent;
    draw(recolor(layers["Accent-Striping"], accent));
  }
  draw(layers.Masks);
  if (layers["LED-Glow"]) {
    if (MIXED_LED.test(slug(modelId))) draw(layers["LED-Glow"]);
    else draw(recolor(layers["LED-Glow"], colors.leds));
  }
  if (layers.Captions) draw(recolor(layers.Captions, colors.caption));
  return c;
}

export async function composeBoard(opts: ComposeOpts): Promise<string> {
  const leds = opts.leds;
  const etn = Boolean(opts.etn);
  const primary = opts.primary ?? "matte_black";
  const accent = opts.accent ?? "white";
  const caption = opts.caption ?? "white";
  const cacheKey = `${slug(opts.modelId)}:${etn ? "etn" : "base"}:${leds}:${primary}:${accent}:${caption}`;
  const hit = blobCache.get(cacheKey);
  if (hit) return hit;

  const dir = await resolveMaskDir(opts.modelId, etn);
  if (!dir) throw new Error("no mask dir");

  const loaded = await Promise.all(
    LAYERS.map(async (layer) => {
      try {
        const img = await loadImage(layerUrl(dir, layer));
        return [layer, toCanvas(img)] as const;
      } catch {
        return [layer, undefined] as const;
      }
    }),
  );
  const layers: Partial<Record<LayerName, HTMLCanvasElement>> = {};
  for (const [layer, canvas] of loaded) {
    if (canvas) layers[layer] = canvas;
  }
  if (!layers.Face) throw new Error("no face layer");

  const out = composite(layers, opts.modelId, { primary, accent, leds, caption });
  const blob = await new Promise<Blob>((resolve, reject) => {
    out.toBlob((b) => (b ? resolve(b) : reject(new Error("blob"))), "image/png");
  });
  const url = URL.createObjectURL(blob);
  blobCache.set(cacheKey, url);
  return url;
}

export const PAINT_NAMES = Object.keys(PAINT).filter(
  (k) => k !== "red" && k !== "amber" && k !== "none",
);
