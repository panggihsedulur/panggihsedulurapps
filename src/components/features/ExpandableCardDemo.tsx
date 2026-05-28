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
  photoUrl?: string;
  logoUrl?: string;
  type?: "UKM" | "Paguyuban";
  contactPerson?: string;
  contact?: string;
  instagram?: string;
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
  photoUrl,
  logoUrl,
  type,
  contactPerson,
  contact,
  instagram,
}: ExpandableCardDemoProps) {
  const badgeLabel = category;
  const modalSubtitle = category ? `Kategori ${category}` : undefined;
  const badges = [type, category, detailFooterTitle].filter(
    Boolean,
  ) as string[];
  const resolvedSrc = photoUrl || src;
  const resolvedLogoSrc = logoUrl || logoSrc || resolvedSrc;
  const contactLabel = [contactPerson, contact].filter(Boolean).join(" · ");
  const instagramLabel = instagram?.startsWith("@");
  const instagramText = instagramLabel
    ? instagram
    : instagram
      ? `@${instagram}`
      : "";
  const instagramHref = instagram
    ? instagram.startsWith("http")
      ? instagram
      : `https://instagram.com/${instagram.replace(/^@/, "")}`
    : undefined;

  return (
    <ExpandableCard
      title={title}
      src={resolvedSrc}
      description={description}
      badgeLabel={badgeLabel}
      logoSrc={resolvedLogoSrc}
      modalSubtitle={modalSubtitle}
      badges={badges}
      classNameExpanded="[&_p.section-title]:text-zinc-900 dark:[&_p.section-title]:text-zinc-50"
    >
      <p className="section-title mb-1 text-sm font-semibold">{detailTitle}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{detailBody}</p>
      {contactLabel || instagramText ? (
        <div className="mt-4 space-y-2 rounded-xl border border-zinc-200/70 bg-zinc-50 p-3 text-sm text-zinc-600 dark:border-zinc-800/70 dark:bg-zinc-900/40 dark:text-zinc-300">
          {contactLabel ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-zinc-700 shadow-sm dark:bg-zinc-950 dark:text-zinc-100">
                Kontak
              </span>
              <span className="text-sm">{contactLabel}</span>
            </div>
          ) : null}
          {instagramText && instagramHref ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-zinc-700 shadow-sm dark:bg-zinc-950 dark:text-zinc-100">
                Instagram
              </span>
              <a
                className="text-sm text-emerald-600 hover:underline dark:text-emerald-400"
                href={instagramHref}
                rel="noreferrer"
                target="_blank"
              >
                {instagramText}
              </a>
            </div>
          ) : null}
        </div>
      ) : null}
    </ExpandableCard>
  );
}
