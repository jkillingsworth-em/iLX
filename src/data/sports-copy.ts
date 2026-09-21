import type { SportId } from "./types";

export type SportCopy = {
  id: SportId;
  label: string;
  kicker: string;
  heroModel: string;
  intro: string;
  venue: string;
  featured: string[];
};

export const sportsCopy: SportCopy[] = [
  {
    id: "baseball",
    label: "Baseball / Softball",
    kicker: "The volume leader",
    heroModel: "LX1750",
    intro:
      "From a 5 × 3 ft youth board with bullet counts to a 36-foot linescore that owns the outfield. Electro-Mech builds more baseball scoreboards than any other sport — compact MM packages, pitch-count cabinets, and full ten-inning kings.",
    venue: "Diamonds, parks, high schools, colleges",
    featured: ["LX1750", "LX1250", "LX1160", "LX1060"],
  },
  {
    id: "basketball",
    label: "Basketball",
    kicker: "Gym to arena",
    heroModel: "LX2350",
    intro:
      "Wall-mount indoor boards that sync with shot clocks over cable or ScoreLink. Start at a compact rec gym face and step up through player/foul layouts. Clock digits sit where a gym crowd actually looks.",
    venue: "Elementary, high school, college gyms",
    featured: ["LX2350", "LX2550", "LX2655", "LX2570"],
  },
  {
    id: "football",
    label: "Football",
    kicker: "Endzone presence",
    heroModel: "LX3650",
    intro:
      "Time, score, down, to-go, ball-on, quarter — sized from a 5-foot sideline board to a 36 × 10 ft statement. Pair with LX3050 play clocks on single posts. Heavy extruded aluminum for wind and weather.",
    venue: "High school and college fields",
    featured: ["LX3650", "LX3230", "LX3150", "LX3745"],
  },
  {
    id: "soccer",
    label: "Soccer",
    kicker: "Reversible captions",
    heroModel: "LX6360",
    intro:
      "Shots, corners, saves, and a serious timer. Most soccer cabinets slide captions to football so one structure works two seasons. Place it for sightlines from the stands, not just the bench.",
    venue: "Pitch, multi-use stadiums",
    featured: ["LX6360", "LX6546", "LX6944", "LX6370"],
  },
  {
    id: "hockey",
    label: "Hockey / Lacrosse",
    kicker: "Penalties that stay honest",
    heroModel: "LX8350",
    intro:
      "Period clocks, scores to 99, and penalty timers that officials can trust. Indoor rink boards and outdoor lacrosse faces share the same LX driver language as the rest of the catalog.",
    venue: "Rinks and outdoor lacrosse",
    featured: ["LX8350", "LX8750", "LX7860", "LX7230"],
  },
  {
    id: "multisport",
    label: "Multi-sport",
    kicker: "One cabinet, two seasons",
    heroModel: "LX1320",
    intro:
      "Reversible captions, sport-switching consoles, and the portable LX1320 on a T-Cart. Built for complexes that run baseball in the spring and football or soccer in the fall without buying twice.",
    venue: "Shared fields and rec complexes",
    featured: ["LX1320", "LX3450", "LX6324", "LX6655"],
  },
];

export const sportsCopyById = Object.fromEntries(sportsCopy.map((s) => [s.id, s])) as Record<
  string,
  SportCopy
>;
