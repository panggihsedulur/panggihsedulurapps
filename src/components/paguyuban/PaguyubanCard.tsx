"use client";

import { ExpandableCardDemo } from "@/components/features/ExpandableCardDemo";
import { type Paguyuban } from "@/data/PaguyubanLogic";

interface PaguyubanCardProps {
  paguyuban: Paguyuban;
}

export function PaguyubanCard({ paguyuban }: PaguyubanCardProps) {
  return (
    <ExpandableCardDemo
      title={paguyuban.title}
      src={paguyuban.src}
      description={paguyuban.description}
      category={paguyuban.category}
      detailTitle={paguyuban.detailTitle}
      detailBody={paguyuban.detailBody}
      detailFooterTitle={paguyuban.detailFooterTitle}
      photoUrl={paguyuban.photoUrl}
      logoUrl={paguyuban.logoUrl}
      type={paguyuban.type}
      contactPerson={paguyuban.contactPerson}
      contact={paguyuban.contact}
      instagram={paguyuban.instagram}
    />
  );
}

interface PaguyubanGridProps {
  paguyubans: Paguyuban[];
}

export function PaguyubanGrid({ paguyubans }: PaguyubanGridProps) {
  return (
    <div className="grid grid-cols-1 items-start justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {paguyubans.map((pg) => (
        <PaguyubanCard key={pg.id} paguyuban={pg} />
      ))}
    </div>
  );
}
