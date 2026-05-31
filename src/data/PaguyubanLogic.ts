/**
 * Paguyuban Daerah Data & Mapping
 * Extracted from UkmPaguyubanData — only items with type: "Paguyuban"
 */

import {
  fullUkmAndPaguyubanData,
  type ExpandableCardItem,
} from "@/data/UkmPaguyubanData";

export type Paguyuban = ExpandableCardItem & {
  type: "Paguyuban";
  priority: number;
};

// All paguyuban items (type === "Paguyuban")
export const allPaguyuban: Paguyuban[] = fullUkmAndPaguyubanData
  .filter((item): item is Paguyuban => item.type === "Paguyuban")
  .map((item, index) => ({ ...item, priority: index + 1 }));

// Derive unique categories from data
export const paguyubanCategories: string[] = Array.from(
  new Set(allPaguyuban.map((p) => p.category)),
).sort((a, b) => a.localeCompare(b));

export const paguyubanCategoryOptions = [
  "Semua Daerah",
  ...paguyubanCategories,
];
