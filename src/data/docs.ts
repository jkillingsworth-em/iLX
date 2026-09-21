export const CUTSHEET_FOLDER =
  "https://drive.google.com/drive/folders/1xWVSpLJQ7JQstlheBRuJCKT1X5xu8xM-";

export const DIGITS_BREAKDOWN =
  "https://docs.google.com/spreadsheets/d/1pG2yitGDaymN-Jkm4FiZ8Rp_6C2o_imMmsBsWsh4r14";

export const MANUALS_INDEX = "https://www.electro-mech.com/manuals/";
export const SPEC_SHEETS_INDEX = "https://www.electro-mech.com/manuals-spec-sheets/";

export function driveSearchUrl(query: string): string {
  return `https://drive.google.com/drive/search?q=${encodeURIComponent(query)}`;
}

export function cutsheetSearchUrl(modelId: string, etn = false): string {
  return driveSearchUrl(etn ? `${modelId}-ETN Cutsheet` : `${modelId} Cutsheet`);
}

export function digitsSheetUrl(modelId: string): string {
  return driveSearchUrl(`${modelId} DIGITS`);
}
