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
      base: "hover:bg-cyan-500/10 border-white/5 bg-white/5",
      isSelected: "bg-cyan-500/20 border-cyan-500/50 ring-2 ring-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)]",
      icon: "text-cyan-400",
    },
    {
      base: "hover:bg-emerald-500/10 border-white/5 bg-white/5",
      isSelected: "bg-emerald-500/20 border-emerald-500/50 ring-2 ring-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]",
      icon: "text-emerald-400",
    },
    {
      base: "hover:bg-blue-500/10 border-white/5 bg-white/5",
      isSelected: "bg-blue-500/20 border-blue-500/50 ring-2 ring-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]",
      icon: "text-blue-400",
    },
    {
      base: "hover:bg-violet-500/10 border-white/5 bg-white/5",
      isSelected: "bg-violet-500/20 border-violet-500/50 ring-2 ring-violet-500/20 shadow-[0_0_20px_rgba(139,92,246,0.15)]",
      icon: "text-violet-400",
    },
    {
      base: "hover:bg-teal-500/10 border-white/5 bg-white/5",
      isSelected: "bg-teal-500/20 border-teal-500/50 ring-2 ring-teal-500/20 shadow-[0_0_20px_rgba(20,184,166,0.15)]",
      icon: "text-teal-400",
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
              className={`group relative flex w-full items-center gap-4 rounded-2xl border px-6 py-5 text-left transition-all active:scale-[0.98] backdrop-blur-sm ${isSelected ? palette.isSelected : palette.base}`}
            >
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all group-hover:scale-110 ${isSelected ? "border-cyan-500/50 bg-cyan-500/20 text-white" : "text-white/40"}`}>
                {String.fromCharCode(65 + index)}
              </div>
              <span className={`text-lg md:text-xl font-medium transition-colors ${isSelected ? "text-white" : "text-white/80 group-hover:text-white"}`}>
                {option.text}
              </span>
              {isSelected && (
                <div className="absolute right-6 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button
          onClick={handleSubmitAnswer}
          disabled={!selectedOption || isLoading}
          className="flex-1 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white py-8 rounded-2xl font-bold text-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xl shadow-cyan-900/20 active:scale-[0.98]"
        >
          {isLoading
            ? "Loading..."
            : currentIndex === totalQuestions - 1
              ? "Selesai ✨"
              : "Lanjut →"}
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
