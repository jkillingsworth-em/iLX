import { models } from "@/data/models";
import type { LxModel, SportId } from "@/data/types";

export type VenueSize = "youth" | "highschool" | "college";
export type FinderFeature = "timer" | "linescore" | "pitch" | "etn" | "stats" | "portable";

export type FinderAnswers = {
  sport: SportId;
  environment: "outdoor" | "indoor" | "portable" | "any";
  venue: VenueSize;
  features: FinderFeature[];
};

function widthFt(w: string): number {
  const n = parseFloat(w);
  return Number.isFinite(n) ? n : 10;
}

function hay(m: LxModel): string {
  return [m.blurb, ...m.displays.map((d) => `${d.label} ${d.detail}`), ...m.features, ...m.options]
    .join(" ")
    .toLowerCase();
}

export function recommend(a: FinderAnswers): { model: LxModel; score: number; reasons: string[] }[] {
  const ranked = models
    .map((m) => {
      let score = 0;
      const reasons: string[] = [];
      const text = hay(m);

      const sportHit = m.sport === a.sport || m.alsoSports.includes(a.sport);
      if (sportHit) {
        score += 8;
        if (m.sport === a.sport) score += 2;
      } else {
        score -= 6;
      }

      if (a.environment !== "any") {
        if (m.environment === a.environment) {
          score += 5;
          reasons.push(a.environment === "portable" ? "Built to move" : `${a.environment} cabinet`);
        } else if (a.environment === "portable" && m.environment !== "portable") {
          score -= 4;
        }
      }

      const w = widthFt(m.width);
      if (a.venue === "youth") {
        if (w <= 10) {
          score += 4;
          reasons.push("Sized for rec and youth");
        } else if (w >= 20) score -= 3;
      } else if (a.venue === "highschool") {
        if (w >= 8 && w <= 26) {
          score += 3;
          reasons.push("High-school sightlines");
        }
      } else if (w >= 14) {
        score += 4;
        reasons.push("College / stadium scale");
      }

      for (const f of a.features) {
        if (f === "portable" && (m.environment === "portable" || /portable|t-cart|reversible/i.test(text))) {
          score += 4;
          reasons.push("Portable / reversible package");
        }
        if (f === "linescore" && (m.layout === "linescore" || /linescore|innings|runs-by-inning/i.test(text))) {
          score += 4;
          reasons.push("Full linescore");
        }
        if (f === "pitch" && /pitch count|pitch-count|pitcher/i.test(text)) {
          score += 4;
          reasons.push("Pitch count on the face");
        }
        if (f === "timer" && /timer|clock|period/i.test(text)) {
          score += 3;
          reasons.push("Timer / clock digits");
        }
        if (f === "etn" && /etn|electronic team/i.test(text + m.options.join(" "))) {
          score += 3;
          reasons.push("Electronic Team Names available");
        }
        if (f === "stats" && /foul|player|timeout|shots|penalty|ball-on|to-go/i.test(text)) {
          score += 3;
          reasons.push("Stat windows beyond score and time");
        }
      }

      if (reasons.length === 0 && sportHit) reasons.push("Standard package for this sport");
      return { model: m, score, reasons: reasons.slice(0, 3) };
    })
    .sort((x, y) => y.score - x.score || x.model.id.localeCompare(y.model.id));

  return ranked.slice(0, 3);
}
