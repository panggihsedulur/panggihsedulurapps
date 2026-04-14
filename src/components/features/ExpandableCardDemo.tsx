import { ExpandableCard } from "@/components/ui/expandable-card";

interface ExpandableCardDemoProps {
  title: string;
  src: string;
  description: string;
  detailTitle: string;
  detailBody: string;
  detailFooterTitle: string;
}

export function ExpandableCardDemo({
  title,
  src,
  description,
  detailTitle,
  detailBody,
  detailFooterTitle,
}: ExpandableCardDemoProps) {
  return (
    <ExpandableCard
      title={title}
      src={src}
      description={description}
      classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium "
    >
      <h4>{detailTitle}</h4>
      <p>{detailBody}</p>
      <h4>{detailFooterTitle}</h4>
    </ExpandableCard>
  );
}
