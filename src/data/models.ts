/**
 * Compiled LX-series catalog.
 * Sources: Electro-Mech owner's manuals (electro-mech.com/manuals),
 * color spec sheets, Drive mechanical cut sheets
 * (folder "Scoreboard Mechanical Cut Sheets"), Drive "Specifications of
 * LX Series Baseball Scoreboard Models", and Drive "LX#### DIGITS" BOMs.
 */
import type { LxModel } from "./types";

export const CUTSHEET_FOLDER =
  "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-";

export const MANUALS_INDEX = "https://www.electro-mech.com/manuals/";
export const SPEC_SHEETS_INDEX = "https://www.electro-mech.com/manuals-spec-sheets/";

export const models: LxModel[] = [
  {
    "id": "LX1020",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "5 ft",
    "height": "3 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      11,
      3
    ],
    "blurb": "Compact youth baseball board \u2014 total runs, inning, and bullet counts in a 5 \u00d7 3 ft cabinet.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 11\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (3\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1020/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1030",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "8 ft",
    "height": "4 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      4
    ],
    "blurb": "Recreation-field baseball board with 18-inch total-run and inning digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1030/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1050",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "6 ft",
    "height": "3 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      15,
      3
    ],
    "blurb": "Slim 6 \u00d7 3 ft baseball scoreboard with 15-inch totals and bullet counts.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 15\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (3\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1050/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1060",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      4
    ],
    "blurb": "Flagship 10 \u00d7 5 ft rec baseball board with Hit/Error bullets.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1060/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1062",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "3 ft",
    "height": "3.5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "addon-timer",
    "digitHeights": [
      18
    ],
    "blurb": "Add-on 2-digit timer cabinet sized to sit with baseball/softball boards.",
    "displays": [
      {
        "label": "Timer / clock",
        "detail": "2-digit timer 18\""
      },
      {
        "label": "Indicators",
        "detail": "Add-on timer cabinet matched to baseball/softball boards"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx1062/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1064",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "7 ft",
    "height": "3 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "addon-timer",
    "digitHeights": [
      18
    ],
    "blurb": "Add-on 4-digit timer; cabinet can be configured to match nearly any Electro-Mech baseball board.",
    "displays": [
      {
        "label": "Timer / clock",
        "detail": "4-digit timer 18\""
      },
      {
        "label": "Indicators",
        "detail": "Add-on timer; configurable to match nearly any Electro-Mech baseball cabinet"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx1064/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 90,
    "currentA": 0.8
  },
  {
    "id": "LX1070",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      4
    ],
    "blurb": "Wide 16 \u00d7 5 ft baseball board; innings to 19 plus Hit/Error bullets.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "2.1-digit inning 18\" (to 19)"
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1070/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1118",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "42 in",
    "height": "42 in",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "pitch-count",
    "digitHeights": [
      18
    ],
    "blurb": "Dedicated 18-inch pitch-count display for pairing with a main baseball board.",
    "displays": [
      {
        "label": "Stats",
        "detail": "2.1-digit pitch count 18\""
      },
      {
        "label": "Indicators",
        "detail": "Stand-alone pitch count display"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx1118/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1130",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "8 ft",
    "height": "6 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11,
      4
    ],
    "blurb": "8 \u00d7 6 ft baseball board adding pitch count to the LX1060 feature set.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Stats",
        "detail": "2-digit pitch count 11\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1130/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1131",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "8 ft",
    "height": "6 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "3-digit game timer 11\""
      },
      {
        "label": "Stats",
        "detail": "2-digit pitch count 11\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "pitch count / speed",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1131/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1132",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "8 ft",
    "height": "6 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "2-digit game timer 11\" + activity indicator"
      },
      {
        "label": "Stats",
        "detail": "2-digit pitch count 11\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "pitch count / speed",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1132/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1135",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "8 ft",
    "height": "6 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "3-digit game timer 11\" + activity indicator"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1135/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1136",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "8 ft",
    "height": "6 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "2-digit game timer 11\" + activity indicator"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1136/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1138",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "8 ft",
    "height": "6 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit game timer 11\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1138/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1160",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "7 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Stats",
        "detail": "2-digit pitch count 11\""
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1160/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1161",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "7 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "3-digit game timer 11\" + activity indicator"
      },
      {
        "label": "Stats",
        "detail": "2-digit pitch count 11\""
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "pitch count / speed",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1161/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1162",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "7 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "2-digit game timer 11\" + activity indicator"
      },
      {
        "label": "Stats",
        "detail": "2-digit pitch count 11\""
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "pitch count / speed",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1162/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 220,
    "currentA": 1.6
  },
  {
    "id": "LX1164",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "7 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit game timer 11\""
      },
      {
        "label": "Stats",
        "detail": "2-digit pitch count 11\""
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "pitch count / speed",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1164/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1165",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "7 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "3-digit game timer 11\" + activity indicator"
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1165/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1166",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "7 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "2-digit game timer 11\" + activity indicator"
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1166/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1168",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "7 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit game timer 11\""
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1168/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1240",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "2.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 11\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1240/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1241",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "12 ft",
    "height": "5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "2.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 11\""
      },
      {
        "label": "Timer / clock",
        "detail": "3-digit game timer 11\" + activity indicator"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1241/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1244",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "12 ft",
    "height": "5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "2.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 11\""
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit game timer 11\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1244/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1250",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "14 ft",
    "height": "5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      4
    ],
    "blurb": "14 \u00d7 5 ft baseball board with 18-inch digits, innings to 19, and Hit/Error bullets. MM console standard; ETN and ScoreLink optional.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "2.1-digit inning 18\" (to 19)"
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1250/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 220,
    "currentA": 1.6,
    "posts": 2,
    "postMaxDiaIn": 4.5
  },
  {
    "id": "LX1260",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "12 ft",
    "height": "8 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      24,
      18,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 24\""
      },
      {
        "label": "Inning / linescore",
        "detail": "2.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1260/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1320",
    "sport": "multisport",
    "alsoSports": [
      "baseball",
      "football",
      "soccer"
    ],
    "environment": "portable",
    "width": "5 ft",
    "height": "4 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "multisport",
    "digitHeights": [
      11,
      3
    ],
    "blurb": "Portable multi-sport board. Reversible captions and bullet indicators switch baseball counts to football downs. Optional T-Cart.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit scores 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit period/inning/quarter 11\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike-Down / 2-bullet Out (3\")"
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit period clock 11\""
      },
      {
        "label": "Indicators",
        "detail": "Portable multi-sport with reversible captions; optional T-Cart"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp",
      "t-cart"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx1320/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 50,
    "currentA": 0.9
  },
  {
    "id": "LX1340",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike-Down / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "2-digit game timer 18\" + activity indicator"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1340/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1341",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike-Down / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "3-digit game timer 18\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1341/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1360",
    "sport": "baseball",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit scores 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "2-digit inning/to-go 18\""
      },
      {
        "label": "Count",
        "detail": "4-bullet Ball-Down / 4-bullet Strike-Qtr / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit timer 18\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1360/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1370",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "14 ft",
    "height": "6 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Stats",
        "detail": "2-digit batter number 18\""
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1370/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1371",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "14 ft",
    "height": "6 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Timer / clock",
        "detail": "3-digit game timer 18\" + activity indicator"
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1371/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1372",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "14 ft",
    "height": "6 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Timer / clock",
        "detail": "2-digit game timer 18\" + activity indicator"
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1372/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1373",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "14 ft",
    "height": "6 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Stats",
        "detail": "2.1-digit pitch count 18\""
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1373/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1374",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "14 ft",
    "height": "6 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit game timer 18\""
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1374/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1376",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "14 ft",
    "height": "6 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Stats",
        "detail": "2.1-digit pitch speed 18\""
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1376/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1377",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "14 ft",
    "height": "6 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Indicators",
        "detail": "H / E characters 15\" + error position digit 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1377/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1390",
    "sport": "baseball",
    "alsoSports": [
      "multisport"
    ],
    "environment": "outdoor",
    "width": "14 ft",
    "height": "5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      15,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit score/total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1-digit inning/period 15\""
      },
      {
        "label": "Count",
        "detail": "3-bullet Ball / 2-bullet Strike / 2-bullet Out (4\")"
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit game clock 18\""
      },
      {
        "label": "Indicators",
        "detail": "Hit and Error bullets (4\")"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1390/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1440",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Runs / hits / errors without a full linescore \u2014 16 \u00d7 8 ft with 18-inch stats.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "2.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Indicators",
        "detail": "2-digit total hits 18\" and 1-digit total errors 18\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1440/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 400,
    "currentA": 2.5
  },
  {
    "id": "LX1480",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      24,
      18,
      15,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 24\""
      },
      {
        "label": "Stats",
        "detail": "2-digit batter number 24\", 2-digit total hits 18\""
      },
      {
        "label": "Indicators",
        "detail": "H / E 15\" + 1-digit total errors 18\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1480/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1486",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "baseball-compact",
    "digitHeights": [
      24,
      18,
      15,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "1.1-digit inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 24\""
      },
      {
        "label": "Stats",
        "detail": "2-digit pitch speed 24\", 2-digit total hits 18\""
      },
      {
        "label": "Indicators",
        "detail": "H / E 15\" + 1-digit total errors 18\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1486/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1620",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "18 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15
    ],
    "blurb": "Single 18 \u00d7 6 ft cabinet with eight innings of runs-by-inning plus BSO.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "8 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1620/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 350,
    "currentA": 3.2
  },
  {
    "id": "LX1630",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "22 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "8 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Stats",
        "detail": "2-digit batter number 18\", 2-digit total hits 15\""
      },
      {
        "label": "Indicators",
        "detail": "1-digit total errors 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1630/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1631",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "22 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "8 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Timer / clock",
        "detail": "3-digit game clock 18\""
      },
      {
        "label": "Indicators",
        "detail": "2-digit total hits 15\", 1-digit total errors 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1631/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1632",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "22 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "8 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Timer / clock",
        "detail": "2-digit game clock 18\""
      },
      {
        "label": "Indicators",
        "detail": "2-digit total hits 15\", 1-digit total errors 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1632/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1633",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "22 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "8 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Stats",
        "detail": "2.1-digit pitch count 18\", 2-digit total hits 15\""
      },
      {
        "label": "Indicators",
        "detail": "1-digit total errors 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1633/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1634",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "22 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "8 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit game clock 18\" + activity indicator"
      },
      {
        "label": "Indicators",
        "detail": "2-digit total hits 15\", 1-digit total errors 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1634/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1636",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "22 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "8 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Stats",
        "detail": "2.1-digit pitch speed 18\", 2-digit total hits 15\""
      },
      {
        "label": "Indicators",
        "detail": "1-digit total errors 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1636/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1637",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "22 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "8 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Indicators",
        "detail": "Hits 15\", H/E 15\", total errors 15\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1637/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1700",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "14 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      11
    ],
    "blurb": "14 \u00d7 5 ft seven-inning linescore. Compact cabinet leaves room for sponsor ID panels.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "7 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 11\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1700/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 250,
    "currentA": 1.8
  },
  {
    "id": "LX1710",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15,
      11
    ],
    "blurb": "Nine-inning linescore in one 16 \u00d7 5 ft cabinet. Batter number plus 15-inch BSO.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Stats",
        "detail": "2-digit batter number 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1710/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 300,
    "currentA": 2.6,
    "digitKit": [
      {
        "qty": 22,
        "part": "563-20-1000",
        "item": "11\" red digit",
        "use": "Guest/Home innings 1\u20139 and totals"
      },
      {
        "qty": 5,
        "part": "563-20-1010",
        "item": "15\" red digit",
        "use": "Ball, Strike, Out, Batter Number"
      }
    ]
  },
  {
    "id": "LX1711",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Timer / clock",
        "detail": "3-digit game timer 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1711/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1712",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Timer / clock",
        "detail": "2-digit game timer 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1712/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1713",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Stats",
        "detail": "2-digit pitch count 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1713/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1714",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit game timer 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1714/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1716",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Stats",
        "detail": "2-digit pitch speed 15\""
      },
      {
        "label": "Indicators",
        "detail": "Radar gun kit available"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1716/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1717",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Indicators",
        "detail": "H / E characters 15\" + error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1717/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1720",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "7 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1720/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1730",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Stats",
        "detail": "2-digit batter number 18\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1730/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1731",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Timer / clock",
        "detail": "3-digit game timer 18\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1731/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1732",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Timer / clock",
        "detail": "2-digit game timer 18\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1732/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1733",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Stats",
        "detail": "2.1-digit pitch count 18\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1733/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1734",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit game timer 18\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1734/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1736",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Stats",
        "detail": "2.1-digit pitch speed 18\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "linescore",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1736/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1737",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "6.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "9 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Indicators",
        "detail": "H / E characters 15\" + error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1737/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1740",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15,
      11
    ],
    "blurb": "Twenty-foot linescore with ten innings, H/E characters, error position, and totals.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Stats",
        "detail": "2-digit batter number 15\", 2-digit total hits 11\""
      },
      {
        "label": "Indicators",
        "detail": "H / E 15\", total errors 11\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1740/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 350,
    "currentA": 3.5
  },
  {
    "id": "LX1741",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Timer / clock",
        "detail": "3-digit game timer 15\" + activity indicator"
      },
      {
        "label": "Indicators",
        "detail": "Hits 11\", H/E 15\", errors 11\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1741/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1742",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Timer / clock",
        "detail": "2-digit game timer 15\" + activity indicator"
      },
      {
        "label": "Indicators",
        "detail": "Hits 11\", H/E 15\", errors 11\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1742/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1743",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Stats",
        "detail": "2-digit pitch count 15\", 2-digit total hits 11\""
      },
      {
        "label": "Indicators",
        "detail": "H/E 15\", errors 11\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1743/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1744",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit game timer 15\""
      },
      {
        "label": "Indicators",
        "detail": "Hits 11\", H/E 15\", errors 11\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1744/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1746",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      15,
      11
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 11\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 11\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 15\""
      },
      {
        "label": "Stats",
        "detail": "2-digit pitch speed 15\", 2-digit total hits 11\""
      },
      {
        "label": "Indicators",
        "detail": "H/E 15\", errors 11\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1746/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1750",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "9 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "26 \u00d7 9 ft high-school/college linescore. Ten innings, H/E, error position, 18-inch BSO.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Stats",
        "detail": "2-digit batter number 18\", 2-digit total hits 15\""
      },
      {
        "label": "Indicators",
        "detail": "H / E 15\", total errors 15\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1750/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "digitKit": [
      {
        "qty": 5,
        "part": "563-20-1310",
        "item": "18\" red unbuffered digit",
        "use": "Ball, Strike, Out, Batter Number"
      },
      {
        "qty": 31,
        "part": "563-20-1010",
        "item": "15\" red digit",
        "use": "Innings, Runs, Hits, Errors"
      },
      {
        "qty": 1,
        "part": "563-20-1160",
        "item": "15\" red E indicator",
        "use": "Error character"
      },
      {
        "qty": 1,
        "part": "563-20-1170",
        "item": "15\" red H indicator",
        "use": "Hit character"
      }
    ]
  },
  {
    "id": "LX1751",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "9 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Timer / clock",
        "detail": "3-digit period clock 18\" + activity indicator"
      },
      {
        "label": "Indicators",
        "detail": "Hits 15\", H/E 15\", errors 15\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1751/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1752",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "9 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Timer / clock",
        "detail": "2-digit period clock 18\" + activity indicator"
      },
      {
        "label": "Indicators",
        "detail": "Hits 15\", H/E 15\", errors 15\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1752/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1753",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "9 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Stats",
        "detail": "2.1-digit pitch count 18\", 2-digit total hits 15\""
      },
      {
        "label": "Indicators",
        "detail": "H/E 15\", errors 15\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1753/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1754",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "9 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit period clock 18\""
      },
      {
        "label": "Indicators",
        "detail": "Hits 15\", H/E 15\", errors 15\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1754/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1756",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "9 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 15\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 15\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 18\""
      },
      {
        "label": "Stats",
        "detail": "2.1-digit pitch speed 18\", 2-digit total hits 15\""
      },
      {
        "label": "Indicators",
        "detail": "H/E 15\", errors 15\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1756/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1780",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "36 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      24,
      18,
      15,
      4
    ],
    "blurb": "Largest catalog baseball linescore \u2014 36 \u00d7 10 ft with 24-inch BSO and 18-inch innings.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 24\""
      },
      {
        "label": "Stats",
        "detail": "2-digit batter number 24\", 2-digit total hits 18\""
      },
      {
        "label": "Indicators",
        "detail": "H / E 15\", total errors 18\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1780/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1781",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "36 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      24,
      18,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 24\""
      },
      {
        "label": "Timer / clock",
        "detail": "3-digit game timer 24\""
      },
      {
        "label": "Indicators",
        "detail": "2-digit total hits 18\", 1-digit total errors 18\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1781/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1782",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "36 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      24,
      18,
      15,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 24\""
      },
      {
        "label": "Timer / clock",
        "detail": "2-digit game timer 24\" + activity indicator"
      },
      {
        "label": "Indicators",
        "detail": "Hits 18\", H/E 15\", errors 18\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1782/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1783",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "36 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      24,
      18,
      15,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 24\""
      },
      {
        "label": "Stats",
        "detail": "2.1-digit pitch count 24\", 2-digit total hits 18\""
      },
      {
        "label": "Indicators",
        "detail": "H/E 15\", errors 18\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1783/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1784",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "36 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      24,
      18,
      15,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 24\""
      },
      {
        "label": "Timer / clock",
        "detail": "4-digit game timer 24\""
      },
      {
        "label": "Indicators",
        "detail": "Hits 18\", H/E 15\", errors 18\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1784/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX1786",
    "sport": "baseball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "36 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "linescore",
    "digitHeights": [
      24,
      18,
      15,
      4
    ],
    "blurb": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "displays": [
      {
        "label": "Score",
        "detail": "2-digit total runs 18\""
      },
      {
        "label": "Inning / linescore",
        "detail": "10 each 1-digit runs-by-inning 18\""
      },
      {
        "label": "Count",
        "detail": "1-digit Ball / Strike / Out 24\""
      },
      {
        "label": "Stats",
        "detail": "2.1-digit pitch speed 24\", 2-digit total hits 18\""
      },
      {
        "label": "Indicators",
        "detail": "H/E 15\", errors 18\", error position 15\""
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "pitch count / speed",
      "linescore",
      "hit / error",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "he-character",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/baseball/scoreboard-lx1786/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2055",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "4 ft",
    "height": "5 ft each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Indoor LED basketball scoreboard. Syncs with shot clocks and additional gym displays over cable or ScoreLink.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit (or 2.1) scores"
      },
      {
        "label": "Period",
        "detail": "1-digit period"
      },
      {
        "label": "Bonus",
        "detail": "Single or double bonus indicators"
      },
      {
        "label": "Team fouls",
        "detail": "Optional team-foul digits"
      },
      {
        "label": "Time-outs left",
        "detail": "Optional TOL digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2055/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2056",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "4 ft 5 in",
    "height": "6 ft each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Indoor LED basketball scoreboard. Syncs with shot clocks and additional gym displays over cable or ScoreLink.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit (or 2.1) scores"
      },
      {
        "label": "Period",
        "detail": "1-digit period"
      },
      {
        "label": "Bonus",
        "detail": "Single or double bonus indicators"
      },
      {
        "label": "Team fouls",
        "detail": "Optional team-foul digits"
      },
      {
        "label": "Time-outs left",
        "detail": "Optional TOL digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2056/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2120",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "indoor",
    "width": "26 in",
    "height": "24 in each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "shot-clock",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Companion display (play clock, shot clock, pitch count, or add-on timer).",
    "displays": [
      {
        "label": "Shot time",
        "detail": "2-digit shot clock"
      },
      {
        "label": "Period time",
        "detail": "Optional 4-digit period clock, synced to the main board"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx2120/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2150",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "indoor",
    "width": "24 in",
    "height": "27 in each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "shot-clock",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Companion display (play clock, shot clock, pitch count, or add-on timer).",
    "displays": [
      {
        "label": "Shot time",
        "detail": "2-digit shot clock"
      },
      {
        "label": "Period time",
        "detail": "Optional 4-digit period clock, synced to the main board"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx2150/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2158",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "indoor",
    "width": "32 in",
    "height": "24 in each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "shot-clock",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Companion display (play clock, shot clock, pitch count, or add-on timer).",
    "displays": [
      {
        "label": "Shot time",
        "detail": "2-digit shot clock"
      },
      {
        "label": "Period time",
        "detail": "Optional 4-digit period clock, synced to the main board"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx2158/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2160",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "indoor",
    "width": "24 in",
    "height": "27 in each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "shot-clock",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Companion display (play clock, shot clock, pitch count, or add-on timer).",
    "displays": [
      {
        "label": "Shot time",
        "detail": "2-digit shot clock"
      },
      {
        "label": "Period time",
        "detail": "Optional 4-digit period clock, synced to the main board"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx2160/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2170",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "indoor",
    "width": "29 in",
    "height": "27 in each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "shot-clock",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Shot-clock pair with 12-inch shot time and 6-inch period time, syncs to the main basketball console.",
    "displays": [
      {
        "label": "Shot time",
        "detail": "2-digit shot clock"
      },
      {
        "label": "Period time",
        "detail": "Optional 4-digit period clock, synced to the main board"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx2170/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 30,
    "currentA": 0.5,
    "unitNote": "each"
  },
  {
    "id": "LX2180",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "indoor",
    "width": "29 in",
    "height": "27 in each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "shot-clock",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Indoor basketball shot-clock set.",
    "displays": [
      {
        "label": "Shot time",
        "detail": "2-digit shot clock"
      },
      {
        "label": "Period time",
        "detail": "Optional 4-digit period clock, synced to the main board"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx2180/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2330",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "6.5 ft",
    "height": "3 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Compact indoor basketball scoreboard for elementary and rec gyms.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit (or 2.1) scores"
      },
      {
        "label": "Period",
        "detail": "1-digit period"
      },
      {
        "label": "Bonus",
        "detail": "Single or double bonus indicators"
      },
      {
        "label": "Team fouls",
        "detail": "Optional team-foul digits"
      },
      {
        "label": "Time-outs left",
        "detail": "Optional TOL digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2330/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2340",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "8 ft",
    "height": "4 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "8 \u00d7 4 ft indoor basketball scoreboard.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit (or 2.1) scores"
      },
      {
        "label": "Period",
        "detail": "1-digit period"
      },
      {
        "label": "Bonus",
        "detail": "Single or double bonus indicators"
      },
      {
        "label": "Team fouls",
        "detail": "Optional team-foul digits"
      },
      {
        "label": "Time-outs left",
        "detail": "Optional TOL digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2340/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2350",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "9 ft",
    "height": "3 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Workhorse 9 \u00d7 3 ft indoor basketball board. Clock digits live in the upper center; power and LX drivers sit behind them.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit (or 2.1) scores"
      },
      {
        "label": "Period",
        "detail": "1-digit period"
      },
      {
        "label": "Bonus",
        "detail": "Single or double bonus indicators"
      },
      {
        "label": "Team fouls",
        "detail": "Optional team-foul digits"
      },
      {
        "label": "Time-outs left",
        "detail": "Optional TOL digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2350/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2370",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "14 ft",
    "height": "3.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Indoor LED basketball scoreboard. Syncs with shot clocks and additional gym displays over cable or ScoreLink.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit (or 2.1) scores"
      },
      {
        "label": "Period",
        "detail": "1-digit period"
      },
      {
        "label": "Bonus",
        "detail": "Single or double bonus indicators"
      },
      {
        "label": "Team fouls",
        "detail": "Optional team-foul digits"
      },
      {
        "label": "Time-outs left",
        "detail": "Optional TOL digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2370/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2545",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "15 ft",
    "height": "3 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Indoor LED basketball scoreboard. Syncs with shot clocks and additional gym displays over cable or ScoreLink.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit (or 2.1) scores"
      },
      {
        "label": "Period",
        "detail": "1-digit period"
      },
      {
        "label": "Bonus",
        "detail": "Single or double bonus indicators"
      },
      {
        "label": "Team fouls",
        "detail": "Optional team-foul digits"
      },
      {
        "label": "Time-outs left",
        "detail": "Optional TOL digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2545/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2550",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "9 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Indoor LED basketball scoreboard. Syncs with shot clocks and additional gym displays over cable or ScoreLink.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit (or 2.1) scores"
      },
      {
        "label": "Period",
        "detail": "1-digit period"
      },
      {
        "label": "Bonus",
        "detail": "Single or double bonus indicators"
      },
      {
        "label": "Team fouls",
        "detail": "Optional team-foul digits"
      },
      {
        "label": "Time-outs left",
        "detail": "Optional TOL digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2550/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2555",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "17 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Indoor LED basketball scoreboard. Syncs with shot clocks and additional gym displays over cable or ScoreLink.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit (or 2.1) scores"
      },
      {
        "label": "Period",
        "detail": "1-digit period"
      },
      {
        "label": "Bonus",
        "detail": "Single or double bonus indicators"
      },
      {
        "label": "Team fouls",
        "detail": "Optional team-foul digits"
      },
      {
        "label": "Time-outs left",
        "detail": "Optional TOL digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2555/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2556",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "18 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Indoor LED basketball scoreboard. Syncs with shot clocks and additional gym displays over cable or ScoreLink.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit (or 2.1) scores"
      },
      {
        "label": "Period",
        "detail": "1-digit period"
      },
      {
        "label": "Bonus",
        "detail": "Single or double bonus indicators"
      },
      {
        "label": "Team fouls",
        "detail": "Optional team-foul digits"
      },
      {
        "label": "Time-outs left",
        "detail": "Optional TOL digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2556/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2570",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "14 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "14 \u00d7 5 ft gym board with 16-inch clock/points, double bonus, and time-outs left. Can sync as primary among smaller LX basketball boards.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit (or 2.1) scores"
      },
      {
        "label": "Period",
        "detail": "1-digit period"
      },
      {
        "label": "Bonus",
        "detail": "Single or double bonus indicators"
      },
      {
        "label": "Team fouls",
        "detail": "Optional team-foul digits"
      },
      {
        "label": "Time-outs left",
        "detail": "Optional TOL digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2570/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 190,
    "currentA": 1.6
  },
  {
    "id": "LX2575",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "22 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Indoor LED basketball scoreboard. Syncs with shot clocks and additional gym displays over cable or ScoreLink.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit (or 2.1) scores"
      },
      {
        "label": "Period",
        "detail": "1-digit period"
      },
      {
        "label": "Bonus",
        "detail": "Single or double bonus indicators"
      },
      {
        "label": "Team fouls",
        "detail": "Optional team-foul digits"
      },
      {
        "label": "Time-outs left",
        "detail": "Optional TOL digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2575/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2576",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "23 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Indoor LED basketball scoreboard. Syncs with shot clocks and additional gym displays over cable or ScoreLink.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit (or 2.1) scores"
      },
      {
        "label": "Period",
        "detail": "1-digit period"
      },
      {
        "label": "Bonus",
        "detail": "Single or double bonus indicators"
      },
      {
        "label": "Team fouls",
        "detail": "Optional team-foul digits"
      },
      {
        "label": "Time-outs left",
        "detail": "Optional TOL digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2576/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2645",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "8 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Indoor LED basketball scoreboard. Syncs with shot clocks and additional gym displays over cable or ScoreLink.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS with tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit scores"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      },
      {
        "label": "Player / fouls",
        "detail": "Player number and player-foul digits"
      },
      {
        "label": "Bonus / TOL",
        "detail": "Double bonus and time-outs left"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2645/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2655",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "9 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "9 \u00d7 5 ft indoor basketball with player/foul stats.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS with tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit scores"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      },
      {
        "label": "Player / fouls",
        "detail": "Player number and player-foul digits"
      },
      {
        "label": "Bonus / TOL",
        "detail": "Double bonus and time-outs left"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2655/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2665",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "10 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Indoor LED basketball scoreboard. Syncs with shot clocks and additional gym displays over cable or ScoreLink.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS with tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit scores"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      },
      {
        "label": "Player / fouls",
        "detail": "Player number and player-foul digits"
      },
      {
        "label": "Bonus / TOL",
        "detail": "Double bonus and time-outs left"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2665/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX2745",
    "sport": "basketball",
    "alsoSports": [
      "volleyball",
      "wrestling"
    ],
    "environment": "indoor",
    "width": "8 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "Nearly square 8 \u00d7 6 ft indoor board. Green LEDs on period/player/foul/bonus; reversible captions for volleyball or wrestling.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS with tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit scores"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      },
      {
        "label": "Player / fouls",
        "detail": "Player number and player-foul digits"
      },
      {
        "label": "Bonus / TOL",
        "detail": "Double bonus and time-outs left"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2745/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 140,
    "currentA": 1.7
  },
  {
    "id": "LX2770",
    "sport": "basketball",
    "alsoSports": [],
    "environment": "indoor",
    "width": "14 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "basketball",
    "digitHeights": [
      16,
      12,
      9
    ],
    "blurb": "14 \u00d7 6 ft indoor basketball with full player-stat layout.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS with tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit scores"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      },
      {
        "label": "Player / fouls",
        "detail": "Player number and player-foul digits"
      },
      {
        "label": "Bonus / TOL",
        "detail": "Double bonus and time-outs left"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "shot-timer-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/basketball/scoreboard-lx2770/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3018",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "35 in",
    "height": "35 in each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "play-clock",
    "digitHeights": [
      24
    ],
    "blurb": "35-inch portable play-clock pair.",
    "displays": [
      {
        "label": "Play clock",
        "detail": "2-digit delay-of-game / play clock, typically a pair of cabinets"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3018/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3024",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "42 in",
    "height": "42 in each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "play-clock",
    "digitHeights": [
      24
    ],
    "blurb": "Portable 24-inch play clock in a 42-inch cabinet.",
    "displays": [
      {
        "label": "Play clock",
        "detail": "2-digit delay-of-game / play clock, typically a pair of cabinets"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3024/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3030",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "48 in",
    "height": "48 in each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "play-clock",
    "digitHeights": [
      24
    ],
    "blurb": "Companion display (play clock, shot clock, pitch count, or add-on timer).",
    "displays": [
      {
        "label": "Play clock",
        "detail": "2-digit delay-of-game / play clock, typically a pair of cabinets"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3030/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3050",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "3.5 ft",
    "height": "3.5 ft each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "play-clock",
    "digitHeights": [
      24
    ],
    "blurb": "Most popular football play-clock pair. 24-inch digits, single-post cabinets, optional handheld wireless switch.",
    "displays": [
      {
        "label": "Play clock",
        "detail": "2-digit delay-of-game / play clock, typically a pair of cabinets"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3050/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 40,
    "currentA": 0.4,
    "unitNote": "each"
  },
  {
    "id": "LX3054",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "54 in",
    "height": "54 in each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "play-clock",
    "digitHeights": [
      24
    ],
    "blurb": "Companion display (play clock, shot clock, pitch count, or add-on timer).",
    "displays": [
      {
        "label": "Play clock",
        "detail": "2-digit delay-of-game / play clock, typically a pair of cabinets"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3054/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3070",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "4 ft",
    "height": "4 ft each",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "play-clock",
    "digitHeights": [
      24
    ],
    "blurb": "Companion display (play clock, shot clock, pitch count, or add-on timer).",
    "displays": [
      {
        "label": "Play clock",
        "detail": "2-digit delay-of-game / play clock, typically a pair of cabinets"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3070/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3120",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "5 ft",
    "height": "3.5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Compact 5 \u00d7 3.5 ft football/multi scoreboard.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3120/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3130",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "3 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3130/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3140",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3140/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3150",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "5 ft",
    "console": "MM",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "10 \u00d7 5 ft football scoreboard \u2014 time, score, down, to-go, quarter.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mm-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3150/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3230",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "14 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3230/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3250",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Budget-friendly 16 \u00d7 8 ft football board with 18-inch time, points, down, to-go, and quarter.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3250/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 340,
    "currentA": 2.2
  },
  {
    "id": "LX3320",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "16 \u00d7 6 ft football scoreboard.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3320/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3325",
    "sport": "football",
    "alsoSports": [
      "soccer"
    ],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3325/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3340",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "18 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3340/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3360",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "22 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3360/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3365",
    "sport": "football",
    "alsoSports": [
      "soccer"
    ],
    "environment": "outdoor",
    "width": "22 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3365/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3450",
    "sport": "multisport",
    "alsoSports": [
      "baseball"
    ],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "multisport",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Football/baseball dual-sport. Slide-out captions and a console that switches sport modes; clock splits to minutes + inning in baseball.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx3450/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 340,
    "currentA": 2.2
  },
  {
    "id": "LX3620",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "18 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "Full football stats (clock, points, TOL, down, to-go, ball-on, quarter) in an 18 \u00d7 5 ft two-post cabinet.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3620/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 350,
    "currentA": 2.6
  },
  {
    "id": "LX3625",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "18 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "LX3620 layout with a 5-digit period clock.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3625/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 350,
    "currentA": 2.7
  },
  {
    "id": "LX3630",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "20 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3630/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3640",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "24 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3640/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3645",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "24 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "24 \u00d7 8 ft football board, 24-inch primary digits.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3645/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 600,
    "currentA": 2.8
  },
  {
    "id": "LX3650",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "26 \u00d7 8 ft football board with 30-inch 4-digit period clock.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3650/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 680,
    "currentA": 2.9
  },
  {
    "id": "LX3655",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "26 \u00d7 8 ft football board with 30-inch 5-digit period clock.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3655/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3680",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "24 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "24 \u00d7 10 ft football with expanded stats and ID area.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3680/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3685",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "24 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3685/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3690",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3690/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3695",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "26 \u00d7 10 ft football with 30 / 24 / 18-inch digits.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3695/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 750,
    "currentA": 3.1
  },
  {
    "id": "LX3740",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "32 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3740/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3745",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "32 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "32 \u00d7 8 ft football scoreboard for large high-school and college fields.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3745/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 770,
    "currentA": 3.2
  },
  {
    "id": "LX3780",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "32 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3780/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3785",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "32 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3785/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3840",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "36 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3840/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3845",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "36 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3845/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3880",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "36 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3880/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX3885",
    "sport": "football",
    "alsoSports": [],
    "environment": "outdoor",
    "width": "36 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "football",
    "digitHeights": [
      30,
      24,
      18
    ],
    "blurb": "36 \u00d7 10 ft top-of-line football scoreboard.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit clock, tenths in the last minute"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Time-outs left",
        "detail": "Guest and Home TOL"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Full football situation row"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "play-clock-handheld",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx3885/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6320",
    "sport": "multisport",
    "alsoSports": [
      "soccer",
      "lacrosse",
      "football"
    ],
    "environment": "outdoor",
    "width": "5 ft",
    "height": "3 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "multisport",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Compact soccer/multi 5 \u00d7 3 ft board.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6320/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6324",
    "sport": "multisport",
    "alsoSports": [
      "soccer",
      "lacrosse",
      "football"
    ],
    "environment": "outdoor",
    "width": "5 ft",
    "height": "3.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "multisport",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Multi-sport LED scoreboard with reversible captions and a sport-switching console.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6324/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6360",
    "sport": "soccer",
    "alsoSports": [
      "soccer",
      "football"
    ],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6360/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6370",
    "sport": "soccer",
    "alsoSports": [
      "soccer",
      "football"
    ],
    "environment": "outdoor",
    "width": "18 ft",
    "height": "9 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "18 \u00d7 9 ft multi-sport with a large 4-digit timer and corner ID panels.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6370/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 350,
    "currentA": 1.6
  },
  {
    "id": "LX6390",
    "sport": "soccer",
    "alsoSports": [
      "soccer",
      "football"
    ],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "6 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6390/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6430",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6430/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6434",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6434/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6435",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6435/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6436",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "16 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6436/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6540",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "22 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6540/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6544",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "22 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6544/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6545",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "22 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6545/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6546",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "22 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Soccer with reversible football captions. 24-inch points/time; 18-inch shots, corners, period (or down/to-go/ball-on/qtr).",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6546/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 500,
    "currentA": 3.1
  },
  {
    "id": "LX6630",
    "sport": "multisport",
    "alsoSports": [
      "soccer",
      "lacrosse",
      "football"
    ],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "3 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "multisport",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Multi-sport LED scoreboard with reversible captions and a sport-switching console.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6630/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6650",
    "sport": "multisport",
    "alsoSports": [
      "soccer",
      "lacrosse",
      "football"
    ],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "multisport",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Multi-sport LED scoreboard with reversible captions and a sport-switching console.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6650/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6655",
    "sport": "multisport",
    "alsoSports": [
      "soccer",
      "lacrosse",
      "football"
    ],
    "environment": "outdoor",
    "width": "10 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "multisport",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "10 \u00d7 5 ft multi-sport with a rare 5-digit 18-inch period clock (MM:SS.t).",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "bullet-indicator",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6655/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6740",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6740/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6744",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6744/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6745",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6745/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6746",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6746/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6940",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6940/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6944",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "26 \u00d7 8 ft soccer/football. Slide-out captions convert SOG/corners/saves into down/TOL/ball-on/to-go.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6944/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 600,
    "currentA": 4.1
  },
  {
    "id": "LX6945",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6945/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX6946",
    "sport": "soccer",
    "alsoSports": [
      "football"
    ],
    "environment": "outdoor",
    "width": "26 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "soccer",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4- or 5-digit"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Shots on goal / corners / saves",
        "detail": "Match stats (captions reverse to football)"
      },
      {
        "label": "Period",
        "detail": "1-digit"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "reversible captions",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/soccer/scoreboard-lx6946/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX7230",
    "sport": "hockey",
    "alsoSports": [
      "lacrosse"
    ],
    "environment": "indoor",
    "width": "9 ft",
    "height": "3 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "hockey",
    "digitHeights": [
      12,
      11,
      9
    ],
    "blurb": "LED hockey/lacrosse scoreboard with period clock, scores, and penalty timers.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit to 199"
      },
      {
        "label": "Period",
        "detail": "1-digit to 4"
      },
      {
        "label": "Penalty timers",
        "detail": "Two 3-digit timers per team"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/hockey/scoreboard-lx7230/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX7260",
    "sport": "hockey",
    "alsoSports": [
      "lacrosse"
    ],
    "environment": "indoor",
    "width": "9 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "hockey",
    "digitHeights": [
      12,
      11,
      9
    ],
    "blurb": "LED hockey/lacrosse scoreboard with period clock, scores, and penalty timers.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit to 199"
      },
      {
        "label": "Period",
        "detail": "1-digit to 4"
      },
      {
        "label": "Penalty timers",
        "detail": "Two 3-digit timers per team"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/hockey/scoreboard-lx7260/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX7406",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "indoor",
    "width": "23 in",
    "height": "10 in",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "addon",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Compact delay-of-game / play-clock style display.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx7406/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX7520",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "indoor",
    "width": "4 ft",
    "height": "3 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "addon",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Companion display (play clock, shot clock, pitch count, or add-on timer).",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx7520/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX7620",
    "sport": "accessory",
    "alsoSports": [],
    "environment": "indoor",
    "width": "5 ft",
    "height": "3.5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "addon",
    "digitHeights": [
      18,
      15
    ],
    "blurb": "Companion display (play clock, shot clock, pitch count, or add-on timer).",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS"
      },
      {
        "label": "Guest / Home points",
        "detail": "2-digit scores"
      },
      {
        "label": "Down / To Go / Ball On / Quarter",
        "detail": "Game-situation digits"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/football/scoreboard-lx7620/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX7640",
    "sport": "hockey",
    "alsoSports": [
      "lacrosse"
    ],
    "environment": "indoor",
    "width": "7 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "hockey",
    "digitHeights": [
      12,
      11,
      9
    ],
    "blurb": "LED hockey/lacrosse scoreboard with period clock, scores, and penalty timers.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit to 199"
      },
      {
        "label": "Period",
        "detail": "1-digit to 4"
      },
      {
        "label": "Penalty timers",
        "detail": "Two 3-digit timers per team"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/hockey/scoreboard-lx7640/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX7740",
    "sport": "hockey",
    "alsoSports": [
      "lacrosse"
    ],
    "environment": "indoor",
    "width": "16 ft",
    "height": "8 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "hockey",
    "digitHeights": [
      12,
      11,
      9
    ],
    "blurb": "LED hockey/lacrosse scoreboard with period clock, scores, and penalty timers.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit to 199"
      },
      {
        "label": "Period",
        "detail": "1-digit to 4"
      },
      {
        "label": "Penalty timers",
        "detail": "Two 3-digit timers per team"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/hockey/scoreboard-lx7740/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX7770",
    "sport": "hockey",
    "alsoSports": [
      "lacrosse"
    ],
    "environment": "indoor",
    "width": "26 ft",
    "height": "10 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "hockey",
    "digitHeights": [
      12,
      11,
      9
    ],
    "blurb": "LED hockey/lacrosse scoreboard with period clock, scores, and penalty timers.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit to 199"
      },
      {
        "label": "Period",
        "detail": "1-digit to 4"
      },
      {
        "label": "Penalty timers",
        "detail": "Two 3-digit timers per team"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/hockey/scoreboard-lx7770/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX7860",
    "sport": "hockey",
    "alsoSports": [
      "lacrosse"
    ],
    "environment": "outdoor",
    "width": "9 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "hockey",
    "digitHeights": [
      12,
      11,
      9
    ],
    "blurb": "Outdoor hockey/lacrosse: 4-digit period clock, scores to 99, period to 4, four 3-digit penalty timers.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit to 199"
      },
      {
        "label": "Period",
        "detail": "1-digit to 4"
      },
      {
        "label": "Penalty timers",
        "detail": "Two 3-digit timers per team"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft",
      "Conformal-coated LED boards"
    ],
    "productUrl": "https://www.electro-mech.com/hockey/scoreboard-lx7860/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 150,
    "currentA": 1.8
  },
  {
    "id": "LX8350",
    "sport": "hockey",
    "alsoSports": [
      "lacrosse"
    ],
    "environment": "indoor",
    "width": "9 ft",
    "height": "3 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "hockey",
    "digitHeights": [
      12,
      11,
      9
    ],
    "blurb": "Indoor hockey 9 \u00d7 3 ft. 12-inch clock and scores, 9-inch period. Optional ETN.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit to 199"
      },
      {
        "label": "Period",
        "detail": "1-digit to 4"
      },
      {
        "label": "Penalty timers",
        "detail": "Two 3-digit timers per team"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/hockey/scoreboard-lx8350/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 89,
    "currentA": 1.4
  },
  {
    "id": "LX8440",
    "sport": "hockey",
    "alsoSports": [
      "lacrosse"
    ],
    "environment": "indoor",
    "width": "16 ft",
    "height": "3 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "hockey",
    "digitHeights": [
      12,
      11,
      9
    ],
    "blurb": "LED hockey/lacrosse scoreboard with period clock, scores, and penalty timers.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit to 199"
      },
      {
        "label": "Period",
        "detail": "1-digit to 4"
      },
      {
        "label": "Penalty timers",
        "detail": "Two 3-digit timers per team"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/hockey/scoreboard-lx8440/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX8650",
    "sport": "hockey",
    "alsoSports": [
      "lacrosse"
    ],
    "environment": "indoor",
    "width": "9 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "hockey",
    "digitHeights": [
      12,
      11,
      9
    ],
    "blurb": "LED hockey/lacrosse scoreboard with period clock, scores, and penalty timers.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit to 199"
      },
      {
        "label": "Period",
        "detail": "1-digit to 4"
      },
      {
        "label": "Penalty timers",
        "detail": "Two 3-digit timers per team"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/hockey/scoreboard-lx8650/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  },
  {
    "id": "LX8750",
    "sport": "hockey",
    "alsoSports": [
      "lacrosse"
    ],
    "environment": "indoor",
    "width": "9 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "hockey",
    "digitHeights": [
      12,
      11,
      9
    ],
    "blurb": "Indoor hockey 9 \u00d7 5 ft with shots-on-goal plus standard clock, score, and penalties.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit to 199"
      },
      {
        "label": "Period",
        "detail": "1-digit to 4"
      },
      {
        "label": "Penalty timers",
        "detail": "Two 3-digit timers per team"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/hockey/scoreboard-lx8750/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
    "weightLb": 145,
    "currentA": 2.2
  },
  {
    "id": "LX8850",
    "sport": "hockey",
    "alsoSports": [
      "lacrosse"
    ],
    "environment": "indoor",
    "width": "12 ft",
    "height": "5 ft",
    "console": "MP",
    "voltage": "120 VAC",
    "layout": "hockey",
    "digitHeights": [
      12,
      11,
      9
    ],
    "blurb": "LED hockey/lacrosse scoreboard with period clock, scores, and penalty timers.",
    "displays": [
      {
        "label": "Period clock",
        "detail": "4-digit MM:SS, up/down, tenths, TOD, segment timer"
      },
      {
        "label": "Guest / Home points",
        "detail": "2.1-digit to 199"
      },
      {
        "label": "Period",
        "detail": "1-digit to 4"
      },
      {
        "label": "Penalty timers",
        "detail": "Two 3-digit timers per team"
      }
    ],
    "features": [
      "LED",
      "120 VAC",
      "aluminum cabinet",
      "game clock",
      "ETN optional",
      "ScoreLink optional"
    ],
    "components": [
      "aluminum-cabinet",
      "junction-chassis",
      "power-supply",
      "lx-driver",
      "led-digit",
      "ribbon-cable",
      "fuse",
      "mp-console",
      "cx-driver",
      "extension-cable",
      "junction-box",
      "stereo-patch",
      "scorelink",
      "horn",
      "etn-module",
      "etn16-driver",
      "id-panel",
      "mounting-clamp"
    ],
    "options": [
      "Electronic Team Names",
      "ScoreLink wireless",
      "ID panels",
      "Custom paint",
      "Data cable up to 1,000 ft"
    ],
    "productUrl": "https://www.electro-mech.com/hockey/scoreboard-lx8850/",
    "manualUrl": "https://www.electro-mech.com/manuals/",
    "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
    "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-"
  }
] as LxModel[];

export const modelsById: Record<string, LxModel> = Object.fromEntries(
  models.map((m) => [m.id, m]),
);

export const sports = [
  "baseball",
  "basketball",
  "football",
  "soccer",
  "hockey",
  "multisport",
  "accessory",
] as const;

export type SportId = (typeof sports)[number];
