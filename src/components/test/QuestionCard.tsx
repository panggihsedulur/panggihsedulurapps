"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { type Question } from "@/lib/questions";

interface QuestionCardProps {
  question: Question;
  onAnswer: (optionId: string) => void;
  isLoading?: boolean;
  currentIndex: number;
  totalQuestions: number;
}

export function QuestionCard({
  question,
  onAnswer,
  isLoading = false,
  currentIndex,
  totalQuestions,
}: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const optionStyles = [
    {
      base: "bg-[linear-gradient(180deg,#b5c000_0%,#8e9800_100%)] shadow-[0_5px_0_0_#5e6600]",
      isSelected: "ring-4 ring-[#e9ff77]/35",
    },
    {
      base: "bg-[linear-gradient(180deg,#be7dff_0%,#8f2eff_100%)] shadow-[0_5px_0_0_#6122aa]",
      isSelected: "ring-4 ring-[#ddb8ff]/35",
    },
    {
      base: "bg-[linear-gradient(180deg,#ff7d00_0%,#ff4a00_100%)] shadow-[0_5px_0_0_#b43300]",
      isSelected: "ring-4 ring-[#ffbf8e]/35",
    },
    {
      base: "bg-[linear-gradient(180deg,#10c8c4_0%,#0c8f88_100%)] shadow-[0_5px_0_0_#076660]",
      isSelected: "ring-4 ring-[#8ff0ec]/35",
    },
    {
      base: "bg-[linear-gradient(180deg,#4f6fd6_0%,#2d4698_100%)] shadow-[0_5px_0_0_#1f2f68]",
      isSelected: "ring-4 ring-[#9fb4ff]/35",
    },
  ];

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption) return;
    onAnswer(selectedOption);
    setSelectedOption(null);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative z-10 text-center mb-8">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 px-6 py-8 md:px-8 md:py-10 shadow-[0_22px_40px_-18px_rgba(0,0,0,0.7)] backdrop-blur-xl">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-[#0b141b] px-6 py-2 text-2xl font-semibold text-[#ffd15a] shadow-[0_6px_16px_rgba(0,0,0,0.35)]">
            {currentIndex + 1} / {totalQuestions}
          </div>
          <h2 className="text-xl leading-tight md:text-3xl font-semibold text-white">
            {question.text}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {question.options.map((option, index) => {
          const palette = optionStyles[index % optionStyles.length];
          const isSelected = selectedOption === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelectOption(option.id)}
              className={`w-full rounded-2xl px-6 py-5 text-center text-lg md:text-2xl font-medium text-white transition-all active:scale-[0.98] hover:brightness-110 ${palette.base} ${isSelected ? palette.isSelected : ""}`}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button
          onClick={handleSubmitAnswer}
          disabled={!selectedOption || isLoading}
          className="flex-1 bg-white/10 hover:bg-white/15 text-white py-3 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 backdrop-blur-sm"
        >
          {isLoading
            ? "Loading..."
            : currentIndex === totalQuestions - 1
              ? "Selesai"
              : "Lanjut"}
        </Button>
      </div>

      {!selectedOption && (
        <p className="mt-6 text-center text-sm font-medium text-white/70 animate-pulse">
          Pilih satu jawaban untuk melanjutkan
        </p>
      )}
    </div>
  );
}
