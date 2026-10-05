/** ETN per model. Digits from Models Per Size. Pixels, mask, amps, and sample names from ETN SIZE per MODEL. Jack and notes from Models Per Size. */
export type EtnFit = {
  panelsPerSide: number;
  fullSize: string;
  fullQty: number;
  halfSize?: string;
  halfQty?: number;
  driver: string;
  jumpers: string;
  pixels?: string;
  mask?: string;
  amps?: number;
  guest?: string;
  home?: string;
  jack?: string;
  note?: string;
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
  LX1060: { panelsPerSide: 2, fullSize: "9X16", fullQty: 4, driver: "ETN3", jumpers: "H12, H13", pixels: "9 \u00d7 32", mask: "10 \u00d7 30 in", guest: "SAVINI", home: "BAKER", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1160: { panelsPerSide: 2, fullSize: "9X16", fullQty: 4, driver: "ETN3", jumpers: "H12, H13", pixels: "9 \u00d7 32", mask: "10 \u00d7 30 in", guest: "WEAVER", home: "CURTIS", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1161: { panelsPerSide: 2, fullSize: "9X16", fullQty: 4, driver: "ETN3", jumpers: "H12, H13", pixels: "9 \u00d7 32", mask: "10 \u00d7 30 in", guest: "WEAVER", home: "CURTIS", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1162: { panelsPerSide: 2, fullSize: "9X16", fullQty: 4, driver: "ETN3", jumpers: "H12, H13", pixels: "9 \u00d7 32", mask: "10 \u00d7 30 in", guest: "WEAVER", home: "CURTIS", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1164: { panelsPerSide: 2, fullSize: "9X16", fullQty: 4, driver: "ETN3", jumpers: "H12, H13", pixels: "9 \u00d7 32", mask: "10 \u00d7 30 in", guest: "WEAVER", home: "CURTIS", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1165: { panelsPerSide: 2, fullSize: "9X16", fullQty: 4, driver: "ETN3", jumpers: "H12, H13", pixels: "9 \u00d7 32", mask: "10 \u00d7 30 in", guest: "WEAVER", home: "CURTIS", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1166: { panelsPerSide: 2, fullSize: "9X16", fullQty: 4, driver: "ETN3", jumpers: "H12, H13", pixels: "9 \u00d7 32", mask: "10 \u00d7 30 in", guest: "WEAVER", home: "CURTIS", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1168: { panelsPerSide: 2, fullSize: "9X16", fullQty: 4, driver: "ETN3", jumpers: "H12, H13", pixels: "9 \u00d7 32", mask: "10 \u00d7 30 in", guest: "WEAVER", home: "CURTIS", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1240: { panelsPerSide: 2.5, fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2, driver: "ETN4", jumpers: "H11", pixels: "9 \u00d7 40", mask: "10 \u00d7 37 in", guest: "BAXTER", home: "ROJO", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX3130: { panelsPerSide: 2.5, fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2, driver: "ETN4", jumpers: "H11", pixels: "9 \u00d7 40", mask: "10 \u00d7 36.25 in", guest: "WENDY", home: "LISA", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX3140: { panelsPerSide: 2.5, fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2, driver: "ETN4", jumpers: "H11", pixels: "9 \u00d7 40", mask: "10 \u00d7 36.25 in", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX3150: { panelsPerSide: 2.5, fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2, driver: "ETN4", jumpers: "H11", pixels: "9 \u00d7 40", mask: "10 \u00d7 36.25 in", guest: "HALL", home: "OATS", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX6630: { panelsPerSide: 2.5, fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2, driver: "ETN4", jumpers: "H11", pixels: "9 \u00d7 40", mask: "10 \u00d7 36.25 in", guest: "JUNG", home: "FREUD", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX6650: { panelsPerSide: 2.5, fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2, driver: "ETN4", jumpers: "H11", pixels: "9 \u00d7 40", mask: "10 \u00d7 36.25 in", guest: "EDSIM", home: "MALTA", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX6655: { panelsPerSide: 2.5, fullSize: "9X16", fullQty: 4, halfSize: "9x8", halfQty: 2, driver: "ETN4", jumpers: "H11", pixels: "9 \u00d7 40", mask: "10 \u00d7 36.25 in", guest: "BARRETT", home: "VENKMAN", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1241: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "10 \u00d7 43 in", guest: "OLESON", home: "INGALLS", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1244: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "10 \u00d7 43 in", guest: "OLESON", home: "INGALLS", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1250: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "10 \u00d7 43 in", guest: "ENGLUND", home: "HODDER", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1260: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "10 \u00d7 43 in", guest: "JONES", home: "AVERY", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1390: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "10 \u00d7 43 in", guest: "DEVILS", home: "HAWKS", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1700: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "10 \u00d7 43 in", guest: "DENHAM", home: "DARROW", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX3230: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "10 \u00d7 42.9 in", guest: "KEELER", home: "MARCUS", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX3320: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "10 \u00d7 42.9 in", guest: "SORPIO", home: "ROCKA", jack: "Mean #2", note: "Tie Plug behind Home Score Mask" },
  LX3325: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "10 \u00d7 42.9 in", guest: "NISPEL", home: "HOOPER", jack: "Mean #2", note: "Tie Plug behind Home Score Mask" },
  LX6435: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "10 \u00d7 42.9 in", guest: "KORMAN", home: "CONWAY", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX6436: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "10 \u00d7 42.9 in", guest: "KORMAN", home: "CONWAY", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1070: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "GILBERT", home: "SULLIVAN", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1370: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "FRELENG", home: "CLAMPETT", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1371: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "FRELENG", home: "CLAMPETT", jack: "Mean #2", note: "Tie Plug behind Home Score Mask" },
  LX1372: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "FRELENG", home: "CLAMPETT", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1373: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "FRELENG", home: "CLAMPETT", jack: "Mean #2", note: "Tie Plug behind Home Score Mask" },
  LX1374: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "FRELENG", home: "CLAMPETT", jack: "Mean #2", note: "Tie Plug behind Home Score Mask" },
  LX1376: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "FRELENG", home: "CLAMPETT", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1377: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "FRELENG", home: "CLAMPETT", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1620: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1710: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "SOBCHAK", home: "LEBOWSKI", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1711: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "SOBCHAK", home: "LEBOWSKI", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1712: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "SOBCHAK", home: "LEBOWSKI", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1713: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "SOBCHAK", home: "LEBOWSKI", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1714: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "SOBCHAK", home: "LEBOWSKI", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1716: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "SOBCHAK", home: "LEBOWSKI", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1717: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "SOBCHAK", home: "LEBOWSKI", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1720: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "GRANT", home: "SUMMERS", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1740: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "DAZERS", home: "KNIGHTS", jack: "Mean #2", note: "Tie Plug behind HE8 Mask" },
  LX1741: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "DAZERS", home: "KNIGHTS", jack: "Mean #2", note: "Tie Plug behind HE8 Mask" },
  LX1742: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "DAZERS", home: "KNIGHTS", jack: "Mean #2", note: "Tie Plug behind HE8 Mask" },
  LX1743: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "DAZERS", home: "KNIGHTS", jack: "Mean #2", note: "Tie Plug behind HE8 Mask" },
  LX1744: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "DAZERS", home: "KNIGHTS", jack: "Mean #2", note: "Tie Plug behind HE8 Mask" },
  LX1746: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 50 in", guest: "DAZERS", home: "KNIGHTS", jack: "Mean #2", note: "Tie Plug behind HE8 Mask" },
  LX3250: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 49.85 in", guest: "HUNNICUT", home: "McINTYRE", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX6360: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX7740: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX3450: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "10 \u00d7 49.85 in", guest: "LAWRENCE / HEIDEGGAR", home: "BROWN / NIETZSCHE", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1630: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1631: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1632: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1633: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1634: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1636: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1637: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1730: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", pixels: "9 \u00d7 64", mask: "10 \u00d7 57 in", guest: "NORBERG", home: "McCROSKEY", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1731: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", pixels: "9 \u00d7 64", mask: "10 \u00d7 57 in", guest: "NORBERG", home: "McCROSKEY", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1732: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", pixels: "9 \u00d7 64", mask: "10 \u00d7 57 in", guest: "NORBERG", home: "McCROSKEY", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1733: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", pixels: "9 \u00d7 64", mask: "10 \u00d7 57 in", guest: "NORBERG", home: "McCROSKEY", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1734: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", pixels: "9 \u00d7 64", mask: "10 \u00d7 57 in", guest: "NORBERG", home: "McCROSKEY", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1736: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", pixels: "9 \u00d7 64", mask: "10 \u00d7 57 in", guest: "NORBERG", home: "McCROSKEY", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1737: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", pixels: "9 \u00d7 64", mask: "10 \u00d7 57 in", guest: "NORBERG", home: "McCROSKEY", jack: "Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX3340: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", pixels: "9 \u00d7 64", mask: "10 \u00d7 56.5 in", guest: "SHEINBERG", home: "GILLIAM", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3625: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", pixels: "9 \u00d7 64", mask: "10 \u00d7 69.25 in", guest: "FREDERSON", home: "ROTWANG", jack: "Mean #2", note: "Tie Plug behind Home Score Mask" },
  LX6430: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", pixels: "9 \u00d7 64", mask: "10 \u00d7 69.25 in", guest: "PAPENFUSS", home: "VOLDSTAD", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX6434: { panelsPerSide: 4, fullSize: "9X16", fullQty: 8, driver: "ETN2", jumpers: "H12", pixels: "9 \u00d7 64", mask: "10 \u00d7 69.25 in", guest: "PAPENFUSS", home: "VOLDSTAD", jack: "Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX3620: { panelsPerSide: 4.5, fullSize: "9X16", fullQty: 8, halfSize: "9x8", halfQty: 2, driver: "ETN5", jumpers: "H11, H13", pixels: "9 \u00d7 72", mask: "10 \u00d7 63.45 in", guest: "MANDRAKE", home: "TURGIDSON", jack: "Mean #2", note: "Tie Plug behind Home Score Mask" },
  LX1440: { panelsPerSide: 4.5, fullSize: "7X16", fullQty: 16, halfSize: "7x8", halfQty: 4, driver: "ETN16", jumpers: "H9", pixels: "14 \u00d7 72", mask: "14 \u00d7 65 in", guest: "WOLSEY", home: "SURREY", jack: "Bottom Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX1480: { panelsPerSide: 4.5, fullSize: "7X16", fullQty: 16, halfSize: "7x8", halfQty: 4, driver: "ETN16", jumpers: "H9", pixels: "14 \u00d7 72", mask: "14 \u00d7 65 in", guest: "ROGERS", home: "BARTON", jack: "Bottom Mean #1", note: "Black Wire Fuse Right,Extend White Wire to Main Terminal block Top, Green to Chassis" },
  LX1486: { panelsPerSide: 4.5, fullSize: "7X16", fullQty: 16, halfSize: "7x8", halfQty: 4, driver: "ETN16", jumpers: "H9", pixels: "14 \u00d7 72", mask: "14 \u00d7 65 in", guest: "ROGERS", home: "BARTON", jack: "Bottom Mean #1", note: "Black Wire Fuse Right,Extend White Wire to Main Terminal block Top, Green to Chassis" },
  LX3365: { panelsPerSide: 4.5, fullSize: "7X16", fullQty: 16, halfSize: "7x8", halfQty: 4, driver: "ETN16", jumpers: "H9", pixels: "14 \u00d7 72", mask: "14 \u00d7 63.45 in", guest: "EASTASIA", home: "OCEANIA", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3630: { panelsPerSide: 4.5, fullSize: "7X16", fullQty: 16, halfSize: "7x8", halfQty: 4, driver: "ETN16", jumpers: "H9", pixels: "14 \u00d7 72", mask: "14 \u00d7 63.45 in", guest: "GOLLUM", home: "BAGGINS", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX1750: { panelsPerSide: 5, fullSize: "7X16", fullQty: 20, driver: "ETN17", jumpers: "H9, H13", pixels: "14 \u00d7 80", mask: "14 \u00d7 71 in", guest: "GREENE", home: "WESTEND", jack: "Bottom Mean #1", note: "Tie Plug behind Home Runs Mask" },
  LX1751: { panelsPerSide: 5, fullSize: "7X16", fullQty: 20, driver: "ETN17", jumpers: "H9, H13", pixels: "14 \u00d7 80", mask: "14 \u00d7 71 in", guest: "GREENE", home: "WESTEND", jack: "Bottom Mean #1", note: "Tie Plug behind Home Runs Mask" },
  LX1752: { panelsPerSide: 5, fullSize: "7X16", fullQty: 20, driver: "ETN17", jumpers: "H9, H13", pixels: "14 \u00d7 80", mask: "14 \u00d7 71 in", guest: "GREENE", home: "WESTEND", jack: "Bottom Mean #1", note: "Tie Plug behind Home Runs Mask" },
  LX1753: { panelsPerSide: 5, fullSize: "7X16", fullQty: 20, driver: "ETN17", jumpers: "H9, H13", pixels: "14 \u00d7 80", mask: "14 \u00d7 71 in", guest: "GREENE", home: "WESTEND", jack: "Bottom Mean #1", note: "Tie Plug behind Home Runs Mask" },
  LX1754: { panelsPerSide: 5, fullSize: "7X16", fullQty: 20, driver: "ETN17", jumpers: "H9, H13", pixels: "14 \u00d7 80", mask: "14 \u00d7 71 in", guest: "GREENE", home: "WESTEND", jack: "Bottom Mean #1", note: "Tie Plug behind Home Runs Mask" },
  LX1756: { panelsPerSide: 5, fullSize: "7X16", fullQty: 20, driver: "ETN17", jumpers: "H9, H13", pixels: "14 \u00d7 80", mask: "14 \u00d7 71 in", guest: "GREENE", home: "WESTEND", jack: "Bottom Mean #1", note: "Tie Plug behind Home Runs Mask" },
  LX3360: { panelsPerSide: 5, fullSize: "7X16", fullQty: 20, driver: "ETN17", jumpers: "H9, H13", pixels: "14 \u00d7 80", mask: "14 \u00d7 70.1 in", guest: "DICKINSON", home: "DESCHANEL", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX6545: { panelsPerSide: 5, fullSize: "7X16", fullQty: 20, driver: "ETN17", jumpers: "H9, H13", pixels: "14 \u00d7 80", mask: "14 \u00d7 70.1 in", guest: "LOUDON", home: "HARTLEY", jack: "Bottom Mean #1", note: "Tie Plug behind Home Shots Mask" },
  LX6546: { panelsPerSide: 5, fullSize: "7X16", fullQty: 20, driver: "ETN17", jumpers: "H9, H13", pixels: "14 \u00d7 80", mask: "14 \u00d7 70.1 in", guest: "LOUDON", home: "HARTLEY", jack: "Bottom Mean #1", note: "Tie Plug behind Home Shots Mask" },
  LX3645: { panelsPerSide: 5.5, fullSize: "7X16", fullQty: 20, halfSize: "7x8", halfQty: 4, driver: "ETN18", jumpers: "H9, H12", pixels: "14 \u00d7 88", mask: "14 \u00d7 77.05 in", guest: "NECHAYEV", home: "NAKAMURA", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3655: { panelsPerSide: 5.5, fullSize: "7X16", fullQty: 20, halfSize: "7x8", halfQty: 4, driver: "ETN18", jumpers: "H9, H12", pixels: "14 \u00d7 88", mask: "14 \u00d7 77.05 in", guest: "REDWING", home: "DILLION", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3685: { panelsPerSide: 5.5, fullSize: "7X16", fullQty: 20, halfSize: "7x8", halfQty: 4, driver: "ETN18", jumpers: "H9, H12", pixels: "14 \u00d7 88", mask: "14 \u00d7 77.05 in", guest: "FRANKLYN", home: "STALLING", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3695: { panelsPerSide: 5.5, fullSize: "7X16", fullQty: 20, halfSize: "7x8", halfQty: 4, driver: "ETN18", jumpers: "H9, H12", pixels: "14 \u00d7 88", mask: "14 \u00d7 77.05 in", guest: "SENTENZA", home: "BLONDIE", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX6370: { panelsPerSide: 5.5, fullSize: "7X16", fullQty: 20, halfSize: "7x8", halfQty: 4, driver: "ETN18", jumpers: "H9, H12", note: "Tie Plug behind Home Shots Mask" },
  LX6540: { panelsPerSide: 5.5, fullSize: "7X16", fullQty: 20, halfSize: "7x8", halfQty: 4, driver: "ETN18", jumpers: "H9, H12", pixels: "14 \u00d7 88", mask: "14 \u00d7 77.05 in", guest: "KILLIAN", home: "RICHARDS", jack: "Bottom Mean #1", note: "Tie Plug behind Home Score Mask" },
  LX6544: { panelsPerSide: 5.5, fullSize: "7X16", fullQty: 20, halfSize: "7x8", halfQty: 4, driver: "ETN18", jumpers: "H9, H12", pixels: "14 \u00d7 88", mask: "14 \u00d7 77.05 in", guest: "KILLIAN", home: "RICHARDS", jack: "Bottom Mean #1", note: "Tie Plug behind Home Shots Mask" },
  LX3640: { panelsPerSide: 6, fullSize: "7X16", fullQty: 24, driver: "ETN20", jumpers: "H9, H11", pixels: "14 \u00d7 96", mask: "14 \u00d7 83.7 in", guest: "ARNGRIM", home: "GILBERT", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3650: { panelsPerSide: 6, fullSize: "7X16", fullQty: 24, driver: "ETN20", jumpers: "H9, H11", pixels: "14 \u00d7 96", mask: "14 \u00d7 83.7 in", guest: "RANDOLPH", home: "MORTIMER", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3680: { panelsPerSide: 6, fullSize: "7X16", fullQty: 24, driver: "ETN20", jumpers: "H9, H11", pixels: "14 \u00d7 96", mask: "14 \u00d7 83.7 in", guest: "FARBISSINA", home: "KENSINGTON", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3690: { panelsPerSide: 6, fullSize: "7X16", fullQty: 24, driver: "ETN20", jumpers: "H9, H11", pixels: "14 \u00d7 96", mask: "14 \u00d7 83.7 in", guest: "VOORHEES", home: "KRUEGER", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX6745: { panelsPerSide: 6, fullSize: "7X16", fullQty: 24, driver: "ETN20", jumpers: "H9, H11", pixels: "14 \u00d7 96", mask: "14 \u00d7 83.7 in", guest: "McGREGOR", home: "GUINNESS", jack: "Bottom Mean #1", note: "Tie Plug behind Home Shots Mask" },
  LX6746: { panelsPerSide: 6, fullSize: "7X16", fullQty: 24, driver: "ETN20", jumpers: "H9, H11", pixels: "14 \u00d7 96", mask: "14 \u00d7 83.7 in", guest: "McGREGOR", home: "GUINNESS", jack: "Bottom Mean #1", note: "Tie Plug behind Home Shots Mask" },
  LX6945: { panelsPerSide: 6, fullSize: "7X16", fullQty: 24, driver: "ETN20", jumpers: "H9, H11", pixels: "14 \u00d7 96", mask: "14 \u00d7 83.7 in", guest: "WINIFRED", home: "DAUNTLESS", jack: "Bottom Mean #1", note: "Tie Plug behind Home Shots Mask" },
  LX6946: { panelsPerSide: 6, fullSize: "7X16", fullQty: 24, driver: "ETN20", jumpers: "H9, H11", pixels: "14 \u00d7 96", mask: "14 \u00d7 83.7 in", guest: "WINIFRED", home: "DAUNTLESS", jack: "Bottom Mean #2", note: "Tie Plug behind Home Shots Mask" },
  LX1780: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97 in", guest: "METROPOLIS", home: "GOTHAM CITY", jack: "Bottom Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1781: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97 in", guest: "METROPOLIS", home: "GOTHAM CITY", jack: "Bottom Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1782: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97 in", guest: "METROPOLIS", home: "GOTHAM CITY", jack: "Bottom Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1783: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97 in", guest: "METROPOLIS", home: "GOTHAM CITY", jack: "Bottom Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1784: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97 in", guest: "METROPOLIS", home: "GOTHAM CITY", jack: "Bottom Mean #2", note: "Tie Plug behind Home Runs Mask" },
  LX1786: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97 in", guest: "METROPOLIS", home: "GOTHAM CITY", jack: "Bottom Mean #1", note: "Tie Plug behind Home Runs Mask" },
  LX3740: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97.3 in", guest: "AGAMEMNON", home: "ACHILLES", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3745: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97.3 in", guest: "HILLENBURG", home: "GREENBLATT", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3780: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97.3 in", guest: "GILIAROVSKY", home: "VAKULINCHUK", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3785: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97.3 in", guest: "STEVENSON", home: "EISENHOWER", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3840: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97.3 in", guest: "VOLDEMORT", home: "DUMBLEDORE", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3845: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97.3 in", guest: "VON NEBULA", home: "DUNKAN BULK", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3880: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97.3 in", guest: "ROCKWELL", home: "WING-DAVEY", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX3885: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97.3 in", guest: "CORNINGSTONE", home: "BURGUNDY", jack: "Bottom Mean #1", note: "Tie Plug behind Qtr Mask" },
  LX6740: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97.3 in", guest: "MOOREHEAD", home: "MONTGOMERY", jack: "Bottom Mean #1", note: "Tie Plug behind Home Shots Mask" },
  LX6744: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97.3 in", guest: "MOOREHEAD", home: "MONTGOMERY", jack: "Bottom Mean #1", note: "Tie Plug behind Home Shots Mask" },
  LX6940: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97.3 in", guest: "SCHNEIDER", home: "RAVENWOOD", jack: "Bottom Mean #1", note: "Tie Plug behind Home Shots Mask" },
  LX6944: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", pixels: "14 \u00d7 112", mask: "14 \u00d7 97.3 in", guest: "SCHNEIDER", home: "RAVENWOOD", jack: "Bottom Mean #1", note: "Tie Plug behind Home Shots Mask" },
  LX7770: { panelsPerSide: 7, fullSize: "7X16", fullQty: 28, driver: "ETN24", jumpers: "H9, H10", note: "Tie Plug behind Home Shots Mask" },
  LX2350: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "6.75 \u00d7 29 in", amps: 0.52, guest: "ROGERS", home: "GORDON" },
  LX2550: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "6.75 \u00d7 29 in", amps: 0.52, guest: "JONES", home: "AVERY" },
  LX2555: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "6.75 \u00d7 29 in", amps: 0.52, guest: "WAYNE", home: "GARTH" },
  LX2556: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "6.75 \u00d7 29 in", amps: 0.52, guest: "MINERS", home: "ROCKETS" },
  LX2655: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "6.75 \u00d7 29 in", amps: 0.52, guest: "RUTSEY / FRIPP", home: "PEART / BELEW" },
  LX8350: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "6.75 \u00d7 29 in", amps: 0.52, guest: "TROJANS", home: "ARGIVES" },
  LX8440: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "6.75 \u00d7 29 in", amps: 0.52, guest: "DURAS", home: "GOWRON" },
  LX8650: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "6.75 \u00d7 29 in", amps: 0.52, guest: "EDISON", home: "TESLA" },
  LX8750: { panelsPerSide: 3, fullSize: "9X16", fullQty: 6, driver: "ETN0", jumpers: "No Jumpers", pixels: "9 \u00d7 48", mask: "6.75 \u00d7 29 in", amps: 0.52, guest: "WELKER", home: "CULLEN" },
  LX2340: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "6.75 \u00d7 34 in", amps: 0.61, guest: "DIFFORD", home: "TILBROOK" },
  LX2545: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "6.75 \u00d7 34 in", amps: 0.61, guest: "BECKER/GORSHIN", home: "FAGEN/ANTONIO" },
  LX2645: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "6.75 \u00d7 34 in", amps: 0.61, guest: "HANNA", home: "BARBERA" },
  LX2665: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "6.75 \u00d7 34 in", amps: 0.61, guest: "WATERS / COLLINS", home: "GILMOUR / GABRIEL" },
  LX2745: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "6.75 \u00d7 34 in", amps: 0.61, guest: "APOLLO", home: "DIONYSUS" },
  LX8850: { panelsPerSide: 3.5, fullSize: "9X16", fullQty: 6, halfSize: "9x8", halfQty: 2, driver: "ETN1", jumpers: "H13", pixels: "9 \u00d7 56", mask: "6.75 \u00d7 34 in", amps: 0.61, guest: "SMAILS", home: "CZERVIK" },
  LX2370: { panelsPerSide: 4.5, fullSize: "14X16", fullQty: 8, halfSize: "14x8", halfQty: 2, driver: "ETN8", jumpers: "H10", pixels: "14 \u00d7 72", amps: 1.19, guest: "FANTANA", home: "TAMLAND" },
  LX2570: { panelsPerSide: 4.5, fullSize: "14X16", fullQty: 8, halfSize: "14x8", halfQty: 2, driver: "ETN8", jumpers: "H10", pixels: "14 \u00d7 72", amps: 1.19, guest: "SMOKEY", home: "BANDIT" },
  LX2575: { panelsPerSide: 4.5, fullSize: "14X16", fullQty: 8, halfSize: "14x8", halfQty: 2, driver: "ETN8", jumpers: "H10", pixels: "14 \u00d7 72", amps: 1.19, guest: "HALSTEAD", home: "ROSEMEAD" },
  LX2576: { panelsPerSide: 4.5, fullSize: "14X16", fullQty: 8, halfSize: "14x8", halfQty: 2, driver: "ETN8", jumpers: "H10", pixels: "14 \u00d7 72", amps: 1.19, guest: "AZULA", home: "KATARA" },
  LX2770: { panelsPerSide: 4.5, fullSize: "14X16", fullQty: 8, halfSize: "14x8", halfQty: 2, driver: "ETN8", jumpers: "H10", pixels: "14 \u00d7 72", amps: 1.19, guest: "JAM", home: "LEWIS" },
};

export const ETN_PARTS: EtnPart[] = [
  { code: "563-10-4105", where: "indoor", size: "9x8", color: "amber", span: "half", label: "5IN, 9X8, HALF" },
  { code: "563-10-4125", where: "outdoor", size: "9x8", color: "amber", span: "half", label: "7IN, 9X8, AMBER, HALF" },
  { code: "563-10-4115", where: "indoor", size: "14x8", color: "amber", span: "half", label: "7IN, 14X8, HALF" },
  { code: "563-10-4136", where: "outdoor", size: "7x8", color: "red", span: "half", label: "5IN, 7X8, RED, HALF" },
  { code: "563-10-4015", where: "indoor", size: "14x16", color: "amber", span: "full", label: "7IN, 14X16, FULL" },
  { code: "563-10-4135", where: "outdoor", size: "7x8", color: "amber", span: "half", label: "5IN, 7X8, AMBER, HALF" },
  { code: "563-10-4026", where: "outdoor", size: "9x16", color: "red", span: "full", label: "7IN, 9X16, RED, FULL" },
  { code: "563-10-4126", where: "outdoor", size: "9x8", color: "red", span: "half", label: "7IN, 9X8, RED, HALF" },
  { code: "563-10-4025", where: "outdoor", size: "9x16", color: "amber", span: "full", label: "7IN, 9X16, AMBER, FULL" },
  { code: "563-10-4005", where: "indoor", size: "9x16", color: "amber", span: "full", label: "5IN, 9X16, FULL" },
  { code: "563-10-4035", where: "outdoor", size: "7x16", color: "amber", span: "full", label: "5IN, 7X16, AMBER, FULL" },
  { code: "563-10-4036", where: "outdoor", size: "7x16", color: "red", span: "full", label: "5IN, 7X16, RED, FULL" },
];

export function etnSizeKey(size: string): string {
  return size.toLowerCase().replace(/\s+/g, "").replace("×", "x");
}

/** 563-10 item codes that match this model's full and half sizes. Indoor labels omit color. */
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
