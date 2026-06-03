"use client";

import React from "react";
const ImageBackground = () => (
  <div
    className="fixed inset-0 z-0 bg-[url('/bghero.webp')] bg-cover bg-center bg-no-repeat"
    aria-hidden="true"
  />
);

export const QuestionnaireBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex flex-col">
      <ImageBackground />

      <div className="relative z-10 w-full flex-1">{children}</div>
    </div>
  );
};
