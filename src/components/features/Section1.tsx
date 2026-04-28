import React from "react";
import { cn } from "@/lib/utils";
import { ExpandableCardDemo } from "./ExpandableCardDemo";
import { expandableCards } from "@/data/expandable-cards";

// --- MAIN COMPONENT ---
export default function Section1() {
  return (
    <div className="relative w-full overflow-hidden font-sans ">
      {/* Background Image with Gradient Mask */}
      {/* <div
        className="absolute inset-0 z-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a72ca2f3-9dd1-4fe4-84ba-fe86468a5237_3840w.webp?w=800&q=80)] bg-cover bg-center opacity-40"
        style={{
          maskImage:
            "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
        }}
      /> */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />{" "}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-20 md:pb-20 lg:px-8 min-h-screen">
        {/* ini isi sectionya */}
        <h1 className="text-4xl sm:text-5xl font-normal font-heading mb-3 text-center min-h-24 text-gradient">
          <span className="font-edwardian text-7xl sm:text-8xl mr-2 ">U</span>
          km
          <span className="font-edwardian text-7xl sm:text-8xl mr-2">P</span>
          aguyuban
        </h1>
        <div className="flex flex-row gap-6 justify-center items-start flex-wrap mt-12">
          {expandableCards.map((card) => (
            <ExpandableCardDemo
              key={card.id}
              title={card.title}
              src={card.src}
              description={card.description}
              detailTitle={card.detailTitle}
              detailBody={card.detailBody}
              detailFooterTitle={card.detailFooterTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
