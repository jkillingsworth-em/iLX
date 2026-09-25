/** ETN digit layout per model. Source: Drive sheet "ETNS per Model". */
export type EtnFit = {
  cabinet: string;
  panel: string;
  fullSize: string;
  fullQty: number;
  halfSize?: string;
  halfQty?: number;
};

export type EtnPart = {
  code: string;
  where: "indoor" | "outdoor";
  size: string;
  color: "amber" | "red";
  span: "full" | "half";
  label: string;
};

export const ETN_BY_MODEL: Record<string, EtnFit> = {
  LX1060: { cabinet: "319-40-1060", panel: "9 x 32", fullSize: "9X16", fullQty: 4 },
  LX1070: { cabinet: "319-40-1070", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1160: { cabinet: "319-40-1160", panel: "9 x 32", fullSize: "9X16", fullQty: 4 },
  LX1161: { cabinet: "319-40-1161", panel: "9 x 32", fullSize: "9X16", fullQty: 4 },
  LX1162: { cabinet: "319-40-1162", panel: "9 x 32", fullSize: "9X16", fullQty: 4 },
  LX1164: { cabinet: "319-40-1164", panel: "9 x 32", fullSize: "9X16", fullQty: 4 },
  LX1165: { cabinet: "319-40-1165", panel: "9 x 32", fullSize: "9X16", fullQty: 4 },
  LX1166: { cabinet: "319-40-1166", panel: "9 x 32", fullSize: "9X16", fullQty: 4 },
  LX1168: { cabinet: "319-40-1168", panel: "9 x 32", fullSize: "9X16", fullQty: 4 },
  LX1240: { cabinet: "319-40-1240", panel: "9 x 40", fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2 },
  LX1241: { cabinet: "319-40-1241", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX1244: { cabinet: "319-40-1244", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX1250: { cabinet: "319-40-1250", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX1260: { cabinet: "319-40-1260", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX1370: { cabinet: "319-40-1370", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1371: { cabinet: "319-40-1371", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1372: { cabinet: "319-40-1372", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1373: { cabinet: "319-40-1373", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1374: { cabinet: "319-40-1374", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1376: { cabinet: "319-40-1376", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1377: { cabinet: "319-40-1377", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1390: { cabinet: "319-40-1390", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX1440: { cabinet: "319-40-1440", panel: "14 x 72", fullSize: "7X16", fullQty: 16, halfSize: "7x8", halfQty: 4 },
  LX1480: { cabinet: "319-40-1480", panel: "14 x 72", fullSize: "7X16", fullQty: 16, halfSize: "7x8", halfQty: 4 },
  LX1486: { cabinet: "319-40-1486", panel: "14 x 72", fullSize: "7X16", fullQty: 16, halfSize: "7x8", halfQty: 4 },
  LX1700: { cabinet: "319-40-1700", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX1710: { cabinet: "319-40-1710", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1711: { cabinet: "319-40-1711", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1712: { cabinet: "319-40-1712", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1713: { cabinet: "319-40-1713", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1714: { cabinet: "319-40-1714", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1716: { cabinet: "319-40-1716", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1717: { cabinet: "319-40-1717", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1720: { cabinet: "319-40-1720", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1730: { cabinet: "319-40-1730", panel: "9 x 64", fullSize: "9X16", fullQty: 8 },
  LX1731: { cabinet: "319-40-1731", panel: "9 x 64", fullSize: "9X16", fullQty: 8 },
  LX1732: { cabinet: "319-40-1732", panel: "9 x 64", fullSize: "9X16", fullQty: 8 },
  LX1733: { cabinet: "319-40-1733", panel: "9 x 64", fullSize: "9X16", fullQty: 8 },
  LX1734: { cabinet: "319-40-1734", panel: "9 x 64", fullSize: "9X16", fullQty: 8 },
  LX1736: { cabinet: "319-40-1736", panel: "9 x 64", fullSize: "9X16", fullQty: 8 },
  LX1737: { cabinet: "319-40-1737", panel: "9 x 64", fullSize: "9X16", fullQty: 8 },
  LX1740: { cabinet: "319-40-1740", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1741: { cabinet: "319-40-1741", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1742: { cabinet: "319-40-1742", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1743: { cabinet: "319-40-1743", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1744: { cabinet: "319-40-1744", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1746: { cabinet: "319-40-1746", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX1750: { cabinet: "319-40-1750", panel: "14 x 80", fullSize: "7X16", fullQty: 20 },
  LX1751: { cabinet: "319-40-1751", panel: "14 x 80", fullSize: "7X16", fullQty: 20 },
  LX1752: { cabinet: "319-40-1752", panel: "14 x 80", fullSize: "7X16", fullQty: 20 },
  LX1753: { cabinet: "319-40-1753", panel: "14 x 80", fullSize: "7X16", fullQty: 20 },
  LX1754: { cabinet: "319-40-1754", panel: "14 x 80", fullSize: "7X16", fullQty: 20 },
  LX1756: { cabinet: "319-40-1756", panel: "14 x 80", fullSize: "7X16", fullQty: 20 },
  LX1780: { cabinet: "319-40-1780", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX1781: { cabinet: "319-40-1781", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX1782: { cabinet: "319-40-1782", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX1783: { cabinet: "319-40-1783", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX1784: { cabinet: "319-40-1784", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX1786: { cabinet: "319-40-1786", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX2340: { cabinet: "319-40-2340", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX2350: { cabinet: "319-40-2350", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX2370: { cabinet: "319-40-2370", panel: "14 x 72", fullSize: "14x16", fullQty: 9, halfSize: "14x8", halfQty: 2 },
  LX2545: { cabinet: "319-40-2545", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX2550: { cabinet: "319-40-2550", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX2555: { cabinet: "319-40-2555", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX2556: { cabinet: "319-40-2556", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX2570: { cabinet: "319-40-2570", panel: "14 x 72", fullSize: "14x16", fullQty: 10, halfSize: "14x8", halfQty: 2 },
  LX2575: { cabinet: "319-40-2575", panel: "14 x 72", fullSize: "14x16", fullQty: 10, halfSize: "14x8", halfQty: 2 },
  LX2576: { cabinet: "319-40-2576", panel: "14 x 72", fullSize: "14x16", fullQty: 10, halfSize: "14x8", halfQty: 2 },
  LX2645: { cabinet: "319-40-2645", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX2655: { cabinet: "319-40-2655", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX2665: { cabinet: "319-40-2665", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX2745: { cabinet: "319-40-2745", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX2770: { cabinet: "319-40-2770", panel: "14 x 72", fullSize: "14x16", fullQty: 10, halfSize: "14x8", halfQty: 2 },
  LX3130: { cabinet: "319-40-3130", panel: "9 x 40", fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2 },
  LX3140: { cabinet: "319-40-3140", panel: "9 x 40", fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2 },
  LX3150: { cabinet: "319-40-3150", panel: "9 x 40", fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2 },
  LX3230: { cabinet: "319-40-3230", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX3250: { cabinet: "319-40-3250", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX3320: { cabinet: "319-40-3320", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX3325: { cabinet: "319-40-3325", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX3340: { cabinet: "319-40-3340", panel: "9 x 64", fullSize: "9X16", fullQty: 8 },
  LX3360: { cabinet: "319-40-3360", panel: "14 x 80", fullSize: "7X16", fullQty: 20 },
  LX3365: { cabinet: "319-40-3365", panel: "14 x 72", fullSize: "7X16", fullQty: 16 },
  LX3450: { cabinet: "319-40-3450", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
  LX3620: { cabinet: "319-40-3620", panel: "9 x 72", fullSize: "9X16", fullQty: 8, halfSize: "9x8", halfQty: 2 },
  LX3625: { cabinet: "319-40-3625", panel: "9 x 64", fullSize: "9X16", fullQty: 8 },
  LX3630: { cabinet: "319-40-3630", panel: "14 x 72", fullSize: "7X16", fullQty: 16, halfSize: "7x8", halfQty: 4 },
  LX3640: { cabinet: "319-40-3640", panel: "14 x 96", fullSize: "7X16", fullQty: 24 },
  LX3645: { cabinet: "319-40-3645", panel: "14 x 88", fullSize: "7X16", fullQty: 20, halfSize: "7x8", halfQty: 4 },
  LX3650: { cabinet: "319-40-3650", panel: "14 x 96", fullSize: "7X16", fullQty: 24 },
  LX3655: { cabinet: "319-40-3655", panel: "14 x 88", fullSize: "7X16", fullQty: 20, halfSize: "7x8", halfQty: 4 },
  LX3680: { cabinet: "319-40-3680", panel: "14 x 96", fullSize: "7X16", fullQty: 24 },
  LX3685: { cabinet: "319-40-3685", panel: "14 x 88", fullSize: "7X16", fullQty: 20, halfSize: "7x8", halfQty: 4 },
  LX3690: { cabinet: "319-40-3690", panel: "14 x 96", fullSize: "7X16", fullQty: 24 },
  LX3695: { cabinet: "319-40-3695", panel: "14 x 88", fullSize: "7X16", fullQty: 20, halfSize: "7x8", halfQty: 4 },
  LX3740: { cabinet: "319-40-3740", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX3745: { cabinet: "319-40-3745", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX3780: { cabinet: "319-40-3780", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX3785: { cabinet: "319-40-3785", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX3840: { cabinet: "319-40-3840", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX3845: { cabinet: "319-40-3845", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX3880: { cabinet: "319-40-3880", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX3885: { cabinet: "319-40-3885", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX6430: { cabinet: "319-40-6430", panel: "9 x 64", fullSize: "9X16", fullQty: 8 },
  LX6434: { cabinet: "319-40-6434", panel: "9 x 64", fullSize: "9X16", fullQty: 8 },
  LX6435: { cabinet: "319-40-6435", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX6436: { cabinet: "319-40-6436", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX6540: { cabinet: "319-40-6540", panel: "14 x 88", fullSize: "7X16", fullQty: 20, halfSize: "7x8", halfQty: 4 },
  LX6544: { cabinet: "319-40-6544", panel: "14 x 88", fullSize: "7X16", fullQty: 20, halfSize: "7x8", halfQty: 4 },
  LX6545: { cabinet: "319-40-6545", panel: "14 x 80", fullSize: "7X16", fullQty: 20 },
  LX6546: { cabinet: "319-40-6546", panel: "14 x 80", fullSize: "7X16", fullQty: 20 },
  LX6630: { cabinet: "319-40-6630", panel: "9 x 40", fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2 },
  LX6650: { cabinet: "319-40-6650", panel: "9 x 40", fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2 },
  LX6655: { cabinet: "319-40-6655", panel: "9 x 40", fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2 },
  LX6740: { cabinet: "319-40-6740", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX6744: { cabinet: "319-40-6744", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX6745: { cabinet: "319-40-6745", panel: "14 x 96", fullSize: "7X16", fullQty: 24 },
  LX6746: { cabinet: "319-40-6746", panel: "14 x 96", fullSize: "7X16", fullQty: 24 },
  LX6940: { cabinet: "319-40-6940", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX6944: { cabinet: "319-40-6944", panel: "14 x 112", fullSize: "7X16", fullQty: 28 },
  LX6945: { cabinet: "319-40-6945", panel: "14 x 96", fullSize: "7X16", fullQty: 24 },
  LX6946: { cabinet: "319-40-6946", panel: "14 x 96", fullSize: "7X16", fullQty: 24 },
  LX8350: { cabinet: "319-40-8350", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX8440: { cabinet: "319-40-8440", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX8650: { cabinet: "319-40-8650", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX8750: { cabinet: "319-40-8750", panel: "9 x 48", fullSize: "9X16", fullQty: 6 },
  LX8850: { cabinet: "319-40-8850", panel: "9 x 56", fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2 },
};

export const ETN_PARTS: EtnPart[] = [
  { code: "563-10-4105", where: "indoor", size: "9x8", color: "amber", span: "half", label: "5IN, 9X8, AMBER, HALF" },
  { code: "563-10-4125", where: "outdoor", size: "9x8", color: "amber", span: "half", label: "7IN, 9X8, AMBER, HALF" },
  { code: "563-10-4115", where: "indoor", size: "14x8", color: "amber", span: "half", label: "7IN, 14X8, AMBER, HALF" },
  { code: "563-10-4136", where: "outdoor", size: "7x8", color: "red", span: "half", label: "5IN, 7X8, RED, HALF" },
  { code: "563-10-4015", where: "indoor", size: "14x16", color: "amber", span: "full", label: "7IN, 14X16, AMBER, FULL" },
  { code: "563-10-4135", where: "outdoor", size: "7x8", color: "amber", span: "half", label: "5IN, 7X8, AMBER, HALF" },
  { code: "563-10-4026", where: "outdoor", size: "9x16", color: "red", span: "full", label: "7IN, 9X16, RED, FULL" },
  { code: "563-10-4126", where: "outdoor", size: "9x8", color: "red", span: "half", label: "7IN, 9X8, RED, HALF" },
  { code: "563-10-4025", where: "outdoor", size: "9x16", color: "amber", span: "full", label: "7IN, 9X16, AMBER, FULL" },
  { code: "563-10-4005", where: "indoor", size: "9x16", color: "amber", span: "full", label: "5IN, 9X16, AMBER, FULL" },
  { code: "563-10-4035", where: "outdoor", size: "7x16", color: "amber", span: "full", label: "5IN, 7X16, AMBER, FULL" },
  { code: "563-10-4036", where: "outdoor", size: "7x16", color: "red", span: "full", label: "5IN, 7X16, RED, FULL" },
];

export function etnSizeKey(size: string): string {
  return size.toLowerCase().replace(/\s+/g, "").replace("×", "x");
}

/** Item codes from the sheet's second tab that this model actually uses. */
export function etnItemLines(
  modelId: string,
  indoor: boolean,
): { code: string; label: string; qty: number }[] {
  const fit = ETN_BY_MODEL[modelId];
  if (!fit) return [];
  const where = indoor ? "indoor" : "outdoor";
  const lines: { code: string; label: string; qty: number }[] = [];
  for (const part of ETN_PARTS) {
    if (part.where !== where) continue;
    if (part.span === "full" && etnSizeKey(part.size) === etnSizeKey(fit.fullSize)) {
      lines.push({ code: part.code, label: part.label, qty: fit.fullQty });
    }
    if (
      part.span === "half" &&
      fit.halfSize &&
      fit.halfQty &&
      etnSizeKey(part.size) === etnSizeKey(fit.halfSize)
    ) {
      lines.push({ code: part.code, label: part.label, qty: fit.halfQty });
    }
  }
  return lines;
}
