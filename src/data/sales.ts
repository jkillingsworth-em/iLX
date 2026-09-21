/** Sage 100 ranks — empty until plant export lands. Do not scrape the website. */
export const SALES_YEAR = 2025;
export const SALES_SOURCE = "sage-pending" as const;

export type SalesRank = {
  overall?: number;
  outdoorAmber?: number;
  outdoorRed?: number;
  indoor?: number;
  sport?: number;
  units?: number;
};

export const salesByModel: Record<string, SalesRank> = {
  // Paste Sage 100 ranks here, e.g. LX1750: { overall: 4, outdoorAmber: 1, units: 86 }
};

export function salesLines(modelId: string, environment: string): string[] {
  const r = salesByModel[modelId];
  if (!r) return [];
  const lines: string[] = [];
  if (r.overall) lines.push(`#${r.overall} best seller overall last year`);
  if (environment !== "indoor" && r.outdoorAmber) {
    lines.push(`#${r.outdoorAmber} best seller outdoor Amber`);
  }
  if (environment !== "indoor" && r.outdoorRed) {
    lines.push(`#${r.outdoorRed} best seller outdoor Red`);
  }
  if (environment === "indoor" && r.indoor) {
    lines.push(`#${r.indoor} best seller indoor`);
  }
  if (r.sport) lines.push(`#${r.sport} in its sport last year`);
  if (r.units) lines.push(`${r.units} units (${SALES_YEAR})`);
  return lines;
}
