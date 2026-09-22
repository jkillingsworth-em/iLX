export const sportLabels: Record<string, string> = {
  baseball: "Baseball / Softball",
  basketball: "Basketball",
  football: "Football",
  soccer: "Soccer",
  hockey: "Hockey / Lacrosse",
  multisport: "Multi-sport",
  accessory: "Companion displays",
  volleyball: "Volleyball",
  wrestling: "Wrestling",
  lacrosse: "Lacrosse",
};

export const environmentLabels: Record<string, string> = {
  outdoor: "Outdoor",
  indoor: "Indoor",
  portable: "Portable",
};

export const numberingNotes = [
  {
    title: "First digit — sport",
    body: "1 baseball/softball, 2 basketball, 3 football, 6 soccer/wrestling/multi, 7–8 hockey/lacrosse. Companion clocks sit in the same sport family (LX21xx shot clocks, LX30xx play clocks).",
  },
  {
    title: "Second digit — feature density",
    body: "Lower numbers are add-ons and basics (0 = panels/clocks, 3 = essential game info). Higher numbers add fouls, timeouts, player stats, or full linescores (5 / 6 / 7).",
  },
  {
    title: "Third digit — size",
    body: "3 small, 5 medium, 7 large is the historical rule of thumb. Actual cabinet size is on the mechanical cut sheet.",
  },
  {
    title: "Fourth digit & suffixes",
    body: "0 standard face; 5 often means reversible captions. -ETN electronic team names. -L -R -T -B place ID panels. -LR both sides. Consoles: 10xx / 12xx / 13xx / 31xx typically ship MM; everything else MP.",
  },
];

export const sources = [
  {
    title: "LX-series owner’s manuals",
    href: "https://www.electro-mech.com/manuals/",
    note: "Per-model PDFs on the factory CDN. Open inside iLX on the Docs tab. ETN cabinets use the base-model manual.",
  },
  {
    title: "Color specification sheets",
    href: "https://www.electro-mech.com/manuals-spec-sheets/",
    note: "Face layouts and digit callouts used for the display lists in this guide.",
  },
  {
    title: "Mechanical cut sheets",
    href: "/catalog",
    note: "Per-model PDFs open inside iLX. Cabinet size, weight, eye-bolts, clamp hardware, post diameter. ETN variants when the board has team names.",
  },
  {
    title: "Baseball display matrix (Drive)",
    href: "https://docs.google.com/spreadsheets/d/1up3RKgp3VcmcxnIGudKEb6WAW4Qrwmq-_eEA09HOtOA",
    note: "Specifications of LX Series Baseball Scoreboard Models — runs, innings, BSO, timers, pitch/batter, H/E.",
  },
  {
    title: "Digit BOM sheets (Drive)",
    href: "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    note: "LX#### DIGITS workbooks: qty, mask, buffered/unbuffered, pull-up header, Electro-Mech part numbers.",
  },
  {
    title: "Glossary & engineering history (Drive)",
    href: "https://docs.google.com/document/d/1B2iiHnveJSCH5cvcRqOjds7Mlejmmjrg7M3eniyOous",
    note: "Internal terms: EM, SS, MP, MM, CX, ScoreLink, Hirose, stereo, LX Driver.",
  },
];
