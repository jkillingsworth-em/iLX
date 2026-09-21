export type SportId =
  | "baseball"
  | "basketball"
  | "football"
  | "soccer"
  | "hockey"
  | "multisport"
  | "accessory";

export type Environment = "outdoor" | "indoor" | "portable";
export type ConsoleKind = "MM" | "MP";

export interface DisplayLine {
  label: string;
  detail: string;
}

export interface DigitKitItem {
  qty: number;
  part: string;
  item: string;
  use: string;
}

export interface LxModel {
  id: string;
  sport: SportId;
  alsoSports: string[];
  environment: Environment;
  width: string;
  height: string;
  console: ConsoleKind;
  voltage: string;
  layout: string;
  digitHeights: number[];
  blurb: string;
  displays: DisplayLine[];
  features: string[];
  components: string[];
  options: string[];
  productUrl: string;
  manualUrl: string;
  specSheetUrl: string;
  cutsheetFolder: string;
  weightLb?: number;
  currentA?: number;
  unitNote?: string;
  posts?: number;
  postMaxDiaIn?: number;
  digitKit?: DigitKitItem[];
}

export interface Part {
  id: string;
  name: string;
  category: PartCategory;
  short: string;
  role: string;
  how: string;
  connects: string[];
  specs: { label: string; value: string }[];
  usedOn: string;
  image?: string;
}

export type PartCategory =
  | "console"
  | "driver"
  | "display"
  | "power"
  | "data"
  | "cabinet"
  | "accessory";

export interface SystemNode {
  id: string;
  title: string;
  layer: "operator" | "control" | "path" | "cabinet" | "display";
  summary: string;
  detail: string;
  parts: string[];
  next: string[];
}
