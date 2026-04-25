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

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption) return;
    onAnswer(selectedOption);
    setSelectedOption(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Pertanyaan {currentIndex + 1} dari {totalQuestions}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(((currentIndex + 1) / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-md">
        {/* Question Text */}
        <h2 className="text-lg font-bold text-gray-800 mb-6">
          {question.text}
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => (
            <div
              key={option.id}
              onClick={() => handleSelectOption(option.id)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedOption === option.id
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-white hover:border-blue-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    selectedOption === option.id
                      ? "border-blue-600 bg-blue-600"
                      : "border-gray-300"
                  }`}
                >
                  {selectedOption === option.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    {String.fromCharCode(65 + index)}.
                  </p>
                  <p className="text-gray-700">{option.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleSubmitAnswer}
            disabled={!selectedOption || isLoading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading
              ? "Loading..."
              : currentIndex === totalQuestions - 1
                ? "Selesai"
                : "Lanjut"}
          </Button>
        </div>

        {/* Help Text */}
        {!selectedOption && (
          <p className="text-sm text-gray-500 text-center mt-4">
            Pilih satu jawaban untuk melanjutkan
          </p>
        )}
      </div>
    </div>
  );
}
