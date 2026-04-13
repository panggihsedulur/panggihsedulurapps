import { ExpandableCard } from "@/components/ui/expandable-card";

interface ExpandableCardDemoProps {
  title: string;
  src: string;
  description: string;
}

export function ExpandableCardDemo({
  title,
  src,
  description,
}: ExpandableCardDemoProps) {
  return (
    <ExpandableCard
      title={title}
      src={src}
      description={description}
      classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium "
    >
      <h4>The Village's Secret</h4>
      <p>
        Deep within the mist-covered mountains of Japan, there lies a small,
        secluded village known as <i>Yamadori</i>. For centuries, the villagers
        have lived in harmony with nature, but they also harbor a dark secret—an
        ancient pact with the spirits of the forest, the
      </p>
      <h4>The Mysterious Disappearances</h4>
    </ExpandableCard>
  );
}
