#!/usr/bin/env python3
"""Generate src/data/models.ts from compiled Electro-Mech LX catalog data."""
from __future__ import annotations
import json
from pathlib import Path

# Dimensions from electro-mech.com/manuals
DIMS = {
    "LX1020": ("5 ft", "3 ft"), "LX1030": ("8 ft", "4 ft"), "LX1050": ("6 ft", "3 ft"),
    "LX1060": ("10 ft", "5 ft"), "LX1062": ("3 ft", "3.5 ft"), "LX1064": ("7 ft", "3 ft"),
    "LX1070": ("16 ft", "5 ft"), "LX1118": ("42 in", "42 in"),
    "LX1130": ("8 ft", "6 ft"), "LX1131": ("8 ft", "6 ft"), "LX1132": ("8 ft", "6 ft"),
    "LX1135": ("8 ft", "6 ft"), "LX1136": ("8 ft", "6 ft"), "LX1138": ("8 ft", "6 ft"),
    "LX1160": ("10 ft", "7 ft"), "LX1161": ("10 ft", "7 ft"), "LX1162": ("10 ft", "7 ft"),
    "LX1164": ("10 ft", "7 ft"), "LX1165": ("10 ft", "7 ft"), "LX1166": ("10 ft", "7 ft"),
    "LX1168": ("10 ft", "7 ft"), "LX1240": ("10 ft", "5 ft"), "LX1241": ("12 ft", "5 ft"),
    "LX1244": ("12 ft", "5 ft"), "LX1250": ("14 ft", "5 ft"), "LX1260": ("12 ft", "8 ft"),
    "LX1320": ("5 ft", "4 ft"), "LX1340": ("10 ft", "5 ft"), "LX1341": ("10 ft", "5 ft"),
    "LX1360": ("10 ft", "5 ft"), "LX1370": ("14 ft", "6 ft"), "LX1371": ("14 ft", "6 ft"),
    "LX1372": ("14 ft", "6 ft"), "LX1373": ("14 ft", "6 ft"), "LX1374": ("14 ft", "6 ft"),
    "LX1376": ("14 ft", "6 ft"), "LX1377": ("14 ft", "6 ft"), "LX1390": ("14 ft", "5 ft"),
    "LX1440": ("16 ft", "8 ft"), "LX1480": ("20 ft", "10 ft"), "LX1486": ("20 ft", "10 ft"),
    "LX1620": ("18 ft", "6 ft"), "LX1630": ("22 ft", "6.5 ft"), "LX1631": ("22 ft", "6.5 ft"),
    "LX1632": ("22 ft", "6.5 ft"), "LX1633": ("22 ft", "6.5 ft"), "LX1634": ("22 ft", "6.5 ft"),
    "LX1636": ("22 ft", "6.5 ft"), "LX1637": ("22 ft", "6.5 ft"),
    "LX1700": ("14 ft", "5 ft"), "LX1710": ("16 ft", "5 ft"), "LX1711": ("16 ft", "5 ft"),
    "LX1712": ("16 ft", "5 ft"), "LX1713": ("16 ft", "5 ft"), "LX1714": ("16 ft", "5 ft"),
    "LX1716": ("16 ft", "5 ft"), "LX1717": ("16 ft", "5 ft"), "LX1720": ("16 ft", "6 ft"),
    "LX1730": ("20 ft", "6.5 ft"), "LX1731": ("20 ft", "6.5 ft"), "LX1732": ("20 ft", "6.5 ft"),
    "LX1733": ("20 ft", "6.5 ft"), "LX1734": ("20 ft", "6.5 ft"), "LX1736": ("20 ft", "6.5 ft"),
    "LX1737": ("20 ft", "6.5 ft"), "LX1740": ("20 ft", "6 ft"), "LX1741": ("20 ft", "6 ft"),
    "LX1742": ("20 ft", "6 ft"), "LX1743": ("20 ft", "6 ft"), "LX1744": ("20 ft", "6 ft"),
    "LX1746": ("20 ft", "6 ft"), "LX1750": ("26 ft", "9 ft"), "LX1751": ("26 ft", "9 ft"),
    "LX1752": ("26 ft", "9 ft"), "LX1753": ("26 ft", "9 ft"), "LX1754": ("26 ft", "9 ft"),
    "LX1756": ("26 ft", "9 ft"), "LX1780": ("36 ft", "10 ft"), "LX1781": ("36 ft", "10 ft"),
    "LX1782": ("36 ft", "10 ft"), "LX1783": ("36 ft", "10 ft"), "LX1784": ("36 ft", "10 ft"),
    "LX1786": ("36 ft", "10 ft"),
    "LX2055": ("4 ft", "5 ft each"), "LX2056": ("4 ft 5 in", "6 ft each"),
    "LX2120": ("26 in", "24 in each"), "LX2150": ("24 in", "27 in each"),
    "LX2158": ("32 in", "24 in each"), "LX2160": ("24 in", "27 in each"),
    "LX2170": ("29 in", "27 in each"), "LX2180": ("29 in", "27 in each"),
    "LX2330": ("6.5 ft", "3 ft"), "LX2340": ("8 ft", "4 ft"), "LX2350": ("9 ft", "3 ft"),
    "LX2370": ("14 ft", "3.5 ft"), "LX2545": ("15 ft", "3 ft"), "LX2550": ("9 ft", "5 ft"),
    "LX2555": ("17 ft", "5 ft"), "LX2556": ("18 ft", "6 ft"), "LX2570": ("14 ft", "5 ft"),
    "LX2575": ("22 ft", "5 ft"), "LX2576": ("23 ft", "6 ft"), "LX2645": ("8 ft", "6 ft"),
    "LX2655": ("9 ft", "5 ft"), "LX2665": ("10 ft", "5 ft"), "LX2745": ("8 ft", "6 ft"),
    "LX2770": ("14 ft", "6 ft"),
    "LX3018": ("35 in", "35 in each"), "LX3024": ("42 in", "42 in each"),
    "LX3030": ("48 in", "48 in each"), "LX3050": ("3.5 ft", "3.5 ft each"),
    "LX3054": ("54 in", "54 in each"), "LX3070": ("4 ft", "4 ft each"),
    "LX3120": ("5 ft", "3.5 ft"), "LX3130": ("10 ft", "3 ft"), "LX3140": ("10 ft", "5 ft"),
    "LX3150": ("10 ft", "5 ft"), "LX3230": ("14 ft", "5 ft"), "LX3250": ("16 ft", "8 ft"),
    "LX3320": ("16 ft", "6 ft"), "LX3325": ("16 ft", "6 ft"), "LX3340": ("18 ft", "8 ft"),
    "LX3360": ("22 ft", "8 ft"), "LX3365": ("22 ft", "8 ft"), "LX3450": ("16 ft", "8 ft"),
    "LX3620": ("18 ft", "5 ft"), "LX3625": ("18 ft", "5 ft"), "LX3630": ("20 ft", "8 ft"),
    "LX3640": ("24 ft", "8 ft"), "LX3645": ("24 ft", "8 ft"), "LX3650": ("26 ft", "8 ft"),
    "LX3655": ("26 ft", "8 ft"), "LX3680": ("24 ft", "10 ft"), "LX3685": ("24 ft", "10 ft"),
    "LX3690": ("26 ft", "10 ft"), "LX3695": ("26 ft", "10 ft"), "LX3740": ("32 ft", "8 ft"),
    "LX3745": ("32 ft", "8 ft"), "LX3780": ("32 ft", "10 ft"), "LX3785": ("32 ft", "10 ft"),
    "LX3840": ("36 ft", "8 ft"), "LX3845": ("36 ft", "8 ft"), "LX3880": ("36 ft", "10 ft"),
    "LX3885": ("36 ft", "10 ft"),
    "LX6320": ("5 ft", "3 ft"), "LX6324": ("5 ft", "3.5 ft"), "LX6360": ("16 ft", "5 ft"),
    "LX6370": ("18 ft", "9 ft"), "LX6390": ("26 ft", "6 ft"),
    "LX6430": ("16 ft", "5 ft"), "LX6434": ("16 ft", "5 ft"), "LX6435": ("16 ft", "5 ft"),
    "LX6436": ("16 ft", "5 ft"), "LX6540": ("22 ft", "8 ft"), "LX6544": ("22 ft", "8 ft"),
    "LX6545": ("22 ft", "8 ft"), "LX6546": ("22 ft", "8 ft"),
    "LX6630": ("10 ft", "3 ft"), "LX6650": ("10 ft", "5 ft"), "LX6655": ("10 ft", "5 ft"),
    "LX6740": ("26 ft", "8 ft"), "LX6744": ("26 ft", "8 ft"), "LX6745": ("26 ft", "8 ft"),
    "LX6746": ("26 ft", "8 ft"), "LX6940": ("26 ft", "8 ft"), "LX6944": ("26 ft", "8 ft"),
    "LX6945": ("26 ft", "8 ft"), "LX6946": ("26 ft", "8 ft"),
    "LX7230": ("9 ft", "3 ft"), "LX7260": ("9 ft", "5 ft"), "LX7406": ("23 in", "10 in"),
    "LX7520": ("4 ft", "3 ft"), "LX7620": ("5 ft", "3.5 ft"), "LX7640": ("7 ft", "5 ft"),
    "LX7740": ("16 ft", "8 ft"), "LX7770": ("26 ft", "10 ft"), "LX7860": ("9 ft", "5 ft"),
    "LX8350": ("9 ft", "3 ft"), "LX8440": ("16 ft", "3 ft"), "LX8650": ("9 ft", "5 ft"),
    "LX8750": ("9 ft", "5 ft"), "LX8850": ("12 ft", "5 ft"),
}

# Published electrical / weight from product pages
SPECS = {
    "LX1064": {"weightLb": 90, "currentA": 0.8},
    "LX1162": {"weightLb": 220, "currentA": 1.6},
    "LX1250": {"weightLb": 220, "currentA": 1.6, "posts": 2, "postMaxDiaIn": 4.5},
    "LX1320": {"weightLb": 50, "currentA": 0.9},
    "LX1440": {"weightLb": 400, "currentA": 2.5},
    "LX1620": {"weightLb": 350, "currentA": 3.2},
    "LX1700": {"weightLb": 250, "currentA": 1.8},
    "LX1710": {"weightLb": 300, "currentA": 2.6},
    "LX1740": {"weightLb": 350, "currentA": 3.5},
    "LX2170": {"weightLb": 30, "currentA": 0.5, "unitNote": "each"},
    "LX2570": {"weightLb": 190, "currentA": 1.6},
    "LX2745": {"weightLb": 140, "currentA": 1.7},
    "LX3050": {"weightLb": 40, "currentA": 0.4, "unitNote": "each"},
    "LX3250": {"weightLb": 340, "currentA": 2.2},
    "LX3450": {"weightLb": 340, "currentA": 2.2},
    "LX3620": {"weightLb": 350, "currentA": 2.6},
    "LX3625": {"weightLb": 350, "currentA": 2.7},
    "LX3645": {"weightLb": 600, "currentA": 2.8},
    "LX3650": {"weightLb": 680, "currentA": 2.9},
    "LX3695": {"weightLb": 750, "currentA": 3.1},
    "LX3745": {"weightLb": 770, "currentA": 3.2},
    "LX6370": {"weightLb": 350, "currentA": 1.6},
    "LX6546": {"weightLb": 500, "currentA": 3.1},
    "LX6944": {"weightLb": 600, "currentA": 4.1},
    "LX7860": {"weightLb": 150, "currentA": 1.8},
    "LX8350": {"weightLb": 89, "currentA": 1.4},
    "LX8750": {"weightLb": 145, "currentA": 2.2},
}

# Digit kits from Drive "LX#### DIGITS" sheets
DIGIT_KITS = {
    "LX1710": [
        {"qty": 22, "part": "563-20-1000", "item": '11" red digit', "use": "Guest/Home innings 1–9 and totals"},
        {"qty": 5, "part": "563-20-1010", "item": '15" red digit', "use": "Ball, Strike, Out, Batter Number"},
    ],
    "LX1750": [
        {"qty": 5, "part": "563-20-1310", "item": '18" red unbuffered digit', "use": "Ball, Strike, Out, Batter Number"},
        {"qty": 31, "part": "563-20-1010", "item": '15" red digit', "use": "Innings, Runs, Hits, Errors"},
        {"qty": 1, "part": "563-20-1160", "item": '15" red E indicator', "use": "Error character"},
        {"qty": 1, "part": "563-20-1170", "item": '15" red H indicator', "use": "Hit character"},
    ],
}

# Baseball display features from Drive "Specifications of LX Series Baseball Scoreboard Models"
BB = {
    "LX1020": dict(score='2-digit total runs 11"', inning='1-digit inning 11"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (3")'),
    "LX1030": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")'),
    "LX1050": dict(score='2-digit total runs 15"', inning='1-digit inning 15"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (3")'),
    "LX1060": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', extra='Hit and Error bullets (4")'),
    "LX1062": dict(timer='2-digit timer 18"', extra="Add-on timer cabinet matched to baseball/softball boards"),
    "LX1064": dict(timer='4-digit timer 18"', extra="Add-on timer; configurable to match nearly any Electro-Mech baseball cabinet"),
    "LX1070": dict(score='2-digit total runs 18"', inning='2.1-digit inning 18" (to 19)', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', extra='Hit and Error bullets (4")'),
    "LX1118": dict(stat='2.1-digit pitch count 18"', extra="Stand-alone pitch count display"),
    "LX1130": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', stat='2-digit pitch count 11"'),
    "LX1131": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', timer='3-digit game timer 11"', stat='2-digit pitch count 11"'),
    "LX1132": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', timer='2-digit game timer 11" + activity indicator', stat='2-digit pitch count 11"'),
    "LX1135": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', timer='3-digit game timer 11" + activity indicator'),
    "LX1136": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', timer='2-digit game timer 11" + activity indicator'),
    "LX1138": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', timer='4-digit game timer 11"'),
    "LX1160": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', stat='2-digit pitch count 11"', extra='Hit and Error bullets (4")'),
    "LX1161": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', timer='3-digit game timer 11" + activity indicator', stat='2-digit pitch count 11"', extra='Hit and Error bullets (4")'),
    "LX1162": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', timer='2-digit game timer 11" + activity indicator', stat='2-digit pitch count 11"', extra='Hit and Error bullets (4")'),
    "LX1164": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', timer='4-digit game timer 11"', stat='2-digit pitch count 11"', extra='Hit and Error bullets (4")'),
    "LX1165": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', timer='3-digit game timer 11" + activity indicator', extra='Hit and Error bullets (4")'),
    "LX1166": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', timer='2-digit game timer 11" + activity indicator', extra='Hit and Error bullets (4")'),
    "LX1168": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', timer='4-digit game timer 11"', extra='Hit and Error bullets (4")'),
    "LX1240": dict(score='2-digit total runs 18"', inning='2.1-digit inning 18"', count='1-digit Ball / Strike / Out 11"'),
    "LX1241": dict(score='2-digit total runs 18"', inning='2.1-digit inning 18"', count='1-digit Ball / Strike / Out 11"', timer='3-digit game timer 11" + activity indicator'),
    "LX1244": dict(score='2-digit total runs 18"', inning='2.1-digit inning 18"', count='1-digit Ball / Strike / Out 11"', timer='4-digit game timer 11"'),
    "LX1250": dict(score='2-digit total runs 18"', inning='2.1-digit inning 18" (to 19)', count='1-digit Ball / Strike / Out 18"', extra='Hit and Error bullets (4")'),
    "LX1260": dict(score='2-digit total runs 24"', inning='2.1-digit inning 18"', count='1-digit Ball / Strike / Out 18"', extra='Hit and Error bullets (4")'),
    "LX1320": dict(score='2-digit scores 11"', inning='1-digit period/inning/quarter 11"', count='3-bullet Ball / 2-bullet Strike-Down / 2-bullet Out (3")', timer='4-digit period clock 11"', extra="Portable multi-sport with reversible captions; optional T-Cart"),
    "LX1340": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike-Down / 2-bullet Out (4")', timer='2-digit game timer 18" + activity indicator'),
    "LX1341": dict(score='2-digit total runs 18"', inning='1-digit inning 18"', count='3-bullet Ball / 2-bullet Strike-Down / 2-bullet Out (4")', timer='3-digit game timer 18"'),
    "LX1360": dict(score='2-digit scores 18"', inning='2-digit inning/to-go 18"', count='4-bullet Ball-Down / 4-bullet Strike-Qtr / 2-bullet Out (4")', timer='4-digit timer 18"'),
    "LX1370": dict(score='2-digit total runs 18"', inning='1.1-digit inning 18"', count='1-digit Ball / Strike / Out 18"', stat='2-digit batter number 18"', extra='Hit and Error bullets (4")'),
    "LX1371": dict(score='2-digit total runs 18"', inning='1.1-digit inning 18"', count='1-digit Ball / Strike / Out 18"', timer='3-digit game timer 18" + activity indicator', extra='Hit and Error bullets (4")'),
    "LX1372": dict(score='2-digit total runs 18"', inning='1.1-digit inning 18"', count='1-digit Ball / Strike / Out 18"', timer='2-digit game timer 18" + activity indicator', extra='Hit and Error bullets (4")'),
    "LX1373": dict(score='2-digit total runs 18"', inning='1.1-digit inning 18"', count='1-digit Ball / Strike / Out 18"', stat='2.1-digit pitch count 18"', extra='Hit and Error bullets (4")'),
    "LX1374": dict(score='2-digit total runs 18"', inning='1.1-digit inning 18"', count='1-digit Ball / Strike / Out 18"', timer='4-digit game timer 18"', extra='Hit and Error bullets (4")'),
    "LX1376": dict(score='2-digit total runs 18"', inning='1.1-digit inning 18"', count='1-digit Ball / Strike / Out 18"', stat='2.1-digit pitch speed 18"', extra='Hit and Error bullets (4")'),
    "LX1377": dict(score='2-digit total runs 18"', inning='1.1-digit inning 18"', count='1-digit Ball / Strike / Out 18"', extra='H / E characters 15" + error position digit 15"'),
    "LX1390": dict(score='2-digit score/total runs 18"', inning='1-digit inning/period 15"', count='3-bullet Ball / 2-bullet Strike / 2-bullet Out (4")', timer='4-digit game clock 18"', extra='Hit and Error bullets (4")'),
    "LX1440": dict(score='2-digit total runs 18"', inning='2.1-digit inning 18"', count='1-digit Ball / Strike / Out 15"', extra='2-digit total hits 18" and 1-digit total errors 18"'),
    "LX1480": dict(score='2-digit total runs 18"', inning='1.1-digit inning 18"', count='1-digit Ball / Strike / Out 24"', stat='2-digit batter number 24", 2-digit total hits 18"', extra='H / E 15" + 1-digit total errors 18"'),
    "LX1486": dict(score='2-digit total runs 18"', inning='1.1-digit inning 18"', count='1-digit Ball / Strike / Out 24"', stat='2-digit pitch speed 24", 2-digit total hits 18"', extra='H / E 15" + 1-digit total errors 18"'),
    "LX1620": dict(score='2-digit total runs 15"', inning='8 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 15"'),
    "LX1630": dict(score='2-digit total runs 15"', inning='8 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', stat='2-digit batter number 18", 2-digit total hits 15"', extra='1-digit total errors 15"'),
    "LX1631": dict(score='2-digit total runs 15"', inning='8 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', timer='3-digit game clock 18"', extra='2-digit total hits 15", 1-digit total errors 15"'),
    "LX1632": dict(score='2-digit total runs 15"', inning='8 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', timer='2-digit game clock 18"', extra='2-digit total hits 15", 1-digit total errors 15"'),
    "LX1633": dict(score='2-digit total runs 15"', inning='8 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', stat='2.1-digit pitch count 18", 2-digit total hits 15"', extra='1-digit total errors 15"'),
    "LX1634": dict(score='2-digit total runs 15"', inning='8 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', timer='4-digit game clock 18" + activity indicator', extra='2-digit total hits 15", 1-digit total errors 15"'),
    "LX1636": dict(score='2-digit total runs 15"', inning='8 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', stat='2.1-digit pitch speed 18", 2-digit total hits 15"', extra='1-digit total errors 15"'),
    "LX1637": dict(score='2-digit total runs 15"', inning='8 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', extra='Hits 15", H/E 15", total errors 15", error position 15"'),
    "LX1700": dict(score='2-digit total runs 11"', inning='7 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 11"'),
    "LX1710": dict(score='2-digit total runs 11"', inning='9 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 15"', stat='2-digit batter number 15"'),
    "LX1711": dict(score='2-digit total runs 11"', inning='9 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 15"', timer='3-digit game timer 15"'),
    "LX1712": dict(score='2-digit total runs 11"', inning='9 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 15"', timer='2-digit game timer 15"'),
    "LX1713": dict(score='2-digit total runs 11"', inning='9 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 15"', stat='2-digit pitch count 15"'),
    "LX1714": dict(score='2-digit total runs 11"', inning='9 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 15"', timer='4-digit game timer 15"'),
    "LX1716": dict(score='2-digit total runs 11"', inning='9 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 15"', stat='2-digit pitch speed 15"', extra="Radar gun kit available"),
    "LX1717": dict(score='2-digit total runs 11"', inning='9 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 15"', extra='H / E characters 15" + error position 15"'),
    "LX1720": dict(score='2-digit total runs 15"', inning='7 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 15"'),
    "LX1730": dict(score='2-digit total runs 15"', inning='9 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', stat='2-digit batter number 18"'),
    "LX1731": dict(score='2-digit total runs 15"', inning='9 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', timer='3-digit game timer 18"'),
    "LX1732": dict(score='2-digit total runs 15"', inning='9 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', timer='2-digit game timer 18"'),
    "LX1733": dict(score='2-digit total runs 15"', inning='9 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', stat='2.1-digit pitch count 18"'),
    "LX1734": dict(score='2-digit total runs 15"', inning='9 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', timer='4-digit game timer 18"'),
    "LX1736": dict(score='2-digit total runs 15"', inning='9 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', stat='2.1-digit pitch speed 18"'),
    "LX1737": dict(score='2-digit total runs 15"', inning='9 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', extra='H / E characters 15" + error position 15"'),
    "LX1740": dict(score='2-digit total runs 11"', inning='10 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 15"', stat='2-digit batter number 15", 2-digit total hits 11"', extra='H / E 15", total errors 11", error position 15"'),
    "LX1741": dict(score='2-digit total runs 11"', inning='10 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 15"', timer='3-digit game timer 15" + activity indicator', extra='Hits 11", H/E 15", errors 11", error position 15"'),
    "LX1742": dict(score='2-digit total runs 11"', inning='10 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 15"', timer='2-digit game timer 15" + activity indicator', extra='Hits 11", H/E 15", errors 11", error position 15"'),
    "LX1743": dict(score='2-digit total runs 11"', inning='10 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 15"', stat='2-digit pitch count 15", 2-digit total hits 11"', extra='H/E 15", errors 11", error position 15"'),
    "LX1744": dict(score='2-digit total runs 11"', inning='10 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 15"', timer='4-digit game timer 15"', extra='Hits 11", H/E 15", errors 11", error position 15"'),
    "LX1746": dict(score='2-digit total runs 11"', inning='10 each 1-digit runs-by-inning 11"', count='1-digit Ball / Strike / Out 15"', stat='2-digit pitch speed 15", 2-digit total hits 11"', extra='H/E 15", errors 11", error position 15"'),
    "LX1750": dict(score='2-digit total runs 15"', inning='10 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', stat='2-digit batter number 18", 2-digit total hits 15"', extra='H / E 15", total errors 15", error position 15"'),
    "LX1751": dict(score='2-digit total runs 15"', inning='10 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', timer='3-digit period clock 18" + activity indicator', extra='Hits 15", H/E 15", errors 15", error position 15"'),
    "LX1752": dict(score='2-digit total runs 15"', inning='10 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', timer='2-digit period clock 18" + activity indicator', extra='Hits 15", H/E 15", errors 15", error position 15"'),
    "LX1753": dict(score='2-digit total runs 15"', inning='10 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', stat='2.1-digit pitch count 18", 2-digit total hits 15"', extra='H/E 15", errors 15", error position 15"'),
    "LX1754": dict(score='2-digit total runs 15"', inning='10 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', timer='4-digit period clock 18"', extra='Hits 15", H/E 15", errors 15", error position 15"'),
    "LX1756": dict(score='2-digit total runs 15"', inning='10 each 1-digit runs-by-inning 15"', count='1-digit Ball / Strike / Out 18"', stat='2.1-digit pitch speed 18", 2-digit total hits 15"', extra='H/E 15", errors 15", error position 15"'),
    "LX1780": dict(score='2-digit total runs 18"', inning='10 each 1-digit runs-by-inning 18"', count='1-digit Ball / Strike / Out 24"', stat='2-digit batter number 24", 2-digit total hits 18"', extra='H / E 15", total errors 18", error position 15"'),
    "LX1781": dict(score='2-digit total runs 18"', inning='10 each 1-digit runs-by-inning 18"', count='1-digit Ball / Strike / Out 24"', timer='3-digit game timer 24"', extra='2-digit total hits 18", 1-digit total errors 18"'),
    "LX1782": dict(score='2-digit total runs 18"', inning='10 each 1-digit runs-by-inning 18"', count='1-digit Ball / Strike / Out 24"', timer='2-digit game timer 24" + activity indicator', extra='Hits 18", H/E 15", errors 18", error position 15"'),
    "LX1783": dict(score='2-digit total runs 18"', inning='10 each 1-digit runs-by-inning 18"', count='1-digit Ball / Strike / Out 24"', stat='2.1-digit pitch count 24", 2-digit total hits 18"', extra='H/E 15", errors 18", error position 15"'),
    "LX1784": dict(score='2-digit total runs 18"', inning='10 each 1-digit runs-by-inning 18"', count='1-digit Ball / Strike / Out 24"', timer='4-digit game timer 24"', extra='Hits 18", H/E 15", errors 18", error position 15"'),
    "LX1786": dict(score='2-digit total runs 18"', inning='10 each 1-digit runs-by-inning 18"', count='1-digit Ball / Strike / Out 24"', stat='2.1-digit pitch speed 24", 2-digit total hits 18"', extra='H/E 15", errors 18", error position 15"'),
}

BLURBS = {
    "LX1020": "Compact youth baseball board — total runs, inning, and bullet counts in a 5 × 3 ft cabinet.",
    "LX1030": "Recreation-field baseball board with 18-inch total-run and inning digits.",
    "LX1050": "Slim 6 × 3 ft baseball scoreboard with 15-inch totals and bullet counts.",
    "LX1060": "Flagship 10 × 5 ft rec baseball board with Hit/Error bullets.",
    "LX1062": "Add-on 2-digit timer cabinet sized to sit with baseball/softball boards.",
    "LX1064": "Add-on 4-digit timer; cabinet can be configured to match nearly any Electro-Mech baseball board.",
    "LX1070": "Wide 16 × 5 ft baseball board; innings to 19 plus Hit/Error bullets.",
    "LX1118": "Dedicated 18-inch pitch-count display for pairing with a main baseball board.",
    "LX1130": "8 × 6 ft baseball board adding pitch count to the LX1060 feature set.",
    "LX1250": "14 × 5 ft baseball board with 18-inch digits, innings to 19, and Hit/Error bullets. MM console standard; ETN and ScoreLink optional.",
    "LX1320": "Portable multi-sport board. Reversible captions and bullet indicators switch baseball counts to football downs. Optional T-Cart.",
    "LX1440": "Runs / hits / errors without a full linescore — 16 × 8 ft with 18-inch stats.",
    "LX1620": "Single 18 × 6 ft cabinet with eight innings of runs-by-inning plus BSO.",
    "LX1700": "14 × 5 ft seven-inning linescore. Compact cabinet leaves room for sponsor ID panels.",
    "LX1710": "Nine-inning linescore in one 16 × 5 ft cabinet. Batter number plus 15-inch BSO.",
    "LX1740": "Twenty-foot linescore with ten innings, H/E characters, error position, and totals.",
    "LX1750": "26 × 9 ft high-school/college linescore. Ten innings, H/E, error position, 18-inch BSO.",
    "LX1780": "Largest catalog baseball linescore — 36 × 10 ft with 24-inch BSO and 18-inch innings.",
    "LX2170": "Shot-clock pair with 12-inch shot time and 6-inch period time, syncs to the main basketball console.",
    "LX2180": "Indoor basketball shot-clock set.",
    "LX2330": "Compact indoor basketball scoreboard for elementary and rec gyms.",
    "LX2340": "8 × 4 ft indoor basketball scoreboard.",
    "LX2350": "Workhorse 9 × 3 ft indoor basketball board. Clock digits live in the upper center; power and LX drivers sit behind them.",
    "LX2570": "14 × 5 ft gym board with 16-inch clock/points, double bonus, and time-outs left. Can sync as primary among smaller LX basketball boards.",
    "LX2655": "9 × 5 ft indoor basketball with player/foul stats.",
    "LX2745": "Nearly square 8 × 6 ft indoor board. Green LEDs on period/player/foul/bonus; reversible captions for volleyball or wrestling.",
    "LX2770": "14 × 6 ft indoor basketball with full player-stat layout.",
    "LX3018": "35-inch portable play-clock pair.",
    "LX3024": "Portable 24-inch play clock in a 42-inch cabinet.",
    "LX3050": "Most popular football play-clock pair. 24-inch digits, single-post cabinets, optional handheld wireless switch.",
    "LX3120": "Compact 5 × 3.5 ft football/multi scoreboard.",
    "LX3150": "10 × 5 ft football scoreboard — time, score, down, to-go, quarter.",
    "LX3250": "Budget-friendly 16 × 8 ft football board with 18-inch time, points, down, to-go, and quarter.",
    "LX3320": "16 × 6 ft football scoreboard.",
    "LX3450": "Football/baseball dual-sport. Slide-out captions and a console that switches sport modes; clock splits to minutes + inning in baseball.",
    "LX3620": "Full football stats (clock, points, TOL, down, to-go, ball-on, quarter) in an 18 × 5 ft two-post cabinet.",
    "LX3625": "LX3620 layout with a 5-digit period clock.",
    "LX3645": "24 × 8 ft football board, 24-inch primary digits.",
    "LX3650": "26 × 8 ft football board with 30-inch 4-digit period clock.",
    "LX3655": "26 × 8 ft football board with 30-inch 5-digit period clock.",
    "LX3680": "24 × 10 ft football with expanded stats and ID area.",
    "LX3695": "26 × 10 ft football with 30 / 24 / 18-inch digits.",
    "LX3745": "32 × 8 ft football scoreboard for large high-school and college fields.",
    "LX3885": "36 × 10 ft top-of-line football scoreboard.",
    "LX6320": "Compact soccer/multi 5 × 3 ft board.",
    "LX6370": "18 × 9 ft multi-sport with a large 4-digit timer and corner ID panels.",
    "LX6546": "Soccer with reversible football captions. 24-inch points/time; 18-inch shots, corners, period (or down/to-go/ball-on/qtr).",
    "LX6655": "10 × 5 ft multi-sport with a rare 5-digit 18-inch period clock (MM:SS.t).",
    "LX6944": "26 × 8 ft soccer/football. Slide-out captions convert SOG/corners/saves into down/TOL/ball-on/to-go.",
    "LX7406": "Compact delay-of-game / play-clock style display.",
    "LX7860": "Outdoor hockey/lacrosse: 4-digit period clock, scores to 99, period to 4, four 3-digit penalty timers.",
    "LX8350": "Indoor hockey 9 × 3 ft. 12-inch clock and scores, 9-inch period. Optional ETN.",
    "LX8750": "Indoor hockey 9 × 5 ft with shots-on-goal plus standard clock, score, and penalties.",
}

# Other-sport display packs
OTHER_DISPLAYS = {
    "basketball-basic": [
        ("Period clock", "4-digit MM:SS, up/down, tenths in the last minute, TOD and segment-timer modes"),
        ("Guest / Home points", "2-digit (or 2.1) scores"),
        ("Period", "1-digit period"),
        ("Bonus", "Single or double bonus indicators"),
        ("Team fouls", "Optional team-foul digits"),
        ("Time-outs left", "Optional TOL digits"),
    ],
    "basketball-stats": [
        ("Period clock", "4-digit MM:SS with tenths, TOD, segment timer"),
        ("Guest / Home points", "2.1-digit scores"),
        ("Period", "1-digit"),
        ("Player / fouls", "Player number and player-foul digits"),
        ("Bonus / TOL", "Double bonus and time-outs left"),
    ],
    "shotclock": [
        ("Shot time", "2-digit shot clock"),
        ("Period time", "Optional 4-digit period clock, synced to the main board"),
    ],
    "playclock": [
        ("Play clock", "2-digit delay-of-game / play clock, typically a pair of cabinets"),
    ],
    "football-basic": [
        ("Period clock", "4-digit MM:SS"),
        ("Guest / Home points", "2-digit scores"),
        ("Down / To Go / Ball On / Quarter", "Game-situation digits"),
    ],
    "football-full": [
        ("Period clock", "4- or 5-digit clock, tenths in the last minute"),
        ("Guest / Home points", "2-digit scores"),
        ("Time-outs left", "Guest and Home TOL"),
        ("Down / To Go / Ball On / Quarter", "Full football situation row"),
    ],
    "soccer": [
        ("Period clock", "4- or 5-digit"),
        ("Guest / Home points", "2-digit scores"),
        ("Shots on goal / corners / saves", "Match stats (captions reverse to football)"),
        ("Period", "1-digit"),
    ],
    "hockey": [
        ("Period clock", "4-digit MM:SS, up/down, tenths, TOD, segment timer"),
        ("Guest / Home points", "2.1-digit to 199"),
        ("Period", "1-digit to 4"),
        ("Penalty timers", "Two 3-digit timers per team"),
    ],
}

DESCRIPTIONS_FALLBACK = {
    "baseball": "Outdoor LED baseball/softball scoreboard. Aluminum cabinet, LX drivers, red or amber digits.",
    "basketball": "Indoor LED basketball scoreboard. Syncs with shot clocks and additional gym displays over cable or ScoreLink.",
    "football": "Outdoor LED football scoreboard. Heavy-duty extruded aluminum cabinet, LX drivers, 120 VAC.",
    "soccer": "Outdoor LED soccer scoreboard. Often reversible to football via slide-out captions.",
    "hockey": "LED hockey/lacrosse scoreboard with period clock, scores, and penalty timers.",
    "multisport": "Multi-sport LED scoreboard with reversible captions and a sport-switching console.",
    "accessory": "Companion display (play clock, shot clock, pitch count, or add-on timer).",
}


def sport_of(mid: str) -> tuple[str, list[str], str]:
    n = int(mid[2:3])
    extra: list[str] = []
    env = "outdoor"
    if n == 1:
        sport = "baseball"
        if mid in {"LX1062", "LX1064", "LX1118"}:
            sport, env = "accessory", "outdoor"
        if mid == "LX1320":
            sport, extra, env = "multisport", ["baseball", "football", "soccer"], "portable"
        if mid == "LX1360":
            extra = ["football"]
        if mid == "LX1390":
            extra = ["multisport"]
    elif n == 2:
        sport = "basketball"
        env = "indoor"
        if mid.startswith("LX20") or mid in {"LX2055", "LX2056"}:
            env = "outdoor"
        if mid in {"LX2120", "LX2150", "LX2158", "LX2160", "LX2170", "LX2180"}:
            sport, env = "accessory", "indoor"
        if mid == "LX2745":
            extra = ["volleyball", "wrestling"]
    elif n == 3:
        sport = "football"
        if mid in {"LX3018", "LX3024", "LX3030", "LX3050", "LX3054", "LX3070"}:
            sport, env = "accessory", "outdoor"
        if mid == "LX3450":
            extra = ["baseball"]
            sport = "multisport"
        if mid in {"LX3325", "LX3365"}:
            extra = ["soccer"]
    elif n == 6:
        sport = "soccer"
        extra = ["football"]
        if mid in {"LX6320", "LX6324", "LX6650", "LX6655", "LX6630"}:
            sport = "multisport"
            extra = ["soccer", "lacrosse", "football"]
        if mid.startswith("LX63") and mid not in {"LX6320", "LX6324"}:
            extra = ["soccer", "football"]
    elif n == 7:
        sport = "hockey"
        extra = ["lacrosse"]
        if mid in {"LX7406", "LX7520", "LX7620"}:
            sport, extra, env = "accessory", [], "outdoor"
        if mid == "LX7860":
            env = "outdoor"
        else:
            env = "indoor"
    elif n == 8:
        sport = "hockey"
        extra = ["lacrosse"]
        env = "indoor"
        if mid == "LX7860":
            env = "outdoor"
    else:
        sport = "multisport"
    return sport, extra, env


def console_of(mid: str) -> str:
    # Glossary: 10xx, 12xx, 13xx, 31xx typically MM
    num = mid[2:]
    if num.startswith(("10", "11", "12", "13", "31")):
        return "MM"
    return "MP"


def layout_of(mid: str, sport: str, bb: dict | None) -> str:
    if bb:
        if "runs-by-inning" in (bb.get("inning") or ""):
            return "linescore"
        if "timer" in bb and not bb.get("score"):
            return "addon-timer"
        if "pitch count" in (bb.get("stat") or "") and not bb.get("score"):
            return "pitch-count"
        if sport == "multisport":
            return "multisport"
        return "baseball-compact"
    if sport == "accessory":
        if mid.startswith("LX21") or mid.startswith("LX20"):
            return "shot-clock"
        if mid.startswith("LX30"):
            return "play-clock"
        return "addon"
    if sport == "basketball":
        return "basketball"
    if sport == "football":
        return "football"
    if sport == "soccer":
        return "soccer"
    if sport == "hockey":
        return "hockey"
    return "multisport"


def components_for(mid: str, sport: str, console: str, bb: dict | None) -> list[str]:
    parts = ["aluminum-cabinet", "junction-chassis", "power-supply", "lx-driver", "led-digit", "ribbon-cable", "fuse"]
    if console == "MM":
        parts += ["mm-console", "cx-driver"]
    else:
        parts += ["mp-console", "cx-driver"]
    parts += ["extension-cable", "junction-box", "stereo-patch"]
    parts += ["scorelink"]  # optional but always in the system
    if sport in {"baseball", "multisport"} or (bb and bb.get("count")):
        parts.append("bullet-indicator")
    if bb and (bb.get("extra") or "").find("H") >= 0:
        parts.append("he-character")
    if sport in {"football", "soccer", "basketball", "hockey", "multisport"} or (bb and bb.get("timer")):
        parts.append("horn")
    if sport == "basketball":
        parts.append("shot-timer-handheld")
    if sport == "football" or mid.startswith("LX30"):
        parts.append("play-clock-handheld")
    parts += ["etn-module", "etn16-driver", "id-panel", "mounting-clamp"]
    if mid == "LX1320":
        parts.append("t-cart")
    return parts


def digit_heights(mid: str, bb: dict | None) -> list[int]:
    text = " ".join((bb or {}).values()) if bb else ""
    found = []
    for h in (30, 24, 18, 16, 15, 12, 11, 9, 6, 4, 3):
        if f'{h}"' in text or f"{h}-inch" in text or f"{h} in" in text:
            found.append(h)
    if found:
        return found
    # fallbacks by family
    if mid.startswith("LX17") and int(mid[4]) >= 8:
        return [24, 18, 15]
    if mid.startswith("LX17"):
        return [18, 15, 11]
    if mid.startswith(("LX36", "LX37", "LX38")):
        return [30, 24, 18]
    if mid.startswith("LX30"):
        return [24]
    if sport_of(mid)[0] == "basketball":
        return [16, 12, 9]
    if sport_of(mid)[0] == "hockey":
        return [12, 11, 9]
    return [18, 15]


def displays_from_bb(bb: dict) -> list[dict]:
    order = [("score", "Score"), ("inning", "Inning / linescore"), ("count", "Count"),
             ("timer", "Timer / clock"), ("stat", "Stats"), ("extra", "Indicators")]
    out = []
    for k, label in order:
        if bb.get(k):
            out.append({"label": label, "detail": bb[k]})
    return out


def displays_other(mid: str, sport: str) -> list[dict]:
    key = None
    if mid in {"LX2170", "LX2180", "LX2160", "LX2150", "LX2158", "LX2120"}:
        key = "shotclock"
    elif mid.startswith("LX30") and mid[4:6] in {"18", "24", "30", "50", "54", "70"}:
        key = "playclock"
    elif sport == "basketball" and mid.startswith(("LX26", "LX27")):
        key = "basketball-stats"
    elif sport == "basketball":
        key = "basketball-basic"
    elif sport == "football" and mid.startswith(("LX36", "LX37", "LX38")):
        key = "football-full"
    elif sport == "football":
        key = "football-basic"
    elif sport in {"soccer", "multisport"} and mid.startswith(("LX65", "LX67", "LX69")):
        key = "soccer"
    elif sport == "hockey":
        key = "hockey"
    elif sport == "soccer":
        key = "soccer"
    else:
        key = "football-basic"
    return [{"label": a, "detail": b} for a, b in OTHER_DISPLAYS[key]]


def product_path(sport: str, mid: str) -> str:
    slug = {
        "baseball": "baseball", "basketball": "basketball", "football": "football",
        "soccer": "soccer", "hockey": "hockey", "multisport": "soccer", "accessory": "football",
    }[sport]
    return f"https://www.electro-mech.com/{slug}/scoreboard-{mid.lower()}/"


def features_flags(mid: str, bb: dict | None, sport: str) -> list[str]:
    flags = ["LED", "120 VAC", "aluminum cabinet"]
    text = " ".join((bb or {}).values()).lower() if bb else ""
    if "timer" in text or "clock" in text or sport in {"basketball", "football", "soccer", "hockey", "multisport"}:
        flags.append("game clock")
    if "pitch" in text:
        flags.append("pitch count / speed")
    if "runs-by-inning" in text:
        flags.append("linescore")
    if "hit" in text or "error" in text or "h / e" in text:
        flags.append("hit / error")
    if sport in {"soccer", "football", "multisport"} or "reversible" in (BLURBS.get(mid, "") + text).lower():
        if "reversible" in (BLURBS.get(mid, "") + DESCRIPTIONS_FALLBACK.get(sport, "")).lower() or mid.endswith(("5", "4", "6")) and sport in {"soccer", "multisport"}:
            flags.append("reversible captions")
    if mid.endswith("5") and sport in {"soccer", "football", "multisport"}:
        flags.append("reversible captions")
    flags.append("ETN optional")
    flags.append("ScoreLink optional")
    return flags


def build():
    models = []
    for mid, (w, h) in DIMS.items():
        sport, extra, env = sport_of(mid)
        bb = BB.get(mid)
        console = console_of(mid)
        m = {
            "id": mid,
            "sport": sport,
            "alsoSports": extra,
            "environment": env,
            "width": w,
            "height": h,
            "console": console,
            "voltage": "120 VAC",
            "layout": layout_of(mid, sport, bb),
            "digitHeights": digit_heights(mid, bb),
            "blurb": BLURBS.get(mid) or DESCRIPTIONS_FALLBACK[sport],
            "displays": displays_from_bb(bb) if bb else displays_other(mid, sport),
            "features": features_flags(mid, bb, sport),
            "components": components_for(mid, sport, console, bb),
            "options": ["Electronic Team Names", "ScoreLink wireless", "ID panels", "Custom paint", "Data cable up to 1,000 ft"],
            "productUrl": product_path(sport, mid),
            "manualUrl": "https://www.electro-mech.com/manuals/",
            "specSheetUrl": "https://www.electro-mech.com/manuals-spec-sheets/",
            "cutsheetFolder": "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-",
        }
        if mid in SPECS:
            m.update({k: v for k, v in SPECS[mid].items()})
        if mid in DIGIT_KITS:
            m["digitKit"] = DIGIT_KITS[mid]
        if env == "outdoor":
            m["options"] = m["options"] + ["Conformal-coated LED boards"]
        models.append(m)
    models.sort(key=lambda x: x["id"])
    return models


HEADER = '''/**
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

export const models: LxModel[] = '''

def main():
    models = build()
    out = Path("/workspace/src/data/models.ts")
    body = HEADER + json.dumps(models, indent=2) + " as LxModel[];\n\n"
    body += """export const modelsById: Record<string, LxModel> = Object.fromEntries(
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
"""
    # json uses true/false/null — valid in TS as const assertion almost; but
    # true/false are fine. Need to not have issues with as LxModel[].
    out.write_text(body)
    print(f"wrote {len(models)} models to {out}")

if __name__ == "__main__":
    main()
