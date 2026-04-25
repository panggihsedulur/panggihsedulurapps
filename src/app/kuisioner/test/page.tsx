"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QuestionCard } from "@/components/test/QuestionCard";
import { ProgressBar } from "@/components/test/ProgressBar";
import {
  getBranchOption,
  getBranchQuestionById,
  getBranchStartQuestionId,
  getLevelOneQuestions,
  type Question,
} from "@/lib/questions";
import {
  saveQuizResult,
  getTopKategori,
  getCombinedRecommendationObjects,
} from "@/lib/quiz-helpers";
import { initializeSkor, type Biodata, type Kategori } from "@/lib/schema";

export default function TestPage() {
  const router = useRouter();
  const [biodata, setBiodata] = useState<Biodata | null>(null);
  const [phase, setPhase] = useState<"level1" | "branch">("level1");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [branchQuestionId, setBranchQuestionId] = useState<string | null>(null);
  const [branchStep, setBranchStep] = useState(0);
  const [branchRecommendations, setBranchRecommendations] = useState<string[]>(
    [],
  );
  const [dominantCategory, setDominantCategory] = useState<Kategori | null>(
    null,
  );
  const [skor, setSkor] = useState<Record<Kategori, number>>(initializeSkor());
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const levelOneQuestions = getLevelOneQuestions();

  const mergeSkor = (
    currentSkor: Record<Kategori, number>,
    weight: Record<Kategori, number>,
  ): Record<Kategori, number> => {
    const newSkor = { ...currentSkor };
    for (const [kategori, val] of Object.entries(weight)) {
      newSkor[kategori as Kategori] =
        (newSkor[kategori as Kategori] || 0) + val;
    }
    return newSkor;
  };

  // Load biodata dari localStorage
  useEffect(() => {
    const storedBiodata = localStorage.getItem("biodata");
    if (!storedBiodata) {
      router.push("/kuisioner/biodata");
      return;
    }

    queueMicrotask(() => {
      try {
        const parsedBiodata = JSON.parse(storedBiodata) as Biodata;
        setBiodata(parsedBiodata);
        setSkor(initializeSkor());
        setPhase("level1");
        setCurrentQuestionIndex(0);
        setBranchQuestionId(null);
        setBranchStep(0);
        setBranchRecommendations([]);
        setDominantCategory(null);
        setIsInitializing(false);
      } catch (err) {
        console.error("Error parsing biodata:", err);
        setError("Gagal memuat data biodata. Silakan mulai kembali.");
        setIsInitializing(false);
      }
    });
  }, [router]);

  // Submit kuis dan simpan hasil
  const handleSubmitQuiz = async (
    skorFinal: Record<Kategori, number>,
    dominant: Kategori | null,
    selectedBranchRecommendations: string[],
  ) => {
    if (!biodata) return;

    setIsLoading(true);
    setError(null);

    try {
      const computedTopKategori = getTopKategori(skorFinal, 2);
      const topKategori = dominant
        ? [dominant, ...computedTopKategori.filter((k) => k !== dominant)]
        : computedTopKategori;

      // Get recommended UKM objects
      const recommendedUKMs = getCombinedRecommendationObjects(
        topKategori,
        biodata.agama,
        biodata.is_kipk,
        biodata.fakultas,
        selectedBranchRecommendations,
        3,
      );

      // Prepare result object
      const result = {
        biodata,
        skor_kategori: skorFinal,
        top_kategori: topKategori,
        rekomendasi_ukm: recommendedUKMs.map((u) => u.name),
      };

      // Save ke Supabase
      const { success, error: saveError } = await saveQuizResult(result);

      if (success) {
        // Simpan ke localStorage juga untuk result page
        localStorage.setItem("quizResult", JSON.stringify(result));
        localStorage.setItem(
          "recommendedUKMs",
          JSON.stringify(recommendedUKMs),
        );

        // Redirect ke result page
        router.push("/kuisioner/result");
      } else {
        setError(`Gagal menyimpan hasil: ${saveError}`);
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Error submitting quiz:", err);
      setError("Terjadi kesalahan saat menyimpan hasil. Silakan coba lagi.");
      setIsLoading(false);
    }
  };

  // Handle jawaban kuis (Level 1)
  const handleLevelOneAnswer = async (optionId: string) => {
    const currentQuestion = levelOneQuestions[currentQuestionIndex];
    if (!currentQuestion) return;

    const option = currentQuestion.options.find((opt) => opt.id === optionId);
    if (!option) return;

    // Hitung skor terbaru secara sinkron agar jawaban terakhir tidak hilang.
    const updatedSkor = mergeSkor(skor, option.weight);
    setSkor(updatedSkor);

    const isLastLevelOneQuestion =
      currentQuestionIndex === levelOneQuestions.length - 1;

    if (!isLastLevelOneQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
      return;
    }

    const topOne = getTopKategori(updatedSkor, 1)[0] as Kategori | undefined;
    if (!topOne) {
      await handleSubmitQuiz(updatedSkor, null, []);
      return;
    }

    setDominantCategory(topOne);
    const startBranchQuestionId = getBranchStartQuestionId(topOne);
    const firstBranchQuestion = getBranchQuestionById(startBranchQuestionId);

    if (!firstBranchQuestion) {
      await handleSubmitQuiz(updatedSkor, topOne, []);
      return;
    }

    setPhase("branch");
    setBranchQuestionId(startBranchQuestionId);
    setBranchStep(0);
  };

  // Handle jawaban kuis (Branch Level 2/3)
  const handleBranchAnswer = async (optionId: string) => {
    if (!branchQuestionId) return;

    const branchOption = getBranchOption(branchQuestionId, optionId);
    if (!branchOption) return;

    const mergedRecommendations = Array.from(
      new Set([...branchRecommendations, ...branchOption.recommendations]),
    );
    setBranchRecommendations(mergedRecommendations);

    if (branchOption.nextQuestionId) {
      setBranchQuestionId(branchOption.nextQuestionId);
      setBranchStep((prev) => prev + 1);
      return;
    }

    await handleSubmitQuiz(skor, dominantCategory, mergedRecommendations);
  };

  const handleAnswer = async (optionId: string) => {
    if (phase === "level1") {
      await handleLevelOneAnswer(optionId);
      return;
    }

    await handleBranchAnswer(optionId);
  };

  // Loading state
  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Memuat kuis...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Terjadi Kesalahan
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => {
              localStorage.clear();
              router.push("/kuisioner/biodata");
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Kembali ke Awal
          </button>
        </div>
      </div>
    );
  }

  if (!biodata) {
    return null;
  }

  const currentQuestion: Question | null =
    phase === "level1"
      ? levelOneQuestions[currentQuestionIndex]
      : branchQuestionId
        ? getBranchQuestionById(branchQuestionId)
        : null;

  const totalQuestions =
    phase === "level1"
      ? levelOneQuestions.length
      : levelOneQuestions.length + 2;
  const currentProgressIndex =
    phase === "level1"
      ? currentQuestionIndex
      : levelOneQuestions.length + branchStep;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Kuis Minat Bakat
          </h1>
          <p className="text-gray-600">
            {phase === "level1"
              ? "Jawab pertanyaan berikut dengan jujur dan sesuai dengan dirimu"
              : "Lanjutkan dengan pertanyaan lanjutan untuk rekomendasi UKM yang lebih presisi"}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 bg-white rounded-lg p-4 shadow-md">
          <ProgressBar
            current={currentProgressIndex + 1}
            total={totalQuestions}
            showLabel={true}
          />
        </div>

        {/* Question Card */}
        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            isLoading={isLoading}
            currentIndex={currentProgressIndex}
            totalQuestions={totalQuestions}
          />
        )}

        {/* Scoring Preview (opsional) */}
        <div className="mt-8 bg-white rounded-lg p-4 shadow-md">
          <h3 className="font-semibold text-gray-800 mb-4">
            Poin Kategori Saat Ini
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {Object.entries(skor).map(([kategori, poin]) => (
              <div
                key={kategori}
                className="bg-blue-50 p-3 rounded-lg text-center"
              >
                <p className="text-xs text-gray-600 font-medium">{kategori}</p>
                <p className="text-2xl font-bold text-blue-600">{poin}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
