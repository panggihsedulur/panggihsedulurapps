"use client";

import React from "react";

export const QuestionnaireBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Base Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-cyan-950 to-emerald-950"></div>

      {/* Blurred Shapes Layer */}
      <div className="absolute inset-0 filter blur-[150px] opacity-60 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 bg-white/40 rounded-full"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-cyan-100/30 rounded-full"></div>
      </div>

      {/* Decorative Floating Shapes Layer */}
      <div className="absolute inset-0 filter opacity-80 pointer-events-none">
        <div className="absolute top-[20%] left-[30%] w-16 h-16 bg-white/20 rounded-lg rotate-45 border-r border-t border-white/30 backdrop-blur-sm"></div>
        <div className="absolute bottom-[25%] right-[15%] w-20 h-20 bg-white/10 rounded-full border-l-2 border-dashed border-white/20 backdrop-blur-md"></div>
        <div className="absolute top-[10%] right-[10%] w-10 h-10 bg-white/25 rounded-md rotate-12 backdrop-blur-lg"></div>
      </div>

      {/* Color Accents Layer */}
      <div className="absolute inset-0 filter blur-[4px] opacity-90 mix-blend-screen pointer-events-none">
        <div className="absolute top-[21%] left-[31%] w-14 h-14 bg-gradient-to-br from-red-200/10 via-green-200/20 to-blue-200/10 rounded-lg rotate-45"></div>
        <div className="absolute bottom-[24%] right-[14%] w-18 h-18 bg-gradient-to-r from-red-100/20 via-yellow-100/10 to-blue-100/20 rounded-full"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply flex flex-col justify-evenly pointer-events-none"></div>

      {/* Inset Shadow Layer */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_50px_rgba(0,0,0,0.15)] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
