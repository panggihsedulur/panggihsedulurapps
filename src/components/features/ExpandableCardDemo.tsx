import { ExpandableCard } from "@/components/ui/expandable-card";

interface ExpandableCardDemoProps {
  title: string;
  src: string;
  description: string;
  category?: string;
  detailTitle: string;
  detailBody: string;
  detailFooterTitle: string;
  /** Optional logo image that overlaps the card image. */
  logoSrc?: string;
}

export function ExpandableCardDemo({
  title,
  src,
  description,
  category,
  detailTitle,
  detailBody,
  detailFooterTitle,
  logoSrc,
}: ExpandableCardDemoProps) {
  const badgeLabel = category;
  const modalSubtitle = category ? `Kategori ${category}` : undefined;
  const badges = [category, detailFooterTitle].filter(Boolean) as string[];

  return (
    <ExpandableCard
      title={title}
      src={src}
      description={description}
      badgeLabel={badgeLabel}
      logoSrc={logoSrc}
      modalSubtitle={modalSubtitle}
      badges={badges}
      classNameExpanded="[&_p.section-title]:text-zinc-900 dark:[&_p.section-title]:text-zinc-50"
    >
      <p className="section-title mb-1 text-sm font-semibold">{detailTitle}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{detailBody}</p>
    </ExpandableCard>
  );
}
