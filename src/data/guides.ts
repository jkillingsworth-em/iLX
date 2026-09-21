export type Guide = {
  slug: string;
  sport: string;
  title: string;
  dek: string;
  read: string;
  body: { heading: string; paragraphs: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "basketball-cost",
    sport: "Basketball",
    title: "How much does a basketball scoreboard cost?",
    dek: "Gym rec boards, high-school workhorses, and player-stat cabinets — what actually moves the price.",
    read: "6 min",
    body: [
      {
        heading: "The cabinet is not the whole ticket",
        paragraphs: [
          "A basketball scoreboard quote is the face plus the things that make it a system: shot clocks, a console, data path (cable or ScoreLink), mounting, and optional Electronic Team Names. The LX2350 — a 9 × 3 ft indoor workhorse — is the board a lot of gyms actually specify. Step up to LX2550 or LX2655 when you want a taller face and player/foul information.",
          "Indoor electrical is almost always 120 VAC. Current draw stays modest; the install cost is usually steel, lifts, and the afternoon the gym is dark, not the service panel.",
        ],
      },
      {
        heading: "What changes the number",
        paragraphs: [
          "Digit height and cabinet width dominate. A compact rec board (LX2330, 6.5 × 3 ft) is a different conversation from a 22-foot player-stat face. Shot clocks (LX21xx family) should be quoted as a pair with sync, not as an afterthought. ETN, custom paint, and ID panels are the usual upgrades.",
          "Wireless ScoreLink avoids a homerun cable through a finished gym. Cable is cheaper if the path already exists. Consoles: MM is rare in basketball; expect MP with an LCD.",
        ],
      },
      {
        heading: "A sane way to budget",
        paragraphs: [
          "Pick the information the crowd must see from the last row — clock, score, bonus, fouls — then size digits so that information holds. Do not buy width you will not fill with stats. Call 800-677-4780 with gym length, seating, and whether shot clocks are in the spec. We will put three LX models on paper, not a catalog dump.",
        ],
      },
    ],
  },
  {
    slug: "baseball-vs-softball",
    sport: "Baseball",
    title: "Baseball vs. softball scoreboards",
    dek: "What is the same, what changes, and when a compact board is the honest choice.",
    read: "5 min",
    body: [
      {
        heading: "Same language, different diamond",
        paragraphs: [
          "Ball, strike, out, inning, and total runs are the shared core. Electro-Mech baseball and softball cabinets use the same LX drivers, the same MM or MP consoles, and the same optional ScoreLink path. A board that keeps baseball in the spring will keep softball in the summer if the captions and digit set match the game you actually play.",
          "Where they diverge: linescore depth, pitch count, and size. Fastpitch rec parks often want a 10 × 5 ft face (LX1340 / LX1360) with bullet BSO. Varsity baseball wants innings across the top and 18-inch totals. The LX1750 at 26 × 9 ft is a high-school/college linescore with ten innings and hit/error.",
        ],
      },
      {
        heading: "Pitch count and timers",
        paragraphs: [
          "LX1160 is the flagship pitch-count package — double pitch count, home and guest always visible, in a 10 × 7 ft cabinet. Single pitch-count (alternating by the team at bat) shows up on larger LX16xx / LX17xx faces. Timers on baseball boards are for pitch clocks, game time, or the rec director who also runs soccer on that field.",
          "Bullet indicators (B / S / O clusters) keep a compact cabinet honest. Digit BSO reads from deeper in the bleachers. If the park is lights-and-lawn-chairs, bullets are enough. If it is a packed varsity night, spend the width on digits.",
        ],
      },
    ],
  },
  {
    slug: "football-installation",
    sport: "Football",
    title: "Football scoreboard installation",
    dek: "Foundations, posts, wiring, and the permits that stall a Friday night.",
    read: "7 min",
    body: [
      {
        heading: "The structure comes first",
        paragraphs: [
          "An LX football cabinet is an aluminum sail. Post count, max diameter, and eye-bolt locations live on the mechanical cut sheet — not in a guess from a photo. Compact boards hang on a single post; 24-foot and wider faces typically want two. Soil, wind, and frost depth are a local engineer's problem; we will give them the loads.",
          "Set the posts plumb and at the spacing on the cut sheet. The clamps and hardware are part of the package. Do not substitute fence-line pipe.",
        ],
      },
      {
        heading: "Power and data",
        paragraphs: [
          "Most LX football boards are 120 VAC. Current is on the spec sheet (a 26 × 8 ft LX3650 is still a small load compared to the field lights). Run a dedicated circuit. Data is a 1/4-inch stereo path from the MP console — up to 1,000 ft of cable, or ScoreLink on 2.4 / 900 MHz when trenching is the expensive part.",
          "Play clocks (LX3050 pairs) want their own posts and a handheld wireless switch for the officials. Spec them with the main board so the console software matches.",
        ],
      },
      {
        heading: "Permits and the calendar",
        paragraphs: [
          "Counties care about foundations, electrical, and sometimes signage height. Start that paperwork when you order, not when the crate lands. Electro-Mech can ship to the site; the installing contractor handles lift, hang, and terminate. Call us with the field survey and we will mark the cut-sheet dimensions that belong on the permit set.",
        ],
      },
    ],
  },
  {
    slug: "soccer-sizing",
    sport: "Soccer",
    title: "Soccer scoreboard sizing and field placement",
    dek: "Visibility from the stands, reversible football captions, and where the posts should actually go.",
    read: "5 min",
    body: [
      {
        heading: "Read it from the last row",
        paragraphs: [
          "Digit height does the work, not cabinet width. 18-inch points and time are the high-school default; 24-inch belongs on a stadium bowl. Place the board so both touchlines and the main stand see the face — usually opposite the home bench, off the corner, not behind a goal where the keeper's wall and a setting sun fight you.",
          "LX6360 (16 × 5 ft) is a common pitch board. LX6546 and LX6944 step into 22–26 ft cabinets with shots, corners, and slide-out football captions for shared stadiums.",
        ],
      },
      {
        heading: "Two sports, one structure",
        paragraphs: [
          "If the same field hosts football in the fall, specify reversible or slide-out captions and a console that switches sport modes. That is cheaper than a second set of posts. Confirm the football information (down, to-go, ball-on) still fits the soccer digit layout before you pour concrete.",
        ],
      },
    ],
  },
  {
    slug: "hockey-indoor-outdoor",
    sport: "Hockey",
    title: "Indoor vs. outdoor hockey scoreboards",
    dek: "Penalty timers, period clocks, and the spec differences that actually matter.",
    read: "5 min",
    body: [
      {
        heading: "What both must do",
        paragraphs: [
          "Period clock, guest and home to 99, period to 3 or 4, and penalty timers that do not drift. Officials will notice a lazy penalty clock before they notice paint. LX hockey/lacrosse cabinets share the MP console and LX driver chain with the rest of the line.",
        ],
      },
      {
        heading: "Indoor rinks",
        paragraphs: [
          "Hang or wall-mount. LX8350 (9 × 3 ft) is a compact indoor face; LX8750 adds shots-on-goal in a 9 × 5 ft cabinet. Condensation and cold are real — conformal-coated LED boards are the option to take. Shot clocks are a basketball problem; hockey wants penalty digits that stay lit in a dim rink.",
        ],
      },
      {
        heading: "Outdoor lacrosse and hockey",
        paragraphs: [
          "Treat it like a football install: aluminum, posts, wind. LX7860 is an outdoor package with a 4-digit period clock, scores to 99, and four 3-digit penalty windows. Amber LEDs can hold up better in direct sun than red; we will sample both on the spec sheet.",
        ],
      },
    ],
  },
];

export const guidesBySlug = Object.fromEntries(guides.map((g) => [g.slug, g]));
