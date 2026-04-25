"use client";

import { ExpandableCardDemo } from "@/components/features/ExpandableCardDemo";
import {
  expandableCards,
  type ExpandableCardItem,
} from "@/data/expandable-cards";
import { type UKM } from "@/lib/ukm-data";

interface UkmCardProps {
  ukm: UKM;
  rank?: number;
}

export function UkmCard({ ukm, rank }: UkmCardProps) {
  const matchedCard: ExpandableCardItem | undefined = expandableCards.find(
    (item) =>
      item.id === ukm.id ||
      item.title.toLowerCase() === ukm.name.toLowerCase() ||
      item.title.toLowerCase() === ukm.title.toLowerCase(),
  );

  const cardData: ExpandableCardItem = matchedCard || {
    id: ukm.id,
    title: ukm.name,
    src: "https://dummyimage.com/400x400/9e9e9e/ffffff&text=UKM",
    description: ukm.title,
    category: ukm.category,
    detailTitle: `Tentang ${ukm.name}`,
    detailBody: ukm.description,
    detailFooterTitle: "Informasi UKM",
  };

  const detailFooterTitle = rank
    ? `Rekomendasi #${rank} - ${cardData.detailFooterTitle}`
    : cardData.detailFooterTitle;

  return (
    <ExpandableCardDemo
      title={cardData.title}
      src={cardData.src}
      description={cardData.description}
      detailTitle={cardData.detailTitle}
      detailBody={cardData.detailBody}
      detailFooterTitle={detailFooterTitle}
    />
  );
}

/**
 * Grid component untuk display multiple UKM
 */
interface UkmGridProps {
  ukms: UKM[];
  showRank?: boolean;
}

export function UkmGrid({ ukms, showRank = true }: UkmGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ukms.map((ukm, index) => (
        <UkmCard
          key={ukm.id}
          ukm={ukm}
          rank={showRank ? index + 1 : undefined}
        />
      ))}
    </div>
  );
}
