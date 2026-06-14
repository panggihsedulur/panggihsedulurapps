"use client";

import React from "react";
import { GridPattern } from "@/components/ui/grid-pattern";

export const QuestionnaireBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex flex-col">
      <div className="absolute inset-0 pointer-events-none">
        <GridPattern
          width={48}
          height={48}
          className="absolute inset-0 stroke-[#5aa0ac]/25 fill-[#5aa0ac]/[0.06] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_82%)]"
        />
      </div>

      <div className="relative z-10 w-full flex-1">{children}</div>
    </div>
  );
};
