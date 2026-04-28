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
      // Hijau Zaitun (Sesuai Tombol 1 di gambar)
      base: "bg-gradient-to-b from-[#A8B81B] to-[#616F00] text-white rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all",
      isSelected:
        "bg-gradient-to-b from-[#b7c91e] to-[#6f7f00] text-white rounded-[12px] ring-2 ring-white/50 shadow-inner translate-y-[2px]",
      icon: "text-lime-100",
    },
    {
      // Ungu (Sesuai Tombol 2 di gambar)
      base: "bg-gradient-to-b from-[#A859FF] to-[#6815D8] text-white rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all",
      isSelected:
        "bg-gradient-to-b from-[#b873ff] to-[#7618f5] text-white rounded-[12px] ring-2 ring-white/50 shadow-inner translate-y-[2px]",
      icon: "text-purple-100",
    },
    {
      // Oranye (Sesuai Tombol 3 di gambar)
      base: "bg-gradient-to-b from-[#FF7700] to-[#E03700] text-white rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all",
      isSelected:
        "bg-gradient-to-b from-[#ff871a] to-[#ff3f00] text-white rounded-[12px] ring-2 ring-white/50 shadow-inner translate-y-[2px]",
      icon: "text-orange-100",
    },
    {
      // Cyan/Teal (Sesuai Tombol 4 di gambar)
      base: "bg-gradient-to-b from-[#00D5CB] to-[#008781] text-white rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all",
      isSelected:
        "bg-gradient-to-b from-[#00ebd0] to-[#009b94] text-white rounded-[12px] ring-2 ring-white/50 shadow-inner translate-y-[2px]",
      icon: "text-cyan-100",
    },
    {
      // Biru (Tombol 5 - Pelengkap agar berjumlah 5)
      base: "bg-gradient-to-b from-[#188CFF] to-[#004B99] text-white rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:brightness-110 transition-all",
      isSelected:
        "bg-gradient-to-b from-[#2d99ff] to-[#005bb8] text-white rounded-[12px] ring-2 ring-white/50 shadow-inner translate-y-[2px]",
      icon: "text-blue-100",
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
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all group-hover:scale-110 ${isSelected ? "border-cyan-500/50 bg-cyan-500/20 text-white" : "text-white/40"}`}
              >
                {String.fromCharCode(65 + index)}
              </div>
              <span
                className={`text-lg md:text-xl font-medium transition-colors ${isSelected ? "text-white" : "text-white/80 group-hover:text-white"}`}
              >
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
          className="flex-1 bg-gradient-to-b from-[#05b682] to-[#027a56] text-white py-5 rounded-[16px] font-bold text-xl transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_6px_0_#014d36,0_10px_10px_rgba(0,0,0,0.25)] active:translate-y-[6px] active:shadow-none hover:brightness-110"
        >
          {isLoading
            ? "Loading..."
            : currentIndex === totalQuestions - 1
              ? "Selesai"
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
