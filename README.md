# iLX

Phone-first plant and field lookup for Electro-Mech LX scoreboards. Built for Wrightsville staff and installers — not a marketing site.

Search a model, a digit P/N (`563-20-1010`), or a size. Each board has mechanical, electrical, sales, and docs.

## What’s in here

- 182 LX cabinets with official catalog photos
- Outdoor red (catalog) plus official colorizer **amber** and **ETN** red/amber
- Digit BOM from Drive *DIGITS PER MODEL* (Parts sheet)
- Mask assemblies, cut-sheet / manual / spec links
- Sales ranks: empty until Sage 100 is loaded (`src/data/sales.ts`)
- Compare, parts library, system map, digit search

The public catalog / sales archive lives in [lxsalesad](https://github.com/jkillingsworth-em/lxsalesad).

## Run

```bash
npm install
npm run dev
```

## Data you’ll still drop in

1. Sage 100 ranks → `src/data/sales.ts`
2. Plant red / amber / ETN photos if you want them instead of (or beside) the factory colorizer layers
