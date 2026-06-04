import { ExpandableCard } from "@/components/ui/expandable-card";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

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
  const resolvedSrc = photoUrl || src;
  const resolvedLogoSrc = logoUrl || logoSrc || resolvedSrc;
  let contactNumber = contact ? contact.replace(/\D/g, "") : "";
  if (contactNumber.startsWith("0")) {
    contactNumber = "62" + contactNumber.substring(1);
  }
  const waHref = contactNumber ? `https://wa.me/${contactNumber}` : undefined;
  const showWhatsappButton = Boolean(waHref);
  const instagramHandle = instagram ? instagram.replace(/^@/, "") : "";
  const instagramText = instagramHandle ? `@${instagramHandle}` : "";
  const instagramHref = instagramHandle
    ? `https://instagram.com/${instagramHandle}`
    : undefined;
  const showInstagramButton = Boolean(instagramHref);

  return (
    <ExpandableCard
      title={title}
      src={resolvedSrc}
      description={description}
      badgeLabel={badgeLabel}
      logoSrc={resolvedLogoSrc}
      modalSubtitle={modalSubtitle}
      classNameExpanded="[&_p.section-title]:text-zinc-900 dark:[&_p.section-title]:text-zinc-50"
    >
      <p className="section-title mb-1 text-sm font-semibold">{detailTitle}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{detailBody}</p>
      {showWhatsappButton || showInstagramButton ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {showWhatsappButton && waHref ? (
            <a
              className="inline-flex items-center justify-center rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200 dark:hover:bg-emerald-950/70"
              href={waHref}
              rel="noreferrer"
              target="_blank"
              aria-label="Hubungi admin via WhatsApp"
            >
              <FaWhatsapp className="mr-2 h-4 w-4" />
              Hubungi Admin
            </a>
          ) : null}
          {showInstagramButton && instagramHref ? (
            <a
              className="inline-flex items-center justify-center rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200 dark:hover:bg-emerald-950/70"
              href={instagramHref}
              rel="noreferrer"
              target="_blank"
              aria-label="Hubungi admin via Instagram"
            >
              <FaInstagram className="mr-2 h-4 w-4" />
              {instagramText}
            </a>
          ) : null}
        </div>
      ) : null}
    </ExpandableCard>
  );
}
