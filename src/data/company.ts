export const company = {
  name: "Electro-Mech Scoreboard Company",
  short: "Electro-Mech",
  tagline: "You play the game. We'll keep the score.",
  founded: 1963,
  city: "Wrightsville",
  state: "GA",
  zip: "31096",
  address: "72 Industrial Blvd",
  phone: "800-677-4780",
  phoneHref: "tel:+18006774780",
  altPhone: "478-864-3366",
  altPhoneHref: "tel:+14788643366",
  fax: "478-864-0031",
  employees: "~70",
};

export const salesReps = [
  { name: "Jim Ledford", role: "National Sales Manager", territory: "Nationwide", phone: "800-677-4780" },
  { name: "Jessica McCoy", role: "Contractor / Construction Sales", territory: "Projects & specs", phone: "800-677-4780" },
  { name: "Allen McMichael", role: "Internet Sales", territory: "Online & catalog", phone: "800-677-4780" },
  { name: "Lee Ann Kelly", role: "Regional Sales", territory: "AL, MS, AR, TN, KY, IN, OH, WV", phone: "800-677-4780" },
  { name: "John Braeckelaere", role: "Regional Sales", territory: "South Carolina", phone: "803-260-1381" },
  { name: "Kelly Lombard", role: "Regional Sales", territory: "FL, CA, WI, MN, IA, KS, NE, SD, ND, UT, ID, WA, OR", phone: "800-677-4780" },
];

export const difference = [
  {
    title: "Wrightsville, since 1963",
    body: "Family-owned and still building in the same Georgia town. Small-town common sense, nationwide install base.",
  },
  {
    title: "All-aluminum cabinets",
    body: "Extruded aluminum that stays straight on a post and does not rust in a coastal summer. Built one board at a time.",
  },
  {
    title: "LEDs rated 100,000 hours",
    body: "Bright from the bleachers, efficient on the service panel, and a viewing angle that does not die at the corner of the gym.",
  },
  {
    title: "Unlimited toll-free support",
    body: "No ticket queue, no subscription. Call 800-677-4780 and talk to people who build the boards.",
  },
  {
    title: "Consoles that operators actually use",
    body: "MM for compact baseball and football. MP when you need a keypad, LCD, and four data ports. Same language either way.",
  },
  {
    title: "Color, captions, and names",
    body: "Team paint, ID panels, trusses, and optional Electronic Team Names. The board should look like it belongs on your field.",
  },
];

export const faceColors = [
  { id: "black", label: "Matte black", swatch: "#12141a", caption: "#ecece6" },
  { id: "navy", label: "Navy", swatch: "#12182a", caption: "#ecece6" },
  { id: "forest", label: "Forest", swatch: "#142018", caption: "#ecece6" },
  { id: "cardinal", label: "Cardinal", swatch: "#2a1214", caption: "#ecece6" },
  { id: "white", label: "White", swatch: "#e8e6dc", caption: "#1a1c16" },
] as const;

export const ledColors = [
  { id: "red", label: "Red", lit: "#e23b2e", dim: "#6b1c16" },
  { id: "amber", label: "Amber", lit: "#c9922a", dim: "#5c4312" },
  { id: "white", label: "White", lit: "#e8ebe6", dim: "#3a3d38" },
] as const;

export type FaceId = (typeof faceColors)[number]["id"];
export type LedId = (typeof ledColors)[number]["id"];
